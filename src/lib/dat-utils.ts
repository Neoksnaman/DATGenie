
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
        .replace(/\s\s+/g, ' ')
        .trim()
        .replace(/[^A-Z0-9\s-]/g, '')
        .replace(/\s\s+/g, ' ')
        .trim();

    if (processedString.length > maxLength) {
        return { value: processedString, error: `${fullFieldName} must be ${maxLength} characters or less.` };
    }

    return { value: processedString, error: null };
}

export function sanitizeAndValidateNumber(input: any, fieldName: string): { value: string, error: string | null } {
    if (input === null || input === undefined || String(input).trim() === '') {
        return { value: '0', error: null };
    }
    
    const valueAsString = String(input).replace(/,/g, '');
    const num = parseFloat(valueAsString);

    if (isNaN(num)) {
        return { value: String(input), error: `${fieldName} contains an invalid number.` };
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
