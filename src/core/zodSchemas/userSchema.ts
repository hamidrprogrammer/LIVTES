import { z } from 'zod';

// Common Schemas (assuming these would be in a shared location)
export const MetaLinkSchema = z.object({
  url: z.string().url().nullable(),
  label: z.string(),
  active: z.boolean(),
});

export const PaginationLinksSchema = z.object({
  first: z.string().url().nullable(),
  last: z.string().url().nullable(),
  prev: z.string().url().nullable(),
  next: z.string().url().nullable(),
});

export const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable(),
  last_page: z.number(),
  links: z.array(MetaLinkSchema),
  path: z.string().url(),
  per_page: z.number(),
  to: z.number().nullable(),
  total: z.number(),
});

// User Profile Schemas
export const UserRolePermissionSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const UserRoleSchema = z.object({
  id: z.number(),
  title: z.string(),
  company_visibility: z.boolean().optional(), // based on sample from product GET
  owner_visibility: z.boolean().optional(), // based on sample from product GET
  slug: z.string(),
  permissions: z.array(UserRolePermissionSchema).optional(), // Present in a detailed user profile example
});

export const UserLanguageSchema = z.object({
  id: z.number(),
  title: z.string(),
  locale: z.string(),
  is_ltr: z.boolean(),
  is_default: z.boolean(),
  is_active: z.boolean(),
});

export const CurrencySchema = z.object({
  name: z.string(),
  id: z.number(),
  ratio: z.number(),
  is_default: z.boolean(),
  symbol: z.string(),
  iso3: z.string(),
  is_active: z.boolean(),
  translate: z.array(z.object({ currency_id: z.number(), locale: z.string(), name: z.string() })).optional(),
});

export const CountryVatSchema = z.object({
  id: z.number(),
  country_id: z.number(),
  number: z.string().nullable(),
  valid_from: z.string().datetime().nullable(),
  value: z.number(),
});
export interface ChangePasswordPayload {
  current_password: string;
  password: string;
  password_confirmation: string;
}
export const UserCountrySchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  default_vat: z.number(),
  default_warranty_days: z.number(),
  max_tax_free_trade: z.number().nullable(),
  max_small_business_trade: z.number().nullable(),
  is_eeu: z.boolean(),
  iso2: z.string(),
  iso3: z.string(),
  is_active: z.boolean(),
  is_default: z.boolean(),
  timezone: z.string().nullable(), // Assuming string, adjust if has specific format
  duty_percentage_of_goods: z.number().nullable(),
  duty_method: z.string().nullable(),
  currency: CurrencySchema,
  vats: z.array(CountryVatSchema).optional(),
  translate: z.array(z.object({ country_id: z.number(), locale: z.string(), name: z.string() })).optional(),
});

export const UserPartnerDataSchema = z.object({
  upline: z.array(z.unknown()).optional(), // Define if structure known
  is_active_for_bonus: z.string().datetime().optional().nullable(),
  active_for_bonus_expire_date: z.string().datetime().optional().nullable(),
  dashboard: z.object({ points_goal: z.number() }).optional().nullable(),
  // us_tax_information and us_bank_account are highly specific, simplified here
  us_tax_information: z.record(z.unknown()).optional().nullable(),
  us_bank_account: z.record(z.unknown()).optional().nullable(),
});

