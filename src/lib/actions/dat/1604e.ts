
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWE, atcExempt } from '@/lib/schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, getFormattedLastDay, quoteIfNotEmpty } from '@/lib/dat-utils';

/**
 * Validates common fields for a row in a schedule.
 * @param row - The data row to validate.
 * @param errorPrefix - The prefix for validation error messages.
 * @param validationErrors - An array to push validation errors into.
 * @returns The processed row.
 */
function validateCommonFields(row: any[], errorPrefix: string, validationErrors: string[]): any[] {
    const processedRow = [...row];

    if (String(processedRow[0] || '').trim()) {
        const originalTin = String(processedRow[0]);
        const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
        
        if (sanitizedTin.length > 0 && sanitizedTin.length < 9) {
            validationErrors.push(`${errorPrefix}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
        }
        if (sanitizedTin === '000000000') {
            validationErrors.push(`${errorPrefix}: Invalid TIN '000000000'.`);
        }
        processedRow[0] = sanitizedTin;
    } else {
         processedRow[0] = '';
    }
    
    let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
    processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";

    return processedRow;
}

/**
 * Validates name fields for corporation/individual.
 * @param row - The data row containing name fields.
 * @param errorPrefix - The prefix for validation error messages.
 * @param validationErrors - An array to push validation errors into.
 * @returns The processed row with sanitized names.
 */
function validateCorporateIndividualNames(row: any[], errorPrefix: string, validationErrors: string[]): any[] {
    const processedRow = [...row];
    const nameFieldsInfo = [
        { name: 'Registered Name', index: 2, maxLength: 50, required: true },
        { name: 'Last Name', index: 3, maxLength: 30, required: false },
        { name: 'First Name', index: 4, maxLength: 30, required: false },
        { name: 'Middle Name', index: 5, maxLength: 30, required: false },
    ];
    nameFieldsInfo.forEach(field => {
        const result = sanitizeAndValidateString(processedRow[field.index], field.name, field.maxLength, field.required, errorPrefix);
        if (result.error) validationErrors.push(result.error);
        processedRow[field.index] = result.value;
    });

    const hasFirstName = String(processedRow[4]).trim().length > 0;
    const hasLastName = String(processedRow[3]).trim().length > 0;
    const hasMiddleName = String(processedRow[5]).trim().length > 0;
    if ((hasFirstName && !hasLastName) || (!hasFirstName && hasLastName)) validationErrors.push(`${errorPrefix}: First Name and Last Name must be provided together.`);
    if (hasMiddleName && (!hasFirstName || !hasLastName)) validationErrors.push(`${errorPrefix}: If Middle Name is provided, First Name and Last Name are also required.`);

    return processedRow;
}


export async function generate1604EDatFile(file: File, profile: TaxProfile, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    const { data: sched3DataRows, validationErrors: sched3FileErrors } = await processExcelFile(file, "1604E_sched3");
    if (sched3FileErrors.length > 0 && sched3FileErrors[0] !== 'Sheet "1604E_sched3" not found in the uploaded file.') {
      return { ...defaultErrorResult, errors: sched3FileErrors };
    }

    const { data: sched4DataRows, validationErrors: sched4FileErrors } = await processExcelFile(file, "1604E_sched4");
    if (sched4FileErrors.length > 0 && sched4FileErrors[0] !== 'Sheet "1604E_sched4" not found in the uploaded file.') {
      return { ...defaultErrorResult, errors: sched4FileErrors };
    }

    const sched3HasData = sched3DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const sched4HasData = sched4DataRows.some(row => row.some(cell => String(cell).trim() !== ''));

    if (!sched3HasData && !sched4HasData) {
        return { ...defaultErrorResult, errors: ["No data found in '1604E_sched3' or '1604E_sched4' sheets."] };
    }

    const validationErrors: string[] = [];
    const reportingPeriod = getFormattedLastDay(parseInt(year, 10), parseInt(profile.monthSelect, 10));

    // Process Schedule 3 (Taxable)
    const processedSched3Data = sched3DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 3 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateCorporateIndividualNames(processedRow, errorPrefix, validationErrors);
            
            const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[6] = atc;
            
            const numericFields = [{ name: 'Income Payment', index: 7 }, { name: 'Rate', index: 8 }, { name: 'Withholding Tax', index: 9 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (parseFloat(processedRow[7]) <= 0) {
                validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
            }

            if (atc) {
                const atcData = atcWE.find(item => item.atc === atc);
                if (atcData) {
                    if (parseFloat(processedRow[8]) !== atcData.rate) {
                        validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[8])}%.`);
                    }
                } else {
                    validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 3.`);
                }
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });

    // Process Schedule 4 (Exempt)
    const processedSched4Data = sched4DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 4 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateCorporateIndividualNames(processedRow, errorPrefix, validationErrors);

            const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[6] = atc;
            
            const result = sanitizeAndValidateNumber(processedRow[7], 'Income Payment', errorPrefix);
            if (result.error) validationErrors.push(result.error);
            processedRow[7] = result.value;
            
            if (parseFloat(processedRow[7]) <= 0) {
                validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
            }

            if (atc) {
                const atcData = atcExempt.find(item => item.atc === atc);
                if (!atcData) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 4.`);
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });


    if (validationErrors.length > 0) return { ...defaultErrorResult, errors: validationErrors };
    
    const [mm, dd, yyyy] = reportingPeriod.split('/');
    const datFileName = `${profile.tpTIN}${profile.branchCode}${mm}${dd}${yyyy}1604E.DAT`;
    const reportTypeShort = "1604E";
    const drivePath = [profile.tpTIN, reportTypeShort, year];

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
    
    const mainHeader = ['H1604E', profile.tpTIN, profile.branchCode, reportingPeriod].join(',');
    let datContentParts: string[] = [mainHeader];

    if (processedSched3Data.length > 0) {
        processedSched3Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched3Data.map((row, index) => [
                "D3", "1604E", profile.tpTIN, profile.branchCode, reportingPeriod, index + 1,
                row[0], row[1], quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]),
                row[6], row[7], row[8], row[9]
            ].join(',')).join('\n');
        
        const totalWithholdingTax = processedSched3Data.reduce((acc, row) => acc + parseFloat(String(row[9])), 0);
        const footerRow = ["C3", "1604E", profile.tpTIN, profile.branchCode, reportingPeriod, totalWithholdingTax.toFixed(2)].join(',');
        datContentParts.push(detailRows, footerRow);
    }
    
    if (processedSched4Data.length > 0) {
        processedSched4Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched4Data.map((row, index) => [
                "D4", "1604E", profile.tpTIN, profile.branchCode, reportingPeriod, index + 1,
                row[0], row[1], quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]),
                row[6], row[7]
            ].join(',')).join('\n');

        const totalExemptIncomePayment = processedSched4Data.reduce((acc, row) => acc + parseFloat(String(row[7])), 0);
        const footerRow = ["C4", "1604E", profile.tpTIN, profile.branchCode, reportingPeriod, totalExemptIncomePayment.toFixed(2)].join(',');
        datContentParts.push(detailRows, footerRow);
    }

    const datContent = datContentParts.join('\n');
    
    const totalWithholdingTax = processedSched3Data.reduce((acc, row) => acc + parseFloat(String(row[9])), 0);
    const totalExemptIncomePayment = processedSched4Data.reduce((acc, row) => acc + parseFloat(String(row[7])), 0);

    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).catch(err => {
        console.error(`[Action:generate1604EDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        fileName: datFileName,
        datContent: datContent,
        totalWithholdingTax,
        totalExemptIncomePayment,
    };
}
