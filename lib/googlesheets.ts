
import { z } from 'zod';
import type { TaxProfile, UserUpdateData, SessionInfo } from './schemas';
import { getOAuth2Client } from './drive-oauth';
import { google } from 'googleapis';

const signupSchema = z.object({
  userName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const loginSchema = z.object({
  userName: z.string(),
  password: z.string(),
});

export type SignupData = z.infer<typeof signupSchema>;
export type LoginData = z.infer<typeof loginSchema>;


const {
  GOOGLE_SHEETS_SHEET_ID,
  GOOGLE_SHEETS_DB_TEMPLATE_ID,
  GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID
} = process.env;

if (!GOOGLE_SHEETS_SHEET_ID) {
  throw new Error('GOOGLE_SHEETS_SHEET_ID is not configured in .env');
}
if (!GOOGLE_SHEETS_DB_TEMPLATE_ID) {
    throw new Error('GOOGLE_SHEETS_DB_TEMPLATE_ID is not configured in .env')
}
if (!GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID) {
  throw new Error('GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID is not configured in .env');
}

const SPREADSHEET_ID = GOOGLE_SHEETS_SHEET_ID;
const TEMPLATE_SPREADSHEET_ID = GOOGLE_SHEETS_DB_TEMPLATE_ID;
const CREDENTIALS_SHEET_NAME = 'credentials';
const PENDING_VERIFICATIONS_SHEET_NAME = 'PendingVerifications';
const SESSIONS_SHEET_NAME = 'ActiveSessions';

export async function createDatabaseSheet(userEmail: string, parentFolderId: string): Promise<string> {
    const oauth2Client = await getOAuth2Client();
    const drive = google.drive({ version: 'v3', auth: oauth2Client });
    const newSheetName = `Database - ${userEmail}`;
    
    try {
        const copiedFile = await drive.files.copy({
            fileId: TEMPLATE_SPREADSHEET_ID,
            requestBody: {
                name: newSheetName,
                parents: [parentFolderId]
            }
        });

        const newSpreadsheetId = copiedFile.data.id;
        if (!newSpreadsheetId) {
            throw new Error('Failed to get ID of the new spreadsheet.');
        }

        console.log(`[Sheets] Cloned template sheet for "${newSheetName}" with ID: ${newSpreadsheetId}`);
        return newSpreadsheetId;

    } catch(err) {
        console.error('The API returned an error: ' + err);
        throw new Error('Failed to create database sheet.');
    }
}


export async function getAllUsers() {
    try {
        const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: CREDENTIALS_SHEET_NAME,
        });

        const rows = response.data.values;
        if (!rows || rows.length < 2) {
            return [];
        }

        const header = rows[0];
        const emailIndex = header.indexOf('emailAddress');
        const userNameIndex = header.indexOf('userName');
        const pwdIndex = header.indexOf('pwd');
        const databaseIdIndex = header.indexOf('databaseID');
        const folderIdIndex = header.indexOf('folderID');

        if (userNameIndex === -1 || pwdIndex === -1 || emailIndex === -1 || databaseIdIndex === -1 || folderIdIndex === -1) {
            console.error('One or more required columns are missing from the credentials sheet:', header);
            throw new Error('Could not find required columns in the credentials sheet. Please check sheet headers.');
        }
        
        return rows.slice(1).map(row => ({
            emailAddress: row[emailIndex] || '',
            userName: row[userNameIndex] || '',
            pwd: row[pwdIndex] || '',
            databaseId: row[databaseIdIndex] || '',
            folderId: row[folderIdIndex] || '',
        })).filter(u => u.userName); // Filter out empty rows

    } catch (err) {
        console.error('The API returned an error when getting all users: ' + err);
        throw new Error('Failed to retrieve data from Google Sheet.');
    }
}

export async function updateUserFolderId(userName: string, folderId: string) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`; 
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
        throw new Error('No users found in credentials sheet.');
    }

    const header = rows[0];
    const userNameIndex = header.indexOf('userName');
    const folderIdIndex = header.indexOf('folderID');

    if (userNameIndex === -1 || folderIdIndex === -1) {
        throw new Error('userName or folderID column not found.');
    }

    const userRowIndex = rows.findIndex(row => row[userNameIndex] === userName);
    if (userRowIndex === -1) {
        throw new Error(`User ${userName} not found.`);
    }

    const rowToUpdate = userRowIndex + 1;
    const columnToUpdate = String.fromCharCode('A'.charCodeAt(0) + folderIdIndex);

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${CREDENTIALS_SHEET_NAME}!${columnToUpdate}${rowToUpdate}`,
        valueInputOption: 'RAW',
        resource: {
            values: [[folderId]],
        },
    });
}

