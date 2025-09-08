
'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { atcWE, atcWG } from '@/lib/schedules';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, quoteIfNotEmpty } from '@/lib/dat-utils';


export async function validateAndProcessSAWT(formData: FormData, overwrite: boolean = false): Promise<DatFileResult> {
    const file = formData.get('file') as File;
    const schedule = formData.get('schedule') as string;
    const profileString = formData.get('profile') as string;
    const month = formData.get('month') as string;
    const year = formData.get('year') as string;
    const folderId = formData.get('folderId') as string;

    const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };
    
    const profile: TaxProfile = JSON.parse(profileString);

    const sheetName = `sawt_${schedule}`;
    const { data: dataRows, validationErrors: fileErrors } = await processExcelFile(file, sheetName);
    if (fileErrors.length > 0) {
        return { ...defaultErrorResult, success: false, errors: fileErrors };
    }

    if (dataRows.length === 0) {
        return { ...defaultErrorResult, success: false, errors: [`No data found in sheet "${sheetName}".`] };
    }

    const validationErrors: string[] = [];
    const combinedATC = [...atcWE, ...atcWG];

    const processedData = dataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => {
            const originalRowNumber = index + 2;
            const errorPrefix = `Row ${originalRowNumber}`;
            const processedRow = [...row];
            
            if (String(processedRow[0] || '').trim()) {
                const originalTin = String(processedRow[0]);
                const sanitizedTin = originalTin.replace(/[^0-9]/g, '').substring(0, 9);
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

            const atc = String(processedRow[6] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
            processedRow[6] = atc;
            
            const numericFields = [{ name: 'Rate', index: 7 }, { name: 'Income Payment', index: 8 }, { name: 'Withholding Tax', index: 9 }];
            numericFields.forEach(field => {
                const result = sanitizeAndValidateNumber(processedRow[field.index], `${errorPrefix}: ${field.name}`);
                if (result.error) validationErrors.push(result.error);
                processedRow[field.index] = result.value;
            });

            if (atc) {
                const atcData = combinedATC.find(item => item.atc === atc);
                if (atcData) {
                    if (parseFloat(processedRow[7]) !== atcData.rate) {
                        validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atc}. Expected ${atcData.rate}%, but got ${parseFloat(processedRow[7])}%.`);
                    }
                } else {
                    validationErrors.push(`${errorPrefix}: ATC code '${atc}' is not valid for SAWT.`);
                }
            } else {
                validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            }
            
            return processedRow;
        });

    if (validationErrors.length > 0) {
        return { ...defaultErrorResult, success: false, errors: validationErrors };
    }

    processedData.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
    
    const datFileName = `${profile.tpTIN}${profile.branchCode}${month.padStart(2, '0')}${year}${schedule}.DAT`;
    const reportTypeShort = `SAWT_${schedule}`;
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

    const reportingPeriod = `${month.padStart(2, '0')}/${year}`;

    const taxpayerName = profile.entityType === 'Individual' 
        ? `${profile.lastName} ${profile.firstName} ${profile.middleName}`
        : profile.companyName;

    const header = ['HSAWT', `H${schedule}`, profile.tpTIN, profile.branchCode, quoteIfNotEmpty(taxpayerName), quoteIfNotEmpty(profile.firstName), quoteIfNotEmpty(profile.lastName), quoteIfNotEmpty(profile.middleName), reportingPeriod, profile.rdoCode].join(',');

    const detailRows = processedData.map((row, index) => {
        return [
            'DSAWT', `D${schedule}`, index + 1, row[0], row[1],
            quoteIfNotEmpty(row[2]), quoteIfNotEmpty(row[3]), quoteIfNotEmpty(row[4]), quoteIfNotEmpty(row[5]),
            reportingPeriod, '', row[6], row[7], row[8], row[9]
        ].join(',');
    }).join('\n');

    const totalIncomePayment = processedData.reduce((acc, row) => acc + parseFloat(row[8]), 0);
    const totalWithholdingTax = processedData.reduce((acc, row) => acc + parseFloat(row[9]), 0);
    
    const footer = ['CSAWT', `C${schedule}`, profile.tpTIN, profile.branchCode, reportingPeriod, totalIncomePayment.toFixed(2), totalWithholdingTax.toFixed(2)].join(',');

    const datContent = [header, detailRows, footer].join('\n');
    
    // Fire and forget
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).then(uploadedFile => {
        console.log(`[Action:validateAndProcessSAWT] Background upload finished for ${uploadedFile.name}`);
    }).catch(err => {
        console.error(`[Action:validateAndProcessSAWT] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        datContent: datContent,
        fileName: datFileName,
        datFile: null,
        totalTaxableIncomePayment: totalIncomePayment,
        totalWithholdingTax,
    };
}
