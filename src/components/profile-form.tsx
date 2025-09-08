
'use client';

import { useTransition, useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react';
import { addTaxProfile, updateTaxProfile } from '@/lib/actions/profiles';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import type { TaxProfile } from '@/lib/schemas';
import { TaxProfileSchema } from '@/lib/schemas';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { cn } from '@/lib/utils';
import { useUser } from '@/hooks/use-user';


interface ProfileFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  profile: TaxProfile | null;
  onSuccess: (profile: TaxProfile, isNew: boolean) => void;
}

const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }
];

const rdoCodes = [
    '001', '002', '003', '004', '005', '006', '007', '008', '009', '010',
    '011', '012', '013', '014', '015', '016', '17A', '17B', '018', '019',
    '020', '21A', '21B', '022', '23A', '23B', '024', '25A', '25B', '026',
    '027', '028', '029', '030', '031', '032', '033', '034', '035', '036',
    '037', '038', '039', '040', '041', '042', '043', '43A', '43B', '044',
    '045', '046', '047', '048', '049', '050', '051', '052', '53A', '53B',
    '54A', '54B', '055', '056', '057', '058', '059', '060', '061', '062',
    '063', '064', '065', '066', '067', '068', '069', '070', '071', '072',
    '073', '074', '075', '076', '077', '078', '079', '080', '081', '082',
    '083', '084', '085', '086', '087', '088', '089', '090', '091', '092',
    '93A', '93B', '094', '095', '096', '097', '098', '099', '100', '101',
    '102', '103', '104', '105', '106', '107', '108', '109', '110', '111',
    '112', '113', '114', '115', '116', '117', '118', '119', '120', '121',
    '122', '123', '124', '125', '126', '127', '132'
];

const defaultValues: TaxProfile = {
    tpTIN: '',
    branchCode: '0000',
    rdoCode: '',
    entityType: 'Individual',
    cycleType: 'calendar',
    monthSelect: '12',
    companyName: '',
    lastName: '',
    firstName: '',
    middleName: '',
    tradeName: '',
    subStreet: '',
    street: '',
    barangay: '',
    cityMunicipality: '',
    province: '',
    zipCode: '',
};

