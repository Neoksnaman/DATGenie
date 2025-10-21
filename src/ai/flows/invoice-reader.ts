
'use server';

/**
 * @fileOverview Extracts and validates data from an invoice using AI.
 *
 * - extractInvoiceData
 *   A function that handles the invoice analysis process.
 */
import { genkit, type GenkitError } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import {
  ExtractInvoiceDataInputSchema,
  ExtractInvoiceDataOutputSchema,
} from '@/ai/schemas';
import type {
  ExtractInvoiceDataInput,
  ExtractInvoiceDataOutput,
} from '@/ai/schemas';
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
 * 🔁 Public function — entry point for extracting invoice data
 * This function now contains the full round-robin and fallback logic.
 */
export async function extractInvoiceData(
  input: ExtractInvoiceDataInput,
  pageIndex: number = 0
): Promise<ExtractInvoiceDataOutput> {
  const context = 'invoiceReaderFlow';
  let lastError: any;

  // 1. Fetch exhausted keys from Google Sheet
  const exhaustedKeys = await getExhaustedApiKeys();
  const activeKeys = ALL_GEMINI_KEYS.filter(key => !exhaustedKeys.includes(key));
  
  if (activeKeys.length === 0) {
      logToBrowser('🚨 All available API keys are marked as exhausted. Please check your Google Sheet.');
      throw new Error('All API keys are exhausted.');
  }

  // This loop attempts to try the next key if the current one is invalid.
  for (let keyAttempt = 0; keyAttempt < activeKeys.length; keyAttempt++) {
    // 2. Determine the starting key for this page using round-robin on the *active* keys.
    const keyIndex = (pageIndex + keyAttempt) % activeKeys.length;
    const apiKey = activeKeys[keyIndex];
    const maskedKey = apiKey.slice(0, 8) + '...';

    let allModelsExhaustedForKey = true;

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
          name: 'extractInvoiceDataPrompt',
          model, // Pass the current model from the loop.
          input: { schema: ExtractInvoiceDataInputSchema },
          output: { schema: ExtractInvoiceDataOutputSchema },
          prompt: `
            You are an expert AI assistant specializing in extracting data from invoices.
            Your task is to extract the following information from the provided invoice image or PDF.

            - Registered Name: The legal name of the entity that issued the invoice. This is often the trade name.
            - Sole Proprietor Name: The name of the sole proprietor, if present. This name is often found near the trade name, sometimes followed by '- Prop' or '- Proprietor'. If not found, return an empty string.
            - TIN: The Tax Identification Number of the issuing entity.
            - Address: The business address of the issuing entity.
            - Invoice Number: The unique identifier for the invoice.
            - Invoice Date: The date of the invoice. If no date is found, return "N/A".
            - VATable Amount: The amount subject to VAT (Value Added Tax).
            - VAT Amount: The actual VAT amount charged.
            - VAT-exempt: The total amount of sales that are exempt from VAT.
            - Zero-rated: The total amount of sales that have a 0% VAT rate.
            - Total Amount: The final, total amount on the invoice.
            - Full Text: The entire text content of the document.

            Extract the values as they appear on the document. Do not perform any calculations or corrections.
            If a field is not present, return an empty string.

            Here is the invoice data:
            {{media url=invoiceDataUri}}
            `,
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
        allModelsExhaustedForKey = false;

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

    if (allModelsExhaustedForKey) {
        logToBrowser(`[Background] Marking key ${maskedKey} as exhausted because all models failed.`);
        markApiKeyAsExhausted(apiKey).catch(console.error);
    }
  }
  
  // If all keys and models are exhausted, throw the last recorded error.
  throw new Error(`All keys and models exhausted. Last error: ${lastError?.message || lastError}`);
}
