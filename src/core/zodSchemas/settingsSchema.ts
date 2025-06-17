import { z } from 'zod';
import { UserCountrySchema, UserLanguageSchema, CurrencySchema, PaginationLinksSchema, MetaSchema } from './userSchema'; // Reusing some common schemas

// Social Media Settings Schemas
export const SocialMediaItemSchema = z.object({
  url: z.string().url(),
  name: z.string(),
  icon_url: z.string(), // Path or full URL
});

export const SocialMediaSettingsSchema = z.object({
  id: z.number(),
  partner_id: z.number().nullable(),
  subdomain_id: z.number().nullable(),
  slug: z.string(),
  data: z.array(SocialMediaItemSchema),
  company_id: z.number().nullable(),
});

// States Schemas
export const StateSchema = z.object({
  id: z.number(),
  name: z.string(),
  iso2: z.string(),
  is_active: z.boolean(),
  tax_rate: z.number().nullable(),
  country_id: z.number(),
  has_sale_tax: z.boolean(),
  max_tax_free_trade: z.number().nullable(),
  country: UserCountrySchema, // Reusing UserCountrySchema defined in userSchema.ts
});

export const StateListResponseSchema = z.object({
  data: z.array(StateSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});

export const GetStatesParamsSchema = z.object({
  countryId:z.number(),
  per_page: z.number().optional(),
  page: z.number().optional(),
  // other filters like name, iso2, isActive can be added
});


// Config Data Schemas
export const SaleSystemSchema = z.object({
  id: z.number().nullable(),
  default_warranty_days: z.number().nullable(),
  register_number: z.string().nullable(),
  register_office: z.string().nullable(),
  email: z.string().email(),
  company_name: z.string(),
  street: z.string(),
  house_number: z.string(),
  postal_code: z.string(),
  city: z.string(),
  country: z.string(), // This is a string, not the UserCountrySchema object here
  phone: z.string(),
  fax: z.string().nullable(),
  bic: z.string().nullable(),
  tax_number: z.string(),
  vat_number: z.string(),
  has_warehouse: z.boolean().nullable(),
  is_active: z.boolean().nullable(),
  has_network: z.boolean().nullable(),
  has_btob: z.boolean().nullable(),
  has_btoc: z.boolean().nullable(),
  has_delivery: z.boolean().nullable(),
  warranty_days: z.number().nullable(),
  max_client_root: z.number().nullable(),
  default_vat: z.string(), // e.g., "19"
  template: z.string(),
  partner: z.unknown().nullable(), // Define if structure known
  partner_detail: z.unknown().nullable(),
  partner_picture: z.unknown().nullable(),
  file_id: z.number().nullable(),
  logo: z.string().url(),
  'shop-logo': z.string().url(), // Property name has a dash
  favicon: z.string().url(),
  website_title: z.string(),
  mighty_network_url: z.string().url().optional().nullable(),
});

export const TransportationRuleSchema = z.object({
  id: z.number(),
  country_id: z.number(),
  min_partner_amount: z.number().nullable(),
  min_partner_amount_string: z.string().nullable(),
  min_partner_amount_string_template: z.string().nullable(),
  partner_cost: z.number().nullable(),
  partner_cost_string: z.string().nullable(),
  partner_cost_string_template: z.string().nullable(),
  partner_cost_gross: z.number().nullable(),
  partner_cost_gross_string: z.string().nullable(),
  partner_cost_gross_string_template: z.string().nullable(),
});

// For ConfigData, Country and Language are similar to UserCountrySchema and UserLanguageSchema but might have slight differences or additional nested data.
// We can reuse them or define specific versions if needed. For now, reusing with .optional() for differing fields.
export const ConfigCountrySchema = UserCountrySchema.extend({
    transportationRule: TransportationRuleSchema.optional().nullable(), // Added from Configs/Data
});

export const ConfigLanguageSchema = UserLanguageSchema; // Assumed to be the same as UserLanguageSchema

export const ConfigCompanyContactGroupAddressSchema = z.object({
  id: z.number(),
  city: z.string(),
  state: z.string().nullable(), // e.g. "FL"
  state_id: z.number().nullable(),
  address1: z.string(),
  address2: z.string().nullable(),
  address3: z.string().nullable(),
  address4: z.string().nullable(),
  latitude: z.string().nullable(),
  longitude: z.string().nullable(),
  postal_code: z.string(),
  house_number: z.string().nullable(),
  additional: z.string().nullable(),
  post_identity: z.string().nullable(),
  title: z.string(),
  pack_station_number: z.string().nullable(),
  is_pack_station: z.boolean(),
  gln_number: z.string().nullable(),
  is_post_office: z.boolean(),
  address_complete: z.string(),
  country: ConfigCountrySchema, // Nested country specific to this address
});

export const ConfigCompanyContactGroupSchema = z.object({
  id: z.number(),
  title: z.string(),
  user_id: z.number().nullable(),
  country_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  full_name: z.string(),
  gender: z.string().nullable(), // e.g. "male"
  company_name: z.string().nullable(),
  is_archive: z.boolean(),
  websites: z.array(z.unknown()), // Define if structure known
  address: ConfigCompanyContactGroupAddressSchema,
  country: ConfigCountrySchema, // Country associated with the contact group itself
  phones: z.array(z.unknown()), // Define if structure known
  emails: z.array(z.object({ id: z.number(), email: z.string().email() })),
});


export const ConfigCompanySchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.boolean(),
  contact_group_id: z.number(),
  tax_number: z.string().nullable(),
  iban: z.string().nullable(),
  swift: z.string().nullable(),
  chief_name: z.string().nullable(),
  bank_name: z.string().nullable(),
  bic: z.string().nullable(),
  vat_number: z.string().nullable(),
  logo_path: z.string().url(),
  content_hash: z.string(),
  contactGroup: ConfigCompanyContactGroupSchema,
});

