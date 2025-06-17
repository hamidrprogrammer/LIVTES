import { useQuery, type UseQueryOptions, type QueryKey, useMutation, UseMutationOptions } from '@tanstack/react-query';
import {
  getSocialMediaSettings,
  listStates,
  getConfigData,
  listLanguages,
  listPaymentMethods,
  listCountries
} from '../services/settingsApi';
import type {
  SocialMediaSettings,
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
import type { ApiError } from '../../../core/httpClient/httpClient';

// Query Keys Factory
export const settingsQueryKeys = {
  all: ['settings'] as const,
    countries: (params?: GetCountriesParams) => [...settingsQueryKeys.all, 'countries', params ?? {}] as const,

  socialMedia: () => [...settingsQueryKeys.all, 'socialMedia'] as const,
  states: (params: GetStatesParams) => [...settingsQueryKeys.all, 'states', params] as const,
  configData: (params: GetConfigDataParams) => [...settingsQueryKeys.all, 'configData', params] as const,
  languages: (params?: GetLanguagesParams) => [...settingsQueryKeys.all, 'languages', params ?? {}] as const,
  paymentMethods: (params: GetPaymentMethodsParams) => [...settingsQueryKeys.all, 'paymentMethods', params] as const,
};
export function useListCountriesQuery(
  params?: GetCountriesParams,
  options?: Omit<UseQueryOptions<CountryListResponse, ApiError, CountryListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<CountryListResponse, ApiError, CountryListResponse, QueryKey>({
    queryKey: settingsQueryKeys.countries(params),
    queryFn: ({ signal }) => listCountries(params, { signal }),
    ...options,
  });
}
/**
 * Hook to fetch social media settings.
 */
export function useGetSocialMediaSettingsQuery(
  options?: Omit<UseQueryOptions<SocialMediaSettings, ApiError, SocialMediaSettings, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<SocialMediaSettings, ApiError, SocialMediaSettings, QueryKey>({
    queryKey: settingsQueryKeys.socialMedia(),
    queryFn: ({ signal }) => getSocialMediaSettings({ signal }),
    ...options,
  });
}

/**
 * Hook to fetch a list of states.
 */
export function useListStatesQuery(
  params: GetStatesParams,
  options?: Omit<UseQueryOptions<StateListResponse, ApiError, StateListResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<StateListResponse, ApiError, StateListResponse, QueryKey>({
    queryKey: settingsQueryKeys.states(params),
    queryFn: ({ signal }) => listStates(params, { signal }),
    enabled: !!params.countryId,
    ...options,
  });
}

/**
 * Hook to fetch general configuration data.
 */
export function useGetConfigDataQuery(
  params: GetConfigDataParams,
  options?: Omit<UseQueryOptions<ConfigDataResponse, ApiError, ConfigDataResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<ConfigDataResponse, ApiError, ConfigDataResponse, QueryKey>({
    queryKey: settingsQueryKeys.configData(params),
    queryFn: ({ signal }) => getConfigData(params, { signal }),
    enabled: !!params.countryId, // countryId is mandatory for this query
    ...options,
  });
}

/**
 * Hook to fetch a list of languages.
 */
export function useListLanguagesQuery(
  params?: GetLanguagesParams,
  options?: Omit<UseQueryOptions<LanguageListResponse, ApiError, LanguageListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<LanguageListResponse, ApiError, LanguageListResponse, QueryKey>({
    queryKey: settingsQueryKeys.languages(params),
    queryFn: ({ signal }) => listLanguages(params, { signal }),
    ...options,
  });
}

/**
 * Hook to fetch a list of payment methods.
 */
export function useListPaymentMethodsQuery(
  options?: Omit<UseMutationOptions<PaymentMethodListResponse, ApiError, GetPaymentMethodsParams>, 'mutationFn'>
) {
   return useMutation<PaymentMethodListResponse, ApiError, GetPaymentMethodsParams>({
    mutationFn:listPaymentMethods,
    // Add enabled condition if some params are mandatory, e.g., !!params.companyCountryId
    onSuccess: (data, variables, context) => {
      // After a successful bulk add, you should update the client-side cart state.
      // A robust way is to refetch the entire cart from the server.
      // A simpler way for now is to manually add the items to the zustand store,
      // though this might not reflect the exact server state.
      console.log('Items added successfully to basket via API!', data);

      // We will simply show an alert here. For a real app, you would
      // likely refetch the cart or update the Zustand store based on the API response.
     
      
      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Failed to add items to basket:', error);
      // alert(`Error: ${error.message}`);
      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
}
