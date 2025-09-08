
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWF } from '@/lib/schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, quoteIfNotEmpty } from '@/lib/dat-utils';


export async function generate1601FQDatFile(file: File, profile: TaxProfile, month: string, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
    const { tpTIN: tin, branchCode } = profile;
    const defaultErrorResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    // Process schedule 1
    const { data: sched1DataRows, validationErrors: sched1FileErrors } = await processExcelFile(file, "1601FQ_sched1");
    if (sched1FileErrors.length > 0) return { ...defaultErrorResult, errors: sched1FileErrors };

    // Process schedule 2
    const { data: sched2DataRows, validationErrors: sched2FileErrors } = await processExcelFile(file, "1601FQ_sched2");
    if (sched2FileErrors.length > 0) return { ...defaultErrorResult, errors: sched2FileErrors };
    
    // Process schedule 3
    const { data: sched3DataRows, validationErrors: sched3FileErrors } = await processExcelFile(file, "1601FQ_sched3");
    if (sched3FileErrors.length > 0) return { ...defaultErrorResult, errors: sched3FileErrors };

    const sched1HasData = sched1DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const sched2HasData = sched2DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const sched3HasData = sched3DataRows.some(row => row.some(cell => String(cell).trim() !== ''));

    if (!sched1HasData && !sched2HasData && !sched3HasData) {
        return { ...defaultErrorResult, errors: ["No data found in 1601FQ_sched1, 1601FQ_sched2 or 1601FQ_sched3 sheets."] };
    }

    const validationErrors: string[] = [];
    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;

    // Process Schedule 1
    const processedSched1Data = sched1DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Schedule 1 Row ${originalRowNumber}`;
            const processedRow = [...row];
            
            const tinResult = sanitizeAndValidateString(processedRow[0], 'TIN', 9, true, errorPrefix);
            if(tinResult.error) validationErrors.push(tinResult.error);
            processedRow[0] = tinResult.value.replace(/[^0-9]/g, '').substring(0, 9);
            if (processedRow[0].length > 0 && processedRow[0].length < 9) validationErrors.push(`${errorPrefix}: TIN is too short. It must be 9 digits if provided.`);
            
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
                const atcData = atcWF.find(item => item.atc === atc);
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
        
    // Process Schedule 2
    const processedSched2Data = sched2DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Schedule 2 Row ${originalRowNumber}`;
            const processedRow = [...row];

            const tinResult = sanitizeAndValidateString(processedRow[0], 'TIN', 9, true, errorPrefix);
            if(tinResult.error) validationErrors.push(tinResult.error);
            processedRow[0] = tinResult.value.replace(/[^0-9]/g, '').substring(0, 9);
            if (processedRow[0].length > 0 && processedRow[0].length < 9) validationErrors.push(`${errorPrefix}: TIN is too short. It must be 9 digits if provided.`);
            
            let branchCode = String(processedRow[1] || '').replace(/[^0-9]/g, '');
            processedRow[1] = branchCode ? branchCode.slice(-4).padStart(4, '0') : "0000";
            
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
            
            const numericFields = [
                { name: 'Fringe Benefit', index: 6 },
                { name: 'Grossed-up Value', index: 7 },
                { name: 'Withholding Tax', index: 8 }
            ];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], field.name, errorPrefix);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (parseFloat(processedRow[6]) <= 0) validationErrors.push(`${errorPrefix}: Fringe Benefit must be greater than 0.`);
            if (parseFloat(processedRow[7]) <= 0) validationErrors.push(`${errorPrefix}: Grossed-up Value must be greater than 0.`);
            if (parseFloat(processedRow[8]) <= 0) validationErrors.push(`${errorPrefix}: Withholding Tax must be greater than 0.`);

            const allowedAtcs = ["WF360", "WF330"];
            if (atc && !allowedAtcs.includes(atc)) {
                 validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 2. Allowed codes are ${allowedAtcs.join(', ')}.`);
            } else if (!atc) {
                validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            }
            
            return processedRow;
        });

    // Process Schedule 3
    const processedSched3Data = sched3DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Schedule 3 Row ${originalRowNumber}`;
            const processedRow = [...row];

            const tinResult = sanitizeAndValidateString(processedRow[0], 'TIN', 9, true, errorPrefix);
            if(tinResult.error) validationErrors.push(tinResult.error);
            processedRow[0] = tinResult.value.replace(/[^0-9]/g, '').substring(0, 9);
            if (processedRow[0].length > 0 && processedRow[0].length < 9) validationErrors.push(`${errorPrefix}: TIN is too short. It must be 9 digits if provided.`);
            
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
            
            const classificationCode = String(processedRow[6] || '').toUpperCase().replace(/\s/g, '');
            processedRow[6] = classificationCode;
            const allowedClassifications = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            if (classificationCode && !allowedClassifications.includes(classificationCode)) {
                validationErrors.push(`${errorPrefix}: Classification Code '${classificationCode}' is not valid. Must be one of ${allowedClassifications.join(', ')}.`);
            } else if (!classificationCode) {
                validationErrors.push(`${errorPrefix}: Classification Code is missing.`);
            }

            const atc = String(processedRow[7] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[7] = atc;
            
            const result = sanitizeAndValidateNumber(processedRow[8], 'Income Payment', errorPrefix);
            if (result.error) validationErrors.push(result.error);
            processedRow[8] = result.value;

            if (parseFloat(processedRow[8]) <= 0) {
                validationErrors.push(`${errorPrefix}: Income Payment must be greater than 0.`);
            }

            if (atc) {
                const atcData = atcWF.find(item => item.atc === atc);
                if (!atcData) {
                    validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for Schedule 3.`);
                }
            } else validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            
            return processedRow;
        });

    if (validationErrors.length > 0) return { ...defaultErrorResult, errors: validationErrors };

    const datFileName = `${tin}${branchCode}${month.padStart(2, '0')}${year}1601FQ.DAT`;
    const reportTypeShort = "1601FQ";
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
    
    let datContentParts: string[] = [];
    const taxpayerName = profile.entityType === 'Individual'
        ? `${profile.lastName} ${profile.firstName} ${profile.middleName}`
        : profile.companyName;

    const mainHeader = ['HQAP', 'H1601FQ', profile.tpTIN, profile.branchCode, quoteIfNotEmpty(taxpayerName), reportingPeriod, profile.rdoCode].join(',');
    datContentParts.push(mainHeader);

    // Schedule 1
    const totalTaxableIncomePaymentSched1 = processedSched1Data.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    const totalWithholdingTaxSched1 = processedSched1Data.reduce((acc, row) => acc + parseFloat(row[9]), 0);

    if (processedSched1Data.length > 0) {
        processedSched1Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows = processedSched1Data.map((row, index) => {
            return [
                'D1,1601FQ', row[0], row[1],
                quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]),
                quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]),
                reportingPeriod, index + 1, row[6], row[7], row[8], row[9]
            ].join(',');
        }).join('\n');
        datContentParts.push(detailRows);

        const footerRow = ['C1,1601FQ', tin, branchCode, reportingPeriod, totalTaxableIncomePaymentSched1.toFixed(2), totalWithholdingTaxSched1.toFixed(2)].join(',');
        datContentParts.push(footerRow);
    }
    
    // Schedule 2
    const totalFringeBenefit = processedSched2Data.reduce((acc, row) => acc + parseFloat(row[6]), 0);
    const totalGrossedUp = processedSched2Data.reduce((acc, row) => acc + parseFloat(row[7]), 0);
    const totalWithholdingTaxSched2 = processedSched2Data.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    
    if (processedSched2Data.length > 0) {
        processedSched2Data.sort((a, b) => String(a[2]).localeCompare(String(b[2]))); // Sort by Last Name
        
        const detailRows = processedSched2Data.map((row, index) => {
            return [
                'D2,1601FQ', row[0], row[1],
                quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]),
                quoteIfNotEmpty(row[4]),
                reportingPeriod, index + 1, row[5], row[6], row[7], row[8]
            ].join(',');
        }).join('\n');
        datContentParts.push(detailRows);

        const footerRow = ['C2,1601FQ', tin, branchCode, reportingPeriod, totalFringeBenefit.toFixed(2), totalGrossedUp.toFixed(2), totalWithholdingTaxSched2.toFixed(2)].join(',');
        datContentParts.push(footerRow);
    }

    // Schedule 3
    const totalIncomePaymentSched3 = processedSched3Data.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    if (processedSched3Data.length > 0) {
        processedSched3Data.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
       
        const detailRows = processedSched3Data.map((row, index) => {
            return [
                'D3,1601FQ', row[0], row[1],
                quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]),
                quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]),
                reportingPeriod, index + 1, row[6], row[7], row[8]
            ].join(',');
        }).join('\n');
        datContentParts.push(detailRows);

        const footerRow = ['C3,1601FQ', tin, branchCode, reportingPeriod, totalIncomePaymentSched3.toFixed(2)].join(',');
        datContentParts.push(footerRow);
    }

    const datContent = datContentParts.join('\n');
    
    // Fire and forget
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).then(uploadedFile => {
        console.log(`[Action:generate1601FQDatFile] Background upload finished for ${uploadedFile.name}`);
    }).catch(err => {
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
