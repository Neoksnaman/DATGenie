
'use server';

/**
 * @fileOverview Analyzes an Excel file for potential errors and inconsistencies using AI.
 *
 * - excelErrorDetection - A function that handles the Excel file analysis process.
 */
import { genkit, type GenkitError } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import type { ExcelErrorDetectionInput } from '@/ai/schemas';
import { ExcelErrorDetectionInputSchema, ExcelErrorDetectionOutputSchema } from '@/ai/schemas';
import type { ExcelErrorDetectionOutput } from '@/ai/schemas';
import { getExhaustedApiKeys, markApiKeyAsExhausted } from '@/lib/googlesheets';
import dotenv from 'dotenv';
dotenv.config();

// ---------------------------------------------
//  Load all keys (comma delimited in .env)
// ---------------------------------------------
const ALL_GEMINI_KEYS = (process.env.GEMINI_API_KEY || '')
  .split(',')
  .map(k => k.trim())
  .filter(Boolean);

if (ALL_GEMINI_KEYS.length === 0) {
  throw new Error('❌ No Gemini API keys found in GEMINI_API_KEY');
}

// ---------------------------------------------
//  Gemini models for fallback per key
// ---------------------------------------------
const GEMINI_MODELS = [
  'googleai/gemini-2.5-flash',
  'googleai/gemini-2.5-flash-lite',
  'googleai/gemini-2.5-pro',
  'googleai/gemini-2.0-flash',
  'googleai/gemini-2.0-flash-lite',
];

function logToBrowser(message: string) {
  if (typeof console !== 'undefined') console.log(`🧠 ${message}`);
}

/**
 * 🔁 Public function — entry point for detecting excel errors
 * This function now contains the full round-robin and fallback logic.
 */
export async function excelErrorDetection(
  input: ExcelErrorDetectionInput,
  pageIndex: number = 0
): Promise<ExcelErrorDetectionOutput> {
  const context = 'excelErrorDetectionFlow';
  let lastError: any;

  // 1. Fetch exhausted keys from Google Sheet
  const exhaustedKeys = await getExhaustedApiKeys();
  const activeKeys = ALL_GEMINI_KEYS.filter(key => !exhaustedKeys.includes(key));
  
  if (activeKeys.length === 0) {
      logToBrowser('🚨 All available API keys are marked as exhausted. Please check your Google Sheet.');
      throw new Error('All API keys are exhausted.');
  }

  // This loop attempts to try the next key if the current one is invalid.
  for (const [keyIndex, apiKey] of activeKeys.entries()) {
    const maskedKey = apiKey.slice(0, 8) + '...';
    let allModelsFailedForKey = true;

    // 3. Loop through all models for the selected key.
    for (const model of GEMINI_MODELS) {
      logToBrowser(
        `📄 Page ${pageIndex + 1}: Using key #${keyIndex + 1} (${maskedKey}) with model ${model} for ${context}`
      );

      try {
        // 4. Create a fresh Genkit instance for this specific attempt.
        const instance = genkit({
          plugins: [googleAI({ apiKey })],
        });

        // 5. Define the prompt on this instance.
        const prompt = instance.definePrompt({
          name: 'excelErrorDetectionPrompt',
          model, // Pass the current model from the loop.
          input: { schema: ExcelErrorDetectionInputSchema },
          output: { schema: ExcelErrorDetectionOutputSchema },
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

        // 6. Execute the prompt and return the result on success.
        const { output } = await prompt(input);
        
        logToBrowser(`✅ Success on model ${model} (key ${maskedKey})`);
        
        if (!output) {
            throw new Error('AI returned a null or undefined output.');
        }
        return output;

      } catch (err: any) {
        lastError = err;
        const msg = (err as GenkitError)?.message || '';
        const isQuotaError =
          msg.includes('429') ||
          msg.includes('quota') ||
          msg.includes('exceeded') ||
          msg.includes('Rate limit');
        const isInvalidKeyError = msg.includes('Unauthorized') || msg.includes('API key not valid');

        // If it's a quota error, continue to the next model.
        if (isQuotaError) {
          logToBrowser(`⚠️ Model ${model} on key #${keyIndex + 1} exhausted — trying next model...`);
          continue; 
        }

        // If it's not a quota error, we assume the key is still valid for other models.
        allModelsFailedForKey = false;

        // If the key is invalid, break the inner model loop to try the next key.
        if (isInvalidKeyError) {
          logToBrowser(`🔐 Key #${keyIndex + 1} invalid — switching to next key...`);
          // Mark the key as exhausted in the background
          markApiKeyAsExhausted(apiKey).catch(console.error);
          break; 
        }

        // For any other type of error, throw it immediately.
        throw err;
      }
    }

    if (allModelsFailedForKey) {
        logToBrowser(`[Background] Marking key ${maskedKey} as exhausted because all models failed.`);
        markApiKeyAsExhausted(apiKey).catch(console.error);
    }
  }
  
  // If all keys and models are exhausted, throw the last recorded error.
  throw new Error(`All keys and models exhausted. Last error: ${lastError?.message || lastError}`);
}
