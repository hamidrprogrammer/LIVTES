import { z } from 'zod';

// Common Schemas (likely to be moved to a common file later, but included here for completeness of this feature)
export const MetaLinkSchema = z.object({
  url: z.string().url().optional().nullable(),
  label: z.string().optional().nullable(),
  active: z.boolean().optional().nullable(),
});

export const PaginationLinksSchema = z.object({
  first: z.string().url().optional().nullable(),
  last: z.string().url().optional().nullable(),
  prev: z.string().url().optional().nullable(),
  next: z.string().url().optional().nullable(),
});

export const MetaSchema = z.object({
  current_page: z.number().optional().nullable(),
  from: z.number().optional().nullable(),
  last_page: z.number().optional().nullable(),
  links: z.array(MetaLinkSchema).optional().nullable(),
  path: z.string().url().optional().nullable(),
  per_page: z.number().optional().nullable(),
  to: z.number().optional().nullable(),
  total: z.number().optional().nullable(),
});

// Schemas for Product Categories Tree
export const ProductCategorySchema = z.object({
  id: z.number().optional().nullable(),
  partner_id: z.number().optional().nullable(),
  file_id: z.number().optional().nullable(),
  subdomain_id: z.number().optional().nullable(),
  parent_id: z.number().optional().nullable(),
  left_tree: z.number().optional().nullable(),
  right_tree: z.number().optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  updated_at: z.string().datetime().optional().nullable(),
  slug: z.string().optional().nullable(),
  sort: z.number().optional().nullable(),
  show_in_website: z.boolean().optional().nullable(),
  show_in_header: z.boolean().optional().nullable(),
  deleted_at: z.string().datetime().optional().nullable(),
  only_partner: z.number().optional().nullable(), // Assuming 0 or 1, could be boolean
  color: z.string().optional().nullable(),
  cover_file_id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  file: z.unknown().optional().nullable(), // Or a specific file schema if defined
  cover_file: z.unknown().optional().nullable(), // Or a specific file schema if defined
});

// Recursive schema for children
export type ProductCategoryType = z.infer<typeof ProductCategorySchema> & {
  children: ProductCategoryType[];
};
export const ProductCategoryTreeSchema: z.ZodType<ProductCategoryType> = ProductCategorySchema.extend({
  children: z.lazy(() => ProductCategoryTreeSchema.array()).optional().nullable(),
});

export const ProductCategoriesTreeResponseSchema = z.object({
  data: z.array(ProductCategoryTreeSchema).optional().nullable(),
});

export const GetProductCategoriesTreeParamsSchema = z.object({
  'orderBy[sort]': z.enum(['ASC', 'DESC']).optional(), // Based on 'orderBy[sort]=DESC'
});


// Schemas for Product Variations
export const AttributeTypeOptionSchema = z.object({
  id: z.number().optional().nullable(),
  attribute_type_id: z.number().optional().nullable(),
  file_id: z.number().optional().nullable(),
  sort: z.number().optional().nullable(),
  file_path: z.string().optional().nullable(),
  value: z.string().optional().nullable(),
});

export const AttributeTypeSchema = z.object({
  id: z.number().optional().nullable(),
  slug: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  position: z.number().optional().nullable(),
  picture_connectable: z.boolean().optional().nullable(),
  selectable_type: z.string().optional().nullable(), // e.g., "dropdown", "box"
});

export const AttributeSchema = z.object({
  id: z.number().optional().nullable(),
  visible: z.boolean().optional().nullable(),
  is_auto_generated: z.boolean().optional().nullable(),
  value: z.string().optional().nullable(),
  attribute_type_id: z.number().optional().nullable(),
  attribute_type_option_id: z.number().optional().nullable(),
  product_variation_id: z.number().optional().nullable(),
  attributeType: AttributeTypeSchema.optional().nullable(),
  attributeTypeOption: AttributeTypeOptionSchema.optional().nullable(),
});

export const ProductInfoSchema = z.object({
  price_visible: z.boolean().optional().nullable(),
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  file: z.string().url().optional().nullable(),
});

export const SalePriceSchema = z.object({
  unit_price: z.number().optional().nullable(),
  value: z.number().optional().nullable(),
  gross_value: z.number().optional().nullable(),
  gross_value_string: z.string().optional().nullable(),
  gross_value_string_template: z.string().optional().nullable(),
  value_string: z.string().optional().nullable(),
  value_string_template: z.string().optional().nullable(),
  iso3: z.string().optional().nullable(),
  user_discount: z.number().optional().nullable(),
  user_discount_string: z.string().optional().nullable(),
  user_discount_string_template: z.string().optional().nullable(),
  value_after_discount: z.number().optional().nullable(),
  value_after_discount_string: z.string().optional().nullable(),
  value_after_discount_string_template: z.string().optional().nullable(),
  gross_value_after_discount: z.number().optional().nullable(),
  gross_value_after_discount_string: z.string().optional().nullable(),
  gross_value_after_discount_string_template: z.string().optional().nullable(),
  vat_percent: z.number().optional().nullable(),
});

export const TransportationSchema = z.object({
  value: z.number().optional().nullable(),
  vat_percent: z.number().optional().nullable(),
  gross_value: z.number().optional().nullable(),
  iso3: z.string().optional().nullable(),
});

export const AvailabilitySchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  average_days: z.number().optional().nullable(),
  file_id: z.number().optional().nullable(),
  file: z.string().url().optional().nullable(),
});

