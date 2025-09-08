
import { z } from 'zod';

const alphanumericWithSpaces = (name: string, length: number, required = true) => {
  const schema = z.string()
   .max(length, `${name} must be ${length} characters or less.`)
   .regex(/^[a-zA-Z0-9\s]*$/, `${name} must only contain letters, numbers, and spaces.`);
  
  if (required) {
    return schema.min(1, `${name} is required.`);
  }
  return schema.optional().or(z.literal(''));
};

export const TaxProfileSchema = z.object({
  tpTIN: z.string().regex(/^[0-9]{9}$/, 'TIN must be 9 digits.'),
  branchCode: z.string().regex(/^[0-9]{4}$/, 'Branch code must be 4 digits.'),
  rdoCode: z.string().min(1, 'RDO Code is required.'),
  entityType: z.string(),
  cycleType: z.string(),
  monthSelect: z.string().min(1, 'Month is required.'),
  companyName: alphanumericWithSpaces('Company Name', 50, false),
  lastName: alphanumericWithSpaces('Last Name', 30, false),
  firstName: alphanumericWithSpaces('First Name', 30, false),
  middleName: alphanumericWithSpaces('Middle Name', 30, false),
  tradeName: alphanumericWithSpaces('Trade Name', 50),
  subStreet: z.string().max(30, 'Unit/Floor/Substreet must be 30 characters or less.').optional().or(z.literal('')),
  street: z.string().max(30, 'Street must be 30 characters or less.').min(1, 'Street is required.'),
  barangay: z.string().max(30, 'Barangay must be 30 characters or less.').min(1, 'Barangay is required.'),
  cityMunicipality: z.string().max(30, 'City/Municipality must be 30 characters or less.').min(1, 'City/Municipality is required.'),
  province: z.string().max(30, 'Province must be 30 characters or less.').min(1, 'Province is required.'),
  zipCode: z.string().regex(/^[0-9]{4}$/, 'Zip code must be 4 digits.'),
}).passthrough().refine(data => {
    if (data.entityType === 'Individual') {
        return !!data.lastName && !!data.firstName && !!data.middleName;
    }
    return true;
}, {
    message: "First, Middle, and Last name are required for individuals.",
    path: ["lastName"], 
}).refine(data => {
    if (data.entityType === 'Non-Individual') {
        return !!data.companyName;
    }
    return true;
}, {
    message: "Company name is required for non-individuals.",
    path: ["companyName"],
});


export type TaxProfile = z.infer<typeof TaxProfileSchema>;


export const MutationResultSchema = z.object({
    success: z.boolean(),
    error: z.string().nullable(),
    data: TaxProfileSchema.nullable(),
});

export const DatFileSchema = z.object({
  id: z.string(),
  name: z.string(),
  path: z.string(),
  modifiedTime: z.string(),
});
export type DatFile = z.infer<typeof DatFileSchema>;


export const UserDetailsSchema = z.object({
    userName: z.string(),
    email: z.string().email(),
    databaseId: z.string().optional(),
    folderId: z.string().optional(),
});
export type UserDetails = z.infer<typeof UserDetailsSchema>;

export const UserUpdateDataSchema = z.object({
    newUserName: z.string().optional(),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
});
export type UserUpdateData = z.infer<typeof UserUpdateDataSchema>;

export const SessionInfoSchema = z.object({
    token: z.string(),
    loginTime: z.string(),
    ipAddress: z.string(),
    deviceInfo: z.string(),
});
export type SessionInfo = z.infer<typeof SessionInfoSchema>;
