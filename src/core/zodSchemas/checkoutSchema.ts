import { z } from 'zod';
import { OrderSaleSchema } from './orderSchema'; // For the response of creating an order
import { BasketItemSchema, UserProfileSchema } from './userSchema';

// Schemas for Bulk Add to Basket
export const BasketItemDataSchema = z.object({
  // This was an empty object in the Postman example.
  // Add fields here if the structure becomes known or is required.
  // For example: selected_options: z.record(z.string()).optional(),
}).default({}); // Default to empty object if not provided or keys are unknown

export const OrderPositionTypeSchema = z.enum([
    "Product Variation",
    // Add other potential types if they exist
]);

export const BasketAddItemSchema = z.object({
  count: z.number().int().min(1, "Count must be at least 1."),
  product_variation_id: z.number(),
  instead_of_discount: z.boolean().optional().default(false),
  order_position_type: z.string(),
  subscription_interval_days: z.number().int().positive().optional().nullable(), // For subscription items
});

export const BulkAddBasketPayloadSchema = z.object({
  delivery_contact_group_id: z.number().optional().nullable(), // Contextual, for shipping calculation perhaps
  items: z.array(BasketAddItemSchema).min(1, "At least one item is required."),
});

// Assuming a simple success response for bulk add, as Postman example was empty.
// A real API might return the updated basket contents or summary.
export const BulkAddBasketResponseDataSchema = z.object({
  message: z.string(),
  item_count: z.number().optional(), // Example: new total item count
  // updated_basket: z.any().optional(), // Or a specific BasketSchema if defined
});
export const BasketSchema = z.object({
  id: z.number(),

});

// This schema represents the final API response for getting the basket
export const GetBasketResponseSchema = z.object({
  data: BasketSchema,
});

export const BulkAddBasketResponseSchema = z.object({
    data: BulkAddBasketResponseDataSchema
});


// Schemas for Create Order from Basket
export const CreateOrderFromBasketPayloadDataSchema = z.object({
  shipping_service: z.string().optional(), // e.g., "standard", "express"
  // any other nested data specific to order creation from basket
}).default({});

export const CreateOrderFromBasketPayloadSchema = z.object({
  description: z.string().optional().nullable(),
  wallet_coin_amount: z.number().optional().default(0),
  payment_method_id: z.number(),
  is_change_sponsor: z.boolean().optional().default(false),
  invoice_contact_group_id: z.number(),
  delivery_contact_group_id: z.number(),
  data: CreateOrderFromBasketPayloadDataSchema, // Nested data object
  // coupon_codes: z.array(z.string()).optional(), // If coupons are applied at this stage
});

// Assuming the response for creating an order includes details of the new order.
// It might also include a payment redirect URL if payment is initiated.
export const CreateOrderFromBasketResponseDataSchema = z.object({
 
   session_data: z.string(),
        client_key:z.string(),
        id: z.string(),
test_mode: z.boolean(),
});

export const CreateOrderFromBasketResponseSchema = z.object({
    data: CreateOrderFromBasketResponseDataSchema
});
export const GeneratePaymentLinkResponseSchema = z.object({
  data: z.object({
    session_data: z.string(),
    client_key: z.string(),
    id: z.string(),
    country_code: z.string(),
    amount: z.object({
      currency: z.string(),
      value: z.number(),
    }),
    reference: z.string(),
    test_mode: z.boolean(),
  }),
});
// END: Add new schem