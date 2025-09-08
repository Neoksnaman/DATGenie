
import { google } from 'googleapis';

const {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  GOOGLE_OAUTH_REFRESH_TOKEN,
} = process.env;

if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
  // This check is important but shouldn't throw an error that crashes the server on startup,
  // as the credentials might not be used on every page load.
  // We will let the functions that use it handle the error.
  console.warn('Google OAuth credentials are not fully configured in .env. Some Drive/Sheets features may not work.');
}

// This is a fixed value for web applications
const GOOGLE_OAUTH_REDIRECT_URI = 'https://developers.google.com/oauthplayground';

let oauth2Client: import('google-auth-library').OAuth2Client | null = null;

export async function getOAuth2Client() {
  // Add the check here to provide a clear error when the credentials are used.
  if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
    throw new Error('Google OAuth credentials (CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN) must be configured in your .env file.');
  }
  
  if (oauth2Client) {
    // Check if the token is about to expire (within 60 seconds) and refresh if needed
    if (oauth2Client.credentials.expiry_date && oauth2Client.credentials.expiry_date < (Date.now() + 60 * 1000)) {
        console.log('[OAuth] Access token expiring soon, refreshing...');
        await oauth2Client.refreshAccessToken();
        console.log('[OAuth] Access token refreshed.');
    }
    return oauth2Client;
  }

  const client = new google.auth.OAuth2(
    GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_REDIRECT_URI
  );

  client.setCredentials({
    refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN,
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

export async function getSheetsClient() {
    const oauth2Client = await getOAuth2Client();
    return google.sheets({ version: 'v4', auth: oauth2Client });
}
