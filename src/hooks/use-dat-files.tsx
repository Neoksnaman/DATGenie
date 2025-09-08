
'use client';

import React, { createContext, useContext, useState, useTransition, useCallback, ReactNode, useEffect, useRef } from 'react';
import type { DatFile } from '@/lib/schemas';
import { getDatFiles, getInitialPageToken, checkForDatFileChanges } from '@/lib/actions/drive';
import { useToast } from '@/hooks/use-toast';
import { useUser } from './use-user';

interface DatFilesContextType {
  files: DatFile[];
  isPending: boolean;
  initialFetchComplete: boolean;
  fetchFiles: (isManualRefresh?: boolean) => void;
  addOrUpdateFile: () => void;
  removeFile: (fileId: string) => void;
}

const DatFilesContext = createContext<DatFilesContextType | undefined>(undefined);

const BROADCAST_CHANNEL_NAME = 'dat-file-ops';
const POLLING_INTERVAL = 30000; // 30 seconds

export const DatFilesProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [files, setFiles] = useState<DatFile[]>([]);
  const [isPending, startTransition] = useTransition();
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const channelRef = useRef<BroadcastChannel | null>(null);
  const pageTokenRef = useRef<string | null>(null);
  const isPolling = useRef(false);
  const trackedFolderIds = useRef<string[]>([]);
  const { user } = useUser();

  const fetchFiles = useCallback(async (isManualRefresh = false, isBackground = false) => {
    const performFetch = async (folderId: string) => {
        const result = await getDatFiles(folderId);
        if (result.success && result.files) {
            setFiles(result.files);
            if (result.folderIds) {
                trackedFolderIds.current = result.folderIds;
            }
            channelRef.current?.postMessage({
                type: 'update-files',
                payload: { files: result.files, folderIds: result.folderIds }
            });
            
            if (!pageTokenRef.current) {
                const tokenResult = await getInitialPageToken();
                if (tokenResult.success && tokenResult.token) {
                    pageTokenRef.current = tokenResult.token;
                }
            }
        } else {
            toast({
                title: 'Error',
                description: result.error || 'Failed to fetch DAT files.',
                variant: 'destructive',
            });
        }
        if (!initialFetchComplete) {
             setInitialFetchComplete(true);
        }
    };
    
    if (!user?.folderId) {
        if (!initialFetchComplete) setInitialFetchComplete(true);
        return;
    }

    if (isManualRefresh || !initialFetchComplete) {
        startTransition(() => {
            performFetch(user.folderId!);
        });
    } else if (isBackground) {
        await performFetch(user.folderId!);
    }
  }, [toast, initialFetchComplete, user]);
  
  useEffect(() => {
    if (user && !initialFetchComplete) {
        fetchFiles();
    }
  }, [user, initialFetchComplete, fetchFiles]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
    channelRef.current = channel;

    const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'update-files' && event.data.payload) {
            console.log('[Broadcast] Received file update from another tab.');
            setFiles(event.data.payload.files);
            if (event.data.payload.folderIds) {
                trackedFolderIds.current = event.data.payload.folderIds;
            }
        } else if (event.data.type === 'remove-file' && event.data.payload) {
            console.log('[Broadcast] Received remove file event from another tab.');
            setFiles(prev => prev.filter(f => f.id !== event.data.payload.fileId));
        }
    };

    channel.addEventListener('message', handleMessage);

    const pollForChanges = async () => {
        if (document.hidden || isPolling.current || trackedFolderIds.current.length === 0 || !user?.folderId) return;
        
        if (!pageTokenRef.current) {
            console.log('[Polling] Skipping poll: pageToken not available.');
            return;
        }
        isPolling.current = true;
        try {
            const result = await checkForDatFileChanges(trackedFolderIds.current, pageTokenRef.current);
            if (result.success && result.hasChanges && result.newToken) {
                console.log('[Polling] Changes detected in Drive. Fetching new file list.');
                await fetchFiles(false, true); 
                pageTokenRef.current = result.newToken;
            } else if (result.success && result.newToken) {
                pageTokenRef.current = result.newToken;
            }
        } catch (error) {
            console.error('[Polling] Error during polling:', error);
        } finally {
            isPolling.current = false;
        }
    };

    const intervalId = setInterval(pollForChanges, POLLING_INTERVAL);

    return () => {
      clearInterval(intervalId);
      channel.removeEventListener('message', handleMessage);
      channel.close();
      channelRef.current = null;
    };
  }, [fetchFiles, user]);

  const addOrUpdateFile = () => {
    setTimeout(async () => {
        await fetchFiles(false, true); // Trigger a background fetch
    }, 3000);
  };
  
  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    channelRef.current?.postMessage({
        type: 'remove-file',
        payload: { fileId }
    });
  };

  return (
    <DatFilesContext.Provider value={{ 
        files, 
        isPending, 
        initialFetchComplete,
        fetchFiles,
        addOrUpdateFile,
        removeFile
    }}>
      {children}
    </DatFilesContext.Provider>
  );
};

export const useDatFiles = () => {
  const context = useContext(DatFilesContext);
  if (context === undefined) {
    throw new Error('useDatFiles must be used within a DatFilesProvider');
  }
  return context;
};
