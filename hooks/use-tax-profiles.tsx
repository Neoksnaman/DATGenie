
'use client';

import React, { createContext, useContext, useState, useTransition, useCallback, ReactNode, useEffect } from 'react';
import type { TaxProfile } from '@/lib/schemas';
import { getUserHeaderData } from '@/lib/actions/profiles';
import { useToast } from '@/hooks/use-toast';
import { useUser } from './use-user';

interface TaxProfilesContextType {
  profiles: TaxProfile[];
  isPending: boolean;
  initialFetchComplete: boolean;
  fetchProfiles: (isManualRefresh?: boolean) => void;
  addProfile: (profile: TaxProfile) => void;
  updateProfile: (profile: TaxProfile) => void;
  removeProfile: (tin: string) => void;
  selectedProfile: string;
  setSelectedProfile: (tin: string) => void;
}

const TaxProfilesContext = createContext<TaxProfilesContextType | undefined>(undefined);

export const TaxProfileProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<TaxProfile[]>([]);
  const [isPending, startTransition] = useTransition();
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const { user } = useUser();
  
  const fetchProfiles = useCallback((isManualRefresh = false) => {
    if (isPending) return;
    if (!isManualRefresh && initialFetchComplete) return;

    if (!user?.databaseId) {
        if (!initialFetchComplete) setInitialFetchComplete(true);
        return;
    }
    
    if (isManualRefresh) {
        toast({
          title: 'Refreshing Data...',
          description: 'Fetching the latest profiles and files.',
        });
    }

    startTransition(async () => {
      const result = await getUserHeaderData(user.databaseId!);
      if (result.success && result.data) {
        setProfiles(result.data as TaxProfile[]);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to fetch header data.',
          variant: 'destructive',
        });
      }
      if (!initialFetchComplete) {
        setInitialFetchComplete(true);
      }
    });
  }, [isPending, initialFetchComplete, toast, user]);
  
  useEffect(() => {
    if (user && !initialFetchComplete) {
        fetchProfiles();
    }
  }, [user, initialFetchComplete, fetchProfiles]);

  const addProfile = (profile: TaxProfile) => {
    setProfiles(prev => [...prev, profile]);
  };

  const updateProfile = (profile: TaxProfile) => {
    setProfiles(prev => 
      prev.map(p => p.tpTIN === profile.tpTIN ? profile : p)
    );
  };
  
  const removeProfile = (tin: string) => {
    setProfiles(prev => prev.filter(p => p.tpTIN !== tin));
    if (selectedProfile === tin) {
        setSelectedProfile('');
    }
  };

  return (
    <TaxProfilesContext.Provider value={{ 
        profiles, 
        isPending, 
        initialFetchComplete, 
        fetchProfiles, 
        addProfile, 
        updateProfile, 
        removeProfile,
        selectedProfile,
        setSelectedProfile,
    }}>
      {children}
    </TaxProfilesContext.Provider>
  );
};

export const useTaxProfiles = () => {
  const context = useContext(TaxProfilesContext);
  if (context === undefined) {
    throw new Error('useTaxProfiles must be used within a TaxProfileProvider');
  }
  return context;
};
