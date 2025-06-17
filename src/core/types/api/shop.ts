import { z } from 'zod';
import type {
  ProductCategoriesTreeResponseSchema,
  ProductCategoryTreeSchema,
  GetProductCategoriesTreeParamsSchema,
  ProductVariationSchema,
  ProductVariationsResponseSchema,
  GetProductVariationsParamsSchema,
  ListProductVariationsParamsSchema,
  ListProductVariationsResponseSchema,
  AttributeSchema,
  AttributeTypeSchema,
  AttributeTypeOptionSchema,
  ProductInfoSchema,
  SalePriceSchema,
  TransportationSchema,
  AvailabilitySchema,
  ProductVariationFileSchema,
  ShippingProfileSchema,
  ShippingProfileIconResourceSchema,
  SubscriptionSchema,
} from '../../zodSchemas/shopSchema';

// Common Types (extracted from zodSchemas/shopSchema by inference, can be moved to a common types file)
// type MetaLink = z.infer<typeof MetaLinkSchema>; (if MetaLinkSchema was exported)
// type PaginationLinks = z.infer<typeof PaginationLinksSchema>; (if PaginationLinksSchema was exported)
// type Meta = z.infer<typeof MetaSchema>; (if MetaSchema was exported)

// Types for Product Categories Tree
export type ProductCategory = z.infer<typeof ProductCategoryTreeSchema>;
export type ProductCategoriesTreeResponse = z.infer<typeof ProductCategoriesTreeResponseSchema>;
export type GetProductCategoriesTreeParams = z.infer<typeof GetProductCategoriesTreeParamsSchema>;

// Types for Product Variations
export type AttributeTypeOption = z.infer<typeof AttributeTypeOptionSchema>;
export type AttributeType = z.infer<typeof AttributeTypeSchema>;
export type Attribute = z.infer<typeof AttributeSchema>;
export type ProductInfo = z.infer<typeof ProductInfoSchema>;
export type SalePrice = z.infer<typeof SalePriceSchema>;
export type Transportation = z.infer<typeof TransportationSchema>;
export type Availability = z.infer<typeof AvailabilitySchema>;
export type ProductVariationFile = z.infer<typeof ProductVariationFileSchema>;
export type ShippingProfileIconResource = z.infer<typeof ShippingProfileIconResourceSchema>;
export type ShippingProfile = z.infer<typeof ShippingProfileSchema>;
export type ProductVariation = z.infer<typeof ProductVariationSchema>;
export type Subscription = z.infer<typeof SubscriptionSchema>;

export type ProductVariationsResponse = z.infer<typeof ProductVariationsResponseSchema>;
export type GetProductVariationsParams = z.infer<typeof GetProductVariationsParamsSchema>;

export type ListProductVariationsParams = z.infer<typeof ListProductVariationsParamsSchema>;
export type ListProductVariationsResponse = z.infer<typeof ListProductVariationsResponseSchema>;
