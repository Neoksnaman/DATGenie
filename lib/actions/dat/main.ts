
'use server';

import type { TaxProfile } from '@/lib/schemas';
import type { DatFileResult } from '@/lib/dat-utils';
import { generateSalesDatFile } from './sales';
import { validateExcelForPurchases, createPurchasesDatFile } from './purchases';
import { generate1601EQDatFile } from './1601eq';
import { generate1601FQDatFile } from './1601fq';
import { validateAndProcessSAWT } from './sawt';

export async function convertExcelToDat(formData: FormData): Promise<DatFileResult> {
    const file = formData.get('file') as File | null;
    const reportType = formData.get('reportType') as string | null;
    const month = formData.get('month') as string | null;
    const year = formData.get('year') as string | null;
    const profileString = formData.get('profile') as string | null;
    const folderId = formData.get('folderId') as string | null;
    const schedule = formData.get('schedule') as string | null;

    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null,
    };

    if (!file || !reportType || !month || !year || !profileString || !folderId) {
        return { ...defaultErrorResult, error: 'Missing required parameters for conversion.' };
    }

    try {
        const profile: TaxProfile = JSON.parse(profileString);
        if (reportType === "Summary of Sales (SLS)") {
            return await generateSalesDatFile(file, profile, month, year, folderId, false);
        }
        if (reportType === "Summary of Purchases (SLP)") {
            return await validateExcelForPurchases(formData);
        }
        if (reportType === "1601-EQ (Schedule 1 and 2)") {
            return await generate1601EQDatFile(file, profile, month, year, folderId, false);
        }
        if (reportType === "1601-FQ (Schedule 1, 2, and 3)") {
            return await generate1601FQDatFile(file, profile, month, year, folderId, false);
        }
        if (reportType === "Summary Alphalist of Withholding Tax (SAWT)") {
            if (!schedule) {
                return { ...defaultErrorResult, error: 'SAWT schedule is missing.' };
            }
            const result = await validateAndProcessSAWT(formData, false);
            if (result.success) {
                 return { ...result };
            }
            return result;
        }
        return { ...defaultErrorResult, error: `Report type "${reportType}" is not yet supported.` };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during conversion.';
        console.error('[convertExcelToDat] CRITICAL ERROR:', e);
        return { ...defaultErrorResult, error: `Conversion failed: ${errorMessage}` };
    }
}


export async function overwriteDatFile(formData: FormData): Promise<DatFileResult> {
    const file = formData.get('file') as File | null;
    const reportType = formData.get('reportType') as string | null;
    const month = formData.get('month') as string | null;
    const year = formData.get('year') as string | null;
    const profileString = formData.get('profile') as string | null;
    const folderId = formData.get('folderId') as string | null;
    const processedDataString = formData.get('processedData') as string | null;
    const nonCreditableTaxString = formData.get('nonCreditableInputTax') as string | null;
    const schedule = formData.get('schedule') as string | null;

    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null,
    };

    if (!reportType || !month || !year || !profileString || !folderId) {
        return { ...defaultErrorResult, error: 'Missing required parameters for overwrite.' };
    }
     const profile: TaxProfile = JSON.parse(profileString);

    try {
        if (reportType === "Summary of Sales (SLS)") {
            if (!file) return { ...defaultErrorResult, error: 'Missing file for overwrite.' };
            return await generateSalesDatFile(file, profile, month, year, folderId, true);
        }
        if (reportType === "Summary of Purchases (SLP)") {
            if (!processedDataString || nonCreditableTaxString === null) return { ...defaultErrorResult, error: 'Missing processed data for overwrite.' };
            const processedData = JSON.parse(processedDataString);
            const nonCreditableInputTax = parseFloat(nonCreditableTaxString);
            return await generatePurchasesDatFile(processedData, profile, month, year, nonCreditableInputTax, folderId, true);
        }
        if (reportType === "1601-EQ (Schedule 1 and 2)") {
             if (!file) return { ...defaultErrorResult, error: 'Missing file for overwrite.' };
             return await generate1601EQDatFile(file, profile, month, year, folderId, true);
        }
         if (reportType === "1601-FQ (Schedule 1, 2, and 3)") {
             if (!file) return { ...defaultErrorResult, error: 'Missing file for overwrite.' };
             return await generate1601FQDatFile(file, profile, month, year, folderId, true);
        }
        if (reportType === "Summary Alphalist of Withholding Tax (SAWT)") {
            if (!file || !schedule) return { ...defaultErrorResult, error: 'Missing file or schedule for SAWT overwrite.' };
            return await validateAndProcessSAWT(formData, true);
        }

        return { ...defaultErrorResult, error: `Report type "${reportType}" is not yet supported for overwrite.` };
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during overwrite.';
        console.error('[overwriteDatFile] CRITICAL ERROR:', e);
        return { ...defaultErrorResult, error: `Overwrite failed: ${errorMessage}` };
    }
}
