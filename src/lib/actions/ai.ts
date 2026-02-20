'use server';

import { excelErrorDetection } from '@/ai/flows/excel-error-detection';
import { extractInvoiceData as extractInvoiceDataFlow } from '@/ai/flows/invoice-reader';
import { extract2307DataFlow } from '@/ai/flows/form2307-reader';
import type { ExcelErrorDetectionOutput, ExtractInvoiceDataOutput, Extract2307DataOutput } from '@/ai/schemas';
import { ExcelErrorDetectionOutputSchema, ExtractInvoiceDataOutputSchema, Extract2307DataOutputSchema } from '@/ai/schemas';
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

const Extract2307ResultSchema = z.object({
  success: z.boolean(),
  data: Extract2307DataOutputSchema.nullable(),
  error: z.string().nullable(),
});
type Extract2307Result = z.infer<typeof Extract2307ResultSchema>;

const withTimeout = <T,>(promise: Promise<T>, ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Page processing timed out after 1 minute.'));
    }, ms);

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => clearTimeout(timeout));
  });
};


export async function extract2307Data(
  formData: FormData
): Promise<Extract2307Result> {
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

    const rawExtractedData = await withTimeout(
      extract2307DataFlow({ formDataUri: dataUri }, pageIndex),
      60000 // 1 minute timeout
    );

    if (!rawExtractedData) {
      return { success: false, data: null, error: 'AI failed to extract any data from the form.' };
    }

    return { success: true, data: rawExtractedData, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { success: false, data: null, error: `Failed to extract 2307 data: ${errorMessage}` };
  }
}
