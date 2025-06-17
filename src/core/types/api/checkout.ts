import { z } from 'zod';
import type {
  BasketItemDataSchema,
  BasketAddItemSchema,
  BulkAddBasketPayloadSchema,
  BulkAddBasketResponseSchema,
  BulkAddBasketResponseDataSchema,
  CreateOrderFromBasketPayloadDataSchema,
  CreateOrderFromBasketPayloadSchema,
  CreateOrderFromBasketResponseSchema,
  CreateOrderFromBasketResponseDataSchema,
  OrderPositionTypeSchema,
  GetBasketResponseSchema,
} from '../../zodSchemas/checkoutSchema';
import type { OrderSale } from './order'; // For the response of creating an order

// Types for Bulk Add to Basket
export type OrderPositionType = z.infer<typeof OrderPositionTypeSchema>;
export type BasketItemData = z.infer<typeof BasketItemDataSchema>;
export type BasketAddItem = z.infer<typeof BasketAddItemSchema>;
export type BulkAddBasketPayload = z.infer<typeof BulkAddBasketPayloadSchema>;
export type BulkAddBasketResponseData = z.infer<typeof BulkAddBasketResponseDataSchema>;
export type BulkAddBasketResponse = z.infer<typeof GetBasketResponseSchema>;


// Types for Create Order from Basket
export type CreateOrderFromBasketPayloadData = z.infer<typeof CreateOrderFromBasketPayloadDataSchema>;
export type CreateOrderFromBasketPayload = z.infer<typeof CreateOrderFromBasketPayloadSchema>;
export type CreateOrderFromBasketResponseData = z.infer<typeof CreateOrderFromBasketResponseDataSchema>;
export type CreateOrderFromBasketResponse = z.infer<typeof CreateOrderFromBasketResponseSchema>;

// Re-export OrderSale if it's part of the response
export type { OrderSale };
