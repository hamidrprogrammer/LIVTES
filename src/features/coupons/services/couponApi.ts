import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  CouponListResponseSchema,
  GetCouponListParamsSchema,
  SetCouponPayloadSchema,
  SetCouponSuccessResponseSchema,
  // SetCouponErrorResponseSchema is for error handling, not direct return type for success
} from '../../../core/zodSchemas/couponSchema';
import type {
  CouponListResponse,
  GetCouponListParams,
  SetCouponPayload,
  SetCouponSuccessResponse,
} from '../../../core/types/api/coupon';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches a list of coupons available to the user.
 * @param params - Query parameters for pagination, sorting, and filtering.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of coupons.
 */
export async function listCoupons(
  params?: GetCouponListParams,
  requestOptions?: RequestOptions
): Promise<CouponListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetCouponListParamsSchema.parse(params);
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams['orderBy[id]']) queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
    if (validatedParams.isActive !== undefined) queryParams.set('isActive', String(validatedParams.isActive));
  }
  const url = `${API_BASE_URL}/shop/coupons${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  // The Postman collection had an empty response for this.
  // We assume the actual API returns data structured by CouponListResponseSchema.
  return httpClient(url, requestOptions, CouponListResponseSchema);
}

/**
 * Applies a coupon to the current context (e.g., cart or user).
 * @param payload - The coupon code and potentially other contextual IDs.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the success message and details of the applied coupon.
 */
export async function setCoupon(
  payload: SetCouponPayload,
  requestOptions?: RequestOptions
): Promise<SetCouponSuccessResponse> {
  const validatedPayload = SetCouponPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/coupons/set`;
  return httpClient(
    url,
    {
      method: 'POST',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    SetCouponSuccessResponseSchema // This schema is for the success case. Errors are handled by httpClient.
  );
}
