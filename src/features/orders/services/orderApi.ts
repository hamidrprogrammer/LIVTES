import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  OrderSubscriptionResponseDataSchema,
  OrderSubscriptionListResponseSchema,
  GetOrderSubscriptionListParamsSchema,
  OrderSaleListResponseSchema,
  GetOrderSaleListParamsSchema,
  OrderSaleDetailResponseSchema,
} from '../../../core/zodSchemas/orderSchema';
import type {
  OrderSubscriptionResponseData,
  OrderSubscriptionListResponse,
  GetOrderSubscriptionListParams,
  OrderSaleListResponse,
  GetOrderSaleListParams,
  OrderSaleDetailResponse,
} from '../../../core/types/api/order';
import { GeneratePaymentLinkResponseSchema } from '@/core/zodSchemas/checkoutSchema';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches a single order subscription by its ID.
 * @param subscriptionId - The ID of the order subscription.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the order subscription details.
 */

export async function getOrderSaleDetail(
  orderId: string | number,
  requestOptions?: RequestOptions
): Promise<OrderSaleDetailResponse> {
  const url = `${API_BASE_URL}/order-sale/${orderId}`;
  return httpClient(url, requestOptions, OrderSaleDetailResponseSchema);
}
export async function getOrderSubscription(
  subscriptionId: string | number,
  requestOptions?: RequestOptions
): Promise<OrderSubscriptionResponseData> {
  const url = `${API_BASE_URL}/order-subscriptions/${subscriptionId}`;
  // Assuming the API wraps single resource in { data: ... }
  return httpClient(url, requestOptions, OrderSubscriptionResponseDataSchema);
}

/**
 * Fetches a list of order subscriptions for the current user.
 * @param params - Query parameters for pagination, sorting, and filtering.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of order subscriptions.
 */
export async function listOrderSubscriptions(
  params?: GetOrderSubscriptionListParams,
  requestOptions?: RequestOptions
): Promise<OrderSubscriptionListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetOrderSubscriptionListParamsSchema.parse(params);
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams['orderBy[id]']) queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
        if (validatedParams.search) queryParams.set('search', validatedParams.search);

    if (validatedParams.status) queryParams.set('status', validatedParams.status);
  }
  const url = `${API_BASE_URL}/order-subscriptions${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return httpClient(url, requestOptions, OrderSubscriptionListResponseSchema);
}

/**
 * Fetches a list of order sales for the current user.
 * @param params - Query parameters for pagination, sorting, and filtering.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of order sales.
 */

// START: Corrected function for generating payment link
export async function generatePaymentLink(
  orderId: number | string,
  requestOptions?: RequestOptions
): Promise<z.infer<typeof GeneratePaymentLinkResponseSchema>> {
  // Using the correct endpoint from your curl command
  const url = `${API_BASE_URL}/order/sales/${orderId}/generate-payment-link`;
  
  // The curl command implies a GET request as no method or data is specified.
  return httpClient(url, requestOptions, GeneratePaymentLinkResponseSchema);
}
// END: Corrected function
export async function listOrderSales(
  params?: GetOrderSaleListParams,
  requestOptions?: RequestOptions
): Promise<OrderSaleListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetOrderSaleListParamsSchema.parse(params);
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
        if (validatedParams.search) queryParams.set('search', String(validatedParams.search));

    if (validatedParams['orderBy[id]']) queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
    if (validatedParams.status) queryParams.set('status', validatedParams.status);
    if (validatedParams.payment_status) queryParams.set('payment_status', validatedParams.payment_status);
  }
  const url = `${API_BASE_URL}/order-sales/list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return httpClient(url, requestOptions, OrderSaleListResponseSchema);
}