export async function updateUserDatabaseId(userName: string, databaseId: string) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
        throw new Error('No users found in credentials sheet.');
    }
    const header = rows[0];
    const userNameIndex = header.indexOf('userName');
    const databaseIdIndex = header.indexOf('databaseID');

    if (userNameIndex === -1 || databaseIdIndex === -1) {
        throw new Error('userName or databaseID column not found.');
    }

    const userRowIndex = rows.findIndex(row => row[userNameIndex] === userName);
    if (userRowIndex === -1) {
        throw new Error(`User ${userName} not found.`);
    }

    const rowToUpdate = userRowIndex + 1;
    const columnToUpdate = String.fromCharCode('A'.charCodeAt(0) + databaseIdIndex);

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${CREDENTIALS_SHEET_NAME}!${columnToUpdate}${rowToUpdate}`,
        valueInputOption: 'RAW',
        resource: {
            values: [[databaseId]],
        },
    });
}


export async function getAllHeaderDataFromSheet(databaseId: string): Promise<TaxProfile[]> {
  try {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: databaseId,
      range: 'tpList!A:Q',
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      return [];
    }

    const header = rows[0];
    const dataRows = rows.slice(1);
    
    const objects = dataRows
        .map(row => {
            const rowData: { [key: string]: any } = {};
            header.forEach((key, headerIndex) => {
                rowData[key] = row[headerIndex] || '';
            });
            return rowData as TaxProfile;
        })
        .filter(profile => profile.tpTIN && typeof profile.tpTIN === 'string' && profile.tpTIN.trim() !== '');

    return objects;

  } catch (err) {
    console.error(`The API returned an error for spreadsheet ${databaseId}: ` + err);
    throw new Error('Failed to retrieve header data from Google Sheet.');
  }
}

export async function appendHeaderDataToSheet(profileData: TaxProfile, databaseId: string) {
  const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: databaseId,
    range: 'tpList!A1:Q1',
  });
  
  const headers = headerResponse.data.values?.[0];
  if (!headers) {
    throw new Error('Could not retrieve headers from tpList sheet.');
  }

  const values = [headers.map(header => profileData[header as keyof TaxProfile] || '')];

  const request = {
    spreadsheetId: databaseId,
    range: `tpList!A1`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values,
    },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Appended to sheet:', response.data);
    return response.data;
  } catch (err) {
    console.error('The API returned an error: ' + err);
    throw new Error('Failed to append data to Google Sheet.');
  }
}

export async function updateHeaderDataInSheet(profileData: TaxProfile, databaseId: string) {
  const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
  const range = 'tpList!A:Q';
  const getResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: databaseId,
    range,
  });

  const rows = getResponse.data.values;
  if (!rows || rows.length === 0) {
    throw new Error('No data found in the sheet.');
  }

  const headers = rows[0];
  const tinIndex = headers.indexOf('tpTIN');
  if (tinIndex === -1) {
    throw new Error('TIN column not found in the sheet.');
  }
  
  const rowIndex = rows.findIndex(row => row[tinIndex] === profileData.tpTIN);

  if (rowIndex === -1) {
    throw new Error('Profile with the specified TIN not found.');
  }
  
  const rowToUpdate = rowIndex + 1;
  const values = [headers.map(header => profileData[header as keyof TaxProfile] || '')];

  const request = {
    spreadsheetId: databaseId,
    range: `tpList!A${rowToUpdate}`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values,
    },
  };

  try {
    const response = await sheets.spreadsheets.values.update(request);
    console.log('Updated sheet:', response.data);
    return response.data;
  } catch (err) {
    console.error('The API returned an error: ' + err);
    throw new Error('Failed to update data in Google Sheet.');
  }
}

async function getSheetId(spreadsheetId: string, sheetName: string): Promise<number | null> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const response = await sheets.spreadsheets.get({
        spreadsheetId,
    });
    const sheet = response.data.sheets?.find(s => s.properties?.title === sheetName);
    return sheet?.properties?.sheetId ?? null;
}

export async function deleteHeaderDataRowInSheet(tpTIN: string, databaseId: string) {
  const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
  const sheetName = 'tpList';
  const range = `${sheetName}!A:Q`;

  const getResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: databaseId,
    range,
  });

  const rows = getResponse.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found in the sheet to delete.');
    return;
  }

  const headers = rows[0];
  const tinIndex = headers.indexOf('tpTIN');
  if (tinIndex === -1) {
    throw new Error('TIN column not found in the sheet.');
  }

  const rowIndex = rows.findIndex(row => row[tinIndex] === tpTIN);

  if (rowIndex === -1) {
    console.log(`Profile with TIN ${tpTIN} not found for deletion.`);
    return;
  }

  const sheetId = await getSheetId(databaseId, sheetName);
  if (sheetId === null) {
      throw new Error(`Sheet with name "${sheetName}" not found.`);
  }

  const batchUpdateRequest = {
    spreadsheetId: databaseId,
    resource: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: sheetId,
              dimension: 'ROWS',
              startIndex: rowIndex, 
              endIndex: rowIndex + 1
            }
          }
        },
        {
          appendDimension: {
            sheetId: sheetId,
            dimension: "ROWS",
            length: 1
          }
        }
      ]
    }
  };

  try {
    await sheets.spreadsheets.batchUpdate(batchUpdateRequest);
    console.log(`Successfully deleted row at index ${rowIndex} and added a new one.`);
  } catch (err) {
    console.error('The API returned an error during batch update: ' + err);
    throw new Error('Failed to delete row from Google Sheet.');
  }
}


export async function updateUserDataInSheet(currentUserName: string, updates: UserUpdateData) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`; 
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
        throw new Error('No users found in credentials sheet.');
    }

    const header = rows[0];
    const userNameIndex = header.indexOf('userName');
    const pwdIndex = header.indexOf('pwd');

    if (userNameIndex === -1 || pwdIndex === -1) {
        throw new Error('Required columns (userName, pwd) not found.');
    }

    const userRowIndex = rows.findIndex(row => row[userNameIndex] === currentUserName);
    if (userRowIndex === -1) {
        throw new Error(`User '${currentUserName}' not found.`);
    }

    const rowToUpdate = userRowIndex + 1;
    const userRow = [...rows[userRowIndex]];

    if (updates.newPassword) {
        if (!updates.currentPassword) {
            throw new Error("Current password is required to change password.");
        }
        if (userRow[pwdIndex] !== updates.currentPassword) {
            throw new Error("Incorrect current password.");
        }
        userRow[pwdIndex] = updates.newPassword;
    }

    if (updates.newUserName) {
         const isUserNameTaken = rows.slice(1).some((row, index) => index !== userRowIndex -1 && row[userNameIndex] === updates.newUserName);
         if (isUserNameTaken) {
            throw new Error(`Username '${updates.newUserName}' is already taken.`);
         }
        userRow[userNameIndex] = updates.newUserName;
    }

    const updateRequest = {
        spreadsheetId: SPREADSHEET_ID,
        range: `${CREDENTIALS_SHEET_NAME}!A${rowToUpdate}:H${rowToUpdate}`,
        valueInputOption: 'RAW',
        resource: {
            values: [userRow],
        },
    };

    await sheets.spreadsheets.values.update(updateRequest);
    console.log(`Successfully updated user data for '${currentUserName}'. New username: '${updates.newUserName || currentUserName}'`);
}