export const UserPartnerSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  sale_forecast: z.number().nullable(),
  parent_id: z.number().nullable(),
  left_tree: z.number(),
  right_tree: z.number(),
  mobile: z.string().nullable(),
  bank_name: z.string().nullable(),
  iban: z.string().nullable(),
  swift: z.string().nullable(),
  receive_vat_responsible: z.boolean(),
  send_vat_responsible: z.boolean(),
  active_auto_bonus: z.boolean(),
  active_training_bonus: z.boolean(),
  receive_commission: z.boolean(),
  can_buy: z.boolean(),
  over_personal_turnover: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  is_active: z.boolean(),
  is_approved: z.boolean(),
  public_findable: z.boolean(),
  country_id: z.number().nullable(),
  logo_id: z.number().nullable(),
  company_id: z.number().nullable(),
  coach_id: z.number().nullable(),
  is_coach: z.boolean(),
  coach_percentage: z.number(),
  quit_at: z.string().datetime().nullable(),
  receive_incentive_bonus: z.boolean(),
  is_promotional_article_active: z.boolean(),
  is_full_legals_responsible: z.boolean(),
  has_info_service: z.boolean(),
  fullname: z.string(),
  _data: UserPartnerDataSchema.optional(),
  sponsors_count: z.number().optional().nullable(), // from profile edit response
  partners_count: z.number().optional().nullable(), // from profile edit response
  coachs_count: z.number().optional().nullable(), // from profile edit response
  logo_path: z.string().url().nullable().optional(), // from profile edit response
  subdomains_count: z.number().nullable().optional(), // from profile edit response
  total_time_coaching: z.string().optional().nullable(), // from profile edit response
});

export const UserPersonSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  gender: z.string().nullable(), // Could be enum: 'male', 'female', 'other'
  full_name: z.string(),
  created_by: z.number().nullable(),
});

// Basket related schemas (simplified, as basket details are complex and might belong to a 'Basket' feature)
export const BasketItemSchema = z.object({
  // Define if structure is known or needed for user profile context
  id: z.number(),
  name: z.string(), // Example field
  quantity: z.number(), // Example field
});

export const UserBasketSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  created_by: z.number().nullable(),
  status: z.string(), // e.g., "pending"
  total_price: z.number(),
  symbol: z.string(),
  user: z.object({ // Simplified recursive user, could be just IDs or avoid deep nesting
    id: z.number(),
    username: z.string(),
    email: z.string().email(),
    // ... other essential user fields if needed for context
  }).optional(), // Made optional to prevent deep recursion issues if not primary focus
  basketItems: z.array(BasketItemSchema), // Assuming basketItems structure
});

