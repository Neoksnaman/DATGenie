module.exports = {

"[project]/src/lib/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DatFileSchema": (()=>DatFileSchema),
    "MutationResultSchema": (()=>MutationResultSchema),
    "TaxProfileSchema": (()=>TaxProfileSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const alphanumericWithSpaces = (name, length, required = true)=>{
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(length, `${name} must be ${length} characters or less.`).regex(/^[a-zA-Z0-9\s]*$/, `${name} must only contain letters, numbers, and spaces.`);
    if (required) {
        return schema.min(1, `${name} is required.`);
    }
    return schema.optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(''));
};
const TaxProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    tpTIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{9}$/, 'TIN must be 9 digits.'),
    branchCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{4}$/, 'Branch code must be 4 digits.'),
    rdoCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'RDO Code is required.'),
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    cycleType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    monthSelect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Month is required.'),
    companyName: alphanumericWithSpaces('Company Name', 50, false),
    lastName: alphanumericWithSpaces('Last Name', 30, false),
    firstName: alphanumericWithSpaces('First Name', 30, false),
    middleName: alphanumericWithSpaces('Middle Name', 30, false),
    tradeName: alphanumericWithSpaces('Trade Name', 50),
    subStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Unit/Floor/Substreet must be 30 characters or less.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    street: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Street must be 30 characters or less.').min(1, 'Street is required.'),
    barangay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Barangay must be 30 characters or less.').min(1, 'Barangay is required.'),
    cityMunicipality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(30, 'City/Municipality must be 30 characters or less.').min(1, 'City/Municipality is required.'),
    province: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Province must be 30 characters or less.').min(1, 'Province is required.'),
    zipCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{4}$/, 'Zip code must be 4 digits.')
}).passthrough().refine((data)=>{
    if (data.entityType === 'Individual') {
        return !!data.lastName && !!data.firstName && !!data.middleName;
    }
    return true;
}, {
    message: "First, Middle, and Last name are required for individuals.",
    path: [
        "lastName"
    ]
}).refine((data)=>{
    if (data.entityType === 'Non-Individual') {
        return !!data.companyName;
    }
    return true;
}, {
    message: "Company name is required for non-individuals.",
    path: [
        "companyName"
    ]
});
const MutationResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    data: TaxProfileSchema.nullable()
});
const DatFileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    modifiedTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[project]/src/lib/drive-oauth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOAuth2Client": (()=>getOAuth2Client),
    "getSheetsClient": (()=>getSheetsClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/googleapis/build/src/index.js [app-rsc] (ecmascript)");
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
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"].auth.OAuth2(GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, GOOGLE_OAUTH_REDIRECT_URI);
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"].sheets({
        version: 'v4',
        auth: oauth2Client
    });
}
}}),
"[project]/src/lib/googlesheets.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "appendHeaderDataToSheet": (()=>appendHeaderDataToSheet),
    "appendUserToSheet": (()=>appendUserToSheet),
    "deleteHeaderDataRowInSheet": (()=>deleteHeaderDataRowInSheet),
    "getAllHeaderDataFromSheet": (()=>getAllHeaderDataFromSheet),
    "getAllUsers": (()=>getAllUsers),
    "updateHeaderDataInSheet": (()=>updateHeaderDataInSheet),
    "updateUserFolderId": (()=>updateUserFolderId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive-oauth.ts [app-rsc] (ecmascript)");
;
;
const signupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    folderId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
const { GOOGLE_SHEETS_SHEET_ID } = process.env;
if (!GOOGLE_SHEETS_SHEET_ID) {
    throw new Error('GOOGLE_SHEETS_SHEET_ID is not configured in .env');
}
const SPREADSHEET_ID = GOOGLE_SHEETS_SHEET_ID;
const SHEET_NAME = 'credentials';
async function appendUserToSheet(userData) {
    const { email, userName, password, folderId } = userData;
    const timestamp = new Date().toISOString();
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    // Mapping to sheet headers: emailAddress, userName, pwd, databaseID, folderID, status, lastLogin, runtime
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
        range: `${SHEET_NAME}!A1`,
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
        const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_NAME
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${SHEET_NAME}!A:H`; // Adjust range to cover all columns
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
        range: `${SHEET_NAME}!${columnToUpdate}${rowToUpdate}`,
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
        const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const response = await sheets.spreadsheets.get({
        spreadsheetId
    });
    const sheet = response.data.sheets?.find((s)=>s.properties?.title === sheetName);
    return sheet?.properties?.sheetId ?? null;
}
async function deleteHeaderDataRowInSheet(tpTIN, databaseId) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const sheetName = 'tpList';
    const range = `${sheetName}!A:Q`;
    // 1. Get all data to find the row index
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
        return; // Profile not found, so nothing to delete
    }
    // 2. Get the sheetId required for batchUpdate
    const sheetId = await getSheetId(databaseId, sheetName);
    if (sheetId === null) {
        throw new Error(`Sheet with name "${sheetName}" not found.`);
    }
    // 3. Perform batch update to delete the row and add a blank one
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
}}),
"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b981786947aad3d7b17012761d8eedf3b8c56d37":"getUserHeaderData","603faeebba6f5d1c659d40c68263670a7954629620":"deleteTaxProfile","60772ebd7eee4b78eff3ac73c22413d13f400a55f3":"addTaxProfile","60ea6d367d076c4efa427326e37f48bc65200d8fed":"updateTaxProfile"},"",""] */ __turbopack_context__.s({
    "addTaxProfile": (()=>addTaxProfile),
    "deleteTaxProfile": (()=>deleteTaxProfile),
    "getUserHeaderData": (()=>getUserHeaderData),
    "updateTaxProfile": (()=>updateTaxProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/googlesheets.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const TaxProfileResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxProfileSchema"]).nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function getUserHeaderData(databaseId) {
    try {
        if (!databaseId) {
            return {
                success: false,
                data: null,
                error: 'Database ID is required.'
            };
        }
        const headerData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllHeaderDataFromSheet"])(databaseId);
        return {
            success: true,
            data: headerData,
            error: null
        };
    } catch (error) {
        console.error('Error fetching header data:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return {
            success: false,
            data: null,
            error: `Failed to fetch header data: ${errorMessage}`
        };
    }
}
function transformToUppercase(data) {
    const uppercasedData = {};
    for(const key in data){
        const value = data[key];
        if (typeof value === 'string' && key !== 'entityType' && key !== 'cycleType' && key !== 'monthSelect' && key !== 'rdoCode') {
            uppercasedData[key] = value.toUpperCase();
        } else {
            uppercasedData[key] = value;
        }
    }
    return uppercasedData;
}
async function addTaxProfile(profileData, databaseId) {
    try {
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxProfileSchema"].parse(profileData);
        const existingProfiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllHeaderDataFromSheet"])(databaseId);
        const tinExists = existingProfiles.some((p)=>p.tpTIN === validatedData.tpTIN);
        if (tinExists) {
            return {
                success: false,
                error: 'This TIN already has a profile. Please check your data or refresh the page.',
                data: null
            };
        }
        const uppercasedData = transformToUppercase(validatedData);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendHeaderDataToSheet"])(uppercasedData, databaseId);
        return {
            success: true,
            error: null,
            data: uppercasedData
        };
    } catch (e) {
        console.error('Error adding tax profile:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return {
            success: false,
            error: `Failed to add profile: ${errorMessage}`,
            data: null
        };
    }
}
async function updateTaxProfile(profileData, databaseId) {
    try {
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxProfileSchema"].parse(profileData);
        const uppercasedData = transformToUppercase(validatedData);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHeaderDataInSheet"])(uppercasedData, databaseId);
        return {
            success: true,
            error: null,
            data: uppercasedData
        };
    } catch (e) {
        console.error('Error updating tax profile:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return {
            success: false,
            error: `Failed to update profile: ${errorMessage}`,
            data: null
        };
    }
}
const SimpleResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function deleteTaxProfile(tpTIN, databaseId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$googlesheets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteHeaderDataRowInSheet"])(tpTIN, databaseId);
        return {
            success: true,
            error: null
        };
    } catch (e) {
        console.error('Error deleting tax profile:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return {
            success: false,
            error: `Failed to delete profile: ${errorMessage}`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUserHeaderData,
    addTaxProfile,
    updateTaxProfile,
    deleteTaxProfile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserHeaderData, "40b981786947aad3d7b17012761d8eedf3b8c56d37", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTaxProfile, "60772ebd7eee4b78eff3ac73c22413d13f400a55f3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTaxProfile, "60ea6d367d076c4efa427326e37f48bc65200d8fed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTaxProfile, "603faeebba6f5d1c659d40c68263670a7954629620", null);
}}),
"[project]/src/lib/drive.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00186ae8b46ba208c20a4a809212c1f3e6948fe1b2":"getInitialPageTokenForDrive","4019d8efc0e8739c514bfb3847f6eef6107aca4d72":"createFolderInDrive","40b059e63060f3f4feea26611d7aec8c3ec0ede92f":"downloadFileFromDrive","40dd2f09e524554b4ec3a9fff80a021fad2531abc0":"listDatFiles","40eb3992284d3f345830502ed25bef9bf64111ffac":"deleteFileFromDrive","60f30c24add5ece81b8a4e4f22fb29dca30abc29de":"listChangesSincePageToken","70864395bb092dc39044827f4dcf80a5be65f97fdf":"checkFileExists","7cada598f594d88c11337b2248ef7320b7b540f236":"uploadFileToDrive"},"",""] */ __turbopack_context__.s({
    "checkFileExists": (()=>checkFileExists),
    "createFolderInDrive": (()=>createFolderInDrive),
    "deleteFileFromDrive": (()=>deleteFileFromDrive),
    "downloadFileFromDrive": (()=>downloadFileFromDrive),
    "getInitialPageTokenForDrive": (()=>getInitialPageTokenForDrive),
    "listChangesSincePageToken": (()=>listChangesSincePageToken),
    "listDatFiles": (()=>listDatFiles),
    "uploadFileToDrive": (()=>uploadFileToDrive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/googleapis/build/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive-oauth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getDriveClient() {
    const oauth2Client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOAuth2Client"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"].drive({
        version: 'v3',
        auth: oauth2Client
    });
}
async function createFolderInDrive(name) {
    const drive = await getDriveClient();
    const fileMetadata = {
        name,
        mimeType: 'application/vnd.google-apps.folder'
    };
    try {
        const file = await drive.files.create({
            resource: fileMetadata,
            fields: 'id'
        });
        console.log(`[Drive] Created root folder "${name}" with ID: ${file.data.id}`);
        return file.data.id;
    } catch (error) {
        console.error(`[Drive] Error creating root folder "${name}":`, error);
        throw error;
    }
}
async function findFolder(drive, name, parentId) {
    const query = `mimeType='application/vnd.google-apps.folder' and name='${name.replace(/'/g, "\\'")}' and '${parentId}' in parents and trashed=false`;
    try {
        const res = await drive.files.list({
            q: query,
            fields: 'files(id)',
            spaces: 'drive',
            pageSize: 1
        });
        if (res.data.files && res.data.files.length > 0 && res.data.files[0].id) {
            return res.data.files[0].id;
        }
        return null;
    } catch (error) {
        console.error(`[Drive] Error finding folder "${name}" in parent "${parentId}":`, error);
        return null;
    }
}
async function createFolder(drive, name, parentId) {
    const fileMetadata = {
        name: name,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [
            parentId
        ]
    };
    const folder = await drive.files.create({
        resource: fileMetadata,
        fields: 'id'
    });
    if (!folder.data.id) throw new Error(`Failed to create folder "${name}"`);
    console.log(`[Drive] Created folder "${name}" with ID: ${folder.data.id}.`);
    return folder.data.id;
}
async function getOrCreateFolderByPath(drive, rootFolderId, path) {
    let currentParentId = rootFolderId;
    const datFilesFolderName = 'DATFiles';
    let datFilesFolderId = await findFolder(drive, datFilesFolderName, currentParentId);
    if (!datFilesFolderId) {
        datFilesFolderId = await createFolder(drive, datFilesFolderName, currentParentId);
    }
    currentParentId = datFilesFolderId;
    for (const folderName of path){
        let nextFolderId = await findFolder(drive, folderName, currentParentId);
        if (!nextFolderId) {
            nextFolderId = await createFolder(drive, folderName, currentParentId);
        }
        currentParentId = nextFolderId;
    }
    return currentParentId;
}
async function checkFileExists(fileName, rootFolderId, path) {
    try {
        const drive = await getDriveClient();
        const finalFolderId = await getOrCreateFolderByPath(drive, rootFolderId, path);
        const query = `name='${fileName.replace(/'/g, "\\'")}' and '${finalFolderId}' in parents and trashed=false`;
        const res = await drive.files.list({
            q: query,
            fields: 'files(id)',
            pageSize: 1
        });
        return !!(res.data.files && res.data.files.length > 0);
    } catch (error) {
        console.error(`[Drive] Error checking if file '${fileName}' exists:`, error);
        return false;
    }
}
async function uploadFileToDrive(fileName, fileContent, rootFolderId, path, overwrite = false) {
    try {
        const drive = await getDriveClient();
        const finalFolderId = await getOrCreateFolderByPath(drive, rootFolderId, path);
        console.log(`[Drive] Final folder for upload is '${finalFolderId}'.`);
        const media = {
            mimeType: 'text/plain',
            body: fileContent
        };
        const fileFields = 'id, name, modifiedTime';
        if (overwrite) {
            const query = `name='${fileName.replace(/'/g, "\\'")}' and '${finalFolderId}' in parents and trashed=false`;
            const res = await drive.files.list({
                q: query,
                fields: 'files(id)',
                pageSize: 1
            });
            if (res.data.files && res.data.files.length > 0 && res.data.files[0].id) {
                const fileId = res.data.files[0].id;
                console.log(`[Drive] Overwriting existing file '${fileName}' with ID: ${fileId}`);
                const updatedFile = await drive.files.update({
                    fileId: fileId,
                    media: media,
                    fields: fileFields
                });
                if (!updatedFile.data.id || !updatedFile.data.name || !updatedFile.data.modifiedTime) {
                    throw new Error('File update did not return complete data.');
                }
                return {
                    id: updatedFile.data.id,
                    name: updatedFile.data.name,
                    path: path.join(' / '),
                    modifiedTime: updatedFile.data.modifiedTime
                };
            }
        }
        // If not overwriting or file doesn't exist, create a new one.
        const fileMetadata = {
            name: fileName,
            parents: [
                finalFolderId
            ]
        };
        const file = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: fileFields
        });
        if (!file.data.id || !file.data.name || !file.data.modifiedTime) {
            throw new Error('File creation did not return complete data.');
        }
        console.log(`[Drive] Successfully uploaded new file '${fileName}', File ID: ${file.data.id}`);
        return {
            id: file.data.id,
            name: file.data.name,
            path: path.join(' / '),
            modifiedTime: file.data.modifiedTime
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        console.error(`[Drive] Failed to upload file '${fileName}':`, errorMessage);
        throw new Error(`Failed to upload file to Google Drive: ${errorMessage}`);
    }
}
async function listDatFiles(rootFolderId) {
    const drive = await getDriveClient();
    const datFilesFolderId = await findFolder(drive, "DATFiles", rootFolderId);
    if (!datFilesFolderId) {
        console.log('[Drive] "DATFiles" folder not found, returning empty list.');
        return {
            files: [],
            folderIds: []
        };
    }
    const folderMap = new Map();
    const allFiles = [];
    const allFolderIds = new Set([
        datFilesFolderId
    ]);
    async function walkFolders(folderId) {
        let pageToken = undefined;
        do {
            const res = await drive.files.list({
                q: `'${folderId}' in parents and trashed=false`,
                fields: "nextPageToken, files(id, name, mimeType, modifiedTime, parents)",
                spaces: "drive",
                pageToken,
                pageSize: 1000
            });
            const folderPromises = [];
            if (res.data.files) {
                for (const file of res.data.files){
                    if (file.mimeType === "application/vnd.google-apps.folder") {
                        if (file.id) {
                            allFolderIds.add(file.id);
                            if (file.parents && file.parents.length > 0) {
                                folderMap.set(file.id, {
                                    name: file.name,
                                    parentId: file.parents[0]
                                });
                            }
                            folderPromises.push(walkFolders(file.id));
                        }
                    } else if (file.name?.endsWith(".DAT")) {
                        let pathParts = [];
                        let currentParentId = file.parents?.[0];
                        while(currentParentId && currentParentId !== datFilesFolderId){
                            const parentFolder = folderMap.get(currentParentId);
                            if (parentFolder) {
                                pathParts.unshift(parentFolder.name);
                                currentParentId = parentFolder.parentId;
                            } else {
                                break;
                            }
                        }
                        allFiles.push({
                            id: file.id,
                            name: file.name,
                            path: pathParts.join(" / "),
                            modifiedTime: file.modifiedTime
                        });
                    }
                }
            }
            await Promise.all(folderPromises);
            pageToken = res.data.nextPageToken;
        }while (pageToken)
    }
    folderMap.set(datFilesFolderId, {
        name: "DATFiles",
        parentId: rootFolderId
    });
    await walkFolders(datFilesFolderId);
    return {
        files: allFiles,
        folderIds: Array.from(allFolderIds)
    };
}
async function downloadFileFromDrive(fileId) {
    const drive = await getDriveClient();
    try {
        const response = await drive.files.get({
            fileId: fileId,
            alt: 'media'
        }, {
            responseType: 'stream'
        });
        return new Promise((resolve, reject)=>{
            let buf = [];
            response.data.on('data', (chunk)=>buf.push(chunk)).on('end', ()=>{
                const content = Buffer.concat(buf).toString();
                resolve(content);
            }).on('error', (err)=>{
                console.error(`[Drive] Error downloading file ${fileId}:`, err);
                reject(err);
            });
        });
    } catch (error) {
        if (error.code === 404) {
            throw new Error('File not found.');
        }
        console.error(`[Drive] API error on download for file ${fileId}:`, error);
        throw error;
    }
}
async function deleteFileFromDrive(fileId) {
    const drive = await getDriveClient();
    try {
        await drive.files.delete({
            fileId: fileId
        });
        console.log(`[Drive] Successfully deleted file with ID: ${fileId}`);
    } catch (error) {
        if (error.code === 404) {
            throw new Error('File not found.');
        }
        console.error(`[Drive] Error deleting file ${fileId}:`, error);
        throw error;
    }
}
async function getInitialPageTokenForDrive() {
    const drive = await getDriveClient();
    try {
        const response = await drive.changes.getStartPageToken({
            supportsAllDrives: true
        });
        if (!response.data.startPageToken) {
            throw new Error('Failed to get a start page token.');
        }
        return response.data.startPageToken;
    } catch (error) {
        console.error('[Drive] Error getting initial page token:', error);
        throw error;
    }
}
async function listChangesSincePageToken(allFolderIds, pageToken) {
    const drive = await getDriveClient();
    let newPageToken = pageToken;
    let hasRelevantChanges = false;
    let lastResponse;
    try {
        const folderIdSet = new Set(allFolderIds);
        do {
            lastResponse = await drive.changes.list({
                pageToken: newPageToken,
                spaces: "drive",
                fields: "nextPageToken, newStartPageToken, changes(fileId, removed, file(name, parents, mimeType))",
                includeItemsFromAllDrives: true,
                supportsAllDrives: true
            });
            const changes = lastResponse.data.changes || [];
            if (changes.length > 0) {
                const relevantChange = changes.some((c)=>{
                    // A file was deleted. We can't know its parent, so we must refresh.
                    if (c.removed) return true;
                    if (c.file && c.file.parents) {
                        // Check if the file's parent is one of our tracked folders.
                        const parentIsTracked = c.file.parents.some((p)=>folderIdSet.has(p));
                        if (parentIsTracked) {
                            // It's a folder or a .DAT file within our structure
                            if (c.file.mimeType === 'application/vnd.google-apps.folder' || c.file.name?.toUpperCase().endsWith(".DAT")) {
                                return true;
                            }
                        }
                    }
                    return false;
                });
                if (relevantChange) {
                    hasRelevantChanges = true;
                    break;
                }
            }
            if (lastResponse.data.nextPageToken) {
                newPageToken = lastResponse.data.nextPageToken;
            } else {
                break;
            }
        }while (lastResponse.data.nextPageToken)
        const finalToken = lastResponse.data.newStartPageToken || newPageToken;
        return {
            hasChanges: hasRelevantChanges,
            newPageToken: finalToken
        };
    } catch (error) {
        console.error("[Drive] Error listing changes:", error);
        return {
            hasChanges: false,
            newPageToken: pageToken
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createFolderInDrive,
    checkFileExists,
    uploadFileToDrive,
    listDatFiles,
    downloadFileFromDrive,
    deleteFileFromDrive,
    getInitialPageTokenForDrive,
    listChangesSincePageToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createFolderInDrive, "4019d8efc0e8739c514bfb3847f6eef6107aca4d72", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkFileExists, "70864395bb092dc39044827f4dcf80a5be65f97fdf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadFileToDrive, "7cada598f594d88c11337b2248ef7320b7b540f236", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listDatFiles, "40dd2f09e524554b4ec3a9fff80a021fad2531abc0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(downloadFileFromDrive, "40b059e63060f3f4feea26611d7aec8c3ec0ede92f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteFileFromDrive, "40eb3992284d3f345830502ed25bef9bf64111ffac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInitialPageTokenForDrive, "00186ae8b46ba208c20a4a809212c1f3e6948fe1b2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listChangesSincePageToken, "60f30c24add5ece81b8a4e4f22fb29dca30abc29de", null);
}}),
"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00e0de5eecd8231df764d2365c49c18983c0b60260":"getInitialPageToken","4016ebdf9488006741c60b7311f41f9bd369ad7fad":"getDatFileContent","40a57fcb4a960a37a11746b24812e58ef776483800":"getDatFiles","40af73184119c15409b97a0d41b0fa658f6ec0f5b9":"deleteDatFile","600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c":"checkForDatFileChanges"},"",""] */ __turbopack_context__.s({
    "checkForDatFileChanges": (()=>checkForDatFileChanges),
    "deleteDatFile": (()=>deleteDatFile),
    "getDatFileContent": (()=>getDatFileContent),
    "getDatFiles": (()=>getDatFiles),
    "getInitialPageToken": (()=>getInitialPageToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const DatFileListingResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    files: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DatFileSchema"]).nullable(),
    folderIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function getDatFiles(folderId) {
    if (!folderId) {
        return {
            success: false,
            files: null,
            folderIds: null,
            error: 'User folder ID is missing.'
        };
    }
    try {
        const { files, folderIds } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDatFiles"])(folderId);
        return {
            success: true,
            files,
            folderIds,
            error: null
        };
    } catch (e1) {
        console.error('[getDatFiles] CRITICAL ERROR:', e1);
        const errorMessage = e1 instanceof Error ? e1.message : 'An unknown error occurred.';
        return {
            success: false,
            files: null,
            folderIds: null,
            error: `Failed to retrieve DAT files: ${errorMessage}`
        };
    }
}
const DatFileContentResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function getDatFileContent(fileId) {
    try {
        if (!fileId) {
            return {
                success: false,
                content: null,
                error: 'File ID is required.'
            };
        }
        const content = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["downloadFileFromDrive"])(fileId);
        return {
            success: true,
            content: content,
            error: null
        };
    } catch (error) {
        if (error.code === 404) {
            return {
                success: false,
                content: null,
                error: 'File not found.'
            };
        }
        console.error(`[getDatFileContent] CRITICAL ERROR for fileId ${fileId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return {
            success: false,
            content: null,
            error: `Failed to retrieve file content: ${errorMessage}`
        };
    }
}
const SimpleResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function deleteDatFile(fileId) {
    try {
        if (!fileId) {
            return {
                success: false,
                error: 'File ID is required.'
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFileFromDrive"])(fileId);
        return {
            success: true,
            error: null
        };
    } catch (error) {
        if (error.code === 404) {
            return {
                success: false,
                error: 'File not found.'
            };
        }
        console.error(`[deleteDatFile] CRITICAL ERROR for fileId ${fileId}:`, error);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return {
            success: false,
            error: `Failed to delete file: ${errorMessage}`
        };
    }
}
const PageTokenResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function getInitialPageToken() {
    try {
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialPageTokenForDrive"])();
        return {
            success: true,
            token,
            error: null
        };
    } catch (e1) {
        const errorMessage = e1 instanceof Error ? e1.message : 'An unknown error occurred.';
        return {
            success: false,
            token: null,
            error: `Failed to get initial page token: ${errorMessage}`
        };
    }
}
const ChangesResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    hasChanges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    newToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable()
});
async function checkForDatFileChanges(allFolderIds, pageToken) {
    if (!allFolderIds || allFolderIds.length === 0 || !pageToken) {
        return {
            success: false,
            hasChanges: false,
            newToken: null,
            error: 'Folder IDs and page token are required.'
        };
    }
    try {
        const { hasChanges, newPageToken } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listChangesSincePageToken"])(allFolderIds, pageToken);
        return {
            success: true,
            hasChanges,
            newToken: newPageToken,
            error: null
        };
    } catch (e1) {
        const errorMessage = e1 instanceof Error ? e1.message : 'An unknown error occurred.';
        return {
            success: false,
            hasChanges: false,
            newToken: pageToken,
            error: `Failed to check for changes: ${errorMessage}`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDatFiles,
    getDatFileContent,
    deleteDatFile,
    getInitialPageToken,
    checkForDatFileChanges
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDatFiles, "40a57fcb4a960a37a11746b24812e58ef776483800", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDatFileContent, "4016ebdf9488006741c60b7311f41f9bd369ad7fad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDatFile, "40af73184119c15409b97a0d41b0fa658f6ec0f5b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInitialPageToken, "00e0de5eecd8231df764d2365c49c18983c0b60260", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkForDatFileChanges, "600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c", null);
}}),
"[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"600a58238af37fd2a17ff9b8349dcca06e6066bcb3":"getFormattedLastDay","607a7966fdc9879421faf80de95fe825bf872d679c":"processExcelFile","7090e915f5557371f28b3cd4603fed062976d2decc":"sanitizeAndValidateNumber","7ca3f4c08011fe412a7b84ed43a284b2f44756ffe9":"sanitizeAndValidateString","7f2fe0ecc7d169c7efa4965365c591a72e1596cade":"quoteIfNotEmpty","7f3503c07badc729370da872c1295a5b41a74dcf13":"DatFileResultSchema"},"",""] */ __turbopack_context__.s({
    "DatFileResultSchema": (()=>DatFileResultSchema),
    "getFormattedLastDay": (()=>getFormattedLastDay),
    "processExcelFile": (()=>processExcelFile),
    "quoteIfNotEmpty": (()=>quoteIfNotEmpty),
    "sanitizeAndValidateNumber": (()=>sanitizeAndValidateNumber),
    "sanitizeAndValidateString": (()=>sanitizeAndValidateString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const DatFileResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean(),
    datContent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    errors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).nullable(),
    fileExists: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    datFile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DatFileSchema"].nullable(),
    // Sales Totals
    totalExempt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalZeroRated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalTaxableSales: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalOutputTax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    // Purchase Totals
    totalServices: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalCapitalGoods: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalOtherGoods: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalInputTax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    // 1601-EQ and SAWT Totals
    totalTaxableIncomePayment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalExemptIncomePayment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    totalWithholdingTax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
    processedData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].any().nullable()
});
function sanitizeAndValidateString(input, fieldName, maxLength, rowNumber, isRequired = false) {
    let value = input === null || input === undefined ? '' : String(input).trim();
    if (!value) {
        if (isRequired) {
            return {
                value: '',
                error: `Row ${rowNumber}: ${fieldName} is missing.`
            };
        }
        return {
            value: '',
            error: null
        };
    }
    let processedString = value.toUpperCase().replace(/&/g, 'AND').replace(/Ñ/g, 'N').replace(/\s\s+/g, ' ').trim().replace(/[^A-Z0-9\s-]/g, '').replace(/\s\s+/g, ' ').trim();
    if (processedString.length > maxLength) {
        return {
            value: processedString,
            error: `Row ${rowNumber}: ${fieldName} must be ${maxLength} characters or less.`
        };
    }
    return {
        value: processedString,
        error: null
    };
}
function sanitizeAndValidateNumber(input, fieldName, rowNumber) {
    if (input === null || input === undefined || String(input).trim() === '') {
        return {
            value: '0',
            error: null
        };
    }
    const valueAsString = String(input).replace(/,/g, '');
    const num = parseFloat(valueAsString);
    if (isNaN(num)) {
        return {
            value: String(input),
            error: `Row ${rowNumber}: ${fieldName} contains an invalid number.`
        };
    }
    const roundedNum = Math.round(num * 100) / 100;
    if (roundedNum === 0) {
        return {
            value: '0',
            error: null
        };
    }
    return {
        value: roundedNum.toFixed(2),
        error: null
    };
}
function getFormattedLastDay(year, month) {
    // Get the last day of the month. This correctly handles leap years.
    const day = new Date(year, month, 0).getDate();
    const date = new Date(year, month - 1, day);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
}
const quoteIfNotEmpty = (value)=>{
    const str = String(value || '').trim();
    return str ? `"${str}"` : '';
};
async function processExcelFile(file, sheetName) {
    const bytes = await file.arrayBuffer();
    const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["read"])(bytes, {
        type: 'array'
    });
    if (!workbook.SheetNames.includes(sheetName)) {
        return {
            data: [],
            validationErrors: [
                `Sheet "${sheetName}" not found in the uploaded file.`
            ]
        };
    }
    const worksheet = workbook.Sheets[sheetName];
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
        header: 1,
        defval: '',
        raw: false
    });
    if (data.length <= 1) {
        return {
            data: [],
            validationErrors: []
        };
    }
    return {
        data: data.slice(1),
        validationErrors: []
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    DatFileResultSchema,
    sanitizeAndValidateString,
    sanitizeAndValidateNumber,
    getFormattedLastDay,
    quoteIfNotEmpty,
    processExcelFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(DatFileResultSchema, "7f3503c07badc729370da872c1295a5b41a74dcf13", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sanitizeAndValidateString, "7ca3f4c08011fe412a7b84ed43a284b2f44756ffe9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sanitizeAndValidateNumber, "7090e915f5557371f28b3cd4603fed062976d2decc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFormattedLastDay, "600a58238af37fd2a17ff9b8349dcca06e6066bcb3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(quoteIfNotEmpty, "7f2fe0ecc7d169c7efa4965365c591a72e1596cade", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processExcelFile, "607a7966fdc9879421faf80de95fe825bf872d679c", null);
}}),
"[project]/src/lib/actions/dat/sales.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7e73629853cb2ac71fe9d9846a3be48949a536b518":"generateSalesDatFile"},"",""] */ __turbopack_context__.s({
    "generateSalesDatFile": (()=>generateSalesDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateSalesDatFile(file, profile, month, year, folderId, overwrite = false) {
    const { tpTIN: tin } = profile;
    const { data: dataRows, validationErrors: fileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, "vat_sales");
    if (fileErrors.length > 0) {
        return {
            success: false,
            errors: fileErrors,
            datContent: null,
            fileName: null,
            error: null,
            datFile: null,
            totalExempt: null,
            totalZeroRated: null,
            totalTaxableSales: null,
            totalOutputTax: null,
            totalServices: null,
            totalCapitalGoods: null,
            totalOtherGoods: null,
            totalInputTax: null,
            totalTaxableIncomePayment: null,
            totalExemptIncomePayment: null,
            totalWithholdingTax: null,
            processedData: null
        };
    }
    const validationErrors = [];
    const processedData = dataRows.map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (processedRow.length > 0 && String(processedRow[0]).trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
            if (sanitizedTin.substring(0, 9) === tin) validationErrors.push(`Row ${originalRowNumber}: The TIN matches the selected profile's TIN. A company cannot make a sale to itself.`);
            if (sanitizedTin.length < 9) validationErrors.push(`Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be at least 9 digits.`);
            processedRow[0] = sanitizedTin.substring(0, 9);
        } else {
            validationErrors.push(`Row ${originalRowNumber}: TIN is missing.`);
        }
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 1,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 2,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Address 1',
                index: 5,
                maxLength: 30,
                required: true
            },
            {
                name: 'Address 2',
                index: 6,
                maxLength: 30,
                required: true
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], field.name, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const hasFirstName = String(processedRow[3]).trim().length > 0;
        const hasLastName = String(processedRow[2]).trim().length > 0;
        const hasMiddleName = String(processedRow[4]).trim().length > 0;
        if (hasFirstName && !hasLastName || !hasFirstName && hasLastName) validationErrors.push(`Row ${originalRowNumber}: First Name and Last Name must be provided together.`);
        if (hasMiddleName && (!hasFirstName || !hasLastName)) validationErrors.push(`Row ${originalRowNumber}: If Middle Name is provided, First Name and Last Name are also required.`);
        const numericFields = [
            {
                name: 'Exempt Sales',
                index: 7
            },
            {
                name: 'Zero-Rated Sales',
                index: 8
            },
            {
                name: 'Taxable Sales',
                index: 9
            },
            {
                name: 'Output Tax',
                index: 10
            }
        ];
        numericFields.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[field.index], field.name, originalRowNumber);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        if (parseFloat(processedRow[7]) === 0 && parseFloat(processedRow[8]) === 0 && parseFloat(processedRow[9]) === 0) {
            validationErrors.push(`Row ${originalRowNumber}: At least one sales amount (Exempt, Zero-Rated, or Taxable) must be greater than zero.`);
        }
        return processedRow;
    });
    if (validationErrors.length > 0) {
        return {
            success: false,
            errors: validationErrors,
            error: "Validation failed.",
            datFile: null,
            datContent: null,
            fileName: null,
            totalExempt: null,
            totalZeroRated: null,
            totalTaxableSales: null,
            totalOutputTax: null,
            totalServices: null,
            totalCapitalGoods: null,
            totalOtherGoods: null,
            totalInputTax: null,
            totalTaxableIncomePayment: null,
            totalExemptIncomePayment: null,
            totalWithholdingTax: null,
            processedData: null
        };
    }
    processedData.sort((a, b)=>String(a[1]).localeCompare(String(b[1])));
    const datFileName = `${tin}S${month}${year}.DAT`;
    const reportTypeShort = "Sales";
    const drivePath = [
        tin,
        reportTypeShort,
        year
    ];
    if (!overwrite) {
        const fileExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFileExists"])(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                success: false,
                fileExists: true,
                fileName: datFileName,
                datFile: null,
                datContent: null,
                error: null,
                errors: null,
                totalExempt: null,
                totalZeroRated: null,
                totalTaxableSales: null,
                totalOutputTax: null,
                totalServices: null,
                totalCapitalGoods: null,
                totalOtherGoods: null,
                totalInputTax: null,
                totalTaxableIncomePayment: null,
                totalExemptIncomePayment: null,
                totalWithholdingTax: null,
                processedData: null
            };
        }
    }
    const lastDayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFormattedLastDay"])(parseInt(year), parseInt(month));
    const address1 = [
        profile.subStreet,
        profile.street,
        profile.barangay
    ].filter(Boolean).join(' ');
    const address2 = [
        profile.cityMunicipality,
        profile.province,
        profile.zipCode
    ].filter(Boolean).join(' ');
    const detailRows = processedData.map((row)=>[
            'D',
            'S',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[0]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[1]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[6]),
            row[7],
            row[8],
            row[9],
            row[10],
            tin,
            lastDayDate
        ].join(',')).join('\n');
    const totalExempt = processedData.reduce((acc, row)=>acc + parseFloat(row[7]), 0);
    const totalZeroRated = processedData.reduce((acc, row)=>acc + parseFloat(row[8]), 0);
    const totalTaxableSales = processedData.reduce((acc, row)=>acc + parseFloat(row[9]), 0);
    const totalOutputTax = processedData.reduce((acc, row)=>acc + parseFloat(row[10]), 0);
    const headerRow = [
        'H',
        'S',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(tin),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.companyName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.lastName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.firstName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.middleName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.tradeName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(address1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(address2),
        totalExempt.toFixed(2),
        totalZeroRated.toFixed(2),
        totalTaxableSales.toFixed(2),
        totalOutputTax.toFixed(2),
        profile.rdoCode,
        lastDayDate,
        profile.monthSelect
    ].join(',');
    const datContent = `${headerRow}\n${detailRows}`;
    // Fire and forget
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFileToDrive"])(datFileName, datContent, folderId, drivePath, overwrite).then((uploadedFile)=>{
        console.log(`[Action:generateSalesDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch((err)=>{
        console.error(`[Action:generateSalesDatFile] Background upload failed for ${datFileName}:`, err);
    });
    return {
        success: true,
        datContent,
        fileName: datFileName,
        datFile: null,
        totalExempt,
        totalZeroRated,
        totalTaxableSales,
        totalOutputTax,
        error: null,
        errors: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateSalesDatFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateSalesDatFile, "7e73629853cb2ac71fe9d9846a3be48949a536b518", null);
}}),
"[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40ec90e33963869b9290334a9c5b5d388e94fad285":"createPurchasesDatFile","40f13033d8a880eee44dcd6a36e85bf2b57a5db135":"validateExcelForPurchases","7fdd7f0a57c12cc97156efdddc2f626c4bfdc61b87":"generatePurchasesDatFile"},"",""] */ __turbopack_context__.s({
    "createPurchasesDatFile": (()=>createPurchasesDatFile),
    "generatePurchasesDatFile": (()=>generatePurchasesDatFile),
    "validateExcelForPurchases": (()=>validateExcelForPurchases)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function validateExcelForPurchases(formData) {
    const file = formData.get('file');
    const profileString = formData.get('profile');
    const profile = JSON.parse(profileString);
    const { tpTIN: tin } = profile;
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    const { data: dataRows, validationErrors: fileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, "vat_purchases");
    if (fileErrors.length > 0) {
        return {
            ...defaultErrorResult,
            success: false,
            errors: fileErrors
        };
    }
    const validationErrors = [];
    const processedData = dataRows.map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
            if (sanitizedTin.substring(0, 9) === tin) validationErrors.push(`Row ${originalRowNumber}: The TIN matches the selected profile's TIN. A company cannot have a purchase from itself.`);
            if (sanitizedTin.length < 9) validationErrors.push(`Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be at least 9 digits.`);
            processedRow[0] = sanitizedTin.substring(0, 9);
        } else {
            validationErrors.push(`Row ${originalRowNumber}: TIN is missing.`);
        }
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 1,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 2,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Address 1',
                index: 5,
                maxLength: 30,
                required: true
            },
            {
                name: 'Address 2',
                index: 6,
                maxLength: 30,
                required: true
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], field.name, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const hasFirstName = String(processedRow[3]).trim().length > 0;
        const hasLastName = String(processedRow[2]).trim().length > 0;
        const hasMiddleName = String(processedRow[4]).trim().length > 0;
        if (hasFirstName && !hasLastName || !hasFirstName && hasLastName) validationErrors.push(`Row ${originalRowNumber}: First Name and Last Name must be provided together.`);
        if (hasMiddleName && (!hasFirstName || !hasLastName)) validationErrors.push(`Row ${originalRowNumber}: If Middle Name is provided, First Name and Last Name are also required.`);
        const numericFields = [
            {
                name: 'Exempt Purchases',
                index: 7
            },
            {
                name: 'Zero-Rated Purchases',
                index: 8
            },
            {
                name: 'Purchases of Services',
                index: 9
            },
            {
                name: 'Purchases of Capital Goods',
                index: 10
            },
            {
                name: 'Purchases of Other Goods',
                index: 11
            },
            {
                name: 'Input Tax',
                index: 12
            }
        ];
        numericFields.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[field.index], field.name, originalRowNumber);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        if (parseFloat(processedRow[7]) === 0 && parseFloat(processedRow[8]) === 0 && parseFloat(processedRow[9]) === 0 && parseFloat(processedRow[10]) === 0 && parseFloat(processedRow[11]) === 0) {
            validationErrors.push(`Row ${originalRowNumber}: At least one purchase amount must be greater than zero.`);
        }
        return processedRow;
    });
    if (validationErrors.length > 0) {
        return {
            ...defaultErrorResult,
            success: false,
            errors: validationErrors
        };
    }
    processedData.sort((a, b)=>String(a[1]).localeCompare(String(b[1])));
    const totalInputTax = processedData.reduce((acc, row)=>acc + parseFloat(row[12]), 0);
    return {
        ...defaultErrorResult,
        success: true,
        totalInputTax,
        processedData
    };
}
async function generatePurchasesDatFile(processedData, profile, month, year, nonCreditableInputTax, folderId, overwrite = false) {
    const { tpTIN: tin } = profile;
    const datFileName = `${tin}P${month}${year}.DAT`;
    const reportTypeShort = "Purchases";
    const drivePath = [
        tin,
        reportTypeShort,
        year
    ];
    if (!overwrite) {
        const fileExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFileExists"])(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                success: false,
                fileExists: true,
                fileName: datFileName,
                datFile: null,
                datContent: null,
                error: null,
                errors: null,
                totalExempt: null,
                totalZeroRated: null,
                totalTaxableSales: null,
                totalOutputTax: null,
                totalServices: null,
                totalCapitalGoods: null,
                totalOtherGoods: null,
                totalInputTax: null,
                totalTaxableIncomePayment: null,
                totalExemptIncomePayment: null,
                totalWithholdingTax: null,
                processedData: null
            };
        }
    }
    const lastDayDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFormattedLastDay"])(parseInt(year), parseInt(month));
    const address1 = [
        profile.subStreet,
        profile.street,
        profile.barangay
    ].filter(Boolean).join(' ');
    const address2 = [
        profile.cityMunicipality,
        profile.province,
        profile.zipCode
    ].filter(Boolean).join(' ');
    const detailRows = processedData.map((row)=>[
            'D',
            'P',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[0]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[1]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[6]),
            row[7],
            row[8],
            row[9],
            row[10],
            row[11],
            row[12],
            tin,
            lastDayDate
        ].join(',')).join('\n');
    const totalExempt = processedData.reduce((acc, row)=>acc + parseFloat(row[7]), 0);
    const totalZeroRated = processedData.reduce((acc, row)=>acc + parseFloat(row[8]), 0);
    const totalServices = processedData.reduce((acc, row)=>acc + parseFloat(row[9]), 0);
    const totalCapitalGoods = processedData.reduce((acc, row)=>acc + parseFloat(row[10]), 0);
    const totalOtherGoods = processedData.reduce((acc, row)=>acc + parseFloat(row[11]), 0);
    const totalInputTax = processedData.reduce((acc, row)=>acc + parseFloat(row[12]), 0);
    const creditableInputTax = totalInputTax - nonCreditableInputTax;
    const headerRow = [
        'H',
        'P',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(tin),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.companyName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.lastName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.firstName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.middleName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.tradeName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(address1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(address2),
        totalExempt.toFixed(2),
        totalZeroRated.toFixed(2),
        totalServices.toFixed(2),
        totalCapitalGoods.toFixed(2),
        totalOtherGoods.toFixed(2),
        totalInputTax.toFixed(2),
        creditableInputTax.toFixed(2),
        nonCreditableInputTax.toFixed(2),
        profile.rdoCode,
        lastDayDate,
        profile.monthSelect
    ].join(',');
    const datContent = `${headerRow}\n${detailRows}`;
    // Fire and forget
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFileToDrive"])(datFileName, datContent, folderId, drivePath, overwrite).then((uploadedFile)=>{
        console.log(`[Action:generatePurchasesDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch((err)=>{
        console.error(`[Action:generatePurchasesDatFile] Background upload failed for ${datFileName}:`, err);
    });
    return {
        success: true,
        datContent,
        fileName: datFileName,
        datFile: null,
        totalExempt,
        totalZeroRated,
        totalServices,
        totalCapitalGoods,
        totalOtherGoods,
        totalInputTax,
        error: null,
        errors: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
}
async function createPurchasesDatFile(formData) {
    const processedDataString = formData.get('processedData');
    const profileString = formData.get('profile');
    const month = formData.get('month');
    const year = formData.get('year');
    const nonCreditableInputTaxString = formData.get('nonCreditableInputTax');
    const folderId = formData.get('folderId');
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    if (!processedDataString || !profileString || !month || !year || nonCreditableInputTaxString === null || !folderId) {
        return {
            ...defaultErrorResult,
            error: 'Missing required parameters for purchase file creation.'
        };
    }
    try {
        const processedData = JSON.parse(processedDataString);
        const profile = JSON.parse(profileString);
        const nonCreditableInputTax = parseFloat(nonCreditableInputTaxString);
        return await generatePurchasesDatFile(processedData, profile, month, year, nonCreditableInputTax, folderId, false);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during DAT file creation.';
        console.error('[createPurchasesDatFile] CRITICAL ERROR:', e);
        return {
            ...defaultErrorResult,
            error: `Creation failed: ${errorMessage}`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    validateExcelForPurchases,
    generatePurchasesDatFile,
    createPurchasesDatFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateExcelForPurchases, "40f13033d8a880eee44dcd6a36e85bf2b57a5db135", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePurchasesDatFile, "7fdd7f0a57c12cc97156efdddc2f626c4bfdc61b87", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPurchasesDatFile, "40ec90e33963869b9290334a9c5b5d388e94fad285", null);
}}),
"[project]/src/lib/schedules.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "atcExempt": (()=>atcExempt),
    "atcWE": (()=>atcWE),
    "atcWF": (()=>atcWF),
    "atcWG": (()=>atcWG)
});
const atcWE = [
    {
        atc: 'WI010',
        rate: 5,
        description: 'Professionals (Lawyers, CPAs, Engineers, etc.)- If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI011',
        rate: 10,
        description: 'Professional (Lawyers, CPAs, Engineers, etc) - If gross Income is more than P3M or VAT Registered regardless of amount'
    },
    {
        atc: 'WI020',
        rate: 5,
        description: 'Professional entertainers, such as, but not limited to, actors and actresses, singers, lyricist, composers, emcees - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI021',
        rate: 10,
        description: 'Professional entertainers such as, but not limited to actors & actresses, singers, lyricists, composers, emcees - If gross Income is more than P3M or VAT Registered regardless of amount'
    },
    {
        atc: 'WI030',
        rate: 5,
        description: 'Professional athletes, including basketball players, pelotaris and jockeys - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI031',
        rate: 10,
        description: 'Professional athletes including basketball players, pelotaris and jockeys - If gross income is more than P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI040',
        rate: 5,
        description: 'All directors and producers involved in movies, stage, radio, television and musical productions - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI041',
        rate: 10,
        description: 'All directors and producers involved in movies, stage, radio, television and musical productions - If gross income is more than P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI050',
        rate: 5,
        description: 'Management and technical consultants - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI051',
        rate: 10,
        description: 'Management and technical consultants - If gross income is more than P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI060',
        rate: 5,
        description: 'Business and bookkeeping agents and agencies - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI061',
        rate: 10,
        description: 'Business and bookkeeping agents and agencies - If gross income is more that P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI070',
        rate: 5,
        description: 'Insurance agents and insurance adjusters - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI071',
        rate: 10,
        description: 'Insurance agents and insurance adjusters - If gross income is more than P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI080',
        rate: 5,
        description: 'Other recipients of talent fees - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI081',
        rate: 10,
        description: 'Other recipients of talent fees - If gross income is more than P3M or VAT Registered regardless of amount'
    },
    {
        atc: 'WI090',
        rate: 5,
        description: 'Fees of directors who are not employees of the company - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI091',
        rate: 10,
        description: 'Fees of directors who are not employees of the company - If gross income is more than P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI100',
        rate: 5,
        description: 'Rentals- real/personal properties, poles, satellites & transmission facilities, billboards - Individual'
    },
    {
        atc: 'WI110',
        rate: 5,
        description: 'Cinematographic film rentals - Individual'
    },
    {
        atc: 'WI120',
        rate: 2,
        description: 'Income payments to prime contractors/sub-contractors - Individual'
    },
    {
        atc: 'WI130',
        rate: 15,
        description: 'Income distribution to beneficiaries of estates and trusts'
    },
    {
        atc: 'WI139',
        rate: 5,
        description: 'Gross commission or service fees of custom, insurance, stock, real estate, immigration and commercial brokers & fees of agents of professional entertainers - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI140',
        rate: 10,
        description: 'Gross commission or service fees of custom, insurance, stock, real estate, immigration and commercial brokers & fees of agents of professional entertainers - If gross income is more than P3M or VAT Registered regardless of amount'
    },
    {
        atc: 'WI151',
        rate: 5,
        description: 'Payments for medical/dental/veterinary services thru Hospitals/ Clinics/Health Maintenance Organizations, including direct payments to service providers - If gross income for the current year did not exceed P3M'
    },
    {
        atc: 'WI150',
        rate: 10,
        description: 'Payments for medical/dental/veterinary services thru Hospitals/ Clinics/Health Maintenance Organizations, including direct payments to service providers - If gross income > P3M of VAT Registered regardless of amount'
    },
    {
        atc: 'WI152',
        rate: 10,
        description: 'Payment by the general professional partnerships (GPP) to its partners - If gross income for the current year did not exceed P720,000'
    },
    {
        atc: 'WI153',
        rate: 15,
        description: 'Payment by the General Professional Partnerships (GPPs) to its partners - If gross income exceeds P720,000'
    },
    {
        atc: 'WI156',
        rate: 0.5,
        description: 'Payments made by credit card companies - Individual'
    },
    {
        atc: 'WI159',
        rate: 15,
        description: 'Additional payments to government personnel from importers, shipping and airline companies or their agents for overtime services'
    },
    {
        atc: 'WI640',
        rate: 1,
        description: 'Income payments made by the government to its local/resident suppliers of goods - Individual'
    },
    {
        atc: 'WI157',
        rate: 2,
        description: 'Income payments made by the government to its local/resident suppliers of service - Individual'
    },
    {
        atc: 'WI158',
        rate: 1,
        description: 'Income payment made by top withholding agents to their local/resident supplier of goods other than those covered by other rates of withholding tax - Individual'
    },
    {
        atc: 'WI160',
        rate: 2,
        description: 'Income payment made by top withholding agents to their local/resident supplier of services other than those covered by other rates of withholding tax - Individual'
    },
    {
        atc: 'WI515',
        rate: 5,
        description: 'Commission, rebates, discounts & other similar considerations pd/granted to indepndnt & exclusive sales reps & mkting agents & sub-agents of multi-level marketing co. inc. multilevel mrkting co.- If gross income for the current yr did not exceed P3M'
    },
    {
        atc: 'WI516',
        rate: 10,
        description: 'Commission, rebates, discounts & other similar considerations pd/granted to indepndnt & exclusive sales reps & mkting agents & sub-agents of multi-level mktng co. inc. multilevel mrkting co.-if gross income > P3M or VAT Registered regardless of amt'
    },
    {
        atc: 'WI530',
        rate: 1,
        description: 'Gross payments to embalmers by funeral parlors'
    },
    {
        atc: 'WI535',
        rate: 1,
        description: 'Payments made by pre-need companies to funeral parlors - Individual'
    },
    {
        atc: 'WI540',
        rate: 5,
        description: 'Tolling fee paid to refineries - Individual'
    },
    {
        atc: 'WI610',
        rate: 1,
        description: 'Income payments made to suppliers of Agricultural products - Individual'
    },
    {
        atc: 'WI630',
        rate: 5,
        description: 'Income payments on purchases of minerals, mineral products & quarry resources - Individual'
    },
    {
        atc: 'WI632',
        rate: 1,
        description: 'Income payments on purchases of gold by Bangko Sentral ng Pilipinas (BSP) from gold miners/suppliers under PD 1899, as amended by R.A. No. 7076- Individual'
    },
    {
        atc: 'WI650',
        rate: 15,
        description: 'On gross amount of refund given by Meralco to customers with active contracts as classified by Meralco - Individual'
    },
    {
        atc: 'WI651',
        rate: 15,
        description: 'On gross amount of refund given by Meralco to customers with terminated contracts as classified by Meralco - Individual'
    },
    {
        atc: 'WI660',
        rate: 10,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - RESIDENTIAL AND GENERAL SERVICE CUSTOMERS WHOSE MONTHLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS C"
    },
    {
        atc: 'WI661',
        rate: 15,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTERST ONT HE REFIND OF METER DEPOSIT WHETER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - RESIDENTIAL AND GENERA; SERVICE CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS200 KWH AS CLASS"
    },
    {
        atc: 'WI662',
        rate: 10,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTERESTO N THE REFUND OF METER DEPOSIT WHETHEER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - RESIDENTIAL AND GENERAL SERVICE CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS CL"
    },
    {
        atc: 'WI663',
        rate: 15,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED CUSTOMER'S BILLING - NON - RESIDENTIAL CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS CLASSIFIED BY OTH"
    },
    {
        atc: 'WI680',
        rate: 5,
        description: 'INCOME PAYMENTS MADE BY POLITICAL PARTIES AND CANDIDATES OF LOCAL AND NATIONAL ELECTIONS OF ALL THEIR CAMPAIGN EXPENDITURES, AND INCOME PAYMENTS MADE BY INDIVIDUALS OR JURIDICAL PERSONS FOR THEIR PURCHASES OF GOODS AND SERVICES INTENDED TO BE GIVEN A'
    },
    {
        atc: 'WI710',
        rate: 15,
        description: 'INTEREST INCOME DERIVED FROM ANY OTHER DEBT INSTRUMENTS NOT WITHIN THE COVERAGE OF DEPOSIT SUBSTITUTES'
    },
    {
        atc: 'WI720',
        rate: 1,
        description: 'Income payments on locally produced raw sugar - Individual'
    },
    {
        atc: 'WI770',
        rate: 1,
        description: 'Income payments made by joint ventures, whether incorporated or not, taxable or non-taxable, to their local/resident supplier of goods'
    },
    {
        atc: 'WI780',
        rate: 2,
        description: 'Income payments made by joint ventures, whether incorporated or not, taxable or non-taxable, to their local/resident supplier of services'
    },
    {
        atc: 'WI820',
        rate: 0.5,
        description: 'On the gross remittances by e-marketplace operators to the sellers/merchants for the goods or services sold/paid through their platform/facility'
    },
    {
        atc: 'WI830',
        rate: 0.5,
        description: 'On the gross remittances by digital financial services providers to the sellers/merchants for the goods or services sold/paid through their platform/facility'
    },
    {
        atc: 'WC010',
        rate: 10,
        description: 'Professionals/ talent fees paid to juridical persons - If the current year’s gross income is P720,000 and below'
    },
    {
        atc: 'WC011',
        rate: 15,
        description: 'Professionals/ talent fees paid to juridical persons - If the current year’s gross income exceeds P 720,000'
    },
    {
        atc: 'WC020',
        rate: 10,
        description: 'Professional entertainers such as, but not limited to actors and actresses, singers, lyricists, composers, emcees - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC021',
        rate: 15,
        description: 'Professional entertainers such as, but not limited to actors and actresses, singers, lyricists, composers, emcees - - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC030',
        rate: 10,
        description: 'Professional athletes including basketball players, pelotaris and jockeys - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC031',
        rate: 15,
        description: 'Professional athletes including basketball players, pelotaris and jockeys -  - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC040',
        rate: 10,
        description: 'All directors and producers involved in movies, stage, radio, television and musical productions - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC041',
        rate: 15,
        description: 'All directors and producers involved in movies, stage, radio, television and musical productions - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC050',
        rate: 10,
        description: 'Management and technical consultants paid to juridical person - If the current year’s gross income is P 720,000 and below'
    },
    {
        atc: 'WC051',
        rate: 15,
        description: 'Management and technical consultants paid to juridical person - If the currents year’s gross income exceeds P720,000'
    },
    {
        atc: 'WC060',
        rate: 10,
        description: 'Business and bookkeeping agents and agencies - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC061',
        rate: 15,
        description: 'Business and bookkeeping agents and agencies - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC070',
        rate: 10,
        description: 'Insurance agents and insurance adjusters - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC071',
        rate: 15,
        description: 'Insurance agents and insurance adjusters - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC080',
        rate: 10,
        description: 'Other recipients of talent fees - If gross income for the current year did not exceed P 720,000'
    },
    {
        atc: 'WC081',
        rate: 15,
        description: 'Other recipients of talent fees - If gross income exceeds P 720,000'
    },
    {
        atc: 'WC100',
        rate: 5,
        description: 'Rentals- real/personal properties, poles, satellites & transmission facilities, billiboards - Corporate'
    },
    {
        atc: 'WC110',
        rate: 5,
        description: 'Cinematographic film rentals - Corporate'
    },
    {
        atc: 'WC120',
        rate: 2,
        description: 'Income payments to prime contractors/sub-contractors - Corporate'
    },
    {
        atc: 'WC139',
        rate: 10,
        description: 'Gross commission or service fees of custom, insurance, stock, real estate, immigration and commercial brokers & fees of agents of professional entertainers - if gross income did not exceed 720,000- Corporate'
    },
    {
        atc: 'WC140',
        rate: 15,
        description: 'Gross commission or service fees of custom, insurance, stock, real estate, immigration and commercial brokers & fees of agents of professional entertainers - if gross income exceeds 720,000- Corporate'
    },
    {
        atc: 'WC151',
        rate: 10,
        description: 'Professional fees paid to medical practitioners (inc.doctors of medicine doctors of veterinary sciences & dentists) by hospitals & clinics or paid directly by Health Maintenance Org (HMOs) &/or similar est - If gross income for the current yr < P720K'
    },
    {
        atc: 'WC150',
        rate: 15,
        description: 'Professional fees paid to medical practitioners (inc.doctors of medicine doctors of veterinary sciences & dentists) by hospitals & clinics or paid directly by Health Maintenance Org (HMOs) &/or similar est - If gross income exceeds P720K'
    },
    {
        atc: 'WC156',
        rate: 0.5,
        description: 'Payments made by credit card companies - Corporate'
    },
    {
        atc: 'WC640',
        rate: 1,
        description: 'Income payments made by the government to its local/resident suppliers of goods - Corporate'
    },
    {
        atc: 'WC157',
        rate: 2,
        description: 'Income payments made by the government to its local/resident suppliers of services - Corporate'
    },
    {
        atc: 'WC158',
        rate: 1,
        description: 'Income payment made by top withholding agents to their local/resident supplier of goods other than those covered by other rates of withholding tax - Corporate'
    },
    {
        atc: 'WC160',
        rate: 2,
        description: 'Income payment made by top withholding agents to their local/resident supplier of services other than those covered by other rates of withholding tax - Corporate'
    },
    {
        atc: 'WC535',
        rate: 1,
        description: 'Payments made by pre-need companies to funeral parlors - Corporate'
    },
    {
        atc: 'WC540',
        rate: 5,
        description: 'Tolling fee paid to refineries - Corporate'
    },
    {
        atc: 'WC610',
        rate: 1,
        description: 'Income payments made to suppliers of Agricultural products - Corporate'
    },
    {
        atc: 'WC630',
        rate: 5,
        description: 'Income payments on purchases of minerals, mineral products & quarry resources - Corporate'
    },
    {
        atc: 'WC632',
        rate: 1,
        description: 'Income payments on purchases of gold by Bangko Sentral ng Pilipinas (BSP) from gold miners/suppliers under PD 1899, as amended by R.A. No. 7076- Corporate'
    },
    {
        atc: 'WC650',
        rate: 15,
        description: 'On gross amount of refund given by Meralco to customers with active contracts as classified by Meralco - Corporate'
    },
    {
        atc: 'WC651',
        rate: 15,
        description: 'On gross amount of refund given by Meralco to customers with terminated contracts as classified by Meralco - Corporate'
    },
    {
        atc: 'WC660',
        rate: 10,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - RESIDENTIAL AND GENERAL SERVICE CUSTOMERS WHOSE MONTHLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS C"
    },
    {
        atc: 'WC661',
        rate: 15,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - NON - RESIDENTIAL CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS CLASSIFIED BY ME"
    },
    {
        atc: 'WC662',
        rate: 10,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHEER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED AGAINST CUSTOMER'S BILLING - RESIDENTIAL AND GENERAL SERVICE CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS C"
    },
    {
        atc: 'WC663',
        rate: 15,
        description: "WITHHOLDING ON GROSS AMOUNT OF INTEREST ON THE REFUND OF METER DEPOSIT WHETHER PAID DIRECTLY TO THE CUSTOMERS OR APPLIED CUSTOMER'S BILLING - NON - RESIDENTIAL CUSTOMERS WHOSE MONTLY ELECTRICITY CONSUMPTION EXCEEDS 200 KWH AS CLASSIFIED BY OTHER ELEC"
    },
    {
        atc: 'WC680',
        rate: 5,
        description: 'INCOME PAYMENTS MADE BY POLITICAL PARTIES AND CANDIDATES OF LOCAL AND NATIONAL ELECTIONS OF ALL THEIR CAMPAIGN EXPENDITURES, AND INCOME PAYMENTS MADE BY INDIVIDUALS OR JURIDICAL PERSONS FOR THEIR PURCHASES OF GOODS AND SERVICES INTENDED TO BE GIVEN A'
    },
    {
        atc: 'WC690',
        rate: 1,
        description: 'Income payments received by Real Estate Investment Trust (REIT)'
    },
    {
        atc: 'WC710',
        rate: 15,
        description: 'INTEREST INCOME DERIVED FROM ANY OTHER DEBT INSTRUMENTS NOT WITHIN THE COVERAGE OF DEPOSIT SUBSTITUTES'
    },
    {
        atc: 'WC720',
        rate: 1,
        description: 'Income payments on locally produced raw sugar - Corporation'
    },
    {
        atc: 'WC770',
        rate: 1,
        description: 'Income payments made by joint ventures, whether incorporated or not, taxable or non-taxable, to their local/resident supplier of goods'
    },
    {
        atc: 'WC780',
        rate: 2,
        description: 'Income payments made by joint ventures, whether incorporated or not, taxable or non-taxable, to their local/resident supplier of services'
    },
    {
        atc: 'WC790',
        rate: 15,
        description: 'On the share of each co-venturer/member from the net income of the joint venture/consortium not taxable as corporation prior to actual or constructive distribution thereof'
    },
    {
        atc: 'WC820',
        rate: 0.5,
        description: 'On the gross remittances by e-marketplace operators to the sellers/merchants for the goods or services sold/paid through their platform/facility'
    },
    {
        atc: 'WC830',
        rate: 0.5,
        description: 'On the gross remittances by digital financial services providers to the sellers/merchants for the goods or services sold/paid through their platform/facility'
    }
];
const atcExempt = [
    {
        atc: 'MC040',
        rate: 0,
        description: 'INCOME FROM FORFEITED PROPERTIES'
    },
    {
        atc: 'MC030',
        rate: 0,
        description: 'COMP. PYMTS ON DELQNT. ACCOUNTS & DISP. ASSESSMENTS'
    },
    {
        atc: 'MC021',
        rate: 0,
        description: 'CORPORATE TAXPAYERS'
    },
    {
        atc: 'MC020',
        rate: 0,
        description: 'TAX AMNESTY ON INCOME (CORPORATE)'
    },
    {
        atc: 'MC011',
        rate: 0,
        description: 'INDIVIDUAL TAXPAYERS'
    },
    {
        atc: 'MC010',
        rate: 0,
        description: 'TAX AMNESTY ON INCOME (INDIVIDUAL)'
    },
    {
        atc: 'II420',
        rate: 0,
        description: 'CGT ON SALE OF REAL PROPERTY (CAPITAL ASSETS) FOR INDIV'
    },
    {
        atc: 'II130',
        rate: 0,
        description: 'PARTNERS DISTRIB SHARE OF NET INC OF GEN PARTNERSHIP'
    },
    {
        atc: 'II120',
        rate: 0,
        description: 'PRIZES AMOUNTING TO: 10,000 OR LESS'
    },
    {
        atc: 'II110',
        rate: 0,
        description: 'INTEREST - (INDIVIDUAL PAYEES)'
    },
    {
        atc: 'II090',
        rate: 0,
        description: 'TRANSPO CONTR (INDIVIDUAL)  CARRIAGE OF GOODS AND MERCHDSE BELOW 2,000'
    },
    {
        atc: 'II080',
        rate: 0,
        description: 'OTHERS (SPECIFY) - (INDIVIDUAL PAYEES)'
    },
    {
        atc: 'II070',
        rate: 0,
        description: 'PENSIONS'
    },
    {
        atc: 'II060',
        rate: 0,
        description: 'PREMIUM AND ANNUITY - (INDIVIDUAL PAYEES)'
    },
    {
        atc: 'II051',
        rate: 0,
        description: 'RENT - PERSONAL PROPERTY REGARDLESS OF  AMOUNT (INDIVIDUAL)'
    },
    {
        atc: 'II050',
        rate: 0,
        description: 'RENT FOR REAL PROPERTY BELOW P500 MONTH (USED IN BUSINESS)'
    },
    {
        atc: 'II020',
        rate: 0,
        description: 'NRC INCOME'
    },
    {
        atc: 'II013',
        rate: 0,
        description: 'ESTATES AND TRUST -MIXED INCOME'
    },
    {
        atc: 'II012',
        rate: 0,
        description: 'RESIDENT ALIEN - PURE BUSINESS'
    },
    {
        atc: 'II011',
        rate: 0,
        description: 'PURE COMPENSATION INCOME -CITIZENS'
    },
    {
        atc: 'II010',
        rate: 0,
        description: 'INCOME FROM COMP. ANDBUS./PROF'
    },
    {
        atc: 'IC370',
        rate: 0,
        description: 'ON IMPROPERLY ACCUMULATED EARNINGS TAX'
    },
    {
        atc: 'IC191',
        rate: 0,
        description: 'FOREIGN CURRENCY DEPOSIT UNITS (FCDUS)'
    },
    {
        atc: 'IC190',
        rate: 0,
        description: 'OFFSHORE BANKING UNITS (OBUS)'
    },
    {
        atc: 'IC170',
        rate: 0,
        description: 'INTEREST - (CORPORATE PAYEES)'
    },
    {
        atc: 'IC160',
        rate: 0,
        description: 'TRANSPO CONTR (CORPORATE) CARRIAGE OF GOODS AND MERCHDSE BELOW P2000'
    },
    {
        atc: 'IC150',
        rate: 0,
        description: 'OTHERS (SPECIFY) - (CORPORATE PAYEES)'
    },
    {
        atc: 'IC140',
        rate: 0,
        description: 'PREMIUM AND ANNUITY - (CORPORATE PAYEES)'
    },
    {
        atc: 'IC130',
        rate: 0,
        description: 'RENT - PERSONAL PROPERTY REGARDLESS OF AMOUNT (CORPORATE)'
    },
    {
        atc: 'IC120',
        rate: 0,
        description: 'PRIZES REGARDLESS OF AMOUNT'
    },
    {
        atc: 'IC101',
        rate: 0,
        description: 'REGIONAL OPERATING HEADQUARTERS OF MULTINATIONAL COMP'
    },
    {
        atc: 'IC100',
        rate: 0,
        description: 'FOREIGN OBU/FCDU'
    },
    {
        atc: 'IC090',
        rate: 0,
        description: 'FOREIGN MUTUAL LIFE INSURANCE CO.'
    },
    {
        atc: 'IC080',
        rate: 0,
        description: 'RFC -INTERNATIONAL CARRIERS'
    },
    {
        atc: 'IC070',
        rate: 0,
        description: 'ORDINARY RESIDENT FOREIGN CORP.'
    },
    {
        atc: 'IC060',
        rate: 0,
        description: 'INCOME TAX -FCDU'
    },
    {
        atc: 'IC055',
        rate: 0,
        description: 'MINIMUM CORPORATE INCOME TAX'
    },
    {
        atc: 'IC050',
        rate: 0,
        description: 'INCOME TAX - MUTUAL LIFE INSURANCE COMPANIES'
    },
    {
        atc: 'IC041',
        rate: 0,
        description: 'NATL & LOC GOVT UNITS (FOR PROPRIETARY ACTVTIES) EXCEPT PUBS'
    },
    {
        atc: 'IC040',
        rate: 0,
        description: 'GOVT OWNED OR CONTROLLED CORP'
    },
    {
        atc: 'IC031',
        rate: 0,
        description: 'NON STOCK, NON PROFIT HOSPITALS'
    },
    {
        atc: 'IC030',
        rate: 0,
        description: 'PRIVATE EDUC INST, STOCK OR NON STOCK'
    },
    {
        atc: 'IC021',
        rate: 0,
        description: 'PROFNL FEES PAID TO GEN PROF PARTNRSHIPS (EXCEPT TO PARTNRSHP OF MED)'
    },
    {
        atc: 'IC020',
        rate: 0,
        description: 'PARTNERSHIP IN TRADE INCOME TAX'
    },
    {
        atc: 'IC011',
        rate: 0,
        description: 'NON-STOCK NON-PROFIT ORGANIZATION'
    },
    {
        atc: 'IC010',
        rate: 0,
        description: 'INCOME TAX- ORDINARY DOMESTIC CORP.'
    },
    {
        atc: 'FP010',
        rate: 0,
        description: 'FINES & PEN.- ON TAX ON INCOME'
    },
    {
        atc: 'EI900',
        rate: 0,
        description: 'EXCESS INCOME TAX'
    },
    {
        atc: 'DI900',
        rate: 0,
        description: 'DEFAULT INCOME TAX'
    }
];
const atcWG = [
    {
        atc: 'WV010',
        rate: 5,
        description: 'FWVAT on payments for purchases of Goods'
    },
    {
        atc: 'WV020',
        rate: 5,
        description: 'FWVAT on payments for purchases of Services'
    },
    {
        atc: 'WV040',
        rate: 12,
        description: 'Lease or use of properties or property rights owned by non-residents (Government Withholding Agent)'
    },
    {
        atc: 'WV050',
        rate: 12,
        description: 'Lease or use of properties or property rights owned by non-residents (Private Withholding Agent)'
    },
    {
        atc: 'WV060',
        rate: 12,
        description: 'Other services rendered in the Philippines by non-residents (Government Withholding Agent)'
    },
    {
        atc: 'WV070',
        rate: 12,
        description: 'Other services rendered in the Philippines by non-residents (Private Withholding Agent)'
    },
    {
        atc: 'WB030',
        rate: 3,
        description: 'Tax on carriers and keepers of garages'
    },
    {
        atc: 'WB040',
        rate: 2,
        description: 'Franchise Tax on Gas and Water Utilities'
    },
    {
        atc: 'WB050',
        rate: 3,
        description: 'Franchise Tax on radio & TV broadcasting companies whose annual gross receipts does not exceed P10M & who are not VAT registered taxpayers'
    },
    {
        atc: 'WB070',
        rate: 2,
        description: 'Tax on life insurance premiums'
    },
    {
        atc: 'WB080',
        rate: 3,
        description: 'Persons exempt from VAT under Sec. 109(v) (creditable)-Government Withholding Agent'
    },
    {
        atc: 'WB090',
        rate: 10,
        description: 'Tax on overseas dispatch, message or conversation originating from the Philippines'
    },
    {
        atc: 'WB301',
        rate: 5,
        description: 'Tax on Banks and Non-Bank Financial Internediaries Performing Quasi-Banking Functions. On interest, commissions and discounts from lending activities as well as income from financial leasing, on the basis of remaining maturities of instruments fr'
    },
    {
        atc: 'WB303',
        rate: 1,
        description: 'Tax on Banks and Non-Bank Financial Intermediaries Performing Quasi-Banking Functions. On interest, commissions and discounts from lending activities as well as income from financial leasing, on the basis of remaining maturities of instruments f'
    },
    {
        atc: 'WB102',
        rate: 0,
        description: 'Tax on Banks and Non-Bank Financial Intermediaries Performing Quasi-Banking Functions. On dividends and equity shares and net income of subsidiaries'
    },
    {
        atc: 'WB103',
        rate: 7,
        description: 'Tax on Banks and Non-Bank Financial Intermediaries Performing Quasi-Banking Functions. On royalties, rentals of property, real or personal, profits from exchange and all other items treated as gross income under the Code'
    },
    {
        atc: 'WB104',
        rate: 7,
        description: 'Tax on Banks and Non-Bank Financial Intermediaries Perfoming Quasi-Banking Functions. On the net trading gains within the taxable year on foreign currency, debt securities, derivatives, and other similar financial instruments'
    },
    {
        atc: 'WB108',
        rate: 5,
        description: 'Tax on Other Non-Banks Financial Intermediaries Not Performing Quasi-Banking Functions. On interest, commissions and discounts from lending activities as well as income from financial leasing, on the basis of the remaining maturities of instrument f'
    },
    {
        atc: 'WB109',
        rate: 1,
        description: 'Tax on Other Non-Banks Financial Intermediaries Not Performing Quasi-Banking Functions. On interest, commissions and discounts from lending activities as well as income from financial leasing, on the basis of the remaining maturities of instrument f'
    },
    {
        atc: 'WB110',
        rate: 5,
        description: 'Tax on Other Non-Banks Financial Intermediaries Not Performing Quasi-Banking Functions. On all other items treated as gross income under the Code'
    },
    {
        atc: 'WB120',
        rate: 4,
        description: 'Business Tax on Agents of foreign insurance co. - insurance agents'
    },
    {
        atc: 'WB121',
        rate: 5,
        description: 'Business Tax on Agents of foreign insurance co. - owner of the property'
    },
    {
        atc: 'WB130',
        rate: 3,
        description: 'Tax on International Carriers'
    },
    {
        atc: 'WB140',
        rate: 18,
        description: 'Tax on cockpits'
    },
    {
        atc: 'WB150',
        rate: 18,
        description: 'Tax on cabarets, night and day clubs'
    },
    {
        atc: 'WB160',
        rate: 10,
        description: 'Tax on boxing exhibitions'
    },
    {
        atc: 'WB170',
        rate: 15,
        description: 'Tax on professional basketball games'
    },
    {
        atc: 'WB180',
        rate: 30,
        description: 'Tax on jai-alai & race tracks'
    },
    {
        atc: 'WB200',
        rate: 0.6,
        description: 'Tax on sale, barter or exchange of shares of stocks listed and traded through the Local Stock Exchange'
    },
    {
        atc: 'WB201',
        rate: 4,
        description: 'Tax on shares of stock sold or exchanged through initial and secondary public offering - Not over 25%'
    },
    {
        atc: 'WB202',
        rate: 2,
        description: 'Tax on shares of stock sold or exchanged through initial and secondary public offering - Over 25% but not exceeding 33 1/3%'
    },
    {
        atc: 'WB203',
        rate: 1,
        description: 'Tax on shares of stock sold or exchanged through initial and secondary public offering - Over 33 1/3%'
    },
    {
        atc: 'WV012',
        rate: 12,
        description: 'VAT Withholding on Purchase of Goods (with waiver of privilege to claim input tax credit (creditable)'
    },
    {
        atc: 'WV014',
        rate: 12,
        description: 'Vat Withholding on Purchase of Goods (with waiver of privilege to claim input tax credit (final)'
    },
    {
        atc: 'WV022',
        rate: 12,
        description: 'VAT Withholding on Purchase of Services (with waiver of privilege to claim input tax credit (creditable)'
    },
    {
        atc: 'WV024',
        rate: 12,
        description: 'VAT Withholding on Purchase of Services (with waiver of privilege to claim input tax credit (final)'
    },
    {
        atc: 'WB082',
        rate: 3,
        description: 'Persons exempt from VAT under Section 109v (creditable) - Private Withholding Agent'
    },
    {
        atc: 'WB084',
        rate: 3,
        description: 'Persons exempt from VAT under Section 109v (final)'
    },
    {
        atc: 'PT320',
        rate: 5,
        description: 'Gaming Tax'
    }
];
const atcWF = [
    {
        atc: 'WC180',
        rate: 20,
        description: 'Interest on foreign loans payable to non-resident foreign corporations (NRFCs)'
    },
    {
        atc: 'WC190',
        rate: 10,
        description: 'Interest and other income payments on foreign currency transactions/loans payable to OBUs'
    },
    {
        atc: 'WC191',
        rate: 10,
        description: 'Interest and other income payments on foreign currency transactions/loans payable to FCDUs'
    },
    {
        atc: 'WI202',
        rate: 10,
        description: 'Cash dividend payments by domestic corporation to citizens and resident aliens'
    },
    {
        atc: 'WI203',
        rate: 10,
        description: 'Property dividend payments by domestic corporation to citizens and resident aliens'
    },
    {
        atc: 'WC212',
        rate: 25,
        description: 'Cash dividend payment by domestic corporation to Non-Resident Foreign Corporations'
    },
    {
        atc: 'WC213',
        rate: 25,
        description: 'Property dividend payment by domestic corporation to Non-Resident Foreign Corporations'
    },
    {
        atc: 'WC222',
        rate: 15,
        description: 'Cash dividend payment by domestic corporation to Non-Resident Foreign Corporations whose countries allowed tax deemed paid credit (subject to tax sparing rule)'
    },
    {
        atc: 'WC223',
        rate: 15,
        description: 'Property dividend payment by domestic corporation to Non-Resident Foreign Corporations whose countries allowed tax deemed paid credit (subject to tax sparing rule)'
    },
    {
        atc: 'WI224',
        rate: 20,
        description: 'Cash dividend payment by domestic corporation to non-resident alien engaged in trade or business (NRAETB)'
    },
    {
        atc: 'WI225',
        rate: 20,
        description: 'Property  dividend payment by domestic corporation to non-resident alien engaged in trade or business (NRAETB)'
    },
    {
        atc: 'WI226',
        rate: 20,
        description: 'Share of a NRAETB in the distributable net income after tax of a partnership (except GPP) of which he is a partner, or share in the net income after tax of an association,  joint account, or a joint venture taxable as a corporation of which he is a m'
    },
    {
        atc: 'WC230',
        rate: 25,
        description: 'On other payments to non-resident foreign  corporations (NRFCs)'
    },
    {
        atc: 'WI240',
        rate: 10,
        description: 'Distributive share of individual partners in a taxable partnerships, association,  joint account, or joint venture or consortium'
    },
    {
        atc: 'WI250',
        rate: 20,
        description: 'All kinds of royalty payments to citizens, resident aliens and non-resident aliens engaged in trade or business (other than WI 380 and WI 341)'
    },
    {
        atc: 'WC250',
        rate: 20,
        description: 'All kinds of royalty payments to domestic and resident foreign corporation'
    },
    {
        atc: 'WI260',
        rate: 20,
        description: 'On prizes exceeding P10,000 and other winnings paid to individuals'
    },
    {
        atc: 'WC280',
        rate: 15,
        description: 'Branch profit remittances by all  corporations except PEZA/SBMA/CDA registered'
    },
    {
        atc: 'WC290',
        rate: 4.5,
        description: 'On gross rentals, lease and charter fees derived by non-resident owner or lessor of foreign vessels'
    },
    {
        atc: 'WC300',
        rate: 7.5,
        description: 'On the gross rentals, lease and charter fees derived by non-resident lessor of aircraft, machineries and other equipment'
    },
    {
        atc: 'WI310',
        rate: 8,
        description: 'On payments to oil exploration service contractors and subcontractors (OESS) - Individual (NRAETB)'
    },
    {
        atc: 'WC310',
        rate: 8,
        description: 'On payments to oil exploration service contractors and subcontractors (OESS) - Corporate (non-resident foreign corporation engage in trade or business)'
    },
    {
        atc: 'WI320',
        rate: 0,
        description: 'Payments to Filipinos or alien individuals employed by Foreign Petroleum Service Contractors/Subcontractors, Offshore Banking Units and Regional or Area Headquarters and Regional Operating Headquarters of Multinational Companies occupying executive/m'
    },
    {
        atc: 'WI330',
        rate: 25,
        description: 'Payments to NRANETB except on sale of shares in domestic corporation and real property'
    },
    {
        atc: 'WI340',
        rate: 25,
        description: 'On payments to non-resident individual  cinematographic film  owners, lessors or distributors'
    },
    {
        atc: 'WC340',
        rate: 25,
        description: 'On payments to foreign corporate cinematographic film  owners, lessors or distributors'
    },
    {
        atc: 'WI341',
        rate: 25,
        description: 'Royalties paid to NRAETB on cinematographic films and similar works'
    },
    {
        atc: 'WI350',
        rate: 30,
        description: 'Final tax on interest or other  payments  upon tax-free covenant bonds, mortgages,  deeds of trust or other obligations under Sec. 57C of the NIRC of 1997'
    },
    {
        atc: 'WI380',
        rate: 10,
        description: 'Royalties paid to citizens, resident aliens and NRAETB on books, other literary works and musical composition'
    },
    {
        atc: 'WI410',
        rate: 10,
        description: 'Informer\'s cash reward paid to individuals'
    },
    {
        atc: 'WC410',
        rate: 10,
        description: 'Informer\'s cash reward paid to juridical persons'
    },
    {
        atc: 'WF330',
        rate: 25,
        description: 'Payment of fringe benefits to Non-Resident Alien Not Engaged in Trade or Business (NRAETB)'
    },
    {
        atc: 'WF360',
        rate: 35,
        description: 'Employees other than rank and file (Fringe Benefit Tax)  based on the grossed up monetary value'
    },
    {
        atc: 'WC700',
        rate: 10,
        description: 'Cash or property dividend paid by a Real Estate Investment Trust (REIT) - Corporate'
    },
    {
        atc: 'WI700',
        rate: 10,
        description: 'Cash or property dividend paid by a Real Estate Investment Trust (REIT) - Individual'
    },
    {
        atc: 'WI740',
        rate: 25,
        description: 'Final Withholding Tax on Foreign Nationals Employed by POGO Entities'
    },
    {
        atc: 'WI750',
        rate: 0,
        description: 'On gross income earned by foreign nationals or non-Filipino citizens, regardless of their residency, who are employed and assigned in the Philippines by Offshore Gaming Licensee or its Accredited Service Provider'
    }
];
}}),
"[project]/src/lib/actions/dat/1601eq.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7eb677ceab06ed87a747767ef9a1d1c158be70fd8b":"generate1601EQDatFile"},"",""] */ __turbopack_context__.s({
    "generate1601EQDatFile": (()=>generate1601EQDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schedules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generate1601EQDatFile(file, profile, month, year, folderId, overwrite = false) {
    const { tpTIN: tin, branchCode } = profile;
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    const { data: sched1DataRows, validationErrors: sched1FileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, "1601EQ_sched1");
    if (sched1FileErrors.length > 0) return {
        ...defaultErrorResult,
        errors: sched1FileErrors
    };
    const { data: sched2DataRows, validationErrors: sched2FileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, "1601EQ_sched2");
    if (sched2FileErrors.length > 0) return {
        ...defaultErrorResult,
        errors: sched2FileErrors
    };
    const sched1HasData = sched1DataRows.some((row)=>row.some((cell)=>String(cell).trim() !== ''));
    const sched2HasData = sched2DataRows.some((row)=>row.some((cell)=>String(cell).trim() !== ''));
    if (!sched1HasData && !sched2HasData) {
        return {
            ...defaultErrorResult,
            errors: [
                "No data found in Schedule 1 or Schedule 2 sheets."
            ]
        };
    }
    const validationErrors = [];
    // Process Schedule 1 (Taxable)
    const processedSched1Data = sched1DataRows.filter((row)=>row.some((cell)=>String(cell).trim() !== '')).map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
            if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`Schedule 1 Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
            processedRow[0] = sanitizedTin;
        } else {
            processedRow[0] = '';
        }
        let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
        processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 2,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 5,
                maxLength: 30,
                required: false
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], `Schedule 1 ${field.name}`, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        processedRow[6] = atc;
        const numericFields = [
            {
                name: 'Rate',
                index: 7
            },
            {
                name: 'Income Payment',
                index: 8
            },
            {
                name: 'Withholding Tax',
                index: 9
            }
        ];
        numericFields.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[field.index], `Schedule 1 ${field.name}`, originalRowNumber);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        if (atc) {
            const atcData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atcWE"].find((item)=>item.atc === atc);
            if (atcData) {
                if (parseFloat(processedRow[7]) !== atcData.rate) {
                    validationErrors.push(`Schedule 1 Row ${originalRowNumber}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[7])}%.`);
                }
            } else {
                validationErrors.push(`Schedule 1 Row ${originalRowNumber}: ATC code '${atc}' is not valid for Schedule 1.`);
            }
        } else validationErrors.push(`Schedule 1 Row ${originalRowNumber}: ATC code is missing.`);
        return processedRow;
    });
    // Process Schedule 2 (Exempt)
    const processedSched2Data = sched2DataRows.filter((row)=>row.some((cell)=>String(cell).trim() !== '')).map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
            if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`Schedule 2 Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
            processedRow[0] = sanitizedTin;
        } else {
            processedRow[0] = '';
        }
        let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
        processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 2,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 5,
                maxLength: 30,
                required: false
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], `Schedule 2 ${field.name}`, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        processedRow[6] = atc;
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[7], `Schedule 2 Income Payment`, originalRowNumber);
        if (result.error) validationErrors.push(result.error);
        processedRow[7] = result.value;
        if (atc) {
            const atcData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atcExempt"].find((item)=>item.atc === atc);
            if (!atcData) validationErrors.push(`Schedule 2 Row ${originalRowNumber}: ATC code '${atc}' is not valid for Schedule 2.`);
        } else validationErrors.push(`Schedule 2 Row ${originalRowNumber}: ATC code is missing.`);
        return processedRow;
    });
    if (validationErrors.length > 0) return {
        ...defaultErrorResult,
        errors: validationErrors
    };
    // All validations passed, now check for existing file
    const datFileName = `${tin}${branchCode}${month.padStart(2, '0')}${year}1601EQ.DAT`;
    const reportTypeShort = "1601EQ";
    const drivePath = [
        tin,
        reportTypeShort,
        year
    ];
    if (!overwrite) {
        const fileExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFileExists"])(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                ...defaultErrorResult,
                success: false,
                fileExists: true,
                fileName: datFileName
            };
        }
    }
    processedSched1Data.sort((a, b)=>String(a[2]).localeCompare(String(b[2])));
    processedSched2Data.sort((a, b)=>String(a[2]).localeCompare(String(b[2])));
    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;
    let datContentParts = [];
    // Header Row
    const taxpayerName = profile.entityType === 'Individual' ? `${profile.lastName} ${profile.firstName} ${profile.middleName}` : profile.companyName;
    const mainHeader = [
        'HQAP',
        'H1601EQ',
        profile.tpTIN,
        profile.branchCode,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(taxpayerName),
        reportingPeriod,
        profile.rdoCode
    ].join(',');
    datContentParts.push(mainHeader);
    let totalTaxableIncomePayment = 0;
    let totalWithholdingTax = 0;
    let totalExemptIncomePayment = 0;
    // Schedule 1 Content
    if (processedSched1Data.length > 0) {
        const detailRows1 = processedSched1Data.map((row, index)=>[
                'D1',
                '1601EQ',
                index + 1,
                row[0],
                row[1],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
                reportingPeriod,
                row[6],
                row[7],
                row[8],
                row[9]
            ].join(',')).join('\n');
        totalTaxableIncomePayment = processedSched1Data.reduce((acc, row)=>acc + parseFloat(row[8]), 0);
        totalWithholdingTax = processedSched1Data.reduce((acc, row)=>acc + parseFloat(row[9]), 0);
        const footerRow1 = [
            'C1',
            '1601EQ',
            profile.tpTIN,
            profile.branchCode,
            reportingPeriod,
            totalTaxableIncomePayment.toFixed(2),
            totalWithholdingTax.toFixed(2)
        ].join(',');
        datContentParts.push(detailRows1, footerRow1);
    }
    // Schedule 2 Content
    if (processedSched2Data.length > 0) {
        const detailRows2 = processedSched2Data.map((row, index)=>[
                'D2',
                '1601EQ',
                index + 1,
                row[0],
                row[1],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
                reportingPeriod,
                row[6],
                row[7]
            ].join(',')).join('\n');
        totalExemptIncomePayment = processedSched2Data.reduce((acc, row)=>acc + parseFloat(row[7]), 0);
        const footerRow2 = [
            'C2',
            '1601EQ',
            profile.tpTIN,
            profile.branchCode,
            reportingPeriod,
            totalExemptIncomePayment.toFixed(2)
        ].join(',');
        datContentParts.push(detailRows2, footerRow2);
    }
    const datContent = datContentParts.join('\n');
    // Fire and forget
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFileToDrive"])(datFileName, datContent, folderId, drivePath, overwrite).then((uploadedFile)=>{
        console.log(`[Action:generate1601EQDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch((err)=>{
        console.error(`[Action:generate1601EQDatFile] Background upload failed for ${datFileName}:`, err);
    });
    return {
        ...defaultErrorResult,
        success: true,
        datContent,
        fileName: datFileName,
        datFile: null,
        totalTaxableIncomePayment,
        totalExemptIncomePayment,
        totalWithholdingTax
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generate1601EQDatFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generate1601EQDatFile, "7eb677ceab06ed87a747767ef9a1d1c158be70fd8b", null);
}}),
"[project]/src/lib/actions/dat/1601fq.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7e8a62aa37bb89e9dc691b0ed284c5e46c55c544f0":"generate1601FQDatFile"},"",""] */ __turbopack_context__.s({
    "generate1601FQDatFile": (()=>generate1601FQDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schedules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function generate1601FQDatFile(file, profile, month, year, folderId, overwrite = false) {
    const { tpTIN: tin, branchCode } = profile;
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    // For now, only process schedule 1
    const { data: sched1DataRows, validationErrors: sched1FileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, "1601FQ_sched1");
    if (sched1FileErrors.length > 0) return {
        ...defaultErrorResult,
        errors: sched1FileErrors
    };
    const sched1HasData = sched1DataRows.some((row)=>row.some((cell)=>String(cell).trim() !== ''));
    if (!sched1HasData) {
        return {
            ...defaultErrorResult,
            errors: [
                "No data found in 1601FQ_sched1 sheet."
            ]
        };
    }
    const validationErrors = [];
    // Process Schedule 1
    const processedSched1Data = sched1DataRows.filter((row)=>row.some((cell)=>String(cell).trim() !== '')).map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
            if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`Schedule 1 Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
            processedRow[0] = sanitizedTin;
        } else {
            processedRow[0] = '';
        }
        let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
        processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 2,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 5,
                maxLength: 30,
                required: false
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], `Schedule 1 ${field.name}`, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        processedRow[6] = atc;
        const numericFields = [
            {
                name: 'Rate',
                index: 7
            },
            {
                name: 'Income Payment',
                index: 8
            },
            {
                name: 'Withholding Tax',
                index: 9
            }
        ];
        numericFields.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[field.index], `Schedule 1 ${field.name}`, originalRowNumber);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        if (atc) {
            const atcData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atcWF"].find((item)=>item.atc === atc);
            if (atcData) {
                if (parseFloat(processedRow[7]) !== atcData.rate) {
                    validationErrors.push(`Schedule 1 Row ${originalRowNumber}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[7])}%.`);
                }
            } else {
                validationErrors.push(`Schedule 1 Row ${originalRowNumber}: ATC code '${atc}' is not valid for Schedule 1.`);
            }
        } else validationErrors.push(`Schedule 1 Row ${originalRowNumber}: ATC code is missing.`);
        return processedRow;
    });
    if (validationErrors.length > 0) return {
        ...defaultErrorResult,
        errors: validationErrors
    };
    // Sort by registered name
    processedSched1Data.sort((a, b)=>String(a[2]).localeCompare(String(b[2])));
    const totalTaxableIncomePayment = processedSched1Data.reduce((acc, row)=>acc + parseFloat(row[8]), 0);
    const totalWithholdingTax = processedSched1Data.reduce((acc, row)=>acc + parseFloat(row[9]), 0);
    const mockFileName = "PREVIEW_1601FQ.DAT";
    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;
    const previewContent = processedSched1Data.map((row, index)=>{
        return [
            'D1',
            '1601FQ',
            row[0],
            row[1],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
            reportingPeriod,
            index + 1,
            row[6],
            row[7],
            row[8],
            row[9]
        ].join(',');
    }).join('\n');
    return {
        ...defaultErrorResult,
        success: true,
        datContent: previewContent,
        fileName: mockFileName,
        totalTaxableIncomePayment,
        totalWithholdingTax
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generate1601FQDatFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generate1601FQDatFile, "7e8a62aa37bb89e9dc691b0ed284c5e46c55c544f0", null);
}}),
"[project]/src/lib/actions/dat/sawt.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"606da919c200ec71cf772d2129320a498b0547ff6a":"validateAndProcessSAWT"},"",""] */ __turbopack_context__.s({
    "validateAndProcessSAWT": (()=>validateAndProcessSAWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schedules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/common.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function validateAndProcessSAWT(formData, overwrite = false) {
    const file = formData.get('file');
    const schedule = formData.get('schedule');
    const profileString = formData.get('profile');
    const month = formData.get('month');
    const year = formData.get('year');
    const folderId = formData.get('folderId');
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    const profile = JSON.parse(profileString);
    const sheetName = `sawt_${schedule}`;
    const { data: dataRows, validationErrors: fileErrors } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processExcelFile"])(file, sheetName);
    if (fileErrors.length > 0) {
        return {
            ...defaultErrorResult,
            success: false,
            errors: fileErrors
        };
    }
    if (dataRows.length === 0) {
        return {
            ...defaultErrorResult,
            success: false,
            errors: [
                `No data found in sheet "${sheetName}".`
            ]
        };
    }
    const validationErrors = [];
    const combinedATC = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atcWE"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schedules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atcWG"]
    ];
    const processedData = dataRows.filter((row)=>row.some((cell)=>String(cell).trim() !== '')).map((row, index)=>{
        const originalRowNumber = index + 2;
        const processedRow = [
            ...row
        ];
        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
            if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`Row ${originalRowNumber}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
            processedRow[0] = sanitizedTin;
        } else {
            processedRow[0] = '';
        }
        let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
        processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
        const nameFieldsInfo = [
            {
                name: 'Registered Name',
                index: 2,
                maxLength: 50,
                required: true
            },
            {
                name: 'Last Name',
                index: 3,
                maxLength: 30,
                required: false
            },
            {
                name: 'First Name',
                index: 4,
                maxLength: 30,
                required: false
            },
            {
                name: 'Middle Name',
                index: 5,
                maxLength: 30,
                required: false
            }
        ];
        nameFieldsInfo.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateString"])(processedRow[field.index], field.name, field.maxLength, originalRowNumber, field.required);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        processedRow[6] = atc;
        const numericFields = [
            {
                name: 'Rate',
                index: 7
            },
            {
                name: 'Income Payment',
                index: 8
            },
            {
                name: 'Withholding Tax',
                index: 9
            }
        ];
        numericFields.forEach((field)=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAndValidateNumber"])(processedRow[field.index], field.name, originalRowNumber);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });
        if (atc) {
            const atcData = combinedATC.find((item)=>item.atc === atc);
            if (atcData) {
                if (parseFloat(processedRow[7]) !== atcData.rate) {
                    validationErrors.push(`Row ${originalRowNumber}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[7])}%.`);
                }
            } else {
                validationErrors.push(`Row ${originalRowNumber}: ATC code '${atc}' is not valid for SAWT.`);
            }
        } else {
            validationErrors.push(`Row ${originalRowNumber}: ATC code is missing.`);
        }
        return processedRow;
    });
    if (validationErrors.length > 0) {
        return {
            ...defaultErrorResult,
            success: false,
            errors: validationErrors
        };
    }
    processedData.sort((a, b)=>String(a[2]).localeCompare(String(b[2])));
    const datFileName = `${profile.tpTIN}${profile.branchCode}${month.padStart(2, '0')}${year}${schedule}.DAT`;
    const reportTypeShort = `SAWT_${schedule}`;
    const drivePath = [
        profile.tpTIN,
        reportTypeShort,
        year
    ];
    if (!overwrite) {
        const fileExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFileExists"])(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                ...defaultErrorResult,
                success: false,
                fileExists: true,
                fileName: datFileName
            };
        }
    }
    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;
    const taxpayerName = profile.entityType === 'Individual' ? `${profile.lastName} ${profile.firstName} ${profile.middleName}` : profile.companyName;
    const header = [
        'HSAWT',
        `H${schedule}`,
        profile.tpTIN,
        profile.branchCode,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(taxpayerName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.firstName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.lastName),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(profile.middleName),
        reportingPeriod,
        profile.rdoCode
    ].join(',');
    const detailRows = processedData.map((row, index)=>{
        return [
            'DSAWT',
            `D${schedule}`,
            index + 1,
            row[0],
            row[1],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[2]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[3]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[4]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$common$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quoteIfNotEmpty"])(row[5]),
            reportingPeriod,
            '',
            row[6],
            row[7],
            row[8],
            row[9]
        ].join(',');
    }).join('\n');
    const totalIncomePayment = processedData.reduce((acc, row)=>acc + parseFloat(row[8]), 0);
    const totalWithholdingTax = processedData.reduce((acc, row)=>acc + parseFloat(row[9]), 0);
    const footer = [
        'CSAWT',
        `C${schedule}`,
        profile.tpTIN,
        profile.branchCode,
        reportingPeriod,
        totalIncomePayment.toFixed(2),
        totalWithholdingTax.toFixed(2)
    ].join(',');
    const datContent = [
        header,
        detailRows,
        footer
    ].join('\n');
    // Fire and forget
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFileToDrive"])(datFileName, datContent, folderId, drivePath, overwrite).then((uploadedFile)=>{
        console.log(`[Action:validateAndProcessSAWT] Background upload finished for ${uploadedFile.name}`);
    }).catch((err)=>{
        console.error(`[Action:validateAndProcessSAWT] Background upload failed for ${datFileName}:`, err);
    });
    return {
        ...defaultErrorResult,
        success: true,
        datContent: datContent,
        fileName: datFileName,
        datFile: null,
        totalTaxableIncomePayment: totalIncomePayment,
        totalWithholdingTax
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    validateAndProcessSAWT
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateAndProcessSAWT, "606da919c200ec71cf772d2129320a498b0547ff6a", null);
}}),
"[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402d9a12997dcb62a2a4d5d51bd6abab90805becd8":"convertExcelToDat","406f5894bbae82524a5e2abf80c21dcd7b4bbb8b3e":"overwriteDatFile"},"",""] */ __turbopack_context__.s({
    "convertExcelToDat": (()=>convertExcelToDat),
    "overwriteDatFile": (()=>overwriteDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/sales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$1601eq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/1601eq.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$1601fq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/1601fq.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sawt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/sawt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function convertExcelToDat(formData) {
    const file = formData.get('file');
    const reportType = formData.get('reportType');
    const month = formData.get('month');
    const year = formData.get('year');
    const profileString = formData.get('profile');
    const folderId = formData.get('folderId');
    const schedule = formData.get('schedule');
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    if (!file || !reportType || !month || !year || !profileString || !folderId) {
        return {
            ...defaultErrorResult,
            error: 'Missing required parameters for conversion.'
        };
    }
    try {
        const profile = JSON.parse(profileString);
        if (reportType === "Summary of Sales (SLS)") {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSalesDatFile"])(file, profile, month, year, folderId, false);
        }
        if (reportType === "Summary of Purchases (SLP)") {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateExcelForPurchases"])(formData);
        }
        if (reportType === "1601-EQ (Schedule 1 and 2)") {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$1601eq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate1601EQDatFile"])(file, profile, month, year, folderId, false);
        }
        if (reportType === "1601-FQ (Schedule 1, 2, and 3)") {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$1601fq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate1601FQDatFile"])(file, profile, month, year, folderId, false);
        }
        if (reportType === "Summary Alphalist of Withholding Tax (SAWT)") {
            if (!schedule) {
                return {
                    ...defaultErrorResult,
                    error: 'SAWT schedule is missing.'
                };
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sawt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateAndProcessSAWT"])(formData, false);
            if (result.success) {
                return {
                    ...result
                };
            }
            return result;
        }
        return {
            ...defaultErrorResult,
            error: `Report type "${reportType}" is not yet supported.`
        };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during conversion.';
        console.error('[convertExcelToDat] CRITICAL ERROR:', e);
        return {
            ...defaultErrorResult,
            error: `Conversion failed: ${errorMessage}`
        };
    }
}
async function overwriteDatFile(formData) {
    const file = formData.get('file');
    const reportType = formData.get('reportType');
    const month = formData.get('month');
    const year = formData.get('year');
    const profileString = formData.get('profile');
    const folderId = formData.get('folderId');
    const processedDataString = formData.get('processedData');
    const nonCreditableTaxString = formData.get('nonCreditableInputTax');
    const schedule = formData.get('schedule');
    const defaultErrorResult = {
        success: false,
        datContent: null,
        fileName: null,
        errors: null,
        error: null,
        datFile: null,
        totalExempt: null,
        totalZeroRated: null,
        totalTaxableSales: null,
        totalOutputTax: null,
        totalServices: null,
        totalCapitalGoods: null,
        totalOtherGoods: null,
        totalInputTax: null,
        totalTaxableIncomePayment: null,
        totalExemptIncomePayment: null,
        totalWithholdingTax: null,
        processedData: null
    };
    if (!reportType || !month || !year || !profileString || !folderId) {
        return {
            ...defaultErrorResult,
            error: 'Missing required parameters for overwrite.'
        };
    }
    const profile = JSON.parse(profileString);
    try {
        if (reportType === "Summary of Sales (SLS)") {
            if (!file) return {
                ...defaultErrorResult,
                error: 'Missing file for overwrite.'
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSalesDatFile"])(file, profile, month, year, folderId, true);
        }
        if (reportType === "Summary of Purchases (SLP)") {
            if (!processedDataString || nonCreditableTaxString === null) return {
                ...defaultErrorResult,
                error: 'Missing processed data for overwrite.'
            };
            const processedData = JSON.parse(processedDataString);
            const nonCreditableInputTax = parseFloat(nonCreditableTaxString);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generatePurchasesDatFile"])(processedData, profile, month, year, nonCreditableInputTax, folderId, true);
        }
        if (reportType === "1601-EQ (Schedule 1 and 2)") {
            if (!file) return {
                ...defaultErrorResult,
                error: 'Missing file for overwrite.'
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$1601eq$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate1601EQDatFile"])(file, profile, month, year, folderId, true);
        }
        if (reportType === "Summary Alphalist of Withholding Tax (SAWT)") {
            if (!file || !schedule) return {
                ...defaultErrorResult,
                error: 'Missing file or schedule for SAWT overwrite.'
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$sawt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateAndProcessSAWT"])(formData, true);
        }
        return {
            ...defaultErrorResult,
            error: `Report type "${reportType}" is not yet supported for overwrite.`
        };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during overwrite.';
        console.error('[overwriteDatFile] CRITICAL ERROR:', e);
        return {
            ...defaultErrorResult,
            error: `Overwrite failed: ${errorMessage}`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    convertExcelToDat,
    overwriteDatFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(convertExcelToDat, "402d9a12997dcb62a2a4d5d51bd6abab90805becd8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(overwriteDatFile, "406f5894bbae82524a5e2abf80c21dcd7b4bbb8b3e", null);
}}),
"[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00e0de5eecd8231df764d2365c49c18983c0b60260": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialPageToken"]),
    "402d9a12997dcb62a2a4d5d51bd6abab90805becd8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertExcelToDat"]),
    "406f5894bbae82524a5e2abf80c21dcd7b4bbb8b3e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["overwriteDatFile"]),
    "40a57fcb4a960a37a11746b24812e58ef776483800": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDatFiles"]),
    "40b981786947aad3d7b17012761d8eedf3b8c56d37": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserHeaderData"]),
    "40f13033d8a880eee44dcd6a36e85bf2b57a5db135": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateExcelForPurchases"]),
    "600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkForDatFileChanges"]),
    "60772ebd7eee4b78eff3ac73c22413d13f400a55f3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTaxProfile"]),
    "60ea6d367d076c4efa427326e37f48bc65200d8fed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTaxProfile"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00e0de5eecd8231df764d2365c49c18983c0b60260": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e0de5eecd8231df764d2365c49c18983c0b60260"]),
    "402d9a12997dcb62a2a4d5d51bd6abab90805becd8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402d9a12997dcb62a2a4d5d51bd6abab90805becd8"]),
    "406f5894bbae82524a5e2abf80c21dcd7b4bbb8b3e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406f5894bbae82524a5e2abf80c21dcd7b4bbb8b3e"]),
    "40a57fcb4a960a37a11746b24812e58ef776483800": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a57fcb4a960a37a11746b24812e58ef776483800"]),
    "40b981786947aad3d7b17012761d8eedf3b8c56d37": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b981786947aad3d7b17012761d8eedf3b8c56d37"]),
    "40f13033d8a880eee44dcd6a36e85bf2b57a5db135": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f13033d8a880eee44dcd6a36e85bf2b57a5db135"]),
    "600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c"]),
    "60772ebd7eee4b78eff3ac73c22413d13f400a55f3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60772ebd7eee4b78eff3ac73c22413d13f400a55f3"]),
    "60ea6d367d076c4efa427326e37f48bc65200d8fed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60ea6d367d076c4efa427326e37f48bc65200d8fed"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$home$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$main$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$dat$2f$purchases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/home/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/actions/dat/main.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/actions/dat/purchases.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(app)/home/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(app)/home/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/home/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(app)/home/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(app)/home/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/home/page.tsx", "default");
}}),
"[project]/src/app/(app)/home/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$home$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(app)/home/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$home$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(app)/home/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$home$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(app)/home/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/home/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__aa1bf90b._.js.map