
'use client';

import { useEffect, useCallback, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { TaxProfile } from '@/lib/schemas';
import { HomeContent } from '@/components/home-content';
import { useRefresh } from '@/hooks/use-refresh';
import { useTaxProfiles } from '@/hooks/use-tax-profiles';
import { ProfileForm } from '@/components/profile-form';
import { useDatFiles } from '@/hooks/use-dat-files';

export default function HomePage() {
  const { toast } = useToast();
  const { 
    profiles, 
    isPending, 
    initialFetchComplete, 
    fetchProfiles, 
    addProfile, 
    updateProfile,
    selectedProfile,
    setSelectedProfile
  } = useTaxProfiles();
  const { fetchFiles } = useDatFiles();
  const { setRefreshFunction } = useRefresh();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFetch = useCallback((isManualRefresh = false) => {
    fetchProfiles(isManualRefresh);
    fetchFiles(isManualRefresh);
  }, [fetchProfiles, fetchFiles]);

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
    <>
      <HomeContent
        profiles={profiles}
        isPending={isPending}
        initialFetchComplete={initialFetchComplete}
        onNewProfile={() => setIsFormOpen(true)}
        selectedProfile={selectedProfile}
        onProfileSelect={setSelectedProfile}
      />
      <ProfileForm 
        isOpen={isFormOpen}
        setIsOpen={setIsFormOpen}
        profile={null}
        onSuccess={handleProfileSuccess}
      />
    </>
  );
}
