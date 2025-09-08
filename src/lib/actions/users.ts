
'use server';

import { z } from 'zod';
import { getAllUsers, updateUserDataInSheet, getSessionsByEmail, deleteSessionByToken, deleteAllOtherSessionsByToken, findUserByTokenFromSheet } from '../googlesheets';
import type { UserDetails, UserUpdateData, SessionInfo } from '../schemas';
import { SessionInfoSchema, UserDetailsSchema } from '../schemas';
import { cookies } from 'next/headers';

const UserDetailsResultSchema = z.object({
    success: z.boolean(),
    data: UserDetailsSchema.nullable(),
    error: z.string().nullable(),
});
type UserDetailsResult = z.infer<typeof UserDetailsResultSchema>;


export async function getCurrentUser(): Promise<UserDetailsResult> {
    try {
        const sessionToken = cookies().get('sessionToken')?.value;
        if (!sessionToken) {
            return { success: false, data: null, error: 'User not authenticated.' };
        }
        
        const users = await getAllUsers();
        const userByToken = await findUserByTokenFromSheet(sessionToken);
        if (!userByToken) {
            return { success: false, data: null, error: 'Invalid session.' };
        }

        const user = users.find(u => u.emailAddress === userByToken.email);

        if (user) {
            return {
                success: true,
                data: {
                    userName: user.userName,
                    email: user.emailAddress,
                    databaseId: user.databaseId,
                    folderId: user.folderId,
                },
                error: null,
            };
        } else {
            return { success: false, data: null, error: 'User not found.' };
        }

    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, data: null, error: `Failed to fetch user details: ${errorMessage}` };
    }
}

const SimpleResultSchema = z.object({
    success: z.boolean(),
    error: z.string().nullable(),
});
type SimpleResult = z.infer<typeof SimpleResultSchema>;

export async function updateUserDetails(currentUserName: string, updates: UserUpdateData): Promise<SimpleResult> {
    try {
        if (!currentUserName) {
            return { success: false, error: "Current username is required to identify the user." };
        }
        
        await updateUserDataInSheet(currentUserName, updates);

        return { success: true, error: null };
    } catch (e) {
        console.error(`Error updating user details for ${currentUserName}:`, e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

const ActiveSessionsResultSchema = z.object({
    success: z.boolean(),
    sessions: z.array(SessionInfoSchema).nullable(),
    currentSessionToken: z.string().nullable(),
    error: z.string().nullable(),
});
type ActiveSessionsResult = z.infer<typeof ActiveSessionsResultSchema>;


export async function getActiveSessions(): Promise<ActiveSessionsResult> {
    try {
        const currentSessionToken = cookies().get('sessionToken')?.value;
        if (!currentSessionToken) {
            return { success: false, sessions: null, currentSessionToken: null, error: 'User not logged in.' };
        }
        
        const user = await findUserByTokenFromSheet(currentSessionToken);
        if (!user || !user.email) {
            return { success: false, sessions: null, currentSessionToken: null, error: 'Session is invalid.' };
        }
        
        const sessions = await getSessionsByEmail(user.email);
        return { success: true, sessions, currentSessionToken, error: null };

    } catch(e) {
         const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, sessions: null, currentSessionToken: null, error: `Failed to fetch sessions: ${errorMessage}` };
    }
}

export async function logoutSession(sessionToken: string, logoutAll: boolean = false): Promise<SimpleResult> {
    try {
        if (!sessionToken) {
            return { success: false, error: 'Session token is required.'};
        }
        
        if (logoutAll) {
            await deleteAllOtherSessionsByToken(sessionToken);
        } else {
            await deleteSessionByToken(sessionToken);
        }
        
        return { success: true, error: null };

    } catch (e) {
         const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to logout session: ${errorMessage}` };
    }
}
