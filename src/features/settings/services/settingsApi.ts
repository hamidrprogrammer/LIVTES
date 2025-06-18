import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  SocialMediaSettingsSchema, // Assuming the direct response is the object, not wrapped in "data"
  StateListResponseSchema,
  GetStatesParamsSchema,
  ConfigDataResponseSchema,
  GetConfigDataParamsSchema,
  LanguageListResponseSchema,
  GetLanguagesParamsSchema,
  PaymentMethodListResponseSchema,
  GetPaymentMethodsParamsSchema,
  CountryListResponseSchema,
  GetCountriesParamsSchema,
} from '../../../core/zodSchemas/settingsSchema';
import type {
  SocialMediaSettings, // This will be the direct object
  StateListResponse,
  GetStatesParams,
  ConfigDataResponse,
  GetConfigDataParams,
  LanguageListResponse,
  GetLanguagesParams,
  PaymentMethodListResponse,
  GetPaymentMethodsParams,
  GetCountriesParams,
  CountryListResponse,
} from '../../../core/types/api/settings';
import { useSettingsStore } from '../stores/settingsStore';
import queryString from 'query-string';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches social media settings.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to social media settings.
 */
export async function getSocialMediaSettings(
  requestOptions?: RequestOptions
): Promise<SocialMediaSettings> { // Note: Direct object, not wrapped in {data: ...} based on Postman
  const url = `${API_BASE_URL}/settings/social-media`;
  return httpClient(url, requestOptions, SocialMediaSettingsSchema);
}

/**
 * Fetches a list of states for a given country.
 * @param params - Query parameters, including countryId.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of states.
 */
export async function listStates(
  params: GetStatesParams,
  requestOptions?: RequestOptions
): Promise<StateListResponse> {
  const validatedParams = GetStatesParamsSchema.parse(params);
        const globalCountryId =params.countryId;

  const queryParams = new URLSearchParams({
    countryId:globalCountryId.toString(),
  });
  if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
  if (validatedParams.page) queryParams.set('page', String(validatedParams.page));

  const url = `${API_BASE_URL}/states?${queryParams.toString()}`;
  return httpClient(url, requestOptions, StateListResponseSchema);
}

/**
 * Fetches general configuration data.
 * @param params - Query parameters, including countryId and optional deliveryContactGroupId.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the configuration data.
 */
export async function getConfigData(
  params: GetConfigDataParams,
  requestOptions?: RequestOptions
): Promise<ConfigDataResponse> {
  const validatedParams = GetConfigDataParamsSchema.parse(params);
  const queryParams = new URLSearchParams();

  // ✅ فقط در صورتی که countryId وجود دارد، آن را به پارامترها اضافه کن
  if (validatedParams.countryId) {
    queryParams.set('countryId', validatedParams.countryId);
  }
  if (validatedParams.deliveryContactGroupId) {
    queryParams.set('deliveryContactGroupId', String(validatedParams.deliveryContactGroupId));
  }
  const url = `${API_BASE_URL}/configs/data?${queryParams.toString()}`;
  return httpClient(url, requestOptions, ConfigDataResponseSchema);
}
export async function listCountries(
  params?: GetCountriesParams,
  requestOptions?: RequestOptions
): Promise<CountryListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetCountriesParamsSchema.parse(params);
    if (validatedParams.isActive !== undefined) queryParams.set('isActive', String(validatedParams.isActive));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
  }
  const url = `${API_BASE_URL}/countries?${queryParams.toString()}`;
  return httpClient(url, requestOptions, CountryListResponseSchema);
}
/**
 * Fetches a list of active languages.
 * @param params - Query parameters for filtering (e.g., isActive) and pagination.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of languages.
 */
export async function listLanguages(
  params?: GetLanguagesParams,
  requestOptions?: RequestOptions
): Promise<LanguageListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetLanguagesParamsSchema.parse(params);
    if (validatedParams.isActive !== undefined) queryParams.set('isActive', String(validatedParams.isActive));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
  }
  const url = `${API_BASE_URL}/languages${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  const response =  httpClient(url, requestOptions, LanguageListResponseSchema);

   
   
   
  return response
}

/**
 * Fetches a list of payment methods.
 * @param params - Query parameters for filtering, sorting, and pagination.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of payment methods.
 */
export async function listPaymentMethods(
  payload: GetPaymentMethodsParams,
  requestOptions?: RequestOptions
): Promise<PaymentMethodListResponse> {
    const validatedPayload = GetPaymentMethodsParamsSchema.parse(payload);
  const query = queryString.stringify(validatedPayload); // turn payload into ?key=value

  const fullUrl = `${API_BASE_URL}/payment-methods?${query}`;
  return httpClient(fullUrl, requestOptions, PaymentMethodListResponseSchema);
}