export async function updateUserPasswordByEmail(email: string, newPassword: string): Promise<void> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${CREDENTIALS_SHEET_NAME}!A:E`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
        throw new Error('No users found in credentials sheet.');
    }

    const header = rows[0];
    const emailIndex = header.indexOf('emailAddress');
    const pwdIndex = header.indexOf('pwd');

    if (emailIndex === -1 || pwdIndex === -1) {
        throw new Error('Required columns (emailAddress, pwd) not found.');
    }

    const userRowIndex = rows.findIndex(row => row[emailIndex] === email);
    if (userRowIndex === -1) {
        throw new Error(`User with email ${email} not found.`);
    }

    const rowToUpdate = userRowIndex + 1;
    const columnToUpdate = String.fromCharCode('A'.charCodeAt(0) + pwdIndex);

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${CREDENTIALS_SHEET_NAME}!${columnToUpdate}${rowToUpdate}`,
        valueInputOption: 'RAW',
        resource: {
            values: [[newPassword]],
        },
    });

    console.log(`Successfully updated password for user ${email}.`);
}


// Verification Flow Functions

interface PendingUser {
    email: string;
    userName?: string;
    password?: string;
    token: string;
    type: string;
    expires: string;
}


export async function addPendingUser(user: PendingUser) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const sheetName = PENDING_VERIFICATIONS_SHEET_NAME;

    const getResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A:A`, 
    });

    const rows = getResponse.data.values || [];
    const existingRowIndex = rows.findIndex(row => row[0] === user.email);

    const values = [[user.email, user.userName || '', user.password || '', user.token, user.type, user.expires]];

    if (existingRowIndex !== -1) {
        const rowToUpdate = existingRowIndex + 1;
        console.log(`[Sheets] Found existing pending verification for ${user.email} at row ${rowToUpdate}. Updating.`);
        
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheetName}!A${rowToUpdate}:F${rowToUpdate}`,
            valueInputOption: 'USER_ENTERED',
            resource: { values },
        });
    } else {
        console.log(`[Sheets] No existing pending verification for ${user.email}. Appending new row.`);
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheetName}!A1`,
            valueInputOption: 'USER_ENTERED',
            resource: { values },
        });
    }
}

export async function getPendingUserByToken(token: string): Promise<{ user: PendingUser; rowIndex: number } | null> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: PENDING_VERIFICATIONS_SHEET_NAME,
    });
    const rows = response.data.values;
    if (!rows || rows.length < 2) return null;

    const header = rows[0];
    const tokenIndex = header.indexOf('token');
    
    const rowIndex = rows.findIndex((row, index) => index > 0 && row[tokenIndex] === token);

    if (rowIndex === -1) return null;
    
    const userRow = rows[rowIndex];

    const user: PendingUser = {
        email: userRow[header.indexOf('emailAddress')],
        userName: userRow[header.indexOf('userName')],
        password: userRow[header.indexOf('password')],
        token: userRow[tokenIndex],
        type: userRow[header.indexOf('type')],
        expires: userRow[header.indexOf('expiration')],
    };

    return { user, rowIndex };
}


export async function deletePendingUserByRow(rowIndex: number) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const sheetId = await getSheetId(SPREADSHEET_ID, PENDING_VERIFICATIONS_SHEET_NAME);
    if (sheetId === null) throw new Error('Sheet not found');

    await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        resource: {
            requests: [{
                deleteDimension: {
                    range: { sheetId, dimension: 'ROWS', startIndex: rowIndex, endIndex: rowIndex + 1 },
                },
            }],
        },
    });
}


export async function addUser(userData: SignupData & { folderId: string, databaseId: string, password?: string }) {
  const { email, userName, password, folderId, databaseId } = userData;
  const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
  
  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${CREDENTIALS_SHEET_NAME}!A1:E1`,
  });

  const headers = headerResponse.data.values?.[0];
  if (!headers) {
    throw new Error('Could not retrieve headers from credentials sheet.');
  }

  const userObject: {[key: string]: string} = {
    emailAddress: email,
    userName: userName,
    pwd: password || '',
    databaseID: databaseId,
    folderID: folderId
  }

  const values = [headers.map(header => userObject[header] || '')];

  const request = {
    spreadsheetId: SPREADSHEET_ID,
    range: `${CREDENTIALS_SHEET_NAME}!A1`, 
    valueInputOption: 'USER_ENTERED',
    resource: { values },
  };
  await sheets.spreadsheets.values.append(request);
}


