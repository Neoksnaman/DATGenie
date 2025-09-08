
'use server';

import { listDatFiles, downloadFileFromDrive, deleteFileFromDrive, getInitialPageTokenForDrive, listChangesSincePageToken } from '../drive';
import type { DatFile } from '@/lib/schemas';
import { DatFileSchema } from '@/lib/schemas';
import { z } from 'zod';


const DatFileListingResultSchema = z.object({
  success: z.boolean(),
  files: z.array(DatFileSchema).nullable(),
  folderIds: z.array(z.string()).nullable(),
  error: z.string().nullable(),
});
type DatFileListingResult = z.infer<typeof DatFileListingResultSchema>;

export async function getDatFiles(folderId: string): Promise<DatFileListingResult> {
    if (!folderId) {
        return { success: false, files: null, folderIds: null, error: 'User folder ID is missing.' };
    }
    try {
        const { files, folderIds } = await listDatFiles(folderId);
        return { success: true, files, folderIds, error: null };
    } catch (e) {
        console.error('[getDatFiles] CRITICAL ERROR:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, files: null, folderIds: null, error: `Failed to retrieve DAT files: ${errorMessage}` };
    }
}

const DatFileContentResultSchema = z.object({
    success: z.boolean(),
    content: z.string().nullable(),
    error: z.string().nullable(),
});
type DatFileContentResult = z.infer<typeof DatFileContentResultSchema>;

export async function getDatFileContent(fileId: string): Promise<DatFileContentResult> {
    try {
        if (!fileId) {
            return { success: false, content: null, error: 'File ID is required.' };
        }
        const content = await downloadFileFromDrive(fileId);
        return { success: true, content: content, error: null };
    } catch (error: any) {
        if (error.code === 404) {
            return { success: false, content: null, error: 'File not found.' };
        }
        console.error(`[getDatFileContent] CRITICAL ERROR for fileId ${fileId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, content: null, error: `Failed to retrieve file content: ${errorMessage}` };
    }
}


const SimpleResultSchema = z.object({
    success: z.boolean(),
    error: z.string().nullable(),
});
type SimpleResult = z.infer<typeof SimpleResultSchema>;


export async function deleteDatFile(fileId: string): Promise<SimpleResult> {
    try {
        if (!fileId) {
            return { success: false, error: 'File ID is required.' };
        }
        await deleteFileFromDrive(fileId);
        return { success: true, error: null };
    } catch (error: any) {
        if (error.code === 404) {
            return { success: false, error: 'File not found.' };
        }
        console.error(`[deleteDatFile] CRITICAL ERROR for fileId ${fileId}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to delete file: ${errorMessage}` };
    }
}

const PageTokenResultSchema = z.object({
  success: z.boolean(),
  token: z.string().nullable(),
  error: z.string().nullable(),
});
type PageTokenResult = z.infer<typeof PageTokenResultSchema>;

export async function getInitialPageToken(): Promise<PageTokenResult> {
    try {
        const token = await getInitialPageTokenForDrive();
        return { success: true, token, error: null };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, token: null, error: `Failed to get initial page token: ${errorMessage}` };
    }
}

const ChangesResultSchema = z.object({
  success: z.boolean(),
  hasChanges: z.boolean(),
  newToken: z.string().nullable(),
  error: z.string().nullable(),
});
type ChangesResult = z.infer<typeof ChangesResultSchema>;

export async function checkForDatFileChanges(allFolderIds: string[], pageToken: string): Promise<ChangesResult> {
    if (!allFolderIds || allFolderIds.length === 0 || !pageToken) {
        return { success: false, hasChanges: false, newToken: null, error: 'Folder IDs and page token are required.' };
    }
    try {
        const { hasChanges, newPageToken } = await listChangesSincePageToken(allFolderIds, pageToken);
        return { success: true, hasChanges, newToken: newPageToken, error: null };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, hasChanges: false, newToken: pageToken, error: `Failed to check for changes: ${errorMessage}` };
    }
}
