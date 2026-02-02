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


export const ExtractInvoiceDataInputSchema = z.object({
  invoiceDataUri: z
    .string()
    .describe(
      "An image or PDF of an invoice, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractInvoiceDataInput = z.infer<typeof ExtractInvoiceDataInputSchema>;

export const ExtractInvoiceDataOutputSchema = z.object({
    registeredName: z.string().describe("The legal name of the entity that issued the invoice. This is often the trade name."),
    soleProprietorName: z.string().optional().describe("The name of the sole proprietor, if present. This name is often found near the trade name, sometimes followed by '- Prop' or '- Proprietor'."),
    tin: z.string().describe("The Tax Identification Number of the issuing entity."),
    address: z.string().describe("The business address of the issuing entity."),
    invoiceNumber: z.string().describe("The unique identifier for the invoice."),
    invoiceDate: z.string().describe("The date of the invoice (MM/DD/YYYY). Return 'N/A' if not found."),
    vatableAmount: z.string().describe("The amount subject to VAT (Value Added Tax)."),
    vatAmount: z.string().describe("The actual VAT amount charged."),
    vatExempt: z.string().describe("The total amount of sales that are exempt from VAT."),
    zeroRated: z.string().describe("The total amount of sales that have a 0% VAT rate."),
    totalAmount: z.string().optional().describe("The total amount of the invoice, if available."),
    fullText: z.string().optional().describe("The full text content of the invoice."),
});
export type ExtractInvoiceDataOutput = z.infer<typeof ExtractInvoiceDataOutputSchema>;


export const Form2307ItemSchema = z.object({
  atc: z.string().describe('The Alphanumeric Tax Code (ATC) for the tax line.'),
  firstMonthIncomePayment: z.string().describe('Income payment for the first month of the quarter.'),
  secondMonthIncomePayment: z.string().describe('Income payment for the second month of the quarter.'),
  thirdMonthIncomePayment: z.string().describe('Income payment for the third month of the quarter.'),
  totalIncomePayment: z.string().describe('Total income payment for the quarter for this tax line.'),
  taxWithheld: z.string().describe('Total tax withheld for the quarter for this tax line.'),
});

export const Extract2307DataOutputSchema = z.object({
  payorTIN: z.string().describe("The Payor's Tax Identification Number (TIN)."),
  payorName: z.string().describe("The Payor's registered name."),
  payeeTIN: z.string().describe("The Payee's Tax Identification Number (TIN)."),
  payeeName: z.string().describe("The Payee's registered name."),
  periodFrom: z.string().describe("The start of the reporting period (MM/DD/YYYY)."),
  periodTo: z.string().describe("The end of the reporting period (MM/DD/YYYY)."),
  taxDetails: z.array(Form2307ItemSchema).describe('A list of tax details, with one entry for each ATC row on the form.'),
});
export type Extract2307DataOutput = z.infer<typeof Extract2307DataOutputSchema>;

export const Extract2307DataInputSchema = z.object({
  formDataUri: z
    .string()
    .describe(
      "An image or PDF of a BIR Form 2307, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type Extract2307DataInput = z.infer<typeof Extract2307DataInputSchema>;
