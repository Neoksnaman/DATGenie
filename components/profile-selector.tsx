
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import type { TaxProfile } from '@/lib/schemas';
import { PlusCircle, Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileSelectorProps {
  profiles: TaxProfile[];
  onProfileSelect: (tin: string) => void;
  onNewProfile: () => void;
  selectedProfile: string;
}

export function ProfileSelector({ profiles, onProfileSelect, onNewProfile, selectedProfile }: ProfileSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const getDisplayName = (profile: TaxProfile) => {
    return profile.entityType === 'Individual' ? profile.tradeName : profile.companyName;
  };

  const sortedProfiles = React.useMemo(() => {
    return [...profiles].sort((a, b) => {
        const nameA = getDisplayName(a)?.toLowerCase() || '';
        const nameB = getDisplayName(b)?.toLowerCase() || '';
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
  }, [profiles]);

  const selectedValue = selectedProfile
    ? `${getDisplayName(profiles.find(p => p.tpTIN === selectedProfile)!)} (${selectedProfile})`
    : "Select a profile...";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="w-full sm:w-auto sm:flex-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-auto min-h-[2.5rem]"
            >
              <span className="text-left whitespace-normal">{selectedValue}</span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="Search profile by name or TIN..." />
              <CommandList>
                <CommandEmpty>No profile found.</CommandEmpty>
                <CommandGroup>
                  {sortedProfiles.map((profile) => (
                    <CommandItem
                      key={profile.tpTIN}
                      value={`${getDisplayName(profile)} ${profile.tpTIN}`}
                      onSelect={() => {
                        onProfileSelect(profile.tpTIN);
                        setOpen(false);
                      }}
                      className="flex items-start"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 mt-1 shrink-0",
                          selectedProfile === profile.tpTIN ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <div>
                        {getDisplayName(profile)} ({profile.tpTIN})
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Button onClick={onNewProfile} variant="outline" className="w-full sm:w-auto">
        <PlusCircle className="mr-2 h-4 w-4" />
        New Profile
      </Button>
    </div>
  );
}
