
'use client';

import { useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { TaxProfile } from '@/lib/schemas';
import { TaxProfilesContent } from '@/components/tax-profiles-content';
import { useRefresh } from '@/hooks/use-refresh';
import { useTaxProfiles } from '@/hooks/use-tax-profiles';

export default function TaxProfilesPage() {
  const { toast } = useToast();
  const { 
    profiles, 
    isPending, 
    initialFetchComplete, 
    fetchProfiles, 
    addProfile, 
    updateProfile 
  } = useTaxProfiles();
  const { setRefreshFunction } = useRefresh();

  const handleFetch = useCallback((isManualRefresh = false) => {
    fetchProfiles(isManualRefresh);
  }, [fetchProfiles]);

  useEffect(() => {
    // Set the refresh function for the header button to allow manual refresh
    setRefreshFunction(() => () => handleFetch(true));
  }, [handleFetch, setRefreshFunction]);


  const handleProfileSuccess = (updatedProfile: TaxProfile, isNew: boolean) => {
    if (isNew) {
      addProfile(updatedProfile);
    } else {
      updateProfile(updatedProfile);
    }
  };

  return (
    <TaxProfilesContent
      headerProfiles={profiles}
      onSuccess={handleProfileSuccess}
      isPending={isPending}
      initialFetchComplete={initialFetchComplete}
    />
  );
}
