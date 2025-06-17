import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  BulkAddBasketPayloadSchema,
  BulkAddBasketResponseDataSchema,
  BulkAddBasketResponseSchema,
  CreateOrderFromBasketPayloadSchema,
  CreateOrderFromBasketResponseSchema,
  GetBasketResponseSchema,
} from '../../../core/zodSchemas/checkoutSchema';
import type {
  BulkAddBasketPayload,
  BulkAddBasketResponse,
  CreateOrderFromBasketPayload,
  CreateOrderFromBasketResponse,
} from '../../../core/types/api/checkout';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Creates an order from the user's current basket.
 * This endpoint finalizes the checkout process before payment.
 *
 * @param payload - The checkout details, including IDs for payment method, addresses, etc.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the success message and potentially a payment redirect URL.
 */
export async function createOrderFromBasket(
  payload: CreateOrderFromBasketPayload,
  requestOptions?: RequestOptions
): Promise<CreateOrderFromBasketResponse> {
  // Validate the payload against the Zod schema before sending
  const validatedPayload = CreateOrderFromBasketPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/order-sales/basket`;

  return httpClient(
    url,
    {
      method: 'POST',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    CreateOrderFromBasketResponseSchema
  );
}
export async function bulkAddToBasket(
  payload: BulkAddBasketPayload,
  requestOptions?: RequestOptions
): Promise<BulkAddBasketResponse> {
  // Validate the payload against the Zod schema before sending
  const validatedPayload = BulkAddBasketPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/basket/bulk-add`;

  return httpClient(
    url,
    {
      method: 'POST',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    GetBasketResponseSchema
  );
}