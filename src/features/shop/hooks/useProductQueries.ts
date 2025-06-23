import { useQuery, type UseQueryOptions, type QueryKey } from '@tanstack/react-query';
import {
  getProductVariations,
  getProductCategoriesTree,
  listProductVariations,
} from '../services/productApi';
import type {
  ProductVariationsResponse,
  ProductCategoriesTreeResponse,
  ListProductVariationsResponse,
  GetProductVariationsParams,
  GetProductCategoriesTreeParams,
  ListProductVariationsParams,
} from '../../../core/types/api/shop';
import type { ApiError } from '../../../core/httpClient/httpClient';

// Query Keys Factory
export const productQueryKeys = {
  all: ['products'] as const,
  categories: () => [...productQueryKeys.all, 'categories'] as const,
  categoryTree: (params?: GetProductCategoriesTreeParams) =>
    [...productQueryKeys.categories(), 'tree', params ?? {}] as const,
  variations: () => [...productQueryKeys.all, 'variations'] as const,
  variationDetail: (productId: string, params: GetProductVariationsParams) =>
    [...productQueryKeys.variations(), 'detail', productId, params] as const,
  variationsList: (params: ListProductVariationsParams) =>
    [...productQueryKeys.variations(), 'list', params] as const,
};

/**
 * Hook to fetch product variations for a specific product.
 */
export function useGetProductVariationsQuery(
  productId: string,
  params: GetProductVariationsParams,
  options?: Omit<UseQueryOptions<ProductVariationsResponse, ApiError, ProductVariationsResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<ProductVariationsResponse, ApiError, ProductVariationsResponse, QueryKey>({
    queryKey: productQueryKeys.variationDetail(productId, params),
    queryFn: ({ signal }) => getProductVariations(productId, params, { signal }),
    enabled: !!productId|| !!params.countryId,
    ...options,
  });
}

/**
 * Example of using select to transform data (e.g., get only the first variation's name)
 * This is just an example, a more practical select would be more complex.
 */
export function useGetFirstProductVariationName(
  productId: string,
  params: GetProductVariationsParams,
  options?: Omit<UseQueryOptions<ProductVariationsResponse, ApiError, string | undefined, QueryKey>, 'queryKey' | 'queryFn' | 'enabled' | 'select'>
) {
  return useQuery<ProductVariationsResponse, ApiError, string | undefined, QueryKey>({
    queryKey: productQueryKeys.variationDetail(productId, params),
    queryFn: ({ signal }) => getProductVariations(productId, params, { signal }),
    enabled: !!productId && !!params.countryId,
    select: (data) => data.data?.[0]?.name,
    ...options,
  });
}


/**
 * Hook to fetch the product categories tree.
 */
export function useGetProductCategoriesTreeQuery(
  params?: GetProductCategoriesTreeParams,
  options?: Omit<UseQueryOptions<ProductCategoriesTreeResponse, ApiError, ProductCategoriesTreeResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<ProductCategoriesTreeResponse, ApiError, ProductCategoriesTreeResponse, QueryKey>({
    queryKey: productQueryKeys.categoryTree(params),
    queryFn: ({ signal }) => getProductCategoriesTree(params, { signal }),
    ...options,
  });
}

/**
 * Hook to list product variations based on filters.
 */
export function useListProductVariationsQuery(
  params: ListProductVariationsParams,
  options?: Omit<UseQueryOptions<ListProductVariationsResponse, ApiError, ListProductVariationsResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<ListProductVariationsResponse, ApiError, ListProductVariationsResponse, QueryKey>({
    queryKey: productQueryKeys.variationsList(params),
    queryFn: ({ signal }) => listProductVariations(params, { signal }),
    enabled: !!params.countryId&& !!params.deliveryContactGroupId, // Example: ensure essential params are present
    ...options,
  });
}
