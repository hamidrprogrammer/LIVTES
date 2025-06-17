import { z } from 'zod';

// Common Schemas
const MetaLinkSchema = z.object({
  url: z.string().url().optional().nullable(),
  label: z.string().optional().nullable(),
  active: z.boolean().optional().nullable(),
});

const PaginationLinksSchema = z.object({
  first: z.string().url().optional().nullable(),
  last: z.string().url().optional().nullable(),
  prev: z.string().url().optional().nullable(),
  next: z.string().url().optional().nullable(),
});

const MetaSchema = z.object({
  current_page: z.number().optional().nullable(),
  from: z.number().optional().nullable(),
  last_page: z.number().optional().nullable(),
  links: z.array(MetaLinkSchema).optional().nullable(),
  path: z.string().url().optional().nullable(),
  per_page: z.number().optional().nullable(),
  to: z.number().optional().nullable(),
  total: z.number().optional().nullable(),
});

const UserCountrySchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  default_vat: z.number().optional().nullable(),
  default_warranty_days: z.number().optional().nullable(),
  max_tax_free_trade: z.number().optional().nullable(),
  max_small_business_trade: z.any().optional().nullable(),
  is_eeu: z.boolean().optional().nullable(),
  iso2: z.string().optional().nullable(),
  iso3: z.string().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_default: z.boolean().optional().nullable(),
  timezone: z.any().optional().nullable(),
  duty_percentage_of_goods: z.number().optional().nullable(),
  duty_method: z.string().optional().nullable(),
});

