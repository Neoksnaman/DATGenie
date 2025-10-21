'use server';

import { excelErrorDetection } from '@/ai/flows/excel-error-detection';
import { extractInvoiceData as extractInvoiceDataFlow } from '@/ai/flows/invoice-reader';
import type { ExcelErrorDetectionOutput, ExtractInvoiceDataOutput } from '@/ai/schemas';
import { ExcelErrorDetectionOutputSchema, ExtractInvoiceDataOutputSchema } from '@/ai/schemas';
import { z } from 'zod';
import { processExtractedInvoiceData } from './invoice-processing';

const AnalyzeFileResultSchema = z.object({
  success: z.boolean(),
  data: ExcelErrorDetectionOutputSchema.nullable(),
  error: z.string().nullable(),
});

type AnalyzeFileResult = z.infer<typeof AnalyzeFileResultSchema>;

export async function analyzeExcelFile(
  formData: FormData
): Promise<AnalyzeFileResult> {
  const file = formData.get('file') as File | null;

  if (!file) {
    return { success: false, data: null, error: 'No file uploaded.' };
  }

  // Check file type
  if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel') {
    return { success: false, data: null, error: 'Invalid file type. Please upload an Excel file.' };
  }
  
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dataUri = `data:${file.type};base64,${buffer.toString('base64')}`;

    const result = await excelErrorDetection({ excelDataUri: dataUri });

    return { success: true, data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, data: null, error: `Failed to analyze file: ${errorMessage}` };
  }
}

const ExtractInvoiceResultSchema = z.object({
  success: z.boolean(),
  data: ExtractInvoiceDataOutputSchema.nullable(),
  error: z.string().nullable(),
});
type ExtractInvoiceResult = z.infer<typeof ExtractInvoiceResultSchema>;

export async function extractInvoiceData(
  formData: FormData
): Promise<ExtractInvoiceResult> {
  const file = formData.get('file') as File | null;
  const pageIndex = parseInt(formData.get('pageIndex') as string || '0', 10);

  if (!file) {
    return { success: false, data: null, error: 'No file uploaded.' };
  }

  if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      return { success: false, data: null, error: 'Invalid file type. Please upload an image or PDF.' };
  }
  
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dataUri = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Step 1: Extract raw data quickly using the AI
    const rawExtractedData = await extractInvoiceDataFlow({ invoiceDataUri: dataUri }, pageIndex);

    if (!rawExtractedData) {
      return { success: false, data: null, error: 'AI failed to extract any data from the invoice.' };
    }
    
    // Step 2: Process the raw data using backend logic
    const processedData = await processExtractedInvoiceData(rawExtractedData, file.name);

    return { success: true, data: processedData, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, data: null, error: `Failed to extract invoice data: ${errorMessage}` };
  }
}
