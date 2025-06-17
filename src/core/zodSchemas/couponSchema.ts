import { z } from 'zod';

// Common Schemas (assuming these would be in a shared location or already defined)
const MetaLinkSchema = z.object({
  url: z.string().url().nullable(),
  label: z.string(),
  active: z.boolean(),
});

const PaginationLinksSchema = z.object({
  first: z.string().url().nullable(),
  last: z.string().url().nullable(),
  prev: z.string().url().nullable(),
  next: z.string().url().nullable(),
});

const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable(),
  last_page: z.number(),
  links: z.array(MetaLinkSchema),
  path: z.string().url(),
  per_page: z.number(),
  to: z.number().nullable(),
  total: z.number(),
  // The coupon list response in Postman is empty, so these fields are assumed based on other list responses.
  // exportColumns: z.array(z.string()).optional(),
  // filters: z.record(z.object({ type: z.string(), title: z.string(), link: z.string().optional() })).optional(),
  // orderByColumns: z.array(z.string()).optional(),
  // savedFilters: z.array(z.unknown()).optional(), // Define if structure known
  // routeName: z.string().optional(),
});

export const CouponCodeSchema = z.object({
  code:z.string()
})
// Coupon Schemas
// Based on common fields for coupons and the example from Profile.Coupon
export const CouponSchema = z.object({
  id: z.number(),

  name: z.string(), // From Profile.Coupon example

  amount: z.number(), // Amount or percentage_discount
    min_amount: z.number(), // Amount or percentage_discount

  couponCodes: z.array(CouponCodeSchema),
  type: z.string(), // Common types
  is_active: z.boolean(),
  used_quantity: z.number().nullable(), // From Profile.Coupon example
  quantity: z.number().nullable(), // Total available
  max_quantity_each_user: z.number().nullable(), // How many times used
  release_date: z.string().datetime().nullable(),
  available_until: z.string().datetime().nullable(),
  // Fields from Profile.Coupon example:
});

export const CouponListResponseSchema = z.object({
  data: z.array(CouponSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});

export const GetCouponListParamsSchema = z.object({
  page: z.number().int().positive().optional(),
  per_page: z.number().int().positive().optional(),
'orderBy[id]': z.string().optional(),
  search:z.string().optional(),
    isActive: z.boolean().optional(), // Example filter
});

// Set Coupon Schemas
export const SetCouponPayloadSchema = z.object({
  code: z.string().min(1, 'Coupon code is required.'),
  invoice_contact_group_id: z.number().optional(), // As seen in Postman request
  // Other potential fields: cart_id, user_id, etc. depending on API logic
});

// Assuming a structure for a successful coupon application
export const AppliedCouponDetailsSchema = CouponSchema.extend({
  discount_value: z.number(), // The actual value of the discount applied
  // currency: z.string().optional(), // If applicable
});

export const SetCouponSuccessResponseSchema = z.object({
  data: z.object({
    message: z.string(),
    coupon_applied: AppliedCouponDetailsSchema.optional(), // Details of the applied coupon
    // cart_totals: z.any().optional(), // New cart totals after discount
  }),
});

// For 422 Validation Error on Set Coupon
export const SetCouponErrorResponseSchema = z.object({
  // The key 'code' in the Postman example is unusual for field-specific errors.
  // Typically, it would be like: { errors: { code: ["message"], field2: ["message"] } }
  // Adapting to the provided example:
  code: z.array(z.string()).optional(), // Error messages for the 'code' field itself
  message: z.string().optional(), // General error message
  errors: z.record(z.array(z.string())).optional(), // More standard error structure
});
