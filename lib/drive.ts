
'use server';

import { google } from 'googleapis';
import type { drive_v3 } from 'googleapis';
import { getOAuth2Client } from './drive-oauth';
import type { DatFile } from './schemas';

const { GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID } = process.env;

async function getDriveClient(): Promise<drive_v3.Drive> {
    const oauth2Client = await getOAuth2Client();
    return google.drive({ version: 'v3', auth: oauth2Client });
}

/**
 * Creates a folder for a user inside the main accounts folder.
 * @param userEmail The user's email, which will be the name of the folder.
 * @returns The ID of the created folder.
 */
export async function createFolderInDrive(userEmail: string): Promise<string> {
    if (!GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID) {
        throw new Error('GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID is not configured in .env');
    }
    const drive = await getDriveClient();
    const fileMetadata = {
        name: userEmail,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [GOOGLE_DRIVE_ACCOUNTS_FOLDER_ID],
    };
    try {
        const file = await drive.files.create({
            resource: fileMetadata,
            fields: 'id',
        });
        console.log(`[Drive] Created user folder "${userEmail}" with ID: ${file.data.id}`);
        return file.data.id!;
    } catch (error) {
        console.error(`[Drive] Error creating user folder "${userEmail}":`, error);
        throw error;
    }
}