export const UserAddressSchema = z.object({ // From contact group context
    id: z.number(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    state_id: z.number().nullable(),
    address1: z.string().nullable(),
    address2: z.string().nullable(),
    address3: z.string().nullable(),
    address4: z.string().nullable(),
    latitude: z.string().nullable(),
    longitude: z.string().nullable(),
    postal_code: z.string().nullable(),
    house_number: z.string().nullable(),
    additional: z.string().nullable(),
    post_identity: z.string().nullable(),
    title: z.string().nullable(),
    pack_station_number: z.string().nullable(),
    is_pack_station: z.boolean().optional(),
    gln_number: z.string().nullable(),
    is_post_office: z.boolean().optional(),
    address_complete: z.string().nullable(),
    country: UserCountrySchema.optional(), // Optional to avoid making it mandatory if not always present
});


export const UserInvoiceContactGroupSchema = z.object({
  id: z.number(),
  title: z.string(),
  user_id: z.number(),
  country_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  gender: z.string().nullable(),
  company_name: z.string().nullable(),
  is_archive: z.boolean(),
  translate: z.array(z.object({ contact_group_id: z.number(), locale: z.string(), title: z.string() })).optional(),
  country: UserCountrySchema.optional(), // from deeper inspection of a sample
  address: UserAddressSchema.optional(), // from contact group GET response
  phones: z.array(z.object({ id: z.number(), type: z.string(), number: z.string() })).optional(),
  emails: z.array(z.object({ id: z.number(), email: z.string().email() })).optional(),
});
export const LegalDocumentSchema = z.object({
  id: z.number(),
  title: z.string(),
  version: z.string(),
  content_url: z.string().url().optional(), // URL to view/download the legal document text
  requires_acceptance: z.boolean(),
  accepted_at: z.string().datetime().nullable(),
  document_key: z.string(), // A unique key for the legal document type
});

export  const UnassignedLegalsResponseSchema = z.object({
  data: z.array(LegalDocumentSchema),
});

// Change Invoice Contact Group Schemas
export  const ChangeInvoiceContactGroupPayloadSchema = z.object({
  invoice_contact_group_id: z.number(),
});
const TranslateSchema = z.object({
  contact_group_id: z.number(),
  locale: z.string(),
  title: z.string(),
});


export  const ChangeInvoiceContactGroupResponseSchema = z.object({
  data: z.object({
    message: z.string(),
  }),
});
export const UserSubdomainTranslateSchema = z.object({
  subdomain_id: z.number(),
  locale: z.string(),
  title: z.string(),
  description: z.string(),
});

export const UserSubdomainSchema = z.object({
  id: z.number(),
  partner_id: z.number(),
  name: z.string(),
  is_active: z.boolean(),
  is_approved: z.boolean(),
  hours: z.unknown().nullable(), // Define if known
  _data: z.array(z.unknown()), // Define if known
  title: z.string(),
  description: z.string(), // HTML string
  updated_at: z.string().datetime(),
  translate: z.array(UserSubdomainTranslateSchema).optional(),
});

export const CareerStepSchema = z.object({ // From User Profile GET response
  id: z.number(),
  product_variation_id: z.number().nullable(),
  slug: z.string(),
  min_point: z.number().nullable(),
  min_point_per_year: z.number().nullable(),
  is_generation: z.number(), // or boolean
  voucher_level: z.number(),
  id_account_minus_value: z.string(), // or number
  name: z.string(),
  discount_percentage: z.number().nullable(),
  frontline: z.number(),
  translate: z.array(z.object({ career_step_id: z.number(), locale: z.string(), name: z.string() })),
  productVariation: z.unknown().nullable(), // Define if structure known
});

const CountrySchema = z.object({
  id: z.number(),
});
const InvoiceContactGroupSchema = z.object({
  id: z.number(),
  title: z.string(),
  user_id: z.number(),
  country_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  gender: z.string().nullable(), // since gender is null in your example
  is_archive: z.boolean(),
country: CountrySchema.optional(),
  
});
export const UserProfileSchema = z.object({
  id: z.number(),
  avatar: z.string().nullable(),
  content_hash: z.string().nullable(),
  username: z.string(),
  telephone_number: z.string().nullable(),
  email: z.string(),
  discount_ratio: z.number().nullable(),
  roles: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      company_visibility: z.boolean(),
      owner_visibility: z.boolean(),
      slug: z.string(),
    })
  ).optional(),
  walletBalance: z.string().nullable(),
  payment_method_id: z.number().nullable(),
  is_vat_valid: z.number().nullable(),
  communication_by_letter: z.boolean().nullable(),
  vat_number: z.string().nullable(),
  tax_number: z.string().nullable(),
  credit_limit: z.string().nullable(),
  eori_number: z.string().nullable(),
  use_gln_indocuments: z.any().nullable(),
  default_shipping_method_id: z.any().nullable(),
  default_payment_terms_id: z.any().nullable(),
  file_id: z.number().nullable(),
  point: z.any().nullable(),
  is_active: z.boolean(),
  _data: z.any(),
  birth_date: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  invoice_contact_group_id: z.number().nullable(),
  flag_id: z.any().nullable(),
  dunning_level_id: z.any().nullable(),
  able_to_see_downline: z.any().nullable(),
  old_id: z.any().nullable(),
  sponsor_id: z.any().nullable(),
  old_sponsor_id: z.any().nullable(),
  career_step_id: z.number().nullable(),
  customer_step_id: z.any().nullable(),
  two_factor_enable: z.boolean().nullable(),
  newsletter_active: z.boolean(),
  partner_id: z.number().nullable(),
  language: z.any(),
  country: z.any(),
  partner: z.any(),
  invoiceContactGroup: InvoiceContactGroupSchema,
});