const CurrencyTranslateSchema = z.object({
  currency_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const CurrencySchema = z.object({
  name: z.string().optional().nullable(),
  id: z.number().optional().nullable(),
  ratio: z.number().optional().nullable(),
  is_default: z.boolean().optional().nullable(),
  symbol: z.string().optional().nullable(),
  iso3: z.string(),
  is_active: z.boolean().optional().nullable(),
  translate: z.array(CurrencyTranslateSchema).optional().nullable(),
});

const UserProfileAddressSchema = z.object({
  id: z.number().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  state_id: z.number().optional().nullable(),
  address1: z.string().optional().nullable(),
  address2: z.any().optional().nullable(),
  address3: z.any().optional().nullable(),
  address4: z.any().optional().nullable(),
  latitude: z.string().optional().nullable(),
  longitude: z.string().optional().nullable(),
  postal_code: z.string().optional().nullable(),
  house_number: z.any().optional().nullable(),
  additional: z.any().optional().nullable(),
  post_identity: z.any().optional().nullable(),
  title: z.string().optional().nullable(),
  pack_station_number: z.any().optional().nullable(),
  is_pack_station: z.boolean().optional().nullable(),
  gln_number: z.any().optional().nullable(),
  is_post_office: z.boolean().optional().nullable(),
  address_complete: z.string(),
  country: UserCountrySchema.optional().nullable(),
});

export const BasicContactGroupInfoSchema = z.object({
  id: z.number().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  company_name: z.string().optional().nullable(),
  full_name: z.string().optional().nullable(),
  address: z.object({
      address_complete: z.string(),

  }),
});

const PersonSchema = z.object({
  id: z.number().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  full_name: z.string().optional().nullable(),
  company_name: z.string().optional().nullable(),
  created_by: z.any().optional().nullable(),
});

const UserSchema = z.object({
  id: z.number().optional().nullable(),
  invoice_contact_group_id: z.any().optional().nullable(),
  sponsor_id: z.any().optional().nullable(),
  avatar: z.any().optional().nullable(),
  content_hash: z.any().optional().nullable(),
  username: z.any().optional().nullable(),
  telephone_number: z.any().optional().nullable(),
  email: z.string().email().optional().nullable(),
  discount_ratio: z.any().optional().nullable(),
  person: PersonSchema.optional().nullable(),
});

const OrderStatusTranslateSchema = z.object({
  order_status_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const OrderStatusSchema = z.object({
  id: z.number().optional().nullable(),
  number: z.number().optional().nullable(),
  color: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  translate: z.array(OrderStatusTranslateSchema).optional().nullable(),
});

const DataSchema = z.object({
  mode: z.string().optional().nullable(),
  sandbox_merchant_code: z.string().optional().nullable(),
  sandbox_api_key: z.string().optional().nullable(),
  sandbox_client_key: z.string().optional().nullable(),
  sandbox_webhook_hmac: z.string().optional().nullable(),
});

const RootFileSchema = z.object({
  id: z.number().optional().nullable(),
  path: z.string().url().optional().nullable(),
  size: z.number().optional().nullable(),
  mime_type: z.string().optional().nullable(),
});

const FileSchema = z.object({
  id: z.number().optional().nullable(),
  extension: z.string().optional().nullable(),
  enabled: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  root_file: RootFileSchema.optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  updated_at: z.string().datetime().optional().nullable(),
});

const PaymentMethodTranslateSchema = z.object({
  payment_method_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const PaymentMethodSchema = z.object({
  id: z.number().optional().nullable(),
  payment_method_type_id: z.number().optional().nullable(),
  price_value: z.any().optional().nullable(),
  price_id: z.any().optional().nullable(),
  file_id: z.number().optional().nullable(),
  is_default: z.number().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_embedded: z.boolean().optional().nullable(),
  company_id: z.number().optional().nullable(),
  payment_cost: z.number().optional().nullable(),
  payment_percent: z.number().optional().nullable(),
  sort: z.number().optional().nullable(),
  _data: DataSchema.optional().nullable(),
  name: z.string().optional().nullable(),
  is_link_generatable: z.boolean().optional().nullable(),
  file_path: z.string().url().optional().nullable(),
  translate: z.array(PaymentMethodTranslateSchema).optional().nullable(),
  file: FileSchema.optional().nullable(),
});

const LanguageSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string().optional().nullable(),
  locale: z.string().optional().nullable(),
  is_ltr: z.boolean().optional().nullable(),
  is_default: z.boolean().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
});

const CountryVatSchema = z.object({
  id: z.number().optional().nullable(),
  country_id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  valid_from: z.string().datetime().optional().nullable(),
  value: z.number().optional().nullable(),
});

const CountryTranslateSchema = z.object({
  country_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const CountrySchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  default_vat: z.number().optional().nullable(),
  default_warranty_days: z.number().optional().nullable(),
  max_tax_free_trade: z.number().optional().nullable(),
  max_small_business_trade: z.any().optional().nullable(),
  is_eeu: z.boolean().optional().nullable(),
  iso2: z.string().optional().nullable(),
  iso3: z.string().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_default: z.boolean().optional().nullable(),
  timezone: z.any().optional().nullable(),
  duty_percentage_of_goods: z.number().optional().nullable(),
  duty_method: z.string().optional().nullable(),
  currency: CurrencySchema.optional().nullable(),
  vats: z.array(CountryVatSchema).optional().nullable(),
  translate: z.array(CountryTranslateSchema).optional().nullable(),
});

const ContactGroupTranslateSchema = z.object({
  contact_group_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
});

const AddressSchema = z.object({
  id: z.number().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  state_id: z.number().optional().nullable(),
  address1: z.string().optional().nullable(),
  address2: z.any().optional().nullable(),
  address3: z.any().optional().nullable(),
  address4: z.any().optional().nullable(),
  latitude: z.string().optional().nullable(),
  longitude: z.string().optional().nullable(),
  postal_code: z.string().optional().nullable(),
  house_number: z.any().optional().nullable(),
  additional: z.any().optional().nullable(),
  post_identity: z.any().optional().nullable(),
  title: z.string().optional().nullable(),
  pack_station_number: z.any().optional().nullable(),
  is_pack_station: z.boolean().optional().nullable(),
  gln_number: z.any().optional().nullable(),
  is_post_office: z.boolean().optional().nullable(),
  address_complete: z.string().optional().nullable(),
  country: CountrySchema.optional().nullable(),
});

const PhoneSchema = z.object({
  id: z.number().optional().nullable(),
  type: z.string().optional().nullable(),
  number: z.string().optional().nullable(),
});

const InvoiceContactGroupSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string().optional().nullable(),
  user_id: z.number().optional().nullable(),
  country_id: z.number().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  full_name: z.string().optional().nullable(),
  gender: z.any().optional().nullable(),
  company_name: z.string().optional().nullable(),
  is_archive: z.boolean().optional().nullable(),
  translate: z.array(ContactGroupTranslateSchema).optional().nullable(),
  websites: z.array(z.unknown()).optional().nullable(),
  address: AddressSchema.optional().nullable(),
  country: CountrySchema.optional().nullable(),
  phones: z.array(PhoneSchema).optional().nullable(),
  emails: z.array(z.unknown()).optional().nullable(),
});

const CompanySchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_default: z.boolean().optional().nullable(),
  is_main: z.boolean().optional().nullable(),
  contact_group_id: z.number().optional().nullable(),
  tax_number: z.any().optional().nullable(),
  iban: z.any().optional().nullable(),
  swift: z.any().optional().nullable(),
  chief_name: z.any().optional().nullable(),
  bank_name: z.any().optional().nullable(),
  bic: z.string().optional().nullable(),
  vat_number: z.any().optional().nullable(),
  logo_path: z.string().url().optional().nullable(),
  content_hash: z.string().optional().nullable(),
});

// Order Subscription Schemas
export const OrderSubscriptionSchema = z.object({
  id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  payment_status: z.string().optional().nullable(),
  order_date: z.string().datetime().optional().nullable(),
  time_period: z.any().optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  expires_at: z.string().datetime().optional().nullable(),
  last_order_sale_date: z.string().datetime().optional().nullable(),
  next_order_sale_date: z.string().datetime().optional().nullable(),
  adyen_payment_method: z.string().optional().nullable(),
  last_order_delivery_date: z.any().optional().nullable(),
  total_gross_amount_string: z.string().optional().nullable(),
  total_gross_amount_string_template: z.string().optional().nullable(),
  total_gross_amount: z.number().optional().nullable(),
  total_net_amount_string: z.string().optional().nullable(),
  total_net_amount_string_template: z.string().optional().nullable(),
  total_net_amount: z.number().optional().nullable(),
  total_vat_amount_string: z.string().optional().nullable(),
  user: UserSchema.optional().nullable(),
  orderStatus: OrderStatusSchema.optional().nullable(),
  paymentMethod: PaymentMethodSchema.optional().nullable(),
});

export const OrderSubscriptionListResponseSchema = z.object({
  data: z.array(OrderSubscriptionSchema).optional().nullable(),
   links: PaginationLinksSchema.optional().nullable(),
  meta: MetaSchema.optional().nullable(),
});

export const GetOrderSubscriptionListParamsSchema = z.object({
  page: z.number().int().positive().optional().nullable(),
  per_page: z.number().int().positive().optional().nullable(),
  'orderBy[id]': z.enum(['ASC', 'DESC']).optional().nullable(),
  search: z.string().optional(),
  status: z.string().optional().nullable(),
});

const ProductSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  number: z.string().optional().nullable(),
  maximum_sale_for_each_user: z.any().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  price_visible: z.boolean().optional().nullable(),
  default_vat: z.number().optional().nullable(),
  auto_active_net_stock: z.boolean().optional().nullable(),
  auto_deactive_net_stock: z.boolean().optional().nullable(),
  max_order_quantity: z.any().optional().nullable(),
  min_order_quantity: z.number().optional().nullable(),
  interval_order_quantity: z.any().optional().nullable(),
  release_date: z.string().datetime().optional().nullable(),
  available_until: z.any().optional().nullable(),
  file_id: z.number().optional().nullable(),
  sort: z.any().optional().nullable(),
  slug: z.string().optional().nullable(),
  file: z.string().url().optional().nullable(),
  productCategories: z.array(z.unknown()).optional().nullable(),
  partner: z.any().optional().nullable(),
  main_variation_id: z.number().optional().nullable(),
});

