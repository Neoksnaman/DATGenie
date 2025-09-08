'use server';

import type { TaxProfile } from '@/lib/schemas';
import { TaxProfileSchema, MutationResultSchema } from '@/lib/schemas';
import { getAllHeaderDataFromSheet, appendHeaderDataToSheet, updateHeaderDataInSheet, deleteHeaderDataRowInSheet } from '../googlesheets';
import { z } from 'zod';

const TaxProfileResultSchema = z.object({
  success: z.boolean(),
  data: z.array(TaxProfileSchema).nullable(),
  error: z.string().nullable(),
});
type TaxProfileResult = z.infer<typeof TaxProfileResultSchema>;

export async function getUserHeaderData(databaseId: string): Promise<TaxProfileResult> {
  try {
    if (!databaseId) {
      return { success: false, data: null, error: 'Database ID is required.' };
    }
    const headerData = await getAllHeaderDataFromSheet(databaseId);
    return { success: true, data: headerData, error: null };
  } catch (error) {
    console.error('Error fetching header data:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, data: null, error: `Failed to fetch header data: ${errorMessage}` };
  }
}


type MutationResult = z.infer<typeof MutationResultSchema>;

function transformToUppercase(data: TaxProfile): TaxProfile {
  const uppercasedData: { [key: string]: any } = {};
  for (const key in data) {
    const value = data[key as keyof TaxProfile];
    if (typeof value === 'string' && key !== 'entityType' && key !== 'cycleType' && key !== 'monthSelect' && key !== 'rdoCode') {
      uppercasedData[key] = value.toUpperCase();
    } else {
      uppercasedData[key] = value;
    }
  }
  return uppercasedData as TaxProfile;
}

export async function addTaxProfile(profileData: TaxProfile, databaseId: string): Promise<MutationResult> {
  try {
    const validatedData = TaxProfileSchema.parse(profileData);

    const existingProfiles = await getAllHeaderDataFromSheet(databaseId);
    const tinExists = existingProfiles.some(p => p.tpTIN === validatedData.tpTIN);

    if (tinExists) {
        return { 
            success: false, 
            error: 'This TIN already has a profile. Please check your data or refresh the page.', 
            data: null 
        };
    }

    const uppercasedData = transformToUppercase(validatedData);
    await appendHeaderDataToSheet(uppercasedData, databaseId);
    return { success: true, error: null, data: uppercasedData };
  } catch (e) {
    console.error('Error adding tax profile:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to add profile: ${errorMessage}`, data: null };
  }
}


export async function updateTaxProfile(profileData: TaxProfile, databaseId: string): Promise<MutationResult> {
  try {
    const validatedData = TaxProfileSchema.parse(profileData);
    const uppercasedData = transformToUppercase(validatedData);
    await updateHeaderDataInSheet(uppercasedData, databaseId);
    return { success: true, error: null, data: uppercasedData };
  } catch (e) {
    console.error('Error updating tax profile:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to update profile: ${errorMessage}`, data: null };
  }
}

const SimpleResultSchema = z.object({
    success: z.boolean(),
    error: z.string().nullable(),
});
type SimpleResult = z.infer<typeof SimpleResultSchema>;

export async function deleteTaxProfile(tpTIN: string, databaseId: string): Promise<SimpleResult> {
    try {
        await deleteHeaderDataRowInSheet(tpTIN, databaseId);
        return { success: true, error: null };
    } catch (e) {
        console.error('Error deleting tax profile:', e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to delete profile: ${errorMessage}` };
    }
}
