(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__a73c6e3e._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:assert [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/src/lib/drive-oauth.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOAuth2Client": (()=>getOAuth2Client),
    "getSheetsClient": (()=>getSheetsClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/googleapis/build/src/index.js [middleware-edge] (ecmascript)");
;
const { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, GOOGLE_OAUTH_REFRESH_TOKEN } = process.env;
if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
    // This check is important but shouldn't throw an error that crashes the server on startup,
    // as the credentials might not be used on every page load.
    // We will let the functions that use it handle the error.
    console.warn('Google OAuth credentials are not fully configured in .env. Some Drive/Sheets features may not work.');
}
// This is a fixed value for web applications
const GOOGLE_OAUTH_REDIRECT_URI = 'https://developers.google.com/oauthplayground';
let oauth2Client = null;
async function getOAuth2Client() {
    // Add the check here to provide a clear error when the credentials are used.
    if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
        throw new Error('Google OAuth credentials (CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN) must be configured in your .env file.');
    }
    if (oauth2Client) {
        // Check if the token is about to expire (within 60 seconds) and refresh if needed
        if (oauth2Client.credentials.expiry_date && oauth2Client.credentials.expiry_date < Date.now() + 60 * 1000) {
            console.log('[OAuth] Access token expiring soon, refreshing...');
            await oauth2Client.refreshAccessToken();
            console.log('[OAuth] Access token refreshed.');
        }
        return oauth2Client;
    }
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["google"].auth.OAuth2(GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, GOOGLE_OAUTH_REDIRECT_URI);
    client.setCredentials({
        refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN
    });
    // Do an initial token refresh to get the access token
    try {
        console.log('[OAuth] Initializing and refreshing access token...');
        await client.refreshAccessToken();
        console.log('[OAuth] Initial token refreshed successfully.');
    } catch (error) {
        console.error('[OAuth] Failed to refresh access token:', error);
        throw new Error('Failed to refresh access token. Check your refresh token and credentials.');
    }
    oauth2Client = client;
    return oauth2Client;
}
async function getSheetsClient() {
    const oauth2Client = await getOAuth2Client();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["google"].sheets({
        version: 'v4',
        auth: oauth2Client
    });
}
}}),
"[project]/src/lib/googlesheets.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addSessionToSheet": (()=>addSessionToSheet),
    "appendHeaderDataToSheet": (()=>appendHeaderDataToSheet),
    "appendUserToSheet": (()=>appendUserToSheet),
    "deleteAllOtherSessionsByToken": (()=>deleteAllOtherSessionsByToken),
    "deleteHeaderDataRowInSheet": (()=>deleteHeaderDataRowInSheet),
    "deleteSessionByToken": (()=>deleteSessionByToken),
    "findUserBySessionToken": (()=>findUserBySessionToken),
    "getAllHeaderDataFromSheet": (()=>getAllHeaderDataFromSheet),
    "getAllUsers": (()=>getAllUsers),
    "getSessionsByUserName": (()=>getSessionsByUserName),
    "updateHeaderDataInSheet": (()=>updateHeaderDataInSheet),
    "updateUserDataInSheet": (()=>updateUserDataInSheet),
    "updateUserFolderId": (()=>updateUserFolderId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive-oauth.ts [middleware-edge] (ecmascript)");
;
;
const signupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string(),
    folderId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string()
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["z"].string()
});
const { GOOGLE_SHEETS_SHEET_ID } = process.env;
if (!GOOGLE_SHEETS_SHEET_ID) {
    throw new Error('GOOGLE_SHEETS_SHEET_ID is not configured in .env');
}
const SPREADSHEET_ID = GOOGLE_SHEETS_SHEET_ID;
const CREDENTIALS_SHEET_NAME = 'credentials';
const SESSIONS_SHEET_NAME = 'ActiveSessions';
async function appendUserToSheet(userData) {
    const { email, userName, password, folderId } = userData;
    const timestamp = new Date().toISOString();
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const values = [
        [
            email,
            userName,
            password,
            '',
            folderId,
            'active',
            timestamp,
            ''
        ]
    ];
    const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: `${CREDENTIALS_SHEET_NAME}!A1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values
        }
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
async function getAllUsers() {
    try {
        const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: CREDENTIALS_SHEET_NAME
        });
        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }
        const header = rows[0];
        const emailIndex = header.indexOf('emailAddress');
        const userNameIndex = header.indexOf('userName');
        const pwdIndex = header.indexOf('pwd');
        const databaseIdIndex = header.indexOf('databaseID');
        const folderIdIndex = header.indexOf('folderID');
        if (userNameIndex === -1 || pwdIndex === -1 || emailIndex === -1 || databaseIdIndex === -1 || folderIdIndex === -1) {
            throw new Error('Could not find required columns in the credentials sheet.');
        }
        return rows.slice(1).map((row)=>({
                emailAddress: row[emailIndex] || '',
                userName: row[userNameIndex] || '',
                pwd: row[pwdIndex] || '',
                databaseId: row[databaseIdIndex] || '',
                folderId: row[folderIdIndex] || ''
            }));
    } catch (err) {
        console.error('The API returned an error: ' + err);
        throw new Error('Failed to retrieve data from Google Sheet.');
    }
}
async function updateUserFolderId(userName, folderId) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range
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
    const userRowIndex = rows.findIndex((row)=>row[userNameIndex] === userName);
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
            values: [
                [
                    folderId
                ]
            ]
        }
    });
}
async function getAllHeaderDataFromSheet(databaseId) {
    try {
        const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: databaseId,
            range: 'tpList!A:Q'
        });
        const rows = response.data.values;
        if (!rows || rows.length < 2) {
            return [];
        }
        const header = rows[0];
        const dataRows = rows.slice(1);
        const objects = dataRows.map((row)=>{
            const rowData = {};
            header.forEach((key, headerIndex)=>{
                rowData[key] = row[headerIndex] || '';
            });
            return rowData;
        }).filter((profile)=>profile.tpTIN && typeof profile.tpTIN === 'string' && profile.tpTIN.trim() !== '');
        return objects;
    } catch (err) {
        console.error(`The API returned an error for spreadsheet ${databaseId}: ` + err);
        throw new Error('Failed to retrieve header data from Google Sheet.');
    }
}
async function appendHeaderDataToSheet(profileData, databaseId) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const headerResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: databaseId,
        range: 'tpList!A1:Q1'
    });
    const headers = headerResponse.data.values?.[0];
    if (!headers) {
        throw new Error('Could not retrieve headers from tpList sheet.');
    }
    const values = [
        headers.map((header)=>profileData[header] || '')
    ];
    const request = {
        spreadsheetId: databaseId,
        range: `tpList!A1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values
        }
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
async function updateHeaderDataInSheet(profileData, databaseId) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = 'tpList!A:Q';
    const getResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: databaseId,
        range
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
    const rowIndex = rows.findIndex((row)=>row[tinIndex] === profileData.tpTIN);
    if (rowIndex === -1) {
        throw new Error('Profile with the specified TIN not found.');
    }
    const rowToUpdate = rowIndex + 1;
    const values = [
        headers.map((header)=>profileData[header] || '')
    ];
    const request = {
        spreadsheetId: databaseId,
        range: `tpList!A${rowToUpdate}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values
        }
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
async function getSheetId(spreadsheetId, sheetName) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const response = await sheets.spreadsheets.get({
        spreadsheetId
    });
    const sheet = response.data.sheets?.find((s)=>s.properties?.title === sheetName);
    return sheet?.properties?.sheetId ?? null;
}
async function deleteHeaderDataRowInSheet(tpTIN, databaseId) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const sheetName = 'tpList';
    const range = `${sheetName}!A:Q`;
    const getResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: databaseId,
        range
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
    const rowIndex = rows.findIndex((row)=>row[tinIndex] === tpTIN);
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
async function updateUserDataInSheet(currentUserName, updates) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range
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
    const userRowIndex = rows.findIndex((row)=>row[userNameIndex] === currentUserName);
    if (userRowIndex === -1) {
        throw new Error(`User '${currentUserName}' not found.`);
    }
    const rowToUpdate = userRowIndex + 1;
    const userRow = [
        ...rows[userRowIndex]
    ];
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
        const isUserNameTaken = rows.slice(1).some((row, index)=>index !== userRowIndex - 1 && row[userNameIndex] === updates.newUserName);
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
            values: [
                userRow
            ]
        }
    };
    await sheets.spreadsheets.values.update(updateRequest);
    console.log(`Successfully updated user data for '${currentUserName}'. New username: '${updates.newUserName || currentUserName}'`);
}
async function addSessionToSheet(sessionData) {
    const { userName, sessionToken, ipAddress, deviceInfo } = sessionData;
    const loginTime = new Date().toISOString();
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const sheetName = SESSIONS_SHEET_NAME;
    // First, find and delete any existing session for the same user on the same device
    const getResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A:E`
    });
    const rows = getResponse.data.values;
    if (rows && rows.length > 1) {
        const header = rows[0];
        const userNameIndex = header.indexOf('userName');
        const deviceInfoIndex = header.indexOf('deviceInfo');
        const existingSessionRowIndex = rows.findIndex((row, index)=>index > 0 && row[userNameIndex] === userName && row[deviceInfoIndex] === deviceInfo);
        if (existingSessionRowIndex !== -1) {
            console.log(`[Sessions] Found existing session for ${userName} on device. Removing before adding new one.`);
            const sheetId = await getSheetId(SPREADSHEET_ID, sheetName);
            if (sheetId === null) {
                throw new Error(`Sheet with name "${sheetName}" not found.`);
            }
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                resource: {
                    requests: [
                        {
                            deleteDimension: {
                                range: {
                                    sheetId,
                                    dimension: 'ROWS',
                                    startIndex: existingSessionRowIndex,
                                    endIndex: existingSessionRowIndex + 1
                                }
                            }
                        }
                    ]
                }
            });
        }
    }
    // Now, append the new session
    const values = [
        [
            userName,
            sessionToken,
            loginTime,
            ipAddress,
            deviceInfo
        ]
    ];
    const appendRequest = {
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values
        }
    };
    try {
        await sheets.spreadsheets.values.append(appendRequest);
        console.log(`[Sessions] Added new session for user ${userName}`);
    } catch (err) {
        console.error('The API returned an error while adding a session: ' + err);
        throw new Error('Failed to add session to Google Sheet.');
    }
}
async function getSessionsByUserName(userName) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: SESSIONS_SHEET_NAME
    });
    const rows = response.data.values;
    if (!rows || rows.length < 2) return [];
    const header = rows[0];
    const userNameIndex = header.indexOf('userName');
    const tokenIndex = header.indexOf('sessionToken');
    const timeIndex = header.indexOf('loginTime');
    const ipIndex = header.indexOf('ipAddress');
    const deviceIndex = header.indexOf('deviceInfo');
    return rows.slice(1).filter((row)=>row[userNameIndex] === userName).map((row)=>({
            token: row[tokenIndex],
            loginTime: row[timeIndex],
            ipAddress: row[ipIndex],
            deviceInfo: row[deviceIndex]
        }));
}
async function findRowIndexByToken(token) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const sheetName = SESSIONS_SHEET_NAME;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!B:B`
    });
    const rows = response.data.values;
    if (!rows) throw new Error('Could not find session.');
    const rowIndex = rows.findIndex((row)=>row[0] === token);
    if (rowIndex === -1) throw new Error('Session token not found.');
    const sheetId = await getSheetId(SPREADSHEET_ID, sheetName);
    if (sheetId === null) throw new Error('Could not find sheet ID for sessions.');
    return {
        sheetId,
        rowIndex
    };
}
async function findUserBySessionToken(token) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${SESSIONS_SHEET_NAME}!A:B`; // userName and sessionToken columns
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range
    });
    const rows = response.data.values;
    if (!rows || rows.length < 2) return null;
    const header = rows[0];
    const userNameIndex = header.indexOf('userName');
    const tokenIndex = header.indexOf('sessionToken');
    const sessionRow = rows.slice(1).find((row)=>row[tokenIndex] === token);
    if (sessionRow) {
        return {
            userName: sessionRow[userNameIndex]
        };
    }
    return null;
}
async function deleteSessionByToken(token) {
    const { sheetId, rowIndex } = await findRowIndexByToken(token);
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        resource: {
            requests: [
                {
                    deleteDimension: {
                        range: {
                            sheetId,
                            dimension: 'ROWS',
                            startIndex: rowIndex,
                            endIndex: rowIndex + 1
                        }
                    }
                }
            ]
        }
    });
    console.log(`[Sessions] Deleted session with token ending in ...${token.slice(-4)}`);
}
async function deleteAllOtherSessionsByToken(currentToken) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${SESSIONS_SHEET_NAME}!A:E`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range
    });
    const rows = response.data.values;
    if (!rows || rows.length < 2) return;
    const header = rows[0];
    const tokenIndex = header.indexOf('sessionToken');
    const userNameIndex = header.indexOf('userName');
    const currentUserRow = rows.find((row)=>row[tokenIndex] === currentToken);
    if (!currentUserRow) return; // Current session not found, do nothing.
    const currentUserName = currentUserRow[userNameIndex];
    const sheetId = await getSheetId(SPREADSHEET_ID, SESSIONS_SHEET_NAME);
    if (sheetId === null) throw new Error('Could not find sheet ID.');
    const deleteRequests = rows.map((row, index)=>({
            row,
            index
        })).filter(({ row })=>row[userNameIndex] === currentUserName && row[tokenIndex] !== currentToken).map(({ index })=>({
            deleteDimension: {
                range: {
                    sheetId,
                    dimension: 'ROWS',
                    startIndex: index,
                    endIndex: index + 1
                }
            }
        }))// We need to process deletions from bottom to top to avoid shifting indices.
    .reverse();
    if (deleteRequests.length > 0) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: {
                requests: deleteRequests
            }
        });
        console.log(`[Sessions] Deleted ${deleteRequests.length} other session(s) for user ${currentUserName}`);
    }
}
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/googlesheets.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const sessionToken = request.cookies.get('sessionToken')?.value;
    const { pathname } = request.nextUrl;
    const isAuthPage = pathname === '/login' || pathname === '/signup';
    // If the user is on an auth page
    if (isAuthPage) {
        if (sessionToken) {
            // Validate the token. If valid, redirect to home.
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["findUserBySessionToken"])(sessionToken);
            if (user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/home', request.url));
            }
            // If token is invalid, clear it and let them stay on auth page
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
            response.cookies.delete('sessionToken');
            return response;
        }
        // No token, allow access to auth page
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If the user is on a protected page
    if (!sessionToken) {
        // No token, redirect to login
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
    }
    // Validate the token for protected routes
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["findUserBySessionToken"])(sessionToken);
    if (!user) {
        // If token is invalid, redirect to login and clear the cookie
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
        response.cookies.delete('sessionToken');
        return response;
    }
    // If everything is fine, allow access
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/home',
        '/profile',
        '/tax-profiles',
        '/dat-files',
        '/template',
        '/login',
        '/signup'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a73c6e3e._.js.map