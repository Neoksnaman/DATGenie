
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, getFormattedLastDay, quoteIfNotEmpty } from '@/lib/dat-utils';

export async function validateExcelForPurchases(formData: FormData): Promise<DatFileResult> {
    const file = formData.get('file') as File;
    const profileString = formData.get('profile') as string;
    const profile: TaxProfile = JSON.parse(profileString);
    const { tpTIN: tin } = profile;

    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    const { data: dataRows, validationErrors: fileErrors } = await processExcelFile(file, "vat_purchases");
    if (fileErrors.length > 0) {
        return { ...defaultErrorResult, success: false, errors: fileErrors };
    }

    const validationErrors: string[] = [];
    const processedData = dataRows.map((row, index) => {
        const originalRowNumber = index + 2;
        const errorPrefix = `Row ${originalRowNumber}`;
        const processedRow = [...row];

        if (String(processedRow[0] || '').trim()) {
            const originalTin = String(processedRow[0]);
            const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
            if (sanitizedTin.substring(0, 9) === tin) validationErrors.push(`${errorPrefix}: The TIN matches the selected profile's TIN. A company cannot have a purchase from itself.`);
            if (sanitizedTin.length < 9) validationErrors.push(`${errorPrefix}: TIN '${originalTin}' is too short. It must be at least 9 digits.`);
            processedRow[0] = sanitizedTin.substring(0, 9);
        } else {
            validationErrors.push(`${errorPrefix}: TIN is missing.`);
        }

        const nameFieldsInfo = [
            { name: 'Registered Name', index: 1, maxLength: 50, required: true },
            { name: 'Last Name', index: 2, maxLength: 30, required: false },
            { name: 'First Name', index: 3, maxLength: 30, required: false },
            { name: 'Middle Name', index: 4, maxLength: 30, required: false },
            { name: 'Address 1', index: 5, maxLength: 30, required: true },
            { name: 'Address 2', index: 6, maxLength: 30, required: true },
        ];
        nameFieldsInfo.forEach(field => {
            const result = sanitizeAndValidateString(processedRow[field.index], field.name, field.maxLength, field.required, errorPrefix);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });

        const hasFirstName = String(processedRow[3]).trim().length > 0;
        const hasLastName = String(processedRow[2]).trim().length > 0;
        const hasMiddleName = String(processedRow[4]).trim().length > 0;
        if ((hasFirstName && !hasLastName) || (!hasFirstName && hasLastName)) validationErrors.push(`${errorPrefix}: First Name and Last Name must be provided together.`);
        if (hasMiddleName && (!hasFirstName || !hasLastName)) validationErrors.push(`${errorPrefix}: If Middle Name is provided, First Name and Last Name are also required.`);

        const numericFields = [
            { name: 'Exempt Purchases', index: 7 }, { name: 'Zero-Rated Purchases', index: 8 },
            { name: 'Purchases of Services', index: 9 }, { name: 'Purchases of Capital Goods', index: 10 },
            { name: 'Purchases of Other Goods', index: 11 }, { name: 'Input Tax', index: 12 },
        ];
        numericFields.forEach(field => {
            const result = sanitizeAndValidateNumber(processedRow[field.index], `${errorPrefix}: ${field.name}`);
            if (result.error) validationErrors.push(result.error);
            processedRow[field.index] = result.value;
        });

        if (parseFloat(processedRow[7]) === 0 && parseFloat(processedRow[8]) === 0 && parseFloat(processedRow[9]) === 0 && parseFloat(processedRow[10]) === 0 && parseFloat(processedRow[11]) === 0) {
            validationErrors.push(`${errorPrefix}: At least one purchase amount must be greater than zero.`);
        }

        return processedRow;
    });

    if (validationErrors.length > 0) {
        return { ...defaultErrorResult, success: false, errors: validationErrors };
    }
    
    processedData.sort((a, b) => String(a[1]).localeCompare(String(b[1])));

    const totalInputTax = processedData.reduce((acc, row) => acc + parseFloat(row[12]), 0);

    return { ...defaultErrorResult, success: true, totalInputTax, processedData };
}

