
'use server';

import type { ExtractInvoiceDataOutput } from '@/ai/schemas';

/**
 * Safely parses a string into a float, returning 0 for invalid or empty inputs.
 * @param value The string value to parse.
 * @returns A number.
 */
function parseFloatSafe(value: string | undefined | null): number {
    if (!value) return 0;
    const num = parseFloat(String(value).replace(/,/g, ''));
    return isNaN(num) ? 0 : num;
}

export async function processExtractedInvoiceData(
  rawData: ExtractInvoiceDataOutput,
  fileName: string
): Promise<ExtractInvoiceDataOutput> {

    let { vatableAmount, vatAmount, vatExempt, totalAmount, fullText } = rawData;
    let finalVatable = parseFloatSafe(vatableAmount);
    let finalVat = parseFloatSafe(vatAmount);
    let finalVatExempt = parseFloatSafe(vatExempt);

    const nonVatKeywords = [
        "not an official receipt",
        "not valid for claiming input tax",
    ];

    const isNonVat = rawData.tin?.toLowerCase().includes('non-vat') 
        || fileName.toLowerCase().includes('non-vat')
        || (fullText && nonVatKeywords.some(keyword => fullText.toLowerCase().includes(keyword)));

    if (isNonVat && totalAmount) {
        finalVatExempt = parseFloatSafe(totalAmount);
        finalVatable = 0;
        finalVat = 0;
    } else {
        // Standard VAT validation logic
        if (finalVatable > 0 && finalVat > 0) {
            const calculatedVatable = finalVat / 0.12;
            const difference = calculatedVatable - finalVatable;
            
            // Only use the recomputed vatable amount if the difference is significant (> 1 or < -1)
            // Otherwise, trust the AI's extracted amount to account for rounding.
            if (difference > 1 || difference < -1) {
                 finalVatable = calculatedVatable;
            }
        }
        // VAT-inclusive logic
        else if (totalAmount && finalVatable === 0 && finalVat === 0) {
            const total = parseFloatSafe(totalAmount);
            if (total > 0) {
                const totalLessExempt = total - finalVatExempt;
                finalVatable = totalLessExempt / 1.12;
                finalVat = finalVatable * 0.12;
            }
        }
    }

    return {
        ...rawData,
        vatableAmount: finalVatable.toFixed(2),
        vatAmount: finalVat.toFixed(2),
        vatExempt: finalVatExempt.toFixed(2),
    };
}
