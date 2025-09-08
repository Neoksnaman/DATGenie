'use server';

import { excelErrorDetection } from '@/ai/flows/excel-error-detection';
import type { ExcelErrorDetectionOutput } from '@/ai/schemas';
import { ExcelErrorDetectionOutputSchema } from '@/ai/schemas';
import { z } from 'zod';

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
