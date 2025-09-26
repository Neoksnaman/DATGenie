
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWF } from '@/lib/schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, quoteIfNotEmpty } from '@/lib/dat-utils';

/**
 * Validates common fields (TIN, Branch Code) for a row.
 */
function validateCommonFields(row: any[], errorPrefix: string, validationErrors: string[]): any[] {
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
    
    return processedRow;
}

/**
 * Validates corporate and individual name fields.
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

/**
 * Validates individual name fields.
 */
function validateIndividualNames(row: any[], errorPrefix: string, validationErrors: string[]): any[] {
    const processedRow = [...row];
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
    return processedRow;
}


export async function generate1601FQDatFile(file: File, profile: TaxProfile, month: string, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const { tpTIN: tin, branchCode } = profile;
    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    const sheetNames = ["1601FQ_sched1", "1601FQ_sched2", "1601FQ_sched3"];
    const [
        { data: sched1DataRows, validationErrors: sched1FileErrors },
        { data: sched2DataRows, validationErrors: sched2FileErrors },
        { data: sched3DataRows, validationErrors: sched3FileErrors },
    ] = await Promise.all(sheetNames.map(sheetName => processExcelFile(file, sheetName)));

    const allFileErrors = [...sched1FileErrors, ...sched2FileErrors, ...sched3FileErrors]
        .filter(err => !err.includes('not found in the uploaded file.'));

    if (allFileErrors.length > 0) {
        return { ...defaultErrorResult, errors: allFileErrors };
    }
    
    const hasData = [sched1DataRows, sched2DataRows, sched3DataRows].some(data => data.length > 0 && data.some(row => row.some(cell => String(cell).trim() !== '')));

    if (!hasData) {
        return { ...defaultErrorResult, errors: ["No data found in any of the required 1601-FQ schedule sheets."] };
    }

    const validationErrors: string[] = [];
    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;

    // Process Schedule 1
    const processedSched1Data = sched1DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 1 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateCorporateIndividualNames(processedRow, errorPrefix, validationErrors);
            
            const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[6] = atc;
            
            const numericFields = [{ name: 'Rate', index: 7 }, { name: 'Income Payment', index: 8 }, { name: 'Withholding Tax', index: 9 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });
            
            if (parseFloat(String(processedRow[8])) <= 0) validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);

            if (atc) {
                const atcData = atcWF.find(item => item.atc === atc);
                if (!atcData) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 1.`);
                else if (parseFloat(String(processedRow[7])) !== atcData.rate) validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(String(processedRow[7]))}%.`);
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });
        
    // Process Schedule 2
    const processedSched2Data = sched2DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 2 Row ${index + 2}`;
            let processedRow = validateCommonFields(row, errorPrefix, validationErrors);
            processedRow = validateIndividualNames(processedRow, errorPrefix, validationErrors);

            const atc = String(processedRow[5] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[5] = atc;
            
            const numericFields = [{ name: 'Fringe Benefit', index: 6 }, { name: 'Grossed-up Value', index: 7 }, { name: 'Withholding Tax', index: 8 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (parseFloat(String(processedRow[6])) <= 0) validationErrors.push(`${errorPrefix}: Fringe Benefit must be greater than 0.`);
            if (parseFloat(String(processedRow[7])) <= 0) validationErrors.push(`${errorPrefix}: Grossed-up Value must be greater than 0.`);
            if (parseFloat(String(processedRow[8])) <= 0) validationErrors.push(`${errorPrefix}: Withholding Tax must be greater than 0.`);

            const allowedAtcs = ["WF360", "WF330"];
            if (!atc) validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            else if (!allowedAtcs.includes(atc)) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 2.`);
            
            return processedRow;
        });

    // Process Schedule 3
    const processedSched3Data = sched3DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const errorPrefix = `Schedule 3 Row ${index + 2}`;
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
            if (parseFloat(String(processedRow[8])) <= 0) validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);

            if (!atc) validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            else if (!atcWF.find(item => item.atc === atc)) validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 3.`);
            
            return processedRow;
        });

    if (validationErrors.length > 0) return { ...defaultErrorResult, errors: validationErrors };

    const datFileName = `${tin}${branchCode}${month.padStart(2, '0')}${year}1601FQ.DAT`;
    const reportTypeShort = "1601FQ";
    const drivePath = [tin, reportTypeShort, year];

    if (!overwrite) {
        const fileExists = await checkFileExists(datFileName, folderId, drivePath);
        if (fileExists) {
            return { ...defaultErrorResult, success: false, fileExists: true, fileName: datFileName };
        }
    }
    
    let datContentParts: string[] = [];
    const taxpayerName = profile.entityType === 'Individual' ? `${profile.lastName} ${profile.firstName} ${profile.middleName}` : profile.companyName;
    const mainHeader = ['HQAP', 'H1601FQ', profile.tpTIN, profile.branchCode, quoteIfNotEmpty(taxpayerName), reportingPeriod, profile.rdoCode].join(',');
    datContentParts.push(mainHeader);

    const totalWithholdingTaxSched1 = processedSched1Data.reduce((acc, row) => acc + parseFloat(String(row[9])), 0);
    if (processedSched1Data.length > 0) {
        processedSched1Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched1Data.map((row, index) => `D1,1601FQ,${row[0]},${row[1]},${quoteIfNotEmpty(String(row[2]))},${quoteIfNotEmpty(String(row[3]))},${quoteIfNotEmpty(String(row[4]))},${quoteIfNotEmpty(String(row[5]))},${reportingPeriod},${index + 1},${row[6]},${row[7]},${row[8]},${row[9]}`).join('\n');
        const totalTaxableIncome = processedSched1Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
        const footerRow = `C1,1601FQ,${tin},${branchCode},${reportingPeriod},${totalTaxableIncome.toFixed(2)},${totalWithholdingTaxSched1.toFixed(2)}`;
        datContentParts.push(detailRows, footerRow);
    }
    
    const totalWithholdingTaxSched2 = processedSched2Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
    if (processedSched2Data.length > 0) {
        processedSched2Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched2Data.map((row, index) => `D2,1601FQ,${row[0]},${row[1]},${quoteIfNotEmpty(String(row[2]))},${quoteIfNotEmpty(String(row[3]))},${quoteIfNotEmpty(String(row[4]))},${reportingPeriod},${index + 1},${row[5]},${row[6]},${row[7]},${row[8]}`).join('\n');
        const totalFringeBenefit = processedSched2Data.reduce((acc, row) => acc + parseFloat(String(row[6])), 0);
        const totalGrossedUp = processedSched2Data.reduce((acc, row) => acc + parseFloat(String(row[7])), 0);
        const footerRow = `C2,1601FQ,${tin},${branchCode},${reportingPeriod},${totalFringeBenefit.toFixed(2)},${totalGrossedUp.toFixed(2)},${totalWithholdingTaxSched2.toFixed(2)}`;
        datContentParts.push(detailRows, footerRow);
    }

    const totalIncomePaymentSched3 = processedSched3Data.reduce((acc, row) => acc + parseFloat(String(row[8])), 0);
    if (processedSched3Data.length > 0) {
        processedSched3Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched3Data.map((row, index) => `D3,1601FQ,${row[0]},${row[1]},${quoteIfNotEmpty(String(row[2]))},${quoteIfNotEmpty(String(row[3]))},${quoteIfNotEmpty(String(row[4]))},${quoteIfNotEmpty(String(row[5]))},${reportingPeriod},${index + 1},${row[6]},${row[7]},${row[8]}`).join('\n');
        const footerRow = `C3,1601FQ,${tin},${branchCode},${reportingPeriod},${totalIncomePaymentSched3.toFixed(2)}`;
        datContentParts.push(detailRows, footerRow);
    }

    const datContent = datContentParts.join('\n');
    
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).catch(err => {
        console.error(`[Action:generate1601FQDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        datContent: datContent,
        fileName: datFileName,
        totalWithholdingTax: totalWithholdingTaxSched1,
        totalServices: totalWithholdingTaxSched2,
        totalExemptIncomePayment: totalIncomePaymentSched3,
    };
}
