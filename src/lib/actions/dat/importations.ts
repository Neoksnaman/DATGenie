
'use server';

import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, getFormattedLastDay, quoteIfNotEmpty } from '@/lib/dat-utils';
import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';

function validateDate(input: any, fieldName: string, errorPrefix: string, reportingMonth: number, reportingYear: number): { value: string, error: string | null } {
    const value = String(input || '').trim();
    const fullFieldName = `${errorPrefix}: ${fieldName}`;

    if (!value) {
        return { value: '', error: `${fullFieldName} is required.` };
    }
    
    const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    if (!dateRegex.test(value)) {
        return { value: value, error: `${fieldName} has an invalid date format. Please use MM/DD/YYYY.` };
    }
    
    const parts = value.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return { value: value, error: `${fieldName} has an invalid date format. Please use MM/DD/YYYY.` };
    }
    
    if (date.getFullYear() !== reportingYear || date.getMonth() + 1 !== reportingMonth) {
        return { value: value, error: `${fieldName} is not within the selected reporting period.` };
    }

    return { value: value, error: null };
}

export async function generateImportationDatFile(file: File, profile: TaxProfile, month: string, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };
    
    const reportingMonth = parseInt(month, 10);
    const reportingYear = parseInt(year, 10);

    const { data: dataRows, validationErrors: fileErrors } = await processExcelFile(file, "vat_import");
    if (fileErrors.length > 0) {
        return { ...defaultErrorResult, errors: fileErrors };
    }

    if (dataRows.length === 0) {
        return { ...defaultErrorResult, errors: ["No data found in the 'vat_import' sheet."] };
    }

    const validationErrors: string[] = [];
    const processedData = dataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Row ${originalRowNumber}`;
            const processedRow: any[] = [];
            
            const fieldValidations = [
                { name: 'Import Entry #', sanitizer: (val: any) => sanitizeAndValidateString(val, 'Import Entry #', 10, true, errorPrefix) },
                { name: 'Assessment Date', sanitizer: (val: any) => validateDate(val, 'Assessment Date', errorPrefix, reportingMonth, reportingYear) },
                { name: 'Company Name', sanitizer: (val: any) => sanitizeAndValidateString(val, 'Company Name', 50, true, errorPrefix) },
                { name: 'Import Date', sanitizer: (val: any) => validateDate(val, 'Import Date', errorPrefix, reportingMonth, reportingYear) },
                { name: 'Country of Origin', sanitizer: (val: any) => sanitizeAndValidateString(val, 'Country of Origin', 30, true, errorPrefix) },
                { name: 'Dutiable Value', sanitizer: (val: any) => sanitizeAndValidateNumber(val, 'Dutiable Value', errorPrefix) },
                { name: 'Other Charges', sanitizer: (val: any) => sanitizeAndValidateNumber(val, 'Other Charges', errorPrefix) },
                { name: 'Exempt', sanitizer: (val: any) => sanitizeAndValidateNumber(val, 'Exempt', errorPrefix) },
                { name: 'Taxable', sanitizer: (val: any) => sanitizeAndValidateNumber(val, 'Taxable', errorPrefix) },
                { name: 'Input VAT', sanitizer: (val: any) => sanitizeAndValidateNumber(val, 'Input VAT', errorPrefix) },
                { name: 'Receipt #', sanitizer: (val: any) => sanitizeAndValidateString(val, 'Receipt #', 15, true, errorPrefix) },
                { name: 'Payment Date', sanitizer: (val: any) => validateDate(val, 'Payment Date', errorPrefix, reportingMonth, reportingYear) },
            ];

            fieldValidations.forEach((validation, i) => {
                const result = validation.sanitizer(row[i]);
                if (result.error) {
                    validationErrors.push(result.error);
                }
                processedRow[i] = result.value;
            });

            const dutiableValue = parseFloat(processedRow[5] || '0');
            const otherCharges = parseFloat(processedRow[6] || '0');
            const exempt = parseFloat(processedRow[7] || '0');
            const taxable = parseFloat(processedRow[8] || '0');

            const sumOfCharges = dutiableValue + otherCharges;
            const sumOfBasis = exempt + taxable;

            if (Math.abs(sumOfCharges - sumOfBasis) > 0.01) {
                validationErrors.push(`${errorPrefix} has an invalid sum. The total of Dutiable Value and Other Charges must equal the total of Taxable and Exempt amounts.`);
            }

            return processedRow;
        });

    if (validationErrors.length > 0) {
        return { ...defaultErrorResult, errors: validationErrors };
    }
    
    processedData.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
    
    const lastDayOfMonth = getFormattedLastDay(reportingYear, reportingMonth);
    const { tpTIN: tin } = profile;
    const datFileName = `${tin}I${month.padStart(2, '0')}${year}.DAT`;
    const reportTypeShort = "Importations";
    const drivePath = [tin, reportTypeShort, year];

    if (!overwrite) {
        const fileExists = await checkFileExists(datFileName, folderId, drivePath);
        if (fileExists) {
            return {
                ...defaultErrorResult,
                success: false,
                fileExists: true,
                fileName: datFileName,
            };
        }
    }


    const detailRows = processedData.map(row => [
        'D',
        'I',
        quoteIfNotEmpty(row[0]), // importEntry#
        row[1],                   // assessmentDate
        quoteIfNotEmpty(row[2]), // companyName
        row[3],                   // importDate
        quoteIfNotEmpty(row[4]), // countryOrigin
        row[5],                   // dutiableValue
        row[6],                   // otherCharges
        row[7],                   // exempt
        row[8],                   // taxable
        row[9],                   // inputVAT
        quoteIfNotEmpty(row[10]),// receipt#
        row[11],                  // paymentDate
        tin,
        lastDayOfMonth
    ].join(',')).join('\n');
    
    const totalDutiableValue = processedData.reduce((acc, row) => acc + parseFloat(row[5]), 0);
    const totalOtherCharges = processedData.reduce((acc, row) => acc + parseFloat(row[6]), 0);
    const totalExempt = processedData.reduce((acc, row) => acc + parseFloat(row[7]), 0);
    const totalTaxable = processedData.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    const totalInputVAT = processedData.reduce((acc, row) => acc + parseFloat(row[9]), 0);

    const address1 = [profile.subStreet, profile.street, profile.barangay].filter(Boolean).join(' ');
    const address2 = [profile.cityMunicipality, profile.province, profile.zipCode].filter(Boolean).join(' ');
    const registeredName = profile.entityType === 'Individual' ? '' : profile.companyName;

    const headerRow = [
        'H',
        'I',
        profile.tpTIN,
        quoteIfNotEmpty(registeredName),
        quoteIfNotEmpty(profile.lastName),
        quoteIfNotEmpty(profile.firstName),
        quoteIfNotEmpty(profile.middleName),
        quoteIfNotEmpty(profile.tradeName),
        quoteIfNotEmpty(address1),
        quoteIfNotEmpty(address2),
        totalDutiableValue.toFixed(2),
        totalOtherCharges.toFixed(2),
        totalExempt.toFixed(2),
        totalTaxable.toFixed(2),
        totalInputVAT.toFixed(2),
        profile.rdoCode,
        lastDayOfMonth,
        profile.monthSelect,
    ].join(',');
    
    const datContent = `${headerRow}\n${detailRows}`;
    
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).then(uploadedFile => {
        console.log(`[Action:generateImportationDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch(err => {
        console.error(`[Action:generateImportationDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        fileName: datFileName,
        datContent: datContent,
        totalExempt: totalExempt,
        totalTaxableSales: totalTaxable, // Using totalTaxableSales to represent Total Taxable for consistency in preview
        totalInputTax: totalInputVAT,
    };
}

