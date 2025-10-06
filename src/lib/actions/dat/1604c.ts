

'use server';

import type { TaxProfile } from '@/lib/schemas';
import { uploadFileToDrive, checkFileExists } from '@/lib/drive';
import { processExcelFile } from './common';
import type { DatFileResult } from '@/lib/dat-utils';
import { sanitizeAndValidateString, sanitizeAndValidateNumber, getFormattedLastDay, quoteIfNotEmpty } from '@/lib/dat-utils';

function validateRegion(input: any, errorPrefix: string): { value: string, error: string | null } {
    const allowedRegions = ['NCR', 'CAR', 'I', 'II', 'III', 'IV-A', 'IV-B', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'ARMM'];
    const sanitized = String(input || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').trim();
    if (!sanitized) {
        return { value: '', error: `${errorPrefix}: Region is required.` };
    }
    if (!allowedRegions.includes(sanitized)) {
        return { value: sanitized, error: `${errorPrefix}: Invalid region '${sanitized}'.` };
    }
    return { value: sanitized, error: null };
}

function validateEmploymentStatus(input: any, errorPrefix: string): { value: string, error: string | null } {
    const allowedStatus = ['R', 'C', 'CP', 'S', 'P', 'AL'];
    const sanitized = String(input || '').toUpperCase().replace(/[^A-Z]/g, '').trim();
    if (!sanitized) return { value: '', error: null }; // Optional
    if (!allowedStatus.includes(sanitized)) {
        return { value: sanitized, error: `${errorPrefix}: Invalid employment status '${sanitized}'.` };
    }
    return { value: sanitized, error: null };
}

function validateSeparationReason(input: any, errorPrefix: string): { value: string, error: string | null } {
    const allowedReasons = ['NA', 'T', 'TR', 'R', 'D'];
    const sanitized = String(input || '').toUpperCase().replace(/[^A-Z]/g, '').trim();
    if (!sanitized) return { value: '', error: null }; // Optional
    if (!allowedReasons.includes(sanitized)) {
        return { value: sanitized, error: `${errorPrefix}: Invalid reason for separation '${sanitized}'.` };
    }
    return { value: sanitized, error: null };
}

function validateSubstitutedFiling(input: any, errorPrefix: string): { value: string, error: string | null } {
    const allowed = ['Y', 'N'];
    const sanitized = String(input || '').toUpperCase().replace(/[^A-Z]/g, '').trim();
    if (!sanitized) return { value: 'N', error: null }; // Default to N if empty
    if (!allowed.includes(sanitized)) {
        return { value: sanitized, error: `${errorPrefix}: Invalid value for substituted filing '${sanitized}'. Must be Y or N.` };
    }
    return { value: sanitized, error: null };
}

function validateEmploymentDate(input: any, fieldName: string, errorPrefix: string): { value: string, error: string | null, date: Date | null } {
    const value = String(input || '').trim();
    const fullFieldName = `${errorPrefix}: ${fieldName}`;

    if (!value) {
        return { value: '', error: null, date: null }; // Optional
    }

    const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    if (!dateRegex.test(value)) {
        return { value: value, error: `${fullFieldName} has an invalid date format. Please use MM/DD/YYYY.`, date: null };
    }

    const parts = value.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month - 1, day);

    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return { value: value, error: `${fullFieldName} has an invalid date value.`, date: null };
    }

    return { value: value, error: null, date };
}