// ============== ActiveSessions Sheet Functions ==============

export async function addSessionToSheet(sessionData: {
  emailAddress: string;
  sessionToken: string;
  ipAddress: string;
  deviceInfo: string;
}) {
  const { emailAddress, sessionToken, ipAddress, deviceInfo } = sessionData;
  const loginTime = new Date().toISOString();
  const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
  const sheetName = SESSIONS_SHEET_NAME;

  const getResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A:E`,
  });

  const rows = getResponse.data.values;
  if (rows && rows.length > 1) { 
    const header = rows[0];
    const emailIndex = header.indexOf('emailAddress');
    const deviceInfoIndex = header.indexOf('deviceInfo');

    const existingSessionRowIndex = rows.findIndex(
      (row, index) => index > 0 && row[emailIndex] === emailAddress && row[deviceInfoIndex] === deviceInfo
    );

    if (existingSessionRowIndex !== -1) {
      console.log(`[Sessions] Found existing session for ${emailAddress} on device. Removing before adding new one.`);
      const sheetId = await getSheetId(SPREADSHEET_ID, sheetName);
      if (sheetId === null) {
        throw new Error(`Sheet with name "${sheetName}" not found.`);
      }

      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        resource: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId,
                dimension: 'ROWS',
                startIndex: existingSessionRowIndex,
                endIndex: existingSessionRowIndex + 1,
              },
            },
          }],
        },
      });
    }
  }

  const values = [[emailAddress, sessionToken, loginTime, ipAddress, deviceInfo]];
  const appendRequest = {
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values,
    },
  };

  try {
    await sheets.spreadsheets.values.append(appendRequest);
    console.log(`[Sessions] Added new session for user ${emailAddress}`);
  } catch (err) {
    console.error('The API returned an error while adding a session: ' + err);
    throw new Error('Failed to add session to Google Sheet.');
  }
}

export async function getSessionsByEmail(email: string): Promise<SessionInfo[]> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: SESSIONS_SHEET_NAME,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return [];

    const header = rows[0];
    const emailIndex = header.indexOf('emailAddress');
    const tokenIndex = header.indexOf('sessionToken');
    const timeIndex = header.indexOf('loginTime');
    const ipIndex = header.indexOf('ipAddress');
    const deviceIndex = header.indexOf('deviceInfo');

    return rows.slice(1)
        .filter(row => row[emailIndex] === email)
        .map(row => ({
            token: row[tokenIndex],
            loginTime: row[timeIndex],
            ipAddress: row[ipIndex],
            deviceInfo: row[deviceIndex],
        }));
}

async function findRowIndexByToken(token: string): Promise<{ sheetId: number, rowIndex: number }> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const sheetName = SESSIONS_SHEET_NAME;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!B:B`, // Only need to check the token column
    });

    const rows = response.data.values;
    if (!rows) throw new Error('Could not find session.');

    const rowIndex = rows.findIndex(row => row[0] === token);
    if (rowIndex === -1) throw new Error('Session token not found.');

    const sheetId = await getSheetId(SPREADSHEET_ID, sheetName);
    if (sheetId === null) throw new Error('Could not find sheet ID for sessions.');
    
    return { sheetId, rowIndex };
}

