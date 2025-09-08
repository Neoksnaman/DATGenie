
'use client';

import { useState, useTransition, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { TaxProfile } from '@/lib/schemas';
import { PlusCircle, Search, Trash, FilePenLine, Loader2, SearchX } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProfileForm } from './profile-form';
import { TaxProfilesSkeleton } from './tax-profiles-skeleton';
import { DeleteConfirmationDialog } from './delete-confirmation-dialog';
import { deleteTaxProfile } from '@/lib/actions/profiles';
import { useTaxProfiles } from '@/hooks/use-tax-profiles';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/hooks/use-user';

interface TaxProfilesContentProps {
  headerProfiles: TaxProfile[];
  onSuccess: (profile: TaxProfile, isNew: boolean) => void;
  isPending: boolean;
  initialFetchComplete: boolean;
}

export function TaxProfilesContent({ 
  headerProfiles,
  onSuccess,
  isPending,
  initialFetchComplete
}: TaxProfilesContentProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<TaxProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState<TaxProfile | null>(null);
  const [isDeleting, startDeleteTransition] = useTransition();

  const { removeProfile } = useTaxProfiles();
  const { toast } = useToast();
  const { user } = useUser();
  const ITEMS_PER_PAGE = 10;

  const getDisplayName = (profile: TaxProfile) => {
    if (profile.entityType === 'Individual') {
      return profile.tradeName;
    }
    return profile.companyName;
  }

  const handleAddNew = () => {
    setEditingProfile(null);
    setIsFormOpen(true);
  };

  const handleEdit = (profile: TaxProfile) => {
    setEditingProfile(profile);
    setIsFormOpen(true);
  };
  
  const handleDeleteClick = (profile: TaxProfile) => {
    setProfileToDelete(profile);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!profileToDelete) return;

    startDeleteTransition(async () => {
      if (!user?.databaseId) {
        toast({ title: 'Error', description: 'User session not found.', variant: 'destructive' });
        return;
      }

      const result = await deleteTaxProfile(profileToDelete.tpTIN, user.databaseId);
      if (result.success) {
        toast({ title: 'Profile Deleted', description: `The profile for ${getDisplayName(profileToDelete)} has been deleted.` });
        removeProfile(profileToDelete.tpTIN);
      } else {
        toast({ title: 'Deletion Failed', description: result.error, variant: 'destructive' });
      }
      setIsDeleteDialogOpen(false);
      setProfileToDelete(null);
    });
  };
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredProfiles = headerProfiles
    .filter(profile => {
      const displayName = getDisplayName(profile)?.toLowerCase() || '';
      const query = searchQuery.toLowerCase();
      return displayName.includes(query) || profile.tpTIN.includes(query);
    })
    .sort((a, b) => {
      const nameA = getDisplayName(a)?.toLowerCase() || '';
      const nameB = getDisplayName(b)?.toLowerCase() || '';
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  const totalPages = Math.ceil(filteredProfiles.length / ITEMS_PER_PAGE);
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const showLoading = isPending || !initialFetchComplete;
  
  const noResults = !showLoading && paginatedProfiles.length === 0;

  return (
    <>
      <div className="p-4 md:p-6 space-y-6">
        <h1 className="text-3xl font-bold">Tax Profiles</h1>
        <p className="text-muted-foreground">Manage tax profiles in your account.</p>
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4 pt-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="Search by TIN or name..." 
                          className="pl-8" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button onClick={handleAddNew}>
                        <PlusCircle className="mr-2" />
                        New Profile
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
              {showLoading ? (
                 <TaxProfilesSkeleton />
              ) : (
                <>
                    {/* Desktop Table View */}
                    <div className="border rounded-md hidden md:block">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[15%]">TIN</TableHead>
                                    <TableHead className="w-[50%]">Name</TableHead>
                                    <TableHead className="w-[20%]">Classification</TableHead>
                                    <TableHead className="w-[15%]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginatedProfiles.length > 0 ? (
                                    paginatedProfiles.map((profile) => (
                                        <TableRow key={profile.tpTIN}>
                                            <TableCell className="font-mono">{profile.tpTIN}</TableCell>
                                            <TableCell className="font-medium">{getDisplayName(profile)}</TableCell>
                                            <TableCell>
                                                <Badge variant={profile.entityType === 'Individual' ? 'secondary' : 'default'}>
                                                    {profile.entityType}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(profile)} disabled={isDeleting && profileToDelete?.tpTIN === profile.tpTIN}>
                                                        <FilePenLine className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteClick(profile)} disabled={isDeleting}>
                                                        {isDeleting && profileToDelete?.tpTIN === profile.tpTIN ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash className="h-4 w-4" />}
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-48 text-center">
                                            <div className="flex flex-col items-center justify-center gap-4">
                                                <SearchX className="h-12 w-12 text-muted-foreground" />
                                                <h3 className="text-xl font-semibold">No Profiles Found</h3>
                                                <p className="text-muted-foreground">
                                                No tax profiles matched your search. <br />
                                                Try a different search term.
                                                </p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="block md:hidden space-y-4">
                      {paginatedProfiles.length > 0 ? (
                        paginatedProfiles.map((profile) => (
                           <Card key={profile.tpTIN} className="p-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-grow overflow-hidden">
                                        <p className="font-semibold">{getDisplayName(profile)}</p>
                                        <p className="text-sm text-muted-foreground font-mono">{profile.tpTIN}</p>
                                    </div>
                                    <div className="flex items-center gap-1 flex-shrink-0">
                                      <Button variant="ghost" size="icon" onClick={() => handleEdit(profile)} disabled={isDeleting && profileToDelete?.tpTIN === profile.tpTIN}>
                                        <FilePenLine className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                      </Button>
                                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteClick(profile)} disabled={isDeleting}>
                                        {isDeleting && profileToDelete?.tpTIN === profile.tpTIN ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash className="h-4 w-4" />}
                                        <span className="sr-only">Delete</span>
                                      </Button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                   <Badge variant={profile.entityType === 'Individual' ? 'secondary' : 'default'}>
                                        {profile.entityType}
                                    </Badge>
                                </div>
                            </Card>
                        ))
                      ) : (
                         <div className="h-48 text-center flex flex-col items-center justify-center gap-4">
                            <SearchX className="h-12 w-12 text-muted-foreground" />
                            <h3 className="text-xl font-semibold">No Profiles Found</h3>
                            <p className="text-muted-foreground text-sm px-4">
                                No tax profiles matched your search. Try a different term.
                            </p>
                         </div>
                      )}
                    </div>
                    
                    {/* Pagination */}
                    {!noResults && (
                      <div className="flex items-center justify-end space-x-2 py-4 px-0 md:px-4">
                          <span className="text-sm text-muted-foreground">
                              Page {totalPages > 0 ? currentPage : 0} of {totalPages}
                          </span>
                          <Button
                              variant="outline"
                              size="sm"
                              onClick={handlePreviousPage}
                              disabled={currentPage <= 1}
                          >
                              Previous
                          </Button>
                          <Button
                              variant="outline"
                              size="sm"
                              onClick={handleNextPage}
                              disabled={currentPage >= totalPages}
                          >
                              Next
                          </Button>
                      </div>
                    )}
                </>
              )}
            </CardContent>
          </Card>
      </div>
      
      <ProfileForm 
        isOpen={isFormOpen} 
        setIsOpen={setIsFormOpen} 
        profile={editingProfile}
        onSuccess={onSuccess}
      />

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
        itemName={profileToDelete ? getDisplayName(profileToDelete) : ''}
        itemType="tax profile"
      />
    </>
  );
}