export  const UserProfileResponseSchema = z.object({
  data: z.object({
      invoiceContactGroup:  z.any(),
baskets : z.any(),
   id: z.number(),
  avatar: z.string().nullable(),
  content_hash: z.string().nullable(),
  username: z.string(),
  telephone_number: z.string().nullable(),
  email: z.string(),
  person:UserPersonSchema,
  discount_ratio: z.number().nullable(),
  roles: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      company_visibility: z.boolean(),
      owner_visibility: z.boolean(),
      slug: z.string(),
    })
  ).optional(),
  walletBalance: z.string().nullable(),
  payment_method_id: z.number().nullable(),
  is_vat_valid: z.number().nullable(),
  communication_by_letter: z.boolean().nullable(),
  vat_number: z.string().nullable(),
  tax_number: z.string().nullable(),
  credit_limit: z.string().nullable(),
  eori_number: z.string().nullable(),
  use_gln_indocuments: z.any().nullable(),
  default_shipping_method_id: z.any().nullable(),
  default_payment_terms_id: z.any().nullable(),
  file_id: z.number().nullable(),
  point: z.any().nullable(),
  is_active: z.boolean(),
  _data: z.any(),
  birth_date: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  invoice_contact_group_id: z.number().nullable(),
  flag_id: z.any().nullable(),
  dunning_level_id: z.any().nullable(),
  able_to_see_downline: z.any().nullable(),
  old_id: z.any().nullable(),
  sponsor_id: z.any().nullable(),
  old_sponsor_id: z.any().nullable(),
  career_step_id: z.number().nullable(),
  customer_step_id: z.any().nullable(),
  two_factor_enable: z.boolean().nullable(),
  newsletter_active: z.boolean(),
  partner_id: z.number().nullable(),
  language: z.any(),
  country: CountrySchema.optional(), // ✅ include 'country'
  partner: z.any()
  })
});

// Schema for Update User Profile Payload
export  const UpdateUserProfilePayloadSchema = z.object({
  email: z.string().email().optional(),
  vat_number: z.string().optional().nullable(),
  country_id: z.number().optional(),
  language_id: z.number().optional(),
  telephone_number: z.string().optional().nullable(),
  birth_date: z.string().refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {
    message: "Birth date must be in YYYY-MM-DD format",
  }).optional().nullable(),
  people: z.object({
    gender: z.enum(['male', 'female', 'other', '']).optional().nullable(), // Added empty string for potential null/default from forms
    first_name: z.string().optional(),
    last_name: z.string().optional(),
  }).optional(),
  // Add any other fields that can be edited
  newsletter_active: z.boolean().optional(),
  communication_by_letter: z.boolean().optional(),
  current_password: z.string().optional(), // For password change
  new_password: z.string().optional(), // For password change
  new_password_confirmation: z.string().optional(), // For password change
  // two_factor_enable: z.boolean().optional(), // Handled by specific 2FA endpoints usually
});

// User Documents Schemas
// Assuming a structure for documents as it's empty in the provided Postman collection
export const UserDocumentSchema = z.object({
  id: z.number(),
  type: z.string(), // e.g., 'invoice', 'credit_note'
  number: z.string(),
  order_id: z.union([z.string(), z.number()]).nullable(),
  created_at: z.string().datetime(),
  file_url: z.string().url().optional(), // URL to download the document
  // Additional fields based on common document structures
  amount: z.number().optional().nullable(),
  currency: z.string().optional().nullable(),
});

export  const UserDocumentsResponseSchema = z.object({
  data: z.array(UserDocumentSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});

export  const GetUserDocumentsParamsSchema = z.object({
  page: z.number().int().positive().optional(),
  per_page: z.number().int().positive().optional(),
  'orderBy[id]': z.enum(['ASC', 'DESC']).optional(),
  // Add other potential filter/sort params if known
});

// Unassigned Own Legals Schemas
// Assuming a structure for legals as data is empty array in Postman