function processSchedule1Row(row: any, index: number, validationErrors: string[]) {
    const errorPrefix = `Schedule 1 Row ${index + 2}`;
    const processedRow: any[] = [];

    const originalTin = String(row[0] || '').trim();
    if (originalTin) {
        const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
        if (sanitizedTin.length > 0 && sanitizedTin.length < 9) {
            validationErrors.push(`${errorPrefix}: Employee TIN '${originalTin}' is too short. It must be 9 digits.`);
        }
        if (sanitizedTin === '000000000') {
            validationErrors.push(`${errorPrefix}: Invalid TIN '000000000'.`);
        }
        processedRow[0] = sanitizedTin.substring(0, 9);
    } else {
        processedRow[0] = '';
    }

    let branchCode = String(row[1] || '0000').replace(/[^0-9]/g, '');
    processedRow[1] = branchCode.slice(-4).padStart(4, '0');

    const lastNameResult = sanitizeAndValidateString(row[2], 'Last Name', 30, true, errorPrefix);
    if (lastNameResult.error) validationErrors.push(lastNameResult.error);
    processedRow[2] = lastNameResult.value;

    const firstNameResult = sanitizeAndValidateString(row[3], 'First Name', 30, true, errorPrefix);
    if (firstNameResult.error) validationErrors.push(firstNameResult.error);
    processedRow[3] = firstNameResult.value;

    const middleNameResult = sanitizeAndValidateString(row[4], 'Middle Name', 30, false, errorPrefix);
    if (middleNameResult.error) validationErrors.push(middleNameResult.error);
    processedRow[4] = middleNameResult.value;
    
    const regionResult = validateRegion(row[5], errorPrefix);
    if (regionResult.error) validationErrors.push(regionResult.error);
    processedRow[5] = regionResult.value;

    const numericColumns = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 42];
    numericColumns.forEach(i => {
        const numResult = sanitizeAndValidateNumber(row[i], `Column ${i + 1}`, errorPrefix);
        if (numResult.error) validationErrors.push(numResult.error);
        processedRow[i] = numResult.value;
    });

    const fromDateResult = validateEmploymentDate(row[17], "Employment From", errorPrefix);
    if (fromDateResult.error) validationErrors.push(fromDateResult.error);
    processedRow[17] = fromDateResult.value;

    const toDateResult = validateEmploymentDate(row[18], "Employment To", errorPrefix);
    if (toDateResult.error) validationErrors.push(toDateResult.error);
    processedRow[18] = toDateResult.value;
    
    if (fromDateResult.date && toDateResult.date && fromDateResult.date > toDateResult.date) {
        validationErrors.push(`${errorPrefix}: Employment From date cannot be after Employment To date.`);
    }

    const nationalityResult = sanitizeAndValidateString(row[38], 'Nationality', 30, false, errorPrefix);
    if(nationalityResult.error) validationErrors.push(nationalityResult.error)
    processedRow[38] = nationalityResult.value.replace(/[^A-Z]/g, '');

    const empStatusResult = validateEmploymentStatus(row[39], errorPrefix);
    if (empStatusResult.error) validationErrors.push(empStatusResult.error);
    processedRow[39] = empStatusResult.value;
    
    const sepReasonResult = validateSeparationReason(row[40], errorPrefix);
    if (sepReasonResult.error) validationErrors.push(sepReasonResult.error);
    processedRow[40] = sepReasonResult.value;

    const subFilingResult = validateSubstitutedFiling(row[41], errorPrefix);
    if (subFilingResult.error) validationErrors.push(subFilingResult.error);
    processedRow[41] = subFilingResult.value;

    const prevNontax13thMonth = parseFloat(processedRow[8] || '0');
    const presNontax13thMonth = parseFloat(processedRow[21] || '0');
    if (prevNontax13thMonth + presNontax13thMonth > 90000) {
        validationErrors.push(`${errorPrefix}: The sum of previous and present non-taxable 13th month pay and other benefits cannot exceed 90,000.`);
    }

    return processedRow;
}


function processSchedule2Row(row: any, index: number, validationErrors: string[]) {
    const errorPrefix = `Schedule 2 Row ${index + 2}`;
    const processedRow: any[] = [];
    
    const originalTin = String(row[0] || '').trim();
    if (originalTin) {
        const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
        if (sanitizedTin.length > 0 && sanitizedTin.length < 9) {
            validationErrors.push(`${errorPrefix}: Employee TIN '${originalTin}' is too short. It must be 9 digits.`);
        }
        if (sanitizedTin === '000000000') {
            validationErrors.push(`${errorPrefix}: Invalid TIN '000000000'.`);
        }
        processedRow[0] = sanitizedTin.substring(0, 9);
    } else {
        processedRow[0] = '';
    }

    let branchCode = String(row[1] || '0000').replace(/[^0-9]/g, '');
    processedRow[1] = branchCode.slice(-4).padStart(4, '0');

    const lastNameResult = sanitizeAndValidateString(row[2], 'Last Name', 30, true, errorPrefix);
    if (lastNameResult.error) validationErrors.push(lastNameResult.error);
    processedRow[2] = lastNameResult.value;

    const firstNameResult = sanitizeAndValidateString(row[3], 'First Name', 30, true, errorPrefix);
    if (firstNameResult.error) validationErrors.push(firstNameResult.error);
    processedRow[3] = firstNameResult.value;

    const middleNameResult = sanitizeAndValidateString(row[4], 'Middle Name', 30, false, errorPrefix);
    if (middleNameResult.error) validationErrors.push(middleNameResult.error);
    processedRow[4] = middleNameResult.value;
    
    const regionResult = validateRegion(row[5], errorPrefix);
    if (regionResult.error) validationErrors.push(regionResult.error);
    processedRow[5] = regionResult.value;

    const numericColumns = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 51, 52];
    numericColumns.forEach(i => {
        const numResult = sanitizeAndValidateNumber(row[i], `Column ${i + 1}`, errorPrefix);
        if (numResult.error) validationErrors.push(numResult.error);
        processedRow[i] = numResult.value;
    });

    const fromDateResult = validateEmploymentDate(row[20], "Employment From", errorPrefix);
    if (fromDateResult.error) validationErrors.push(fromDateResult.error);
    processedRow[20] = fromDateResult.value;

    const toDateResult = validateEmploymentDate(row[21], "Employment To", errorPrefix);
    if (toDateResult.error) validationErrors.push(toDateResult.error);
    processedRow[21] = toDateResult.value;
    
    if (fromDateResult.date && toDateResult.date && fromDateResult.date > toDateResult.date) {
        validationErrors.push(`${errorPrefix}: Employment From date cannot be after Employment To date.`);
    }

    const nationalityResult = sanitizeAndValidateString(row[47], 'Nationality', 30, false, errorPrefix);
    if(nationalityResult.error) validationErrors.push(nationalityResult.error)
    processedRow[47] = nationalityResult.value.replace(/[^A-Z]/g, '');

    const empStatusResult = validateEmploymentStatus(row[48], errorPrefix);
    if (empStatusResult.error) validationErrors.push(empStatusResult.error);
    processedRow[48] = empStatusResult.value;
    
    const sepReasonResult = validateSeparationReason(row[49], errorPrefix);
    if (sepReasonResult.error) validationErrors.push(sepReasonResult.error);
    processedRow[49] = sepReasonResult.value;

    const subFilingResult = validateSubstitutedFiling(row[50], errorPrefix);
    if (subFilingResult.error) validationErrors.push(subFilingResult.error);
    processedRow[50] = subFilingResult.value;

    const prevNontax13thMonth = parseFloat(processedRow[12] || '0');
    const presNontax13thMonth = parseFloat(processedRow[31] || '0');
    if (prevNontax13thMonth + presNontax13thMonth > 90000) {
        validationErrors.push(`${errorPrefix}: The sum of previous and present non-taxable 13th month pay and other benefits cannot exceed 90,000.`);
    }

    return processedRow;
}


export async function generate1604CDatFile(file: File, profile: TaxProfile, year: string, folderId: string, overwrite: boolean = false): Promise<DatFileResult> {
     const defaultErrorResult: DatFileResult = {
        success: false, datContent: null, fileName: null, errors: null, error: null, datFile: null,
        totalExempt: null, totalZeroRated: null, totalTaxableSales: null, totalOutputTax: null,
        totalServices: null, totalCapitalGoods: null, totalOtherGoods: null, totalInputTax: null,
        totalTaxableIncomePayment: null, totalExemptIncomePayment: null, totalWithholdingTax: null,
        processedData: null
    };

    const [{ data: sched1DataRows, validationErrors: sched1FileErrors }, { data: sched2DataRows, validationErrors: sched2FileErrors }] = await Promise.all([
        processExcelFile(file, "1604C_sched1"),
        processExcelFile(file, "1604C_sched2"),
    ]);
    
    const allFileErrors = [...sched1FileErrors, ...sched2FileErrors].filter(err => !err.includes('not found in the uploaded file.'));
    if (allFileErrors.length > 0) {
      return { ...defaultErrorResult, errors: allFileErrors };
    }

    const sched1HasData = sched1DataRows.some(row => row.some(cell => String(cell).trim() !== ''));
    const sched2HasData = sched2DataRows.some(row => row.some(cell => String(cell).trim() !== ''));

    if (!sched1HasData && !sched2HasData) {
        return { ...defaultErrorResult, errors: ["No data found in '1604C_sched1' or '1604C_sched2' sheets."] };
    }

    const validationErrors: string[] = [];
    
    const processedData1 = sched1HasData ? sched1DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => processSchedule1Row(row, index, validationErrors)) : [];

    const processedData2 = sched2HasData ? sched2DataRows
        .filter(row => row.some(cell => String(cell).trim() !== ''))
        .map((row, index) => processSchedule2Row(row, index, validationErrors)) : [];

    if (validationErrors.length > 0) {
        return { ...defaultErrorResult, errors: validationErrors };
    }
    
    const reportingPeriod = getFormattedLastDay(parseInt(year, 10), parseInt(profile.monthSelect, 10));
    const [mm, dd, yyyy] = reportingPeriod.split('/');
    const datFileName = `${profile.tpTIN}${profile.branchCode}${mm}${dd}${yyyy}1604C.DAT`;
    const reportTypeShort = "1604C";
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

    const mainHeader = ['H1604C', profile.tpTIN, profile.branchCode, reportingPeriod].join(',');
    let datContentParts = [mainHeader];
    
    if (sched1HasData) {
        processedData1.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
        const detailRows1 = processedData1.map((row, index) => {
            const tempRow = [...row];
            tempRow[2] = quoteIfNotEmpty(tempRow[2]); // lastName
            tempRow[3] = quoteIfNotEmpty(tempRow[3]); // firstName
            tempRow[4] = quoteIfNotEmpty(tempRow[4]); // middleName
            const prefix = `D1,1604C,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${index + 1}`;
            return `${prefix},${tempRow.join(',')}`;
        }).join('\n');
        datContentParts.push(detailRows1);

        const totals1 = new Array(31).fill(0);
        const columnIndices1 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 42];
        processedData1.forEach(row => {
            columnIndices1.forEach((colIdx, totalsIndex) => {
                 totals1[totalsIndex] += parseFloat(row[colIdx] || '0');
            });
        });
        const footer1 = `C1,1604C,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${totals1.map(t => t.toFixed(2)).join(',')}`;
        datContentParts.push(footer1);
    }
    
    if (sched2HasData) {
        processedData2.sort((a, b) => String(a[2]).localeCompare(String(b[2])));
         const detailRows2 = processedData2.map((row, index) => {
            const tempRow = [...row];
            tempRow[2] = quoteIfNotEmpty(tempRow[2]); // lastName
            tempRow[3] = quoteIfNotEmpty(tempRow[3]); // firstName
            tempRow[4] = quoteIfNotEmpty(tempRow[4]); // middleName
            const prefix = `D2,1604C,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${index + 1}`;
            return `${prefix},${tempRow.join(',')}`;
        }).join('\n');
        datContentParts.push(detailRows2);

        const totals2 = new Array(40).fill(0);
        const columnIndices2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 51, 52];
        
        processedData2.forEach(row => {
            columnIndices2.forEach((colIdx, totalsIndex) => {
                totals2[totalsIndex] += parseFloat(row[colIdx] || '0');
            });
        });
        const footer2 = `C2,1604C,${profile.tpTIN},${profile.branchCode},${reportingPeriod},${totals2.map(t => t.toFixed(2)).join(',')}`;
        datContentParts.push(footer2);
    }

    let totalGrossCompensation = 0;
    let totalWithholdingTax = 0;
    
    if (sched1HasData) {
        processedData1.forEach(row => {
            totalGrossCompensation += parseFloat(row[6] || '0') + parseFloat(row[19] || '0');
            totalWithholdingTax += parseFloat(row[37] || '0');
        });
    }

    if (sched2HasData) {
        processedData2.forEach(row => {
            totalGrossCompensation += parseFloat(row[6] || '0') + parseFloat(row[22] || '0');
            totalWithholdingTax += parseFloat(row[46] || '0');
        });
    }

    const datContent = datContentParts.join('\n');
    
    uploadFileToDrive(datFileName, datContent, folderId, drivePath, overwrite).catch(err => {
        console.error(`[Action:generate1604CDatFile] Background upload failed for ${datFileName}:`, err);
    });

    return {
        ...defaultErrorResult,
        success: true,
        fileName: datFileName,
        datContent: datContent,
        totalTaxableIncomePayment: totalGrossCompensation,
        totalWithholdingTax,
    };
}
