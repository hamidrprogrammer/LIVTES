import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions, type QueryKey } from '@tanstack/react-query';
import { listCoupons, setCoupon } from '../services/couponApi';
import type {
  CouponListResponse,
  GetCouponListParams,
  SetCouponPayload,
  SetCouponSuccessResponse,
} from '../../../core/types/api/coupon';
import type { ApiError } from '../../../core/httpClient/httpClient';

// Query Keys Factory
export const couponQueryKeys = {
  all: ['coupons'] as const,
  list: (params?: GetCouponListParams) => [...couponQueryKeys.all, 'list', params ?? {}] as const,
  // If there was a GET /coupons/{code} endpoint:
  // detail: (code: string) => [...couponQueryKeys.all, 'detail', code] as const,
};

/**
 * Hook to fetch a list of coupons.
 */
export function useListCouponsQuery(
  params?: GetCouponListParams,
  options?: Omit<UseQueryOptions<CouponListResponse, ApiError, CouponListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<CouponListResponse, ApiError, CouponListResponse, QueryKey>({
    queryKey: couponQueryKeys.list(params),
    queryFn: ({ signal }) => listCoupons(params, { signal }),
    ...options,
  });
}

/**
 * Hook to apply (set) a coupon.
 */
export function useSetCouponMutation(
  options?: Omit<UseMutationOptions<SetCouponSuccessResponse, ApiError, SetCouponPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation<SetCouponSuccessResponse, ApiError, SetCouponPayload>({
    mutationFn: setCoupon,
    onSuccess: (data, variables, context) => {
      // When a coupon is successfully applied, you might want to:
      // 1. Invalidate queries that reflect the cart/order total to show the discount.
      //    Example: queryClient.invalidateQueries({ queryKey: ['cart', 'summary'] });
      // 2. Potentially refetch the list of coupons if applying a coupon changes its status (e.g., is_used).
      //    queryClient.invalidateQueries({ queryKey: couponQueryKeys.list() });
      // 3. Update any local state related to applied coupons.

      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Handle specific errors from setting a coupon, e.g., "Invalid coupon code"
      // The httpClient will throw an ApiError which includes status and potential error messages from the body.
      console.error('Set coupon failed:', error.message, error.errors);

      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
}