const OrderPositionTypeTranslateSchema = z.object({
  order_position_type_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const OrderPositionTypeSchema = z.object({
  id: z.number().optional().nullable(),
  slug: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  translate: z.array(OrderPositionTypeTranslateSchema).optional().nullable(),
});

const VatSchema = z.object({
  id: z.number().optional().nullable(),
  country_id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  valid_from: z.string().datetime().optional().nullable(),
  value: z.number().optional().nullable(),
});

const ProductVariationFileSchema = z.object({
  id: z.number().optional().nullable(),
  type: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  link: z.string().url().optional().nullable(),
  content_hash: z.string().optional().nullable(),
  sort: z.any().optional().nullable(),
  file: z.string().url().optional().nullable(),
  file_self_id: z.number().optional().nullable(),
});

const ProductVariationSchema = z.object({
  id: z.number().optional().nullable(),
  sale_forecast: z.any().optional().nullable(),
  number: z.string().optional().nullable(),
  is_main: z.boolean().optional().nullable(),
  only_partner: z.boolean().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_dangerous_goods: z.boolean().optional().nullable(),
  is_wallet_coin_product: z.boolean().optional().nullable(),
  slug: z.any().optional().nullable(),
  has_serial_number: z.boolean().optional().nullable(),
  inherit: z.boolean().optional().nullable(),
  quantity: z.any().optional().nullable(),
  maximum_sale_for_each_user: z.any().optional().nullable(),
  max_order_quantity: z.any().optional().nullable(),
  min_order_quantity: z.number().optional().nullable(),
  release_date: z.string().datetime().optional().nullable(),
  available_until: z.any().optional().nullable(),
  auto_active_net_stock: z.boolean().optional().nullable(),
  auto_deactivate_net_stock: z.boolean().optional().nullable(),
  type: z.string().optional().nullable(),
  average_rating: z.number().optional().nullable(),
  by_exist_product: z.any().optional().nullable(),
  review_count: z.number().optional().nullable(),
  point: z.any().optional().nullable(),
  weight: z.any().optional().nullable(),
  unit_id: z.any().optional().nullable(),
  availability_id: z.number().optional().nullable(),
  vat: z.number().optional().nullable(),
  free_for_customer: z.number().optional().nullable(),
  free_for_partner: z.number().optional().nullable(),
  free_for_customer_value: z.number().optional().nullable(),
  free_for_partner_value: z.number().optional().nullable(),
  can_be_bought_once: z.number().optional().nullable(),
  voucherable: z.number().optional().nullable(),
  voucherable_for_partner: z.number().optional().nullable(),
  max_free_products: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  preview_text: z.string().optional().nullable(),
  technical_data: z.string().optional().nullable(),
  meta_description: z.any().optional().nullable(),
  meta_keywords: z.any().optional().nullable(),
  free_logistics_for_customer: z.boolean().optional().nullable(),
  free_logistics_for_partner: z.boolean().optional().nullable(),
  product: ProductSchema.optional().nullable(),
  productVariationFiles: z.array(ProductVariationFileSchema).optional().nullable(),
  productVariationFile:z.object({
    file:z.string().optional().nullable()
  }).optional().nullable()
});
export const OrderPositionMlmDetailSchema = z.object({
  qv: z.number().nullable(),
  provision_price: z.number(),
  percentage_of_provision: z.number(),
}).nullable();
export const OrderPositionSchema = z.object({
 id: z.number(),
  product_variation_id: z.number().nullable(),
  quantity: z.number(),
  description: z.string().nullable(),
  gross_amount: z.number(),
  net_amount: z.number(),
  discount: z.number().optional().nullable(),
  price_value: z.number().optional().nullable(),
  productVariation: ProductVariationSchema.nullable(),
  order_position_type_id: z.number().optional().nullable(),
  orderPositionMlmDetail: OrderPositionMlmDetailSchema.optional(),
});

export const PositionSchema = z.object({
  id: z.number(),
  order_position_type_id: z.number().optional().nullable(),
  product_variation_id: z.number().optional().nullable(),
  quantity: z.number().optional().nullable(),
  price_value: z.number().optional().nullable(),
  interval_days: z.number().optional().nullable(),
  last_order_sale_date: z.string().datetime().optional().nullable(),
  next_order_sale_date: z.any().optional().nullable(),
  description: z.any().optional().nullable(),
  sort: z.number().optional().nullable(),
  past_periods_count: z.number().optional().nullable(),
  discount: z.number().optional().nullable(),
  discount_point: z.number().optional().nullable(),
  number_of_discount_periods: z.number().optional().nullable(),
  ext_position_number: z.any().optional().nullable(),
  vat_id: z.number().optional().nullable(),
  vat_value: z.number().optional().nullable(),
  order_subscription_id: z.number().optional().nullable(),
  net_price: z.number().optional().nullable(),
  gross_price: z.number().optional().nullable(),
  customer_reference: z.any().optional().nullable(),
  estimate_delivery_date: z.any().optional().nullable(),
  data_current: z.any().optional().nullable(),
  gross_amount: z.number().optional().nullable(),
  net_amount: z.number().optional().nullable(),
  vat_amount: z.number().optional().nullable(),
  point: z.number().optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  updated_at: z.string().datetime().optional().nullable(),
  single_gross_amount: z.number().optional().nullable(),
  parent_id: z.any().optional().nullable(),
  productVariation: ProductVariationSchema.optional().nullable(),
  orderPositionType: OrderPositionTypeSchema.optional().nullable(),
  vat: VatSchema.optional().nullable(),
  orderPositionMlmDetail: z.any().optional().nullable(),
});

// Order Sale Schemas
export const OrderSaleSchema = z.object({
  id: z.number().optional().nullable(),
  order_number: z.string().optional().nullable(),
  payment_status: z.string().optional().nullable(),
  payment_method_id: z.number().optional().nullable(),
  payment_method_name: z.string().optional().nullable(),
  shipping_profile_id: z.number().optional().nullable(),
  shipping_profile_name: z.string().optional().nullable(),
  tracking_number: z.string().optional().nullable(),
  currency: CurrencySchema.pick({ iso3: true, symbol: true }).optional().nullable(),
  total_gross_amount: z.number().optional().nullable(),
  total_net_amount: z.number().optional().nullable(),
  total_vat_amount: z.number().optional().nullable(),
  shipping_cost_gross: z.number().optional().nullable(),
  shipping_cost_net: z.number().optional().nullable(),
  discount_amount_gross: z.number().optional().nullable(),
  order_date: z.string().datetime().optional().nullable(),
  orderStatus: z.object({
    name: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
  }).optional().nullable(),
  invoice_contact_group: BasicContactGroupInfoSchema.optional().nullable(),
  delivery_contact_group: BasicContactGroupInfoSchema.optional().nullable(),
});

export const OrderSaleListResponseSchema = z.object({
  data: z.array(OrderSaleSchema).optional().nullable(),
  links: PaginationLinksSchema.optional().nullable(),
  meta: MetaSchema.optional().nullable(),
});
// ASC
export const GetOrderSaleListParamsSchema = z.object({
  page: z.number().int().positive().optional().nullable(),
  per_page: z.number().int().positive().optional().nullable(),
  'orderBy[id]': z.string().optional(),
  search:z.string().optional(),
  
  status: z.string().optional().nullable(),
  payment_status: z.string().optional().nullable(),
});

export const OrderSaleDetailSchema = z.object({
  id: z.number().optional().nullable(),
  order_number: z.string().optional().nullable(),
  order_date: z.string().datetime(),
  payment_status: z.string().optional().nullable(),
  orderStatus: z.object({
    name: z.string().optional().nullable(),
    id:z.number(),
    color: z.string().optional().nullable(),
  }),
  currency: CurrencySchema,
  total_gross_amount: z.number(),
  product_variations_net_value: z.number(),
  product_variations_vat_value: z.number(),
  gross_shipping_cost: z.number(),
  invoiceContactGroup: BasicContactGroupInfoSchema,
  deliveryContactGroup: BasicContactGroupInfoSchema,
  orderSalePositions: z.array(OrderPositionSchema),
  total_payment: z.number(),
  total_pending:z.number(),
  paymentMethod:z.object({
    is_link_generatable:z.boolean()
  })
});

export const OrderSaleDetailResponseSchema = z.object({
  data: OrderSaleDetailSchema,
});

const OrderSubscriptionDetailsDataSchema = z.object({
  id: z.number().optional().nullable(),
  invoice_link:z.string().optional().nullable(),
  owner_id: z.any().optional().nullable(),
  user_id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  payment_status: z.string().optional().nullable(),
  customer_reference: z.any().optional().nullable(),
  order_status_id: z.number().optional().nullable(),
  payment_method_id: z.number().optional().nullable(),
  payment_term_id: z.any().optional().nullable(),
  description: z.any().optional().nullable(),
  order_date: z.string().datetime().optional().nullable(),
  early_payment_discount_days: z.any().optional().nullable(),
  early_payment_discount_percentage: z.any().optional().nullable(),
  language_id: z.number().optional().nullable(),
  shipping_profile_id: z.any().optional().nullable(),
  partner_id: z.any().optional().nullable(),
  time_period: z.any().optional().nullable(),
  total_gross_amount: z.number().optional().nullable(),
  total_net_amount: z.number().optional().nullable(),
  total_vat_amount: z.number().optional().nullable(),
  gross_shipping_cost: z.number().optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  updated_at: z.string().datetime().optional().nullable(),
  expires_at: z.any().optional().nullable(),
  factor: z.string().optional().nullable(),
  ip: z.any().optional().nullable(),
  total_price: z.number().optional().nullable(),
  last_order_sale_date: z.string().datetime().optional().nullable(),
  next_order_sale_date: z.any().optional().nullable(),
  is_editable: z.boolean().optional().nullable(),
  subdomain_id: z.any().optional().nullable(),
  referrer_id: z.any().optional().nullable(),
  early_payment_discount: z.number().optional().nullable(),
  early_payment_date: z.any().optional().nullable(),
  company_id: z.number().optional().nullable(),
  customer_full_name: z.string().optional().nullable(),
  last_order_delivery_date: z.any().optional().nullable(),
  positions: z.array(PositionSchema),
  currency: CurrencySchema.optional().nullable(),
  user: UserSchema.optional().nullable(),
  invoiceContactGroup: InvoiceContactGroupSchema.optional().nullable(),
  deliveryContactGroup: InvoiceContactGroupSchema.optional().nullable(),
  orderComments: z.any().optional().nullable(),
  paymentTerm: z.any().optional().nullable(),
  orderStatus: OrderStatusSchema.optional().nullable(),
  paymentMethod: PaymentMethodSchema.optional().nullable(),
  language: LanguageSchema.optional().nullable(),
  owner: z.any().optional().nullable(),
  shippingProfile: z.any().optional().nullable(),
  referrer: z.any().optional().nullable(),
  subdomain: z.any().optional().nullable(),
  company: CompanySchema.optional().nullable(),
  flags: z.array(z.unknown()).optional().nullable(),
  subscriptions_confirmation_document_link: z.any().optional().nullable(),
  subscriptions_confirmation_cancellation_document_link: z.any().optional().nullable(),
  total_qv: z.number().optional().nullable(),
  total_provision_price: z.number().optional().nullable(),
  total_provision_price_discount: z.number().optional().nullable(),
  price_percentage_discount: z.array(z.unknown()).optional().nullable(),
});

export const OrderSubscriptionDetailsSchema = z.object({
  data: OrderSubscriptionDetailsDataSchema.optional().nullable(),
});

export const OrderSubscriptionResponseDataSchema = z.object({
  data: OrderSubscriptionDetailsDataSchema.optional().nullable(),
});