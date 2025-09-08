
'use server';

import { 
    getAllUsers, 
    type SignupData, 
    type LoginData, 
    updateUserFolderId, 
    getAllHeaderDataFromSheet,
    addSessionToSheet,
    deleteSessionByToken,
    addPendingUser,
    getPendingUserByToken,
    deletePendingUserByRow,
    addUser,
    createDatabaseSheet,
    updateUserDatabaseId,
    updateUserPasswordByEmail,
    deleteAllSessionsByEmail,
} from '../googlesheets';
import { createFolderInDrive } from '../drive';
import { sendVerificationEmail, sendPasswordResetEmail } from '../email';
import { z } from 'zod';
import { headers, cookies } from 'next/headers';
import { randomUUID } from 'crypto';


const AuthResultSchema = z.object({
    success: z.boolean(),
    error: z.string().nullable(),
    user: z.object({
        userName: z.string(),
        email: z.string().optional(),
        databaseId: z.string().optional(),
        folderId: z.string().optional(),
    }).nullable(),
});

type AuthResult = z.infer<typeof AuthResultSchema>;

export async function signUpUser(userData: SignupData, origin: string): Promise<Pick<AuthResult, 'success' | 'error'>> {
  try {
    const users = await getAllUsers();
    
    const userNameExists = users.some(user => user.userName.toLowerCase() === userData.userName.toLowerCase());
    if (userNameExists) {
        return { success: false, error: 'This username is already taken. Please choose another one.' };
    }

    const emailExists = users.some(user => user.emailAddress.toLowerCase() === userData.email.toLowerCase());
    if (emailExists) {
        return { success: false, error: 'An account with this email address already exists.' };
    }

    const verificationToken = randomUUID();
    await addPendingUser({
        ...userData,
        token: verificationToken,
        type: 'signup',
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(), // 1 hour from now
    });

    const verificationLink = `${origin}/verify?token=${verificationToken}`;
    await sendVerificationEmail(userData.email, userData.userName, verificationLink);

    return { success: true, error: null };

  } catch (e) {
    console.error('Error during sign up:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, error: `Sign up failed: ${errorMessage}` };
  }
}

export async function verifyUserAccount(token: string): Promise<{ success: boolean; error?: string; }> {
    try {
        const result = await getPendingUserByToken(token);

        if (!result) {
            return { success: false, error: 'This verification link is invalid or has expired.' };
        }
        
        const { user: pendingUser, rowIndex } = result;

        if (new Date(pendingUser.expires) < new Date()) {
            // Fire and forget deletion, no need to wait
            deletePendingUserByRow(rowIndex).catch(err => {
                console.error(`[Background] Failed to delete expired pending user at row ${rowIndex}:`, err);
            });
            return { success: false, error: 'This verification link has expired. Please sign up again.' };
        }
        
        const folderId = await createFolderInDrive(pendingUser.email);
        const databaseId = await createDatabaseSheet(pendingUser.email, folderId);
        
        await addUser({ 
            email: pendingUser.email,
            userName: pendingUser.userName,
            password: pendingUser.password,
            folderId: folderId,
            databaseId: databaseId
        });

        // Fire-and-forget the cleanup operation.
        deletePendingUserByRow(rowIndex).catch(err => {
             console.error(`[Background] Failed to delete verified pending user at row ${rowIndex}:`, err);
        });

        return { success: true };

    } catch (e) {
        console.error(`Error verifying user with token ${token}:`, e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Account verification failed: ${errorMessage}` };
    }
}


export async function loginUser(credentials: LoginData): Promise<AuthResult> {
    try {
        const users = await getAllUsers();
        const user = users.find(u => u.userName === credentials.userName && u.pwd === credentials.password);

        if (user) {
            let folderId = user.folderId;
            let databaseId = user.databaseId;

            if (!folderId) {
                console.log(`User ${user.userName} does not have a folderId. Creating one now.`);
                folderId = await createFolderInDrive(user.emailAddress);
                await updateUserFolderId(user.userName, folderId);
                console.log(`Successfully created and assigned folderId ${folderId} to user ${user.userName}.`);
            }
            if (!databaseId) {
                console.log(`User ${user.userName} does not have a databaseId. Creating one now.`);
                databaseId = await createDatabaseSheet(user.emailAddress, folderId);
                await updateUserDatabaseId(user.userName, databaseId);
                 console.log(`Successfully created and assigned databaseId ${databaseId} to user ${user.userName}.`);
            }

            if (databaseId) {
                 try {
                    await getAllHeaderDataFromSheet(databaseId);
                } catch(sheetError) {
                    console.error(`Failed to access sheet with ID ${databaseId}`, sheetError);
                    return { success: false, error: 'Failed to retrieve data from Google Sheet. Check Sheet ID and permissions.', user: null };
                }
            }
            
            const sessionToken = randomUUID();
            const headersList = headers();
            const ipAddress = headersList.get('x-forwarded-for') || 'Unknown';
            const deviceInfo = headersList.get('user-agent') || 'Unknown';

            await addSessionToSheet({
                emailAddress: user.emailAddress,
                sessionToken,
                ipAddress,
                deviceInfo,
            });
            
            cookies().set('sessionToken', sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // One week
                path: '/',
            });

            return { 
                success: true, 
                error: null, 
                user: { 
                    userName: user.userName, 
                    email: user.emailAddress, 
                    databaseId: databaseId, 
                    folderId: folderId,
                } 
            };
        } else {
            return { success: false, error: 'Invalid username or password.', user: null };
        }
    } catch (e) {
        console.error('Error logging in user:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to login: ${errorMessage}`, user: null };
    }
}

export async function requestPasswordReset(email: string, origin: string): Promise<{ success: boolean; error?: string }> {
    try {
        const users = await getAllUsers();
        const userExists = users.some(user => user.emailAddress.toLowerCase() === email.toLowerCase());

        if (!userExists) {
            return { success: false, error: 'This email is not registered with an account.' };
        }
        
        const verificationToken = randomUUID();
        await addPendingUser({
            email: email,
            token: verificationToken,
            type: 'forgotpassword',
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(), // 1 hour from now
        });

        const resetLink = `${origin}/reset-password?token=${verificationToken}`;
        await sendPasswordResetEmail(email, resetLink);
        
        return { success: true };

    } catch (e) {
        console.error('Error during password reset request:', e);
        // We return a generic error message to the user, but log the specific error.
        return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
}

export async function resetUserPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string; }> {
    try {
        const result = await getPendingUserByToken(token);

        if (!result) {
            return { success: false, error: 'This password reset link is invalid or has expired.' };
        }
        
        const { user: pendingUser, rowIndex } = result;
        
        if (new Date(pendingUser.expires) < new Date()) {
            deletePendingUserByRow(rowIndex).catch(err => {
                console.error(`[Background] Failed to delete expired pending user at row ${rowIndex}:`, err);
            });
            return { success: false, error: 'This password reset link has expired. Please request a new one.' };
        }

        await updateUserPasswordByEmail(pendingUser.email, newPassword);

        // Security measure: Log out all active sessions for this user.
        await deleteAllSessionsByEmail(pendingUser.email);
        
        deletePendingUserByRow(rowIndex).catch(err => {
             console.error(`[Background] Failed to delete verified pending user at row ${rowIndex}:`, err);
        });

        return { success: true };

    } catch(e) {
        console.error(`Error resetting password with token ${token}:`, e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Password reset failed: ${errorMessage}` };
    }
}

const LogoutResultSchema = z.object({ success: z.boolean() });
type LogoutResult = z.infer<typeof LogoutResultSchema>;

export async function logoutUser(): Promise<LogoutResult> {
    const sessionToken = cookies().get('sessionToken')?.value;
    if (sessionToken) {
        await deleteSessionByToken(sessionToken);
        cookies().delete('sessionToken');
    }
    return { success: true };
}
