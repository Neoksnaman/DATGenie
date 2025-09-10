
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWE, atcExempt } from '@/lib/schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, quoteIfNotEmpty } from '@/lib/dat-utils';

export async function generate1601EQDatFile(file: File, profile: TaxProfile, month: string, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const { tpTIN: tin, branchCode } = profile;
    const defaultErrorResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };
    
    const { data: sched1DataRows, validationErrors: sched1FileErrors } = await processExcelFile(file, "1601EQ_sched1");
    if (sched1FileErrors.length > 0) return { ...defaultErrorResult, errors: sched1FileErrors };

    const { data: sched2DataRows, validationErrors: sched2FileErrors } = await processExcelFile(file, "1601EQ_sched2");
    if (sched2FileErrors.length > 0) return { ...defaultErrorResult, errors: sched2FileErrors };

    const sched1HasData = sched1DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const sched2HasData = sched2DataRows.some(row => row.some(cell => String(cell).trim() !== ''));

    if (!sched1HasData && !sched2HasData) {
        return { ...defaultErrorResult, errors: ["No data found in Schedule 1 or Schedule 2 sheets."] };
    }

    const validationErrors: string[] = [];

    // Process Schedule 1 (Taxable)
    const processedSched1Data = sched1DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Schedule 1 Row ${originalRowNumber}`;
            const processedRow = [...row];
            
            if (String(processedRow[0] || '').trim()) {
                const originalTin = String(processedRow[0]);
                const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
                if (sanitizedTin === '000000000') validationErrors.push(`${errorPrefix}: Invalid TIN '000000000'.`);
                if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`${errorPrefix}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
                processedRow[0] = sanitizedTin;
            } else {
                 processedRow[0] = '';
            }
            
            let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
            processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
            
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

            const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[6] = atc;
            
            const numericFields = [{ name: 'Rate', index: 7 }, { name: 'Income Payment', index: 8 }, { name: 'Withholding Tax', index: 9 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (parseFloat(processedRow[8]) <= 0) {
                validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
            }

            if (atc) {
                const atcData = atcWE.find(item => item.atc === atc);
                if (atcData) {
                    if (parseFloat(processedRow[7]) !== atcData.rate) {
                        validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[7])}%.`);
                    }
                } else {
                    validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 1.`);
                }
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });

    // Process Schedule 2 (Exempt)
    const processedSched2Data = sched2DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Schedule 2 Row ${originalRowNumber}`;
            const processedRow = [...row];

            if (String(processedRow[0] || '').trim()) {
                const originalTin = String(processedRow[0]);
                const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
                if (sanitizedTin === '000000000') validationErrors.push(`${errorPrefix}: Invalid TIN '000000000'.`);
                if (sanitizedTin.length > 0 && sanitizedTin.length < 9) validationErrors.push(`${errorPrefix}: TIN '${originalTin}' is too short. It must be 9 digits if provided.`);
                processedRow[0] = sanitizedTin;
            } else {
                 processedRow[0] = '';
            }
            
            let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
            processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";

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
                if (!atcData) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 2.`);
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });

    if (validationErrors.length > 0) return { ...defaultErrorResult, errors: validationErrors };
    
    // All validations passed, now check for existing file
    const datFileName = `${tin}${branchCode}${month.padStart(2, '0')}${year}1601EQ.DAT`;
    const reportTypeShort = "1601EQ";
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

    processedSched1Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
    processedSched2Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));

    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;
    let datContentParts: string[] = [];
    
    // Header Row
    const taxpayerName = profile.entityType === 'Individual'
        ? `${profile.lastName} ${profile.firstName} ${profile.middleName}`
        : profile.companyName;

    const mainHeader = ['HQAP', 'H1601EQ', profile.tpTIN, profile.branchCode, quoteIfNotEmpty(taxpayerName), reportingPeriod, profile.rdoCode].join(',');
    datContentParts.push(mainHeader);

    let totalTaxableIncomePayment = 0;
    let totalWithholdingTax = 0;
    let totalExemptIncomePayment = 0;

    // Schedule 1 Content
    if (processedSched1Data.length > 0) {
        const detailRows1 = processedSched1Data.map((row, index) => ['D1', '1601EQ', index + 1, row[0], row[1], quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]), reportingPeriod, row[6], row[7], row[8], row[9]].join(',')).join('\n');
        totalTaxableIncomePayment = processedSched1Data.reduce((acc, row) => acc + parseFloat(row[8]), 0);
        totalWithholdingTax = processedSched1Data.reduce((acc, row) => acc + parseFloat(row[9]), 0);
        const footerRow1 = ['C1', '1601EQ', profile.tpTIN, profile.branchCode, reportingPeriod, totalTaxableIncomePayment.toFixed(2), totalWithholdingTax.toFixed(2)].join(',');
        datContentParts.push(detailRows1, footerRow1);
    }

    // Schedule 2 Content
    if (processedSched2Data.length > 0) {
        const detailRows2 = processedSched2Data.map((row, index) => ['D2', '1601EQ', index + 1, row[0], row[1], quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]), reportingPeriod, row[6], row[7]].join(',')).join('\n');
        totalExemptIncomePayment = processedSched2Data.reduce((acc, row) => acc + parseFloat(row[7]), 0);
        const footerRow2 = ['C2', '1601EQ', profile.tpTIN, profile.branchCode, reportingPeriod, totalExemptIncomePayment.toFixed(2)].join(',');
        datContentParts.push(detailRows2, footerRow2);
    }

    const datContent = datContentParts.join('\n');
    
    // Fire and forget
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).then(uploadedFile => {
        console.log(`[Action:generate1601EQDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch(err => {
        console.error(`[Action:generate1601EQDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        datContent,
        fileName: datFileName,
        datFile: null,
        totalTaxableIncomePayment,
        totalExemptIncomePayment,
        totalWithholdingTax,
    };
}

    