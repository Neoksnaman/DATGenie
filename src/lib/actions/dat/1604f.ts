
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWF } from '../../schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, quoteIfNotEmpty, getFormattedLastDay } from '@/lib/dat-utils';

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
            validationErrors.push(`${errorPrefix}: TIN '${originalTin}' is too short. It must be 9 digits.`);
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

    const hasLastName = String(processedRow[3]).trim().length > 0;
    const hasFirstName = String(processedRow[4]).trim().length > 0;
    const hasMiddleName = String(processedRow[5]).trim().length > 0;
    if ((hasFirstName && !hasLastName) || (!hasFirstName && hasLastName)) validationErrors.push(`${errorPrefix}: First Name and Last Name must be provided together.`);
    if (hasMiddleName && (!hasFirstName || !hasLastName)) validationErrors.push(`${errorPrefix}: If Middle Name is provided, First Name and Last Name are also required.`);

    return processedRow;
}


export async function generate1604FDatFile(file: File, profile: TaxProfile, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    const sheetNames = ["1604F_sched4", "1604F_sched5", "1604F_sched6"];
    const [
        { data: sched4DataRows, validationErrors: sched4FileErrors },
        { data: sched5DataRows, validationErrors: sched5FileErrors },
        { data: sched6DataRows, validationErrors: sched6FileErrors }
    ] = await Promise.all(sheetNames.map(sheetName => processExcelFile(file, sheetName)));

    const allFileErrors = [...sched4FileErrors, ...sched5FileErrors, ...sched6FileErrors]
        .filter(err => !err.includes('not found in the uploaded file.'));

    if (allFileErrors.length > 0) {
        return { ...defaultErrorResult, errors: allFileErrors };
    }

    const hasSched4Data = sched4DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const hasSched5Data = sched5DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const hasSched6Data = sched6DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    
    if (!hasSched4Data && !hasSched5Data && !hasSched6Data) {
        return { ...defaultErrorResult, errors: ["No data found in '1604F_sched4', '1604F_sched5', or '1604F_sched6' sheets."] };
    }

    const validationErrors: string[] = [];
    const reportingPeriod = getFormattedLastDay(parseInt(year, 10), parseInt(profile.monthSelect, 10));

    // Process Schedule 4
    const processedSched4Data = sched4DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 4 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateCorporateIndividualNames(processedRow, errorPrefix, validationErrors);
            
            const classificationCode = String(processedRow[6] || '').toUpperCase().replace(/\s/g, '');
            processedRow[6] = classificationCode;
            const allowedClassifications = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            if (!classificationCode) validationErrors.push(`${errorPrefix}: Classification Code is missing.`);
            else if (!allowedClassifications.includes(classificationCode)) validationErrors.push(`${errorPrefix}: Classification Code '${classificationCode}' is not valid.`);
            
            const atc = String(processedRow[7] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[7] = atc;
            
            const numericFields = [{ name: 'Income Payment', index: 8 }, { name: 'Rate', index: 9 }, { name: 'Withholding Tax', index: 10 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });
            
            if (parseFloat(processedRow[8]) <= 0) validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
            if (!atc) validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            else {
                const atcData = atcWF.find(item => item.atc === atc);
                if (!atcData) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 4.`);
                else if (parseFloat(processedRow[9]) !== atcData.rate) validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[9])}%.`);
            }
            
            return processedRow;
        });

    // Process Schedule 5
    const processedSched5Data = sched5DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 5 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            
            const nameFieldsInfo = [
                { name: 'Last Name', index: 2, maxLength: 30, required: true },
                { name: 'First Name', index: 3, maxLength: 30, required: true },
                { name: 'Middle Name', index: 4, maxLength: 30, required: false },
            ];
             nameFieldsInfo.forEach(field => {
                const result = sanitizeAndValidateString(processedRow[field.index], field.name, field.maxLength, field.required, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });
            
            const atc = String(processedRow[5] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[5] = atc;
            
            const numericFields = [{ name: 'Fringe Benefit', index: 6 }, { name: 'Grossed-up Value', index: 7 }, { name: 'Withholding Tax', index: 8 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (parseFloat(processedRow[6]) <= 0) validationErrors.push(`${errorPrefix}: Fringe Benefit must be greater than 0.`);
            if (parseFloat(processedRow[7]) <= 0) validationErrors.push(`${errorPrefix}: Grossed-up Value must be greater than 0.`);
            if (parseFloat(processedRow[8]) <= 0) validationErrors.push(`${errorPrefix}: Withholding Tax must be greater than 0.`);

            if (!atc) validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            else if (!["WF360", "WF330"].includes(atc)) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 5.`);
            
            return processedRow;
        });

    // Process Schedule 6
    const processedSched6Data = sched6DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 6 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateCorporateIndividualNames(processedRow, errorPrefix, validationErrors);
            
            const classificationCode = String(processedRow[6] || '').toUpperCase().replace(/\s/g, '');
            processedRow[6] = classificationCode;
            if (!classificationCode) validationErrors.push(`${errorPrefix}: Classification Code is missing.`);
            else if (!['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(classificationCode)) validationErrors.push(`${errorPrefix}: Classification Code '${classificationCode}' is not valid.`);
    
            const atc = String(processedRow[7] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[7] = atc;
            
            const result = sanitizeAndValidateNumber(processedRow[8], 'Income Payment', errorPrefix);
            if (result.error) validationErrors.push(result.error);
            processedRow[8] = result.value;
    
            if (parseFloat(processedRow[8]) <= 0) validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
    
            if (!atc) validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            else if (!atcWF.find(item => item.atc === atc)) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 6.`);
            
            return processedRow;
        });

    if (validationErrors.length > 0) return { ...defaultErrorResult, errors: validationErrors };

    const [mm, dd, yyyy] = reportingPeriod.split('/');
    const datFileName = `${profile.tpTIN}${profile.branchCode}${mm}${dd}${yyyy}1604F.DAT`;
    const reportTypeShort = "1604F";
    const drivePath = [profile.tpTIN, reportTypeShort, year];

    if (!overwrite) {
        const fileExists = await checkFileExists(datFileName, folderId, drivePath);
        if (fileExists) {
            return { ...defaultErrorResult, success: false, fileExists: true, fileName: datFileName };
        }
    }

    const mainHeader = ['H1604F', profile.tpTIN, profile.branchCode, reportingPeriod].join(',');
    const datContentParts: string[] = [mainHeader];

    let totalWithholdingTaxSched4 = 0;
    let totalWithholdingTaxSched5 = 0;
    let totalExemptIncomePaymentSched6 = 0;

    if (processedSched4Data.length > 0) {
        processedSched4Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched4Data.map((row, index) => `D4,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${index + 1},${row[0]},${row[1]},${quoteIfNotEmpty(row[2])},${quoteIfNotEmpty(row[3])},${quoteIfNotEmpty(row[4])},${quoteIfNotEmpty(row[5])},${row[6]},${row[7]},${row[8]},${row[9]},${row[10]}`).join('\n');
        const totalIncomePayment = processedSched4Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
        totalWithholdingTaxSched4 = processedSched4Data.reduce((acc, row) => acc + parseFloat(String(row[10])), 0);
        const footer = `C4,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${totalIncomePayment.toFixed(2)},${totalWithholdingTaxSched4.toFixed(2)}`;
        datContentParts.push(detailRows, footer);
    }
    
    if (processedSched5Data.length > 0) {
        processedSched5Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched5Data.map((row, index) => `D5,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${index + 1},${row[0]},${row[1]},${quoteIfNotEmpty(row[2])},${quoteIfNotEmpty(row[3])},${quoteIfNotEmpty(row[4])},${row[5]},${row[6]},${row[7]},${row[8]}`).join('\n');
        const totalFringeBenefit = processedSched5Data.reduce((acc, row) => acc + parseFloat(String(row[6])), 0);
        const totalGrossedUpValue = processedSched5Data.reduce((acc, row) => acc + parseFloat(String(row[7])), 0);
        totalWithholdingTaxSched5 = processedSched5Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
        const footer = `C5,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${totalFringeBenefit.toFixed(2)},${totalGrossedUpValue.toFixed(2)},${totalWithholdingTaxSched5.toFixed(2)}`;
        datContentParts.push(detailRows, footer);
    }

    if (processedSched6Data.length > 0) {
        processedSched6Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched6Data.map((row, index) => `D6,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${index + 1},${row[0]},${row[1]},${quoteIfNotEmpty(row[2])},${quoteIfNotEmpty(row[3])},${quoteIfNotEmpty(row[4])},${quoteIfNotEmpty(row[5])},${row[6]},${row[7]},${row[8]}`).join('\n');
        totalExemptIncomePaymentSched6 = processedSched6Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
        const footer = `C6,1604F,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${totalExemptIncomePaymentSched6.toFixed(2)}`;
        datContentParts.push(detailRows, footer);
    }

    const datContent = datContentParts.join('\n');

    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).catch(err => {
        console.error(`[Action:generate1604FDatFile] Background upload failed for ${datFileName}:`, err);
    });
    
    return {
        ...defaultErrorResult,
        success: true,
        datContent: datContent,
        fileName: datFileName,
        totalWithholdingTax: totalWithholdingTaxSched4,
        totalServices: totalWithholdingTaxSched5,
        totalExemptIncomePayment: totalExemptIncomePaymentSched6
    };
}
