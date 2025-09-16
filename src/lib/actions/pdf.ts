
'use server';

import type { PdfResult } from './pdf/types';
import { generate2307Pdf } from './pdf/2307';


export async function generatePdf(formData: FormData): Promise<PdfResult> {
    const certificateType = formData.get('certificateType') as string;

    // For now, we only have one type of certificate.
    // In the future, we can add a 'certificateType' to formData
    // and use a switch statement here to call the correct generator.

    try {
        switch (certificateType) {
            case "Creditable Tax Withheld at Source (BIR Form 2307)":
                return await generate2307Pdf(formData);
            // Add cases for 2306 and 2316 here when ready
            // case "Final Tax Withheld at Source (BIR Form 2306)":
            //     return await generate2306Pdf(formData);
            // case "Compensation Payment/Tax Withheld (BIR Form 2316)":
            //     return await generate2316Pdf(formData);
            default:
                return { success: false, error: `Certificate type "${certificateType}" is not yet supported.` };
        }
    } catch (error) {
        console.error('Error in PDF generation controller:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during PDF generation.';
        return { success: false, error: errorMessage };
    }
}

    
