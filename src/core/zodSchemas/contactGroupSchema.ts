/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod';
// Reusing schemas from userSchema as they are quite comprehensive and match the structure
import {
  UserInvoiceContactGroupSchema as ContactGroupSchema,
  UserAddressSchema as AddressSchema,
  UserCountrySchema as CountrySchema,
  PaginationLinksSchema,
  MetaSchema,
} from './userSchema';
import { Search } from 'lucide-react';

// Schema for GET /api/contact-groups/{id}
export const ContactGroupDetailResponseSchema = z.object({
  data: ContactGroupSchema,
});

// Schema for GET /api/shop/contact-group/{id}/validate-address
export const ValidateAddressResponseSchema = z.object({
  data: z.object({
    message: z.string(),
    is_valid: z.boolean().optional(),
    // Potentially other fields if the API returns more details upon successful validation
  }),
});

// NEW: Schema for listing contact groups query parameters
export const ListContactGroupsParamsSchema = z.object({
  page: z.number().int().positive().optional(),
  per_page: z.number().int().positive().optional(),
'orderBy[id]': z.string().optional(),
  search:z.string().optional(),
  isArchive: z.boolean().optional(),
});

// NEW: Schema for the list response
export const ListContactGroupsResponseSchema = z.object({
  data: z.array(ContactGroupSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});
const TranslatePayloadSchema = z.object({
    locale: z.string(),
    title: z.string(),
});
const AddressPayloadSchema = z.object({
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  companyName: z.string().optional().nullable(),
  title: z.string(),
  state_id: z.number().optional().nullable(),
  address1: z.string(),
  address2: z.string().optional().nullable(),
  house_number: z.string().optional().nullable(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  phone: z.string().optional().nullable(),
  postal_code: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  // The 'country' object seems to be for frontend use; the API likely uses 'country_id' from the top level.
  // We make it optional here.
  country: z.object({
      value: z.number(),
      label: z.string(),
      iso2: z.string(),
  }).optional().nullable(),
});
const PhonePayloadSchema = z.object({
  type: z.string(),
  number: z.string(),
});

export const CreateContactGroupPayloadSchema = z.object({
    country_id: z.number(),
    user_id: z.number(),
    company_name: z.string().optional().nullable(),
    first_name: z.string(),
    last_name: z.string(),
    title: z.string(),
    // Using z.record() to allow for dynamic language keys like "de", "en", etc.
    translate: z.record(TranslatePayloadSchema),
    addresses: z.array(AddressPayloadSchema).min(1, "At least one address is required."),
    phones: z.array(PhonePayloadSchema).optional(),
});

export const UpdateContactGroupPayloadSchema = CreateContactGroupPayloadSchema.partial();