export const ConfigDataSchema = z.object({
  admin_page: z.string().url(),
  saleSystem: SaleSystemSchema,
  subdomain: z.unknown().nullable(), // Define if structure known
  country: ConfigCountrySchema,
  language: ConfigLanguageSchema,
  default_vat: z.number(),
  is_mlm_active: z.boolean(),
  is_subscription_active: z.boolean(),
  transportation_rule: TransportationRuleSchema.nullable(),
  user_currency: CurrencySchema,
  company: ConfigCompanySchema,
  countries_has_shipping_service: z.array(z.number()),
  states_has_only_standard_shipping: z.array(z.number()),
  is_adyen_active: z.boolean(),
});

export const ConfigDataResponseSchema = z.object({
    data: ConfigDataSchema,
});
export const GetCountriesParamsSchema = z.object({
  isActive: z.boolean().optional(),
  per_page: z.number().optional(),
  page: z.number().optional(),
});
export const CountryListResponseSchema = z.object({
  data: z.array(UserCountrySchema), // از اسکیمای کشور که در userSchema تعریف شده استفاده می‌کنیم
  links: PaginationLinksSchema,
  meta: MetaSchema,
});
export const GetConfigDataParamsSchema = z.object({
  // ✅ countryId را اختیاری می‌کنیم
  countryId: z.union([z.string(), z.number()]).transform(val => String(val)).optional(),
  deliveryContactGroupId: z.number().optional(),
});

// Languages Schemas (reusing UserLanguageSchema for individual Language items)
export const LanguageListResponse = z.object({
  data: z.array(UserLanguageSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});

export const GetLanguagesParams = z.object({
  isActive: z.number(),
  per_page: z.number().optional(),
  page: z.number(),
});

// Payment Methods Schemas
export const PaymentMethodTranslateSchema = z.object({
  payment_method_id: z.number(),
  locale: z.string(),
  name: z.string(),
});

export const PaymentMethodSchema = z.object({
  id: z.number(),
  file_id: z.number().nullable(),
  name: z.string(), // This is the default name, translations are in 'translate'
file_path: z.union([z.string(), z.number()]).nullable(),
  sort: z.number(),
  is_embedded: z.boolean(),
  is_default: z.union([z.number(), z.boolean()]), // Can be either 0/1 or true/false
  translate: z.array(PaymentMethodTranslateSchema),
});

export const PaymentMethodListResponseSchema = z.object({
  data: z.array(PaymentMethodSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});

export const GetPaymentMethodsParamsSchema = z.object({
  per_page: z.number().optional(),
  page: z.number().optional(),
companyCountryId: z.union([z.string(), z.number()]).nullable().optional(),
  companyCurrency: z.number().optional(),
  //orderPay: z.orderBy().optional(),
});
export const GetLanguagesParamsSchema = z.object({
  // define your schema fields here
});
export const LanguageItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  locale: z.string(),
  is_ltr: z.boolean(),
  is_default: z.boolean(),
  is_active: z.boolean(),
});
export const LanguageListResponseSchema = z.object({
  data: z.array(LanguageItemSchema),
  // define your schema fields here
});


