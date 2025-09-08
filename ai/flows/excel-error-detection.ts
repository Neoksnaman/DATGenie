'use server';

/**
 * @fileOverview Analyzes an Excel file for potential errors and inconsistencies using AI.
 *
 * - excelErrorDetection - A function that handles the Excel file analysis process.
 */

import {ai} from '@/ai/genkit';
import type { ExcelErrorDetectionInput } from '@/ai/schemas';
import { ExcelErrorDetectionInputSchema, ExcelErrorDetectionOutputSchema } from '@/ai/schemas';
import type { ExcelErrorDetectionOutput } from '@/ai/schemas';


export async function excelErrorDetection(input: ExcelErrorDetectionInput): Promise<ExcelErrorDetectionOutput> {
  return excelErrorDetectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'excelErrorDetectionPrompt',
  input: {schema: ExcelErrorDetectionInputSchema},
  output: {schema: ExcelErrorDetectionOutputSchema},
  prompt: `You are an AI assistant that analyzes Excel files for potential errors and inconsistencies.

You will receive the Excel file data as a data URI.

Analyze the Excel data and identify any potential errors, inconsistencies, or formatting issues that might cause problems during conversion to .DAT or PDF formats.

Provide a list of errors and a list of suggestions to fix them.

Excel Data: {{media url=excelDataUri}}

Errors:
{{errors}}

Suggestions:
{{suggestions}}`,
});

const excelErrorDetectionFlow = ai.defineFlow(
  {
    name: 'excelErrorDetectionFlow',
    inputSchema: ExcelErrorDetectionInputSchema,
    outputSchema: ExcelErrorDetectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