export async function findUserByTokenFromSheet(token: string): Promise<{ email: string } | null> {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${SESSIONS_SHEET_NAME}!A:B`; // emailAddress and sessionToken columns
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return null;

    const header = rows[0];
    const emailIndex = header.indexOf('emailAddress');
    const tokenIndex = header.indexOf('sessionToken');

    const sessionRow = rows.slice(1).find(row => row[tokenIndex] === token);

    if (sessionRow) {
        return { email: sessionRow[emailIndex] };
    }
    return null;
}


export async function deleteSessionByToken(token: string) {
    const { sheetId, rowIndex } = await findRowIndexByToken(token);
    
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        resource: {
            requests: [{
                deleteDimension: {
                    range: {
                        sheetId,
                        dimension: 'ROWS',
                        startIndex: rowIndex,
                        endIndex: rowIndex + 1,
                    },
                },
            }],
        },
    });
    console.log(`[Sessions] Deleted session with token ending in ...${token.slice(-4)}`);
}

export async function deleteAllOtherSessionsByToken(currentToken: string) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${SESSIONS_SHEET_NAME}!A:E`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return;

    const header = rows[0];
    const tokenIndex = header.indexOf('sessionToken');
    const emailIndex = header.indexOf('emailAddress');
    
    const currentUserRow = rows.find(row => row[tokenIndex] === currentToken);
    if (!currentUserRow) return;

    const currentUserEmail = currentUserRow[emailIndex];

    const sheetId = await getSheetId(SPREADSHEET_ID, SESSIONS_SHEET_NAME);
    if (sheetId === null) throw new Error('Could not find sheet ID.');

    const deleteRequests = rows
        .map((row, index) => ({ row, index }))
        .filter(({ row }) => row[emailIndex] === currentUserEmail && row[tokenIndex] !== currentToken)
        .map(({ index }) => ({
            deleteDimension: {
                range: {
                    sheetId,
                    dimension: 'ROWS',
                    startIndex: index,
                    endIndex: index + 1,
                },
            },
        }))
        .reverse(); 

    if (deleteRequests.length > 0) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: { requests: deleteRequests },
        });
        console.log(`[Sessions] Deleted ${deleteRequests.length} other session(s) for user ${currentUserEmail}`);
    }
}

export async function deleteAllSessionsByEmail(email: string) {
    const sheets = google.sheets({ version: 'v4', auth: await getOAuth2Client() });
    const range = `${SESSIONS_SHEET_NAME}!A:E`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return;

    const header = rows[0];
    const emailIndex = header.indexOf('emailAddress');
    
    const sheetId = await getSheetId(SPREADSHEET_ID, SESSIONS_SHEET_NAME);
    if (sheetId === null) throw new Error('Could not find sheet ID.');

    const deleteRequests = rows
        .map((row, index) => ({ row, index }))
        .filter(({ row, index }) => index > 0 && row[emailIndex] === email)
        .map(({ index }) => ({
            deleteDimension: {
                range: {
                    sheetId,
                    dimension: 'ROWS',
                    startIndex: index,
                    endIndex: index + 1,
                },
            },
        }))
        .reverse(); // Reverse to handle shifting indices correctly

    if (deleteRequests.length > 0) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: { requests: deleteRequests },
        });
        console.log(`[Sessions] Deleted ${deleteRequests.length} session(s) for user ${email}`);
    }
}
