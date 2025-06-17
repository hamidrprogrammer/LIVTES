/* eslint-disable @typescript-eslint/no-unused-vars */
import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  ProductCategoriesTreeResponseSchema,
  ProductVariationsResponseSchema,
  ListProductVariationsResponseSchema,
  GetProductCategoriesTreeParamsSchema,
  GetProductVariationsParamsSchema,
  ListProductVariationsParamsSchema,
} from '../../../core/zodSchemas/shopSchema';
import type {
  ProductCategoriesTreeResponse,
  ProductVariationsResponse,
  ListProductVariationsResponse,
  GetProductCategoriesTreeParams,
  GetProductVariationsParams,
  ListProductVariationsParams,
} from '../../../core/types/api/shop';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches product variations for a specific product.
 * @param productId - The ID of the product.
 * @param params - Query parameters, e.g., countryId.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to product variations.
 */
export async function getProductVariations(
  productId: string,
  params: GetProductVariationsParams,
  requestOptions?: RequestOptions
): Promise<ProductVariationsResponse> {
  const validatedParams = GetProductVariationsParamsSchema.parse(params);
  
  // START: حذف وابستگی مستقیم به استور و استفاده از پارامتر ورودی
  const queryParams = new URLSearchParams({
    countryId: String(validatedParams.countryId), // فقط از پارامتر ورودی استفاده کن
  });

  const url = `${API_BASE_URL}/shop/product-variations/product/${productId}?${queryParams.toString()}`;
  // END: اصلاح کلیدی
  
  return httpClient(url, requestOptions, ProductVariationsResponseSchema);
}
/**
 * Fetches the product categories tree.
 * @param params - Query parameters, e.g., for sorting.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the product categories tree.
 */
export async function getProductCategoriesTree(
  params?: GetProductCategoriesTreeParams,
  requestOptions?: RequestOptions
): Promise<ProductCategoriesTreeResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetProductCategoriesTreeParamsSchema.parse(params);
    if (validatedParams['orderBy[sort]']) {
      queryParams.set('orderBy[sort]', validatedParams['orderBy[sort]']);
    }
  }
  const url = `${API_BASE_URL}/product-categories/tree${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return httpClient(url, requestOptions, ProductCategoriesTreeResponseSchema);
}

/**
 * Lists product variations based on filters.
 * @param params - Query parameters for filtering, pagination, and sorting.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a list of product variations.
 */
export async function listProductVariations(
  params: ListProductVariationsParams,
  requestOptions?: RequestOptions
): Promise<ListProductVariationsResponse> {
  const validatedParams = ListProductVariationsParamsSchema.parse(params);
  const queryParams = new URLSearchParams();

  // START: اصلاح این بخش برای استفاده از پارامتر ورودی
  if (validatedParams.countryId !== undefined) {
    queryParams.set('countryId', String(validatedParams.countryId));
  }
  // END: اصلاح

  if (validatedParams.isArchive !== undefined) {
    queryParams.set('isArchive', String(validatedParams.isArchive));
  }
  if (validatedParams.deliveryContactGroupId !== undefined) {
    queryParams.set('deliveryContactGroupId', String(validatedParams.deliveryContactGroupId));
  }
  if (validatedParams.ids && validatedParams.ids.length > 0) {
    validatedParams.ids.forEach(id => queryParams.append('ids[]', String(id)));
  }
  if (validatedParams.page !== undefined) {
    queryParams.set('page', String(validatedParams.page));
  }
  if (validatedParams.per_page !== undefined) {
    queryParams.set('per_page', String(validatedParams.per_page));
  }
  if (validatedParams['orderBy[column]'] && validatedParams['orderBy[direction]']) {
    queryParams.set(`orderBy[${validatedParams['orderBy[column]']}]`, validatedParams['orderBy[direction]']);
  }

  const url = `${API_BASE_URL}/shop/product-variations/list?${queryParams.toString()}`;
  return httpClient(url, requestOptions, ListProductVariationsResponseSchema);
}
