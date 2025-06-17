import { z } from 'zod';
import type {
  SocialMediaItemSchema,
  SocialMediaSettingsSchema,
  StateSchema,
  StateListResponseSchema,
  GetStatesParamsSchema,
  SaleSystemSchema,
  ConfigCountrySchema,
  ConfigLanguageSchema,
  TransportationRuleSchema,
  ConfigCompanySchema,
  ContactGroup,
  ConfigCompanyContactGroupSchema,
  ConfigDataSchema,
  ConfigDataResponseSchema,
  GetConfigDataParamsSchema,
  // LanguageSchema is UserLanguageSchema from user.ts
  LanguageListResponseSchema,
  GetLanguagesParamsSchema,
  PaymentMethodSchema,
  PaymentMethodTranslateSchema,
  PaymentMethodListResponseSchema,
  GetPaymentMethodsParamsSchema,
  CountryListResponseSchema,
  GetCountriesParamsSchema,
} from '../../zodSchemas/settingsSchema';
import type { UserCountry, UserLanguage, Currency, PaginationLinks, Meta } from './user'; // Reusing some base types

// Social Media Types
export type SocialMediaItem = z.infer<typeof SocialMediaItemSchema>;
export type SocialMediaSettings = z.infer<typeof SocialMediaSettingsSchema>;
// Assuming response is { data: SocialMediaSettings }
export type SocialMediaSettingsResponse = z.object({ data: SocialMediaSettingsSchema });


// States Types
export type State = z.infer<typeof StateSchema>;
export type StateListResponse = z.infer<typeof StateListResponseSchema>;
export type GetStatesParams = z.infer<typeof GetStatesParamsSchema>;

// Config Data Types
export type SaleSystem = z.infer<typeof SaleSystemSchema>;
export type ConfigCountry = z.infer<typeof ConfigCountrySchema>; // Specific to config if different from UserCountry
export type ConfigLanguage = z.infer<typeof ConfigLanguageSchema>; // Specific to config if different
export type TransportationRule = z.infer<typeof TransportationRuleSchema>;
export type ConfigCompanyContactGroupAddress = z.infer<typeof ConfigCompanyContactGroupAddressSchema>;
export type ConfigCompanyContactGroup = z.infer<typeof ConfigCompanyContactGroupSchema>;
export type ConfigCompany = z.infer<typeof ConfigCompanySchema>;
export type ConfigData = z.infer<typeof ConfigDataSchema>;
export type ConfigDataResponse = z.infer<typeof ConfigDataResponseSchema>;
export type GetConfigDataParams = z.infer<typeof GetConfigDataParamsSchema>;

// Languages Types (UserLanguage is already defined in user.ts)
export type LanguageListResponse = z.infer<typeof LanguageListResponseSchema>;
export type GetLanguagesParams = z.infer<typeof GetLanguagesParamsSchema>;
export type Language = UserLanguage; // Alias for clarity if needed

// Payment Methods Types
export type PaymentMethodTranslate = z.infer<typeof PaymentMethodTranslateSchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type PaymentMethodListResponse = z.infer<typeof PaymentMethodListResponseSchema>;
export type GetPaymentMethodsParams = z.infer<typeof GetPaymentMethodsParamsSchema>;

// Re-export shared types if necessary
export type { UserCountry, Currency, PaginationLinks, Meta };
export type GetCountriesParams = z.infer<typeof GetCountriesParamsSchema>;
export type CountryListResponse = z.infer<typeof CountryListResponseSchema>;