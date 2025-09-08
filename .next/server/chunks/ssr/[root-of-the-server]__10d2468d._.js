module.exports = {

"[project]/src/lib/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DatFileSchema": (()=>DatFileSchema),
    "MutationResultSchema": (()=>MutationResultSchema),
    "TaxProfileSchema": (()=>TaxProfileSchema),
    "UserDetailsSchema": (()=>UserDetailsSchema),
    "UserUpdateDataSchema": (()=>UserUpdateDataSchema)
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
const UserDetailsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    userName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email()
});
const UserUpdateDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    newUserName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
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
    "addSessionToSheet": (()=>addSessionToSheet),
    "appendHeaderDataToSheet": (()=>appendHeaderDataToSheet),
    "appendUserToSheet": (()=>appendUserToSheet),
    "deleteHeaderDataRowInSheet": (()=>deleteHeaderDataRowInSheet),
    "getAllHeaderDataFromSheet": (()=>getAllHeaderDataFromSheet),
    "getAllUsers": (()=>getAllUsers),
    "updateHeaderDataInSheet": (()=>updateHeaderDataInSheet),
    "updateUserDataInSheet": (()=>updateUserDataInSheet),
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
const CREDENTIALS_SHEET_NAME = 'credentials';
const SESSIONS_SHEET_NAME = 'ActiveSessions';
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
        const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`; // Adjust range to cover all columns
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
async function updateUserDataInSheet(currentUserName, updates) {
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const range = `${CREDENTIALS_SHEET_NAME}!A:H`; // Adjust range to cover all columns
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
    // Handle password change
    if (updates.newPassword) {
        if (!updates.currentPassword) {
            throw new Error("Current password is required to change password.");
        }
        if (userRow[pwdIndex] !== updates.currentPassword) {
            throw new Error("Incorrect current password.");
        }
        userRow[pwdIndex] = updates.newPassword;
    }
    // Handle username change
    if (updates.newUserName) {
        const isUserNameTaken = rows.slice(1).some((row, index)=>index !== userRowIndex - 1 && row[userNameIndex] === updates.newUserName);
        if (isUserNameTaken) {
            throw new Error(`Username '${updates.newUserName}' is already taken.`);
        }
        userRow[userNameIndex] = updates.newUserName;
    }
    // Update the entire row in the sheet
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
    const sheets = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$oauth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetsClient"])();
    const values = [
        [
            userName,
            sessionToken,
            loginTime,
            ipAddress,
            deviceInfo
        ]
    ];
    const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: `${SESSIONS_SHEET_NAME}!A1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values
        }
    };
    try {
        await sheets.spreadsheets.values.append(request);
        console.log(`[Sessions] Added new session for user ${userName}`);
    } catch (err) {
        console.error('The API returned an error while adding a session: ' + err);
        throw new Error('Failed to add session to Google Sheet.');
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
"[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00e0de5eecd8231df764d2365c49c18983c0b60260": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialPageToken"]),
    "4016ebdf9488006741c60b7311f41f9bd369ad7fad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDatFileContent"]),
    "40a57fcb4a960a37a11746b24812e58ef776483800": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDatFiles"]),
    "40af73184119c15409b97a0d41b0fa658f6ec0f5b9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDatFile"]),
    "40b981786947aad3d7b17012761d8eedf3b8c56d37": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserHeaderData"]),
    "600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkForDatFileChanges"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00e0de5eecd8231df764d2365c49c18983c0b60260": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e0de5eecd8231df764d2365c49c18983c0b60260"]),
    "4016ebdf9488006741c60b7311f41f9bd369ad7fad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4016ebdf9488006741c60b7311f41f9bd369ad7fad"]),
    "40a57fcb4a960a37a11746b24812e58ef776483800": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a57fcb4a960a37a11746b24812e58ef776483800"]),
    "40af73184119c15409b97a0d41b0fa658f6ec0f5b9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40af73184119c15409b97a0d41b0fa658f6ec0f5b9"]),
    "40b981786947aad3d7b17012761d8eedf3b8c56d37": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b981786947aad3d7b17012761d8eedf3b8c56d37"]),
    "600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600ba226d4d3d144eecda0e0fe4cc7cd068fe5c48c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$dat$2d$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2f$drive$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/dat-files/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions/drive.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/(app)/dat-files/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(app)/dat-files/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/dat-files/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(app)/dat-files/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(app)/dat-files/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/dat-files/page.tsx", "default");
}}),
"[project]/src/app/(app)/dat-files/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$dat$2d$files$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(app)/dat-files/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$dat$2d$files$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(app)/dat-files/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$dat$2d$files$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(app)/dat-files/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/dat-files/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__10d2468d._.js.map