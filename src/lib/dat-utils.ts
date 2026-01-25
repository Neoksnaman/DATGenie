
import { z } from 'zod';
import type { DatFile } from '@/lib/schemas';
import { DatFileSchema } from '@/lib/schemas';

export const DatFileResultSchema = z.object({
    success: z.boolean(),
    datContent: z.string().nullable(),
    fileName: z.string().nullable(),
    error: z.string().nullable(),
    errors: z.array(z.string()).nullable(),
    fileExists: z.boolean().optional(),
    datFile: DatFileSchema.nullable(),
    // Sales Totals
    totalExempt: z.number().nullable(),
    totalZeroRated: z.number().nullable(),
    totalTaxableSales: z.number().nullable(),
    totalOutputTax: z.number().nullable(),
    // Purchase Totals
    totalServices: z.number().nullable(),
    totalCapitalGoods: z.number().nullable(),
    totalOtherGoods: z.number().nullable(),
    totalInputTax: z.number().nullable(),
    // 1601-EQ and SAWT Totals
    totalTaxableIncomePayment: z.number().nullable(),
    totalExemptIncomePayment: z.number().nullable(),
    totalWithholdingTax: z.number().nullable(),
    processedData: z.any().nullable(),
});
export type DatFileResult = z.infer<typeof DatFileResultSchema>;

export function sanitizeAndValidateString(input: any, fieldName: string, maxLength: number, isRequired: boolean = false, errorPrefix?: string): { value: string, error: string | null } {
    let value = (input === null || input === undefined) ? '' : String(input).trim();
    const fullFieldName = errorPrefix ? `${errorPrefix}: ${fieldName}` : fieldName;

    if (!value) {
        if (isRequired) {
            return { value: '', error: `${fullFieldName} is missing.` };
        }
        return { value: '', error: null };
    }

    let processedString = value
        .toUpperCase()
        .replace(/&/g, 'AND')
        .replace(/Ñ/g, 'N')
        .replace(/(\r\n|\n|\r)/gm, " ") // Replace line breaks with a space
        .replace(/\s\s+/g, ' ')
        .trim()
        .replace(/[^A-Z0-9\s-]/g, '')
        .replace(/\s\s+/g, ' ')
        .trim();

    if (processedString.length > maxLength) {
        const errorMessage = errorPrefix
            ? `${errorPrefix}: ${fieldName} must be ${maxLength} characters or less.`
            : `${fieldName} must be ${maxLength} characters or less.`;
        return { value: processedString, error: errorMessage };
    }

    return { value: processedString, error: null };
}

export function sanitizeAndValidateNumber(input: any, fieldName: string, errorPrefix?: string): { value: string, error: string | null } {
    const fullFieldName = errorPrefix ? `${errorPrefix}` : fieldName;
    if (input === null || input === undefined || String(input).trim() === '') {
        return { value: '0', error: null };
    }
    
    const valueAsString = String(input).replace(/,/g, '');
    const num = parseFloat(valueAsString);

    if (isNaN(num)) {
        return { value: String(input), error: `${fullFieldName} contains an invalid number.` };
    }
    
    const roundedNum = Math.round(num * 100) / 100;
    
    if (roundedNum === 0) {
        return { value: '0', error: null };
    }

    return { value: roundedNum.toFixed(2), error: null };
}

export function getFormattedLastDay(year: number, month: number): string {
    // Get the last day of the month. This correctly handles leap years.
    const day = new Date(year, month, 0).getDate();
    
    const date = new Date(year, month - 1, day);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
}

export const quoteIfNotEmpty = (value: string | undefined | null) => {
  const str = String(value || '').trim();
  return str ? `"${str}"` : '';
};

export function parseFileName(fileName: string) {
    const tinLength = 9;
    const branchCodeLength = 4;
    const tinAndBranchLength = tinLength + branchCodeLength;
    const tin = fileName.substring(0, tinLength);
    const getQuarter = (month: number) => Math.ceil(month / 3);

    // --- VAT Relief Check (Priority 1) ---
    // These files have a unique structure with a letter at index 9.
    const typeCode = fileName.charAt(9);
    if (typeCode === 'S' || typeCode === 'P' || typeCode === 'I') {
        const month = fileName.substring(10, 12);
        const year = fileName.substring(12, 16);
        let transactionType = 'Unknown';
        switch (typeCode) {
            case 'S': transactionType = 'Sales'; break;
            case 'P': transactionType = 'Purchases'; break;
            case 'I': transactionType = 'Importations'; break;
        }
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        const quarter = getQuarter(parseInt(month, 10));
        return { transactionType, reportingPeriod, year, month, tin, quarter };
    }

    // --- Alphalist & SAWT Checks (Priority 2) ---
    // These files have numbers at index 9 (part of the branch code).
    
    if (fileName.includes('1601EQ') || fileName.includes('1601FQ')) {
        const type = fileName.includes('1601EQ') ? '1601-EQ' : '1601-FQ';
        const monthIndex = tinAndBranchLength;
        const yearIndex = monthIndex + 2;
        const month = fileName.substring(monthIndex, yearIndex);
        const year = fileName.substring(yearIndex, yearIndex + 4);
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        const quarter = getQuarter(parseInt(month, 10));
        return { transactionType: type, reportingPeriod, year, month, tin, quarter };
    }

    if (fileName.includes('1604F') || fileName.includes('1604E') || fileName.includes('1604C')) {
        const type = fileName.includes('1604F') ? '1604-F' : fileName.includes('1604E') ? '1604-E' : '1604-C';
        const dateStartIndex = tinAndBranchLength;
        const month = fileName.substring(dateStartIndex, dateStartIndex + 2);
        const day = fileName.substring(dateStartIndex + 2, dateStartIndex + 4);
        const year = fileName.substring(dateStartIndex + 4, dateStartIndex + 8);
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleString('default', { month: 'long', year: 'numeric' });
        const quarter = getQuarter(parseInt(month, 10));
        return { transactionType: type, reportingPeriod, year, month, tin, quarter };
    }

    // Sort by length descending to match '2550Q' before '2550'
    const sawtSchedules = ["1700", "1702", "2550Q", "1701", "1702Q", "2551M", "1701Q", "2550M", "2553"].sort((a, b) => b.length - a.length);
    const sawtScheduleMatch = sawtSchedules.find(schedule => fileName.includes(schedule));

    if (sawtScheduleMatch) {
        const monthIndex = tinAndBranchLength;
        const yearIndex = monthIndex + 2;
        const month = fileName.substring(monthIndex, yearIndex);
        const year = fileName.substring(yearIndex, yearIndex + 4);
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        const quarter = getQuarter(parseInt(month, 10));
        return { transactionType: `SAWT-${sawtScheduleMatch}`, reportingPeriod, year, month, tin, quarter };
    }
    
    // Fallback for unknown types
    return { transactionType: 'Unknown', reportingPeriod: 'N/A', year: '', month: '', tin: '', quarter: 0 };
}
