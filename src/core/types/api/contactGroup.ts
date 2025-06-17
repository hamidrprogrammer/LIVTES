import { z } from 'zod';
import type {
  ContactGroupDetailResponseSchema,
  CreateContactGroupPayloadSchema,
  ListContactGroupsParamsSchema,
  ListContactGroupsResponseSchema,
  UpdateContactGroupPayloadSchema,
  ValidateAddressResponseSchema,
  // ListContactGroupsParamsSchema, // If defined
  // ListContactGroupsResponseSchema, // If defined
} from '../../zodSchemas/contactGroupSchema';

// Re-exporting the main schema type from user.ts for direct use
// as UserInvoiceContactGroup from user types is effectively our ContactGroup type.
export type { UserInvoiceContactGroup as ContactGroup, UserAddress as Address, UserCountry as Country } from './user';


// Specific response types for this feature's endpoints
export type ContactGroupDetailResponse = z.infer<typeof ContactGroupDetailResponseSchema>;
export type ValidateAddressResponse = z.infer<typeof ValidateAddressResponseSchema>;

// If list operations were defined:
export type ListContactGroupsParams = z.infer<typeof ListContactGroupsParamsSchema>;
export type ListContactGroupsResponse = z.infer<typeof ListContactGroupsResponseSchema>;
export type UpdateContactGroupPayload = z.infer<typeof UpdateContactGroupPayloadSchema>;
export type CreateContactGroupPayload = z.infer<typeof CreateContactGroupPayloadSchema>;
 