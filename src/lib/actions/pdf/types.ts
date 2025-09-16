
import { z } from 'zod';

export const PdfResultSchema = z.object({
  success: z.boolean(),
  base64: z.string().optional(),
  fileName: z.string().optional(),
  error: z.string().optional(),
  errors: z.array(z.string()).optional(),
});

export type PdfResult = z.infer<typeof PdfResultSchema>;
