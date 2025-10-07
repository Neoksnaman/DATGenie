
'use server';

import type { PdfResult } from './pdf/types';
import { generate2307Pdf } from './pdf/2307';
import { generate2306Pdf } from './pdf/2306';
import { generate2316Pdf } from './pdf/2316';


export async function generatePdf(formData: FormData): Promise<PdfResult> {
    const certificateType = formData.get('certificateType') as string;

    try {
        switch (certificateType) {
            case "Creditable Tax Withheld at Source (BIR Form 2307)":
                return await generate2307Pdf(formData);
            case "Final Tax Withheld at Source (BIR Form 2306)":
                return await generate2306Pdf(formData);
            case "Compensation Payment/Tax Withheld (BIR Form 2316)":
                return await generate2316Pdf(formData);
            default:
                return { success: false, error: `Certificate type "${certificateType}" is not yet supported.` };
        }
    } catch (error) {
        console.error('Error in PDF generation controller:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during PDF generation.';
        return { success: false, error: errorMessage };
    }
}
