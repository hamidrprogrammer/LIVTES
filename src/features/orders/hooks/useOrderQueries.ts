import { useQuery, type UseQueryOptions, type QueryKey, useInfiniteQuery, UseInfiniteQueryOptions, InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getOrderSubscription,
  listOrderSubscriptions,
  listOrderSales,
    getOrderSaleDetail,
    generatePaymentLink,
    generateSubPaymentLink,

} from '../services/orderApi';
import type {
  OrderSubscriptionResponseData,
  OrderSubscriptionListResponse,
  GetOrderSubscriptionListParams,
  OrderSaleListResponse,
  GetOrderSaleListParams,
  OrderSubscription,
  OrderSaleDetailResponse, // For select example
} from '../../../core/types/api/order';
import type { ApiError } from '../../../core/httpClient/httpClient';

// Query Keys Factory
// Query Keys Factory (remains the same)
export const orderQueryKeys = {
  all: ['orders'] as const,
  subscriptions: () => [...orderQueryKeys.all, 'subscriptions'] as const,
  subscriptionDetail: (subscriptionId: string | number) =>
    [...orderQueryKeys.subscriptions(), 'detail', subscriptionId] as const,
  subscriptionList: (params?: GetOrderSubscriptionListParams) =>
    [...orderQueryKeys.subscriptions(), 'list', params ?? {}] as const,

  sales: () => [...orderQueryKeys.all, 'sales'] as const,
  saleList: (params?: GetOrderSaleListParams) =>
    [...orderQueryKeys.sales(), 'list', params ?? {}] as const,
  saleDetail: (orderId: string | number) => 
    [...orderQueryKeys.sales(), 'detail', orderId] as const,
};
// START: New hook to fetch a single order sale detail
export function useGetOrderSaleDetailQuery(
  orderId: string | number,
  options?: Omit<UseQueryOptions<OrderSaleDetailResponse, ApiError, OrderSaleDetailResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<OrderSaleDetailResponse, ApiError, OrderSaleDetailResponse, QueryKey>({
    queryKey: orderQueryKeys.saleDetail(orderId),
    queryFn: ({ signal }) => getOrderSaleDetail(orderId, { signal }),
    enabled: !!orderId,
    ...options,
  });
}
// END: New hoo
/**
 * Hook to fetch a single order subscription.
 */
export function useGetOrderSubscriptionQuery(
  subscriptionId: string | number,
  options?: Omit<UseQueryOptions<OrderSubscriptionResponseData, ApiError, OrderSubscriptionResponseData, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<OrderSubscriptionResponseData, ApiError, OrderSubscriptionResponseData, QueryKey>({
    queryKey: orderQueryKeys.subscriptionDetail(subscriptionId),
    queryFn: ({ signal }) => getOrderSubscription(subscriptionId, { signal }),
    enabled: !!subscriptionId,
    ...options,
  });
}

/**
 * Hook to fetch a list of order subscriptions.
 */
export function useListOrderSubscriptionsQuery(
  params?: GetOrderSubscriptionListParams,
  options?: Omit<UseQueryOptions<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>({
    queryKey: orderQueryKeys.subscriptionList(params),
    queryFn: ({ signal }) => listOrderSubscriptions(params, { signal }),
    ...options,
  });
}

/**
 * Hook to fetch a list of order sales.
 */
export function useListOrderSalesQuery(
  params?: GetOrderSaleListParams,
  options?: Omit<UseQueryOptions<OrderSaleListResponse, ApiError, OrderSaleListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<OrderSaleListResponse, ApiError, OrderSaleListResponse, QueryKey>({
    queryKey: orderQueryKeys.saleList(params),
    queryFn: ({ signal }) => listOrderSales(params, { signal }),
    ...options,
  });
}

/**
 * Example of using select with useGetOrderSubscriptionQuery to get only the status
 */
export function useGetOrderSubscriptionStatus(
  subscriptionId: string | number,
  options?: Omit<UseQueryOptions<OrderSubscriptionResponseData, ApiError, string | undefined, QueryKey>, 'queryKey' | 'queryFn' | 'enabled' | 'select'>
) {
    return useQuery<OrderSubscriptionResponseData, ApiError,OrderSubscriptionResponseData, QueryKey>({
        queryKey: orderQueryKeys.subscriptionDetail(subscriptionId),
        queryFn: ({ signal }) => getOrderSubscription(subscriptionId, { signal }),
        enabled: !!subscriptionId,
        select: (data) => data.data?.status,
        ...options,
    });
}


export function useInfiniteOrderSubscriptionsQuery(
  params?: GetOrderSubscriptionListParams,
  options?: Omit<UseQueryOptions<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>({
    queryKey: orderQueryKeys.subscriptionList(params),
    queryFn: ({ signal }) => listOrderSubscriptions(params, { signal }),
    ...options,
  });
}
// This hook now works correctly because the underlying service is fixed.
export function useGeneratePaymentLinkMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (orderId: number | string) => generatePaymentLink(orderId),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: orderQueryKeys.saleDetail(variables) });
        },
    });
}
export function useGenerateSubPaymentLinkMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (orderId: number | string) => generateSubPaymentLink(orderId),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: orderQueryKeys.saleDetail(variables) });
        },
    });
}