export async function generatePurchasesDatFile(
    processedData: any[][],
    profile: TaxProfile,
    month: string,
    year: string,
    nonCreditableInputTax: number,
    folderId: string,
    overwrite: boolean = false
): Promise<DatFileResult> {
     const { tpTIN: tin } = profile;
    const datFileName = `${tin}P${month}${year}.DAT`;
    const reportTypeShort = "Purchases";
    const drivePath = [tin, reportTypeShort, year];
    
    if (!overwrite) {
        const fileExists = await checkFileExists(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                success: false, fileExists: true, fileName: datFileName, datFile: null,
                datContent: null, error: null, errors: null, totalExempt: null, totalZeroRated: null,
                totalTaxableSales: null, totalOutputTax: null, totalServices: null, totalCapitalGoods: null,
                totalOtherGoods: null, totalInputTax: null,
                totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
                processedData: null
            };
        }
    }

    const lastDayDate = getFormattedLastDay(parseInt(year), parseInt(month));
    const address1 = [profile.subStreet, profile.street, profile.barangay].filter(Boolean).join(' ');
    const address2 = [profile.cityMunicipality, profile.province, profile.zipCode].filter(Boolean).join(' ');

    const detailRows = processedData.map(row => ['D', 'P', quoteIfNotEmpty(row[0]), quoteIfNotEmpty(row[1]), quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]), quoteIfNotEmpty(row[6]), row[7], row[8], row[9], row[10], row[11], row[12], tin, lastDayDate].join(',')).join('\n');
    const totalExempt = processedData.reduce((acc, row) => acc + parseFloat(row[7]), 0);
    const totalZeroRated = processedData.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    const totalServices = processedData.reduce((acc, row) => acc + parseFloat(row[9]), 0);
    const totalCapitalGoods = processedData.reduce((acc, row) => acc + parseFloat(row[10]), 0);
    const totalOtherGoods = processedData.reduce((acc, row) => acc + parseFloat(row[11]), 0);
    const totalInputTax = processedData.reduce((acc, row) => acc + parseFloat(row[12]), 0);
    const creditableInputTax = totalInputTax - nonCreditableInputTax;

    const headerRow = ['H', 'P', quoteIfNotEmpty(tin), quoteIfNotEmpty(profile.companyName), quoteIfNotEmpty(profile.lastName), quoteIfNotEmpty(profile.firstName), quoteIfNotEmpty(profile.middleName), quoteIfNotEmpty(profile.tradeName), quoteIfNotEmpty(address1), quoteIfNotEmpty(address2), totalExempt.toFixed(2), totalZeroRated.toFixed(2), totalServices.toFixed(2), totalCapitalGoods.toFixed(2), totalOtherGoods.toFixed(2), totalInputTax.toFixed(2), creditableInputTax.toFixed(2), nonCreditableInputTax.toFixed(2), profile.rdoCode, lastDayDate, profile.monthSelect].join(',');
    const datContent = `${headerRow}\n${detailRows}`;
    
    // Fire and forget
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).then(uploadedFile => {
        console.log(`[Action:generatePurchasesDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch(err => {
        console.error(`[Action:generatePurchasesDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return { 
        success: true, datContent, fileName: datFileName, datFile: null,
        totalExempt, totalZeroRated,
        totalServices, totalCapitalGoods, totalOtherGoods, totalInputTax,
        error: null, errors: null, totalTaxableSales: null, totalOutputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };
}


export async function createPurchasesDatFile(formData: FormData): Promise<DatFileResult> {
    const processedDataString = formData.get('processedData') as string | null;
    const profileString = formData.get('profile') as string | null;
    const month = formData.get('month') as string | null;
    const year = formData.get('year') as string | null;
    const nonCreditableInputTaxString = formData.get('nonCreditableInputTax') as string | null;
    const folderId = formData.get('folderId') as string | null;

    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };
    
    if (!processedDataString || !profileString || !month || !year || nonCreditableInputTaxString === null || !folderId) {
        return { ...defaultErrorResult, error: 'Missing required parameters for purchase file creation.' };
    }
    
    try {
        const processedData = JSON.parse(processedDataString);
        const profile: TaxProfile = JSON.parse(profileString);
        const nonCreditableInputTax = parseFloat(nonCreditableInputTaxString);

        return await generatePurchasesDatFile(processedData, profile, month, year, nonCreditableInputTax, folderId, false);

    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during DAT file creation.';
        console.error('[createPurchasesDatFile] CRITICAL ERROR:', e);
        return { ...defaultErrorResult, error: `Creation failed: ${errorMessage}` };
    }
}