export const ProductVariationFileSchema = z.object({
  id: z.number().optional().nullable(),
  type: z.string().optional().nullable(), // "image"
  title: z.string().optional().nullable(),
  link: z.string().url().optional().nullable(),
  content_hash: z.string().optional().nullable(),
  file: z.string().url().optional().nullable(),
  file_self_id: z.number().optional().nullable(),
});

export const ShippingProfileIconResourceSchema = z.object({
  id: z.number().optional().nullable(),
  extension: z.string().optional().nullable(),
  enabled: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable(), // "public"
  root_file: z.object({
    id: z.number().optional().nullable(),
    path: z.string().url().optional().nullable(),
    size: z.number().optional().nullable(),
    mime_type: z.string().optional().nullable(),
  }).optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
  updated_at: z.string().datetime().optional().nullable(),
});

export const ShippingProfileSchema = z.object({
  id: z.number().optional().nullable(),
  type: z.string().optional().nullable(), // "post"
  name: z.string().optional().nullable(), // "DHL Express"
  is_active: z.boolean().optional().nullable(),
  icon_id: z.number().optional().nullable(),
  Icon: z.string().url().optional().nullable(), // Note: API response has "Icon" with capital I
  iconResource: ShippingProfileIconResourceSchema.optional().nullable(),
});
export const SubscriptionSchema = z.object({
  id: z.number().nullable().optional(),
  interval_days: z.number().nullable().optional(),
  free_on_first_time: z.boolean().nullable().optional(),
  number_of_discount_periods: z.number().nullable().optional(),
  unit_price: z.number().nullable().optional(),
  value: z.number().nullable().optional(),
  value_string: z.string().nullable().optional(),
  value_string_template: z.string().nullable().optional(),
  gross_value: z.number().nullable().optional(),
  gross_value_string: z.string().nullable().optional(),
  gross_value_string_template: z.string().nullable().optional(),
  iso3: z.string().nullable().optional(),
  user_discount: z.number().nullable().optional(),
  user_discount_string: z.string().nullable().optional(),
  user_discount_string_template: z.string().nullable().optional(),
  value_after_discount: z.number().nullable().optional(),
  value_after_discount_string: z.string().nullable().optional(),
  value_after_discount_string_template: z.string().nullable().optional(),
  gross_value_after_discount: z.number().nullable().optional(),
  gross_value_after_discount_string: z.string().nullable().optional(),
  gross_value_after_discount_string_template: z.string().nullable().optional(),
  vat_percent: z.number().nullable().optional(),
});

export const ProductVariationSchema = z.object({
  id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  slug: z.string().optional().nullable(),
  volume: z.string().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_wallet_coin_product: z.boolean().optional().nullable(),
  quantity: z.preprocess(val => String(val), z.string()).optional().nullable(),
  type: z.string().optional().nullable(), // "single"
  average_rating: z.number().optional().nullable(),
  review_count: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  attributes: z.array(AttributeSchema).optional().nullable(),
  product: ProductInfoSchema.optional().nullable(),
  unit: z.unknown().optional().nullable(), // Define if structure is known
  description: z.string().optional().nullable(),
  preview_text: z.string().optional().nullable(),
  technical_data: z.string().optional().nullable(),
  meta_description: z.string().optional().nullable(),
  meta_keywords: z.string().optional().nullable(),
  sale_price: SalePriceSchema.optional().nullable(),
  subscriptionPrices: z.array(SubscriptionSchema).optional().nullable(),
  transportation: TransportationSchema.optional().nullable(),
  availability: AvailabilitySchema.optional().nullable(),
  productCategories: z.array(z.unknown()).optional().nullable(),
  crossSellingVariations: z.array(z.unknown()).optional().nullable(),
  multiProductVariations: z.array(z.unknown()).optional().nullable(),
  productVariationFiles: z.array(ProductVariationFileSchema).optional().nullable(),
  shippingProfiles: z.array(ShippingProfileSchema).optional().nullable(),
  userVariationPrices: z.array(z.unknown()).optional().nullable(),
});
export type ProductVariation = z.infer<typeof ProductVariationSchema>;

export const ProductVariationsResponseSchema = z.object({
  data: z.array(ProductVariationSchema).optional().nullable(),
  links: PaginationLinksSchema.optional().nullable(),
  meta: MetaSchema.optional().nullable(),
});

export const GetProductVariationsParamsSchema = z.object({
  // productId is a path param, handled separately in the query function
  countryId: z.union([z.string(), z.number()]).transform(val => String(val)).optional().nullable(),
});

export const ListProductVariationsParamsSchema = z.object({
  isArchive: z.boolean().optional(),
  deliveryContactGroupId: z.union([z.string(), z.number()]).transform(val => String(val)).optional(),
  countryId: z.string().optional(),
  ids: z.array(z.union([z.string(), z.number()])).optional(),
  // Add other potential query params like page, per_page, orderBy if needed for this specific list endpoint
  page: z.number().optional(),
  per_page: z.number().optional(),
  'orderBy[column]': z.string().optional(), // Example for generic sorting
  'orderBy[direction]': z.enum(['asc', 'desc']).optional(),
});

// Assuming the list endpoint returns a paginated list of product variations
export const ListProductVariationsResponseSchema = z.object({
  data: z.array(ProductVariationSchema).optional().nullable(),
  links: PaginationLinksSchema.optional().nullable(),
  meta: MetaSchema.optional().nullable(),
});
