
'use client';

import { useEffect, useCallback, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { TaxProfile } from '@/lib/schemas';
import { HomeContent } from '@/components/home-content';
import { useRefresh } from '@/hooks/use-refresh';
import { useTaxProfiles } from '@/hooks/use-tax-profiles';
import { ProfileForm } from '@/components/profile-form';
import { useDatFiles } from '@/hooks/use-dat-files';
import { ChangelogDialog } from '@/components/changelog-dialog';

interface ChangelogData {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

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
  const { fetchFiles, isPending: isDatFilesPending } = useDatFiles();
  const { setRefreshFunction } = useRefresh();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // State for Changelog
  const [changelogData, setChangelogData] = useState<ChangelogData | null>(null);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  const wasPending = useRef(false);
  const isManualRefresh = useRef(false);

  // Changelog logic
  useEffect(() => {
    fetch('/changelog.json')
      .then(response => response.json())
      .then((data: ChangelogData) => {
        const lastHiddenVersion = localStorage.getItem('lastHiddenChangelogVersion');
        if (data.version !== lastHiddenVersion) {
          setChangelogData(data);
          setIsChangelogOpen(true);
        }
      })
      .catch(error => console.error("Failed to fetch changelog:", error));
  }, []);

  const handleChangelogClose = (hideUntilNextUpdate: boolean) => {
    setIsChangelogOpen(false);
    if (hideUntilNextUpdate && changelogData) {
      localStorage.setItem('lastHiddenChangelogVersion', changelogData.version);
    }
  };

  useEffect(() => {
    const isCurrentlyPending = isPending || isDatFilesPending;
    if (wasPending.current && !isCurrentlyPending && isManualRefresh.current) {
        toast({
            title: "Success",
            description: "Data refreshed successfully.",
        });
        isManualRefresh.current = false; // Reset after showing toast
    }
    wasPending.current = isCurrentlyPending;
  }, [isPending, isDatFilesPending, toast]);

  const handleFetch = useCallback((manualRefresh = false) => {
    if (manualRefresh) {
      isManualRefresh.current = true;
    }
    fetchProfiles(manualRefresh);
    fetchFiles(manualRefresh);
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
      {changelogData && (
        <ChangelogDialog 
          isOpen={isChangelogOpen}
          onClose={handleChangelogClose}
          version={changelogData.version}
          date={changelogData.date}
          title={changelogData.title}
          changes={changelogData.changes}
        />
      )}
    </>
  );
}