export function ProfileForm({ isOpen, setIsOpen, profile, onSuccess }: ProfileFormProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { user } = useUser();

  const form = useForm<TaxProfile>({
    resolver: zodResolver(TaxProfileSchema),
    defaultValues: profile || defaultValues,
  });

  useEffect(() => {
    if (isOpen) {
        form.reset(profile || defaultValues);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, isOpen]);

  const entityType = form.watch('entityType');
  const cycleType = form.watch('cycleType');

  useEffect(() => {
    if (cycleType === 'calendar') {
        form.setValue('monthSelect', '12');
    }
  }, [cycleType, form]);

  const onSubmit: SubmitHandler<TaxProfile> = (data) => {
    startTransition(async () => {
        if (!user?.databaseId) {
            toast({ title: 'Error', description: 'User session not found. Please log in again.', variant: 'destructive' });
            return;
        }
        
        const isNew = !profile;
        const result = isNew
            ? await addTaxProfile(data, user.databaseId)
            : await updateTaxProfile(data, user.databaseId);
        
        if (result.success && result.data) {
            toast({
                title: isNew ? 'Profile Created!' : 'Profile Updated!',
                description: `Profile for ${data.entityType === 'Individual' ? `${data.firstName} ${data.lastName}` : data.companyName} has been saved.`,
            });
            onSuccess(result.data, isNew);
            setIsOpen(false);
        } else {
            toast({
                title: 'Operation Failed',
                description: result.error,
                variant: 'destructive',
            });
        }
    });
  };
  
  const inputStyles = "bg-slate-100";
  const sanitizeAlphanumeric = (value: string) => value.replace(/[^a-zA-Z0-9\s]/g, '');
  const requiredMark = <span className="text-destructive">*</span>;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-black">{profile ? 'Edit' : 'Create'} Tax Profile</DialogTitle>
          <DialogDescription className="text-slate-600">
            Fill in the details below to {profile ? 'update the' : 'create a new'} tax profile. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="max-h-[60vh] overflow-y-auto pr-4 pl-1 space-y-4">
              <FormField
                control={form.control}
                name="entityType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-black">Entity Type {requiredMark}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Individual" id="individual" />
                          </FormControl>
                          <FormLabel htmlFor="individual" className="font-normal text-black">Individual</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Non-Individual" id="non-individual"/>
                          </FormControl>
                          <FormLabel htmlFor="non-individual" className="font-normal text-black">Non-Individual</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <FormField control={form.control} name="tpTIN" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Taxpayer Identification Number {requiredMark}</FormLabel>
                      <FormControl><Input placeholder="123456789" {...field} className={inputStyles} readOnly={!!profile} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                 <FormField control={form.control} name="branchCode" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Branch Code {requiredMark}</FormLabel>
                      <FormControl><Input placeholder="0000" {...field} className={inputStyles} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                 <FormField control={form.control} name="rdoCode" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">RDO Code {requiredMark}</FormLabel>
                      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                        <PopoverTrigger asChild>
                           <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn("w-full justify-between", !field.value && "text-muted-foreground", inputStyles)}
                            >
                              {field.value
                                ? rdoCodes.find(
                                    (code) => code === field.value
                                  )
                                : "Select an RDO code"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search RDO code..." />
                            <CommandList>
                              <CommandEmpty>No RDO code found.</CommandEmpty>
                              <CommandGroup>
                                {rdoCodes.map((code) => (
                                  <CommandItem
                                    value={code}
                                    key={code}
                                    onSelect={() => {
                                      form.setValue("rdoCode", code)
                                      setPopoverOpen(false)
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        code === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {code}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              {entityType === 'Individual' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem><FormLabel className="text-black">First Name {requiredMark}</FormLabel><FormControl><Input {...field} onChange={(e) => field.onChange(sanitizeAlphanumeric(e.target.value))} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="middleName" render={({ field }) => (
                    <FormItem><FormLabel className="text-black">Middle Name {requiredMark}</FormLabel><FormControl><Input {...field} onChange={(e) => field.onChange(sanitizeAlphanumeric(e.target.value))} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem><FormLabel className="text-black">Last Name {requiredMark}</FormLabel><FormControl><Input {...field} onChange={(e) => field.onChange(sanitizeAlphanumeric(e.target.value))} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
              ) : (
                <FormField control={form.control} name="companyName" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Company Name {requiredMark}</FormLabel><FormControl><Input {...field} onChange={(e) => field.onChange(sanitizeAlphanumeric(e.target.value))} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
              )}
              
              <FormField control={form.control} name="tradeName" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Trade Name {requiredMark}</FormLabel><FormControl><Input {...field} onChange={(e) => field.onChange(sanitizeAlphanumeric(e.target.value))} className={inputStyles} /></FormControl><FormMessage /></FormItem>
              )} />
              
              <h3 className="text-lg font-medium pt-4 text-black">Registered Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField control={form.control} name="subStreet" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Unit/Floor/Substreet</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="street" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Street {requiredMark}</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="barangay" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Barangay {requiredMark}</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField control={form.control} name="cityMunicipality" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">City/Municipality {requiredMark}</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="province" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Province {requiredMark}</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="zipCode" render={({ field }) => (
                  <FormItem><FormLabel className="text-black">Zip Code {requiredMark}</FormLabel><FormControl><Input {...field} className={inputStyles} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              
              <h3 className="text-lg font-medium pt-4 text-black">Taxpayer Type</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="cycleType" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Cycle Type {requiredMark}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl><SelectTrigger className={inputStyles}><SelectValue placeholder="Select a cycle type" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="calendar">Calendar</SelectItem>
                            <SelectItem value="fiscal">Fiscal</SelectItem>
                          </SelectContent>
                        </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="monthSelect" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Fiscal Year End Month {requiredMark}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} disabled={cycleType === 'calendar'}>
                          <FormControl><SelectTrigger className={inputStyles}><SelectValue placeholder="Select a month" /></SelectTrigger></FormControl>
                          <SelectContent>
                            {months.map(month => <SelectItem key={month.name} value={month.value}>{month.name}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

            </div>
            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {profile ? 'Save Changes' : 'Create Profile'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