async function findFolder(drive: drive_v3.Drive, name: string, parentId: string): Promise<string | null> {
    const query = `mimeType='application/vnd.google-apps.folder' and name='${name.replace(/'/g, "\\'")}' and '${parentId}' in parents and trashed=false`;
    try {
        const res = await drive.files.list({
            q: query,
            fields: 'files(id)',
            spaces: 'drive',
            pageSize: 1,
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

async function createFolder(drive: drive_v3.Drive, name: string, parentId: string): Promise<string> {
    const fileMetadata = {
        name: name,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [parentId],
    };
    const folder = await drive.files.create({
        resource: fileMetadata,
        fields: 'id',
    });
    if (!folder.data.id) throw new Error(`Failed to create folder "${name}"`);
    console.log(`[Drive] Created folder "${name}" with ID: ${folder.data.id}.`);
    return folder.data.id;
}


async function getOrCreateFolderByPath(drive: drive_v3.Drive, rootFolderId: string, path: string[]): Promise<string> {
    let currentParentId = rootFolderId;
    
    const datFilesFolderName = 'DATFiles';
    let datFilesFolderId = await findFolder(drive, datFilesFolderName, currentParentId);
    if (!datFilesFolderId) {
        datFilesFolderId = await createFolder(drive, datFilesFolderName, currentParentId);
    }
    currentParentId = datFilesFolderId;

    for (const folderName of path) {
        let nextFolderId = await findFolder(drive, folderName, currentParentId);
        if (!nextFolderId) {
            nextFolderId = await createFolder(drive, folderName, currentParentId);
        }
        currentParentId = nextFolderId;
    }
    return currentParentId;
}

export async function checkFileExists(fileName: string, rootFolderId: string, path: string[]): Promise<boolean> {
    try {
        const drive = await getDriveClient();
        const finalFolderId = await getOrCreateFolderByPath(drive, rootFolderId, path);
        const query = `name='${fileName.replace(/'/g, "\\'")}' and '${finalFolderId}' in parents and trashed=false`;
        
        const res = await drive.files.list({
            q: query,
            fields: 'files(id)',
            pageSize: 1,
        });

        return !!(res.data.files && res.data.files.length > 0);
    } catch (error) {
        console.error(`[Drive] Error checking if file '${fileName}' exists:`, error);
        return false;
    }
}

/**
 * Uploads or updates a file in a specific Google Drive folder path.
 * @param fileName The name of the file.
 * @param fileContent The content of the file.
 * @param rootFolderId The ID of the user's root folder in Drive.
 * @param path An array representing the folder path inside "DATFiles".
 * @param overwrite If true, will update the existing file. If false, will not upload if file exists.
 * @returns The DatFile object for the created/updated file.
 */
export async function uploadFileToDrive(fileName: string, fileContent: string, rootFolderId: string, path: string[], overwrite: boolean = false): Promise<DatFile> {
  try {
    const drive = await getDriveClient();
    const finalFolderId = await getOrCreateFolderByPath(drive, rootFolderId, path);
    console.log(`[Drive] Final folder for upload is '${finalFolderId}'.`);

    const media = {
        mimeType: 'text/plain',
        body: fileContent,
    };
    
    const fileFields = 'id, name, modifiedTime';

    if (overwrite) {
        const query = `name='${fileName.replace(/'/g, "\\'")}' and '${finalFolderId}' in parents and trashed=false`;
        const res = await drive.files.list({ q: query, fields: 'files(id)', pageSize: 1 });

        if (res.data.files && res.data.files.length > 0 && res.data.files[0].id) {
            const fileId = res.data.files[0].id;
            console.log(`[Drive] Overwriting existing file '${fileName}' with ID: ${fileId}`);
            const updatedFile = await drive.files.update({
                fileId: fileId,
                media: media,
                fields: fileFields,
            });
            if (!updatedFile.data.id || !updatedFile.data.name || !updatedFile.data.modifiedTime) {
                throw new Error('File update did not return complete data.');
            }
             return { id: updatedFile.data.id, name: updatedFile.data.name, path: path.join(' / '), modifiedTime: updatedFile.data.modifiedTime };
        }
    }
    
    // If not overwriting or file doesn't exist, create a new one.
    const fileMetadata = {
      name: fileName,
      parents: [finalFolderId],
    };

    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: fileFields,
    });

    if (!file.data.id || !file.data.name || !file.data.modifiedTime) {
        throw new Error('File creation did not return complete data.');
    }
    console.log(`[Drive] Successfully uploaded new file '${fileName}', File ID: ${file.data.id}`);
    return { id: file.data.id, name: file.data.name, path: path.join(' / '), modifiedTime: file.data.modifiedTime };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error(`[Drive] Failed to upload file '${fileName}':`, errorMessage);
    throw new Error(`Failed to upload file to Google Drive: ${errorMessage}`);
  }
}

/**
 * Lists all .DAT files within a user's DATFiles directory structure and all subfolder IDs.
 * @param rootFolderId The root folder ID for the user.
 * @returns A list of file details and a list of all folder IDs within the DATFiles structure.
 */
export async function listDatFiles(rootFolderId: string): Promise<{ files: DatFile[]; folderIds: string[] }> {
    const drive = await getDriveClient();

    const datFilesFolderId = await findFolder(drive, "DATFiles", rootFolderId);
    if (!datFilesFolderId) {
        console.log('[Drive] "DATFiles" folder not found, returning empty list.');
        return { files: [], folderIds: [] };
    }

    const folderMap = new Map<string, { name: string; parentId: string }>();
    const allFiles: DatFile[] = [];
    const allFolderIds = new Set<string>([datFilesFolderId]);

    async function walkFolders(folderId: string): Promise<void> {
        let pageToken: string | undefined = undefined;
        do {
            const res = await drive.files.list({
                q: `'${folderId}' in parents and trashed=false`,
                fields: "nextPageToken, files(id, name, mimeType, modifiedTime, parents)",
                spaces: "drive",
                pageToken,
                pageSize: 1000,
            });

            const folderPromises: Promise<void>[] = [];

            if (res.data.files) {
                for (const file of res.data.files) {
                    if (file.mimeType === "application/vnd.google-apps.folder") {
                        if (file.id) {
                            allFolderIds.add(file.id);
                            if (file.parents && file.parents.length > 0) {
                                folderMap.set(file.id, { name: file.name!, parentId: file.parents[0] });
                            }
                            folderPromises.push(walkFolders(file.id));
                        }
                    } else if (file.name?.endsWith(".DAT")) {
                        let pathParts: string[] = [];
                        let currentParentId = file.parents?.[0];

                        while (currentParentId && currentParentId !== datFilesFolderId) {
                            const parentFolder = folderMap.get(currentParentId);
                            if (parentFolder) {
                                pathParts.unshift(parentFolder.name);
                                currentParentId = parentFolder.parentId;
                            } else {
                                break;
                            }
                        }

                        allFiles.push({
                            id: file.id!,
                            name: file.name!,
                            path: pathParts.join(" / "),
                            modifiedTime: file.modifiedTime!,
                        });
                    }
                }
            }
            await Promise.all(folderPromises);
            pageToken = res.data.nextPageToken;
        } while (pageToken);
    }

    folderMap.set(datFilesFolderId, { name: "DATFiles", parentId: rootFolderId });
    await walkFolders(datFilesFolderId);

    return { files: allFiles, folderIds: Array.from(allFolderIds) };
}



/**
 * Downloads the content of a file from Google Drive.
 * @param fileId The ID of the file to download.
 * @returns The content of the file as a string.
 */
export async function downloadFileFromDrive(fileId: string): Promise<string> {
    const drive = await getDriveClient();
    try {
        const response = await drive.files.get(
            { fileId: fileId, alt: 'media' },
            { responseType: 'stream' }
        );

        return new Promise((resolve, reject) => {
            let buf: any[] = [];
            response.data
                .on('data', (chunk) => buf.push(chunk))
                .on('end', () => {
                    const content = Buffer.concat(buf).toString();
                    resolve(content);
                })
                .on('error', (err) => {
                    console.error(`[Drive] Error downloading file ${fileId}:`, err);
                    reject(err);
                });
        });

    } catch (error: any) {
        if (error.code === 404) {
            throw new Error('File not found.');
        }
        console.error(`[Drive] API error on download for file ${fileId}:`, error);
        throw error;
    }
}


/**
 * Deletes a file from Google Drive permanently.
 * @param fileId The ID of the file to delete.
 */
export async function deleteFileFromDrive(fileId: string): Promise<void> {
    const drive = await getDriveClient();
    try {
        await drive.files.delete({
            fileId: fileId,
        });
        console.log(`[Drive] Successfully deleted file with ID: ${fileId}`);
    } catch (error: any) {
        if (error.code === 404) {
            throw new Error('File not found.');
        }
        console.error(`[Drive] Error deleting file ${fileId}:`, error);
        throw error;
    }
}

/**
 * Gets the starting page token for the changes feed for the entire user's Drive.
 * @returns The starting page token.
 */
export async function getInitialPageTokenForDrive(): Promise<string> {
    const drive = await getDriveClient();
    try {
        const response = await drive.changes.getStartPageToken({
             supportsAllDrives: true,
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

/**
 * Lists changes for a user's account and checks if they are relevant to the user's folder structure.
 * @param allFolderIds An array of all folder IDs that belong to the user's DAT file structure.
 * @param pageToken The page token from which to retrieve changes.
 * @returns An object with hasChanges boolean and the new page token.
 */
export async function listChangesSincePageToken(
    allFolderIds: string[],
    pageToken: string
): Promise<{ hasChanges: boolean; newPageToken: string }> {
    const drive = await getDriveClient();
    let newPageToken = pageToken;
    let hasRelevantChanges = false;
    let lastResponse: any;

    try {
        const folderIdSet = new Set(allFolderIds);

        do {
            lastResponse = await drive.changes.list({
                pageToken: newPageToken,
                spaces: "drive",
                fields: "nextPageToken, newStartPageToken, changes(fileId, removed, file(name, parents, mimeType))",
                includeItemsFromAllDrives: true,
                supportsAllDrives: true,
            });

            const changes = lastResponse.data.changes || [];

            if (changes.length > 0) {
                const relevantChange = changes.some((c: any) => {
                    // A file was deleted. We can't know its parent, so we must refresh.
                    if (c.removed) return true; 

                    if (c.file && c.file.parents) {
                        // Check if the file's parent is one of our tracked folders.
                        const parentIsTracked = c.file.parents.some((p: string) => folderIdSet.has(p));
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
        } while (lastResponse.data.nextPageToken);

        const finalToken = lastResponse.data.newStartPageToken || newPageToken;

        return { hasChanges: hasRelevantChanges, newPageToken: finalToken };
    } catch (error) {
        console.error("[Drive] Error listing changes:", error);
        return { hasChanges: false, newPageToken: pageToken };
    }
}
