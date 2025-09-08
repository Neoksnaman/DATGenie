/**
 * @fileOverview Shared Zod schemas and TypeScript types for AI flows.
 */
import {z} from 'genkit';

export const ExcelErrorDetectionInputSchema = z.object({
  excelDataUri: z
    .string()
    .describe(
      "The Excel file data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExcelErrorDetectionInput = z.infer<typeof ExcelErrorDetectionInputSchema>;

export const ExcelErrorDetectionOutputSchema = z.object({
  errors: z
    .array(z.string())
    .describe('A list of potential errors and inconsistencies found in the Excel file.'),
  suggestions: z
    .array(z.string())
    .describe('A list of suggestions to fix the errors and inconsistencies.'),
});
export type ExcelErrorDetectionOutput = z.infer<typeof ExcelErrorDetectionOutputSchema>;
