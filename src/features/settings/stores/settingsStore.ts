import { create } from 'zustand';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import {
  getSocialMediaSettings as getSocialMediaSettingsService,
  listStates as listStatesService,
  getConfigData as getConfigDataService,
  listLanguages as listLanguagesService,
  listPaymentMethods as listPaymentMethodsService,
    listCountries as listCountriesService, // +++ جدید

} from '../services/settingsApi';
import type {
  SocialMediaSettings,
  State,
  GetStatesParams,
  ConfigData,
  GetConfigDataParams,
  Language,
  GetLanguagesParams,
  PaymentMethod,
  GetPaymentMethodsParams,
  ConfigDataResponse, // Assuming getConfigDataService returns { data: ConfigData }
  StateListResponse,
  LanguageListResponse,
  PaymentMethodListResponse,
  UserCountry,
  GetCountriesParams,
  CountryListResponse,
} from '../../../core/types/api/settings';
import type { ApiError } from '../../../core/httpClient/httpClient';
import type { PaginationLinks, Meta } from '../../../core/types/api/common';
import { createJSONStorage, persist } from 'zustand/middleware';


// Helper to create unique keys for list parameters
const createListKey = (prefix: string, params?: object): string => {
  if (!params || Object.keys(params).length === 0) return `${prefix}-default`;
  const sortedParamsString = JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    acc[key as keyof typeof params] = params[key as keyof typeof params];
    return acc;
  }, {} as typeof params));
  return `${prefix}-${sortedParamsString}`;
};

interface GenericDataState<T> {
  data: T | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface PaginatedDataState<T> {
  data: T[] | null;
  links: PaginationLinks | null;
  meta: Meta | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface SettingsStoreState {
    selectedCountryId: number | null; // Add this to your state
  countries: Record<string, PaginatedDataState<UserCountry>>; // +++ افزودن این خط

  socialMediaSettings: GenericDataState<SocialMediaSettings>;
  states: Record<string, PaginatedDataState<State>>; // Keyed by countryId or stringified params
  configData: Record<string, GenericDataState<ConfigData>>; // Keyed by stringified params (countryId, etc.)
  languages: Record<string, PaginatedDataState<Language>>; // Keyed by stringified params (isActive, etc.)
  paymentMethods: Record<string, PaginatedDataState<PaymentMethod>>; // Keyed by stringified params
}

interface SettingsStoreActions {
  fetchSocialMediaSettings: () => Promise<void>;
  fetchStates: (params: GetStatesParams) => Promise<void>;
  fetchConfigData: (params: GetConfigDataParams) => Promise<void>;
  fetchLanguages: (params?: GetLanguagesParams) => Promise<void>;
  fetchPaymentMethods: (params: GetPaymentMethodsParams) => Promise<void>;
  clearAllSettingsData: () => void;
    fetchCountries: (params?: GetCountriesParams) => Promise<void>; // +++ افزودن این خط

    setSelectedCountryId: (countryId: number) => void; // Add this action
 // Usually not needed for settings unless they can become stale based on user context
}

const initialGenericState = <T>(): GenericDataState<T> => ({
  data: null,
  isLoading: false,
  error: null,
});

const initialPaginatedState = <T>(): PaginatedDataState<T> => ({
  data: null,
  links: null,
  meta: null,
  isLoading: false,
  error: null,
});

const initialState: SettingsStoreState = {
  socialMediaSettings: initialGenericState<SocialMediaSettings>(),
  states: {},
  configData: {},
  languages: {},
  paymentMethods: {},
    selectedCountryId: null, // Initialize as null
  countries: {}, // +++ افزودن این خط

};

export const useSettingsStore = create<SettingsStoreState & SettingsStoreActions>()(
  persist( // استفاده مستقیم از persist برای کنترل دقیق‌تر
    (set, get) => ({
      ...initialState,
 fetchCountries: async (params) => {
        const listKey = createListKey('countries', params);
        set(state => ({
          countries: {
            ...state.countries,
            [listKey]: {
              ...(state.countries[listKey] || initialPaginatedState<UserCountry>()),
              isLoading: true,
              error: null,
            }
          }
        }));
        try {
          const response: CountryListResponse = await listCountriesService(params);
          set(state => ({
            countries: {
              ...state.countries,
              [listKey]: {
                data: response.data,
                links: response.links,
                meta: response.meta,
                isLoading: false,
                error: null,
              }
            }
          }));
        } catch (error) {
          set(state => ({
            countries: {
              ...state.countries,
              [listKey]: {
                ...(state.countries[listKey] || initialPaginatedState<UserCountry>()),
                isLoading: false,
                error: error as ApiError,
              }
            }
          }));
        }
      },
      fetchSocialMediaSettings: async () => {
        set({ socialMediaSettings: { ...get().socialMediaSettings, isLoading: true, error: null } });
        try {
          const responseData = await getSocialMediaSettingsService();
          set({ socialMediaSettings: { data: responseData, isLoading: false, error: null } });
        } catch (error) {
          set({ socialMediaSettings: { ...get().socialMediaSettings, isLoading: false, error: error as ApiError } });
        }
      },
       setSelectedCountryId: (countryId) => {
        set({ selectedCountryId: countryId });
      },


      fetchStates: async (params) => {
        const listKey = createListKey('states', params);
        set(state => ({
          states: {
            ...state.states,
            [listKey]: {
              ...(state.states[listKey] || initialPaginatedState<State>()),
              isLoading: true,
              error: null,
            }
          }
        }));
        try {
          const response: StateListResponse = await listStatesService(params);
          set(state => ({
            states: {
              ...state.states,
              [listKey]: {
                data: response.data,
                links: response.links,
                meta: response.meta,
                isLoading: false,
                error: null,
              }
            }
          }));
          
        } catch (error) {
          set(state => ({
            states: {
              ...state.states,
              [listKey]: {
                ...(state.states[listKey] || initialPaginatedState<State>()),
                isLoading: false,
                error: error as ApiError,
              }
            }
          }));
        }
      },

       fetchConfigData: async (params) => {
        const configKey = createListKey('config', params);
        set(state => ({
          configData: {
            ...state.configData,
            [configKey]: {
              ...(state.configData[configKey] || initialGenericState<ConfigData>()),
              isLoading: true,
              error: null,
            }
          }
        }));
        try {
          const response: ConfigDataResponse = await getConfigDataService(params);
          set(state => ({
            configData: {
              ...state.configData,
              [configKey]: {
                data: response.data,
                isLoading: false,
                error: null,
              }
            }
          }));
          if (response.data.country?.id) {
            get().setSelectedCountryId(response.data.country.id);
          }
        } catch (error) {
          set(state => ({
            configData: {
              ...state.configData,
              [configKey]: {
                ...(state.configData[configKey] || initialGenericState<ConfigData>()),
                isLoading: false,
                error: error as ApiError,
              }
            }
          }));
        }
      },


      fetchLanguages: async (params) => {
        const listKey = createListKey('languages', params);
        set(state => ({
          languages: {
            ...state.languages,
            [listKey]: {
              ...(state.languages[listKey] || initialPaginatedState<Language>()),
              isLoading: true,
              error: null,
            }
          }
        }));
        try {
          const response: LanguageListResponse = await listLanguagesService(params);
          set(state => ({
            languages: {
              ...state.languages,
              [listKey]: {
                data: response.data,
                links: response.links,
                meta: response.meta,
                isLoading: false,
                error: null,
              }
            }
          }));
        } catch (error) {
          set(state => ({
            languages: {
              ...state.languages,
              [listKey]: {
                ...(state.languages[listKey] || initialPaginatedState<Language>()),
                isLoading: false,
                error: error as ApiError,
              }
            }
          }));
        }
      },

      fetchPaymentMethods: async (params) => {
        const listKey = createListKey('paymentMethods', params);
        set(state => ({
          paymentMethods: {
            ...state.paymentMethods,
            [listKey]: {
              ...(state.paymentMethods[listKey] || initialPaginatedState<PaymentMethod>()),
              isLoading: true,
              error: null,
            }
          }
        }));
        try {
          const response: PaymentMethodListResponse = await listPaymentMethodsService(params);
          set(state => ({
            paymentMethods: {
              ...state.paymentMethods,
              [listKey]: {
                data: response.data,
                links: response.links,
                meta: response.meta,
                isLoading: false,
                error: null,
              }
            }
          }));
        } catch (error) {
          set(state => ({
            paymentMethods: {
              ...state.paymentMethods,
              [listKey]: {
                ...(state.paymentMethods[listKey] || initialPaginatedState<PaymentMethod>()),
                isLoading: false,
                error: error as ApiError,
              }
            }
          }));
        }
      },
      
      clearAllSettingsData: () => {
        set(initialState);
      }
    }),
    {
      name: 'settings-storage', // نام کلید در localStorage
      storage: createJSONStorage(() => localStorage), // مشخص کردن localStorage
      // partialize مشخص می‌کند که کدام بخش از state باید ذخیره شود
      partialize: (state) => ({
        selectedCountryId: state.selectedCountryId,
      }),
    }
  )
);

// Selectors
export const selectSelectedCountryId = (state: SettingsStoreState) => state.selectedCountryId;

export const selectSocialMediaSettings = (state: SettingsStoreState) => state.socialMediaSettings;
export const selectStatesList = (params: GetStatesParams) => (state: SettingsStoreState): PaginatedDataState<State> | undefined =>
  state.states[createListKey('states', params)];
export const selectConfigData = (params: GetConfigDataParams) => (state: SettingsStoreState): GenericDataState<ConfigData> | undefined =>
  state.configData[createListKey('config', params)];
export const selectLanguagesList = (params?: GetLanguagesParams) => (state: SettingsStoreState): PaginatedDataState<Language> | undefined =>
  state.languages[createListKey('languages', params)];
export const selectPaymentMethodsList = (params: GetPaymentMethodsParams) => (state: SettingsStoreState): PaginatedDataState<PaymentMethod> | undefined =>
  state.paymentMethods[createListKey('paymentMethods', params)];
export const selectCountriesList = (params?: GetCountriesParams) => (state: SettingsStoreState): PaginatedDataState<UserCountry> | undefined =>
  state.countries[createListKey('countries', params)];