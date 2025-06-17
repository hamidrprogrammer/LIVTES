import { z } from 'zod';
import type {
  UserProfileSchema,
  UserProfileResponseSchema,
  UpdateUserProfilePayloadSchema,
  UserDocumentSchema,
  UserDocumentsResponseSchema,
  GetUserDocumentsParamsSchema,
  LegalDocumentSchema,
  UnassignedLegalsResponseSchema,
  ChangeInvoiceContactGroupPayloadSchema,
  ChangeInvoiceContactGroupResponseSchema,
  UserRoleSchema,
  UserRolePermissionSchema,
  UserLanguageSchema,
  UserCountrySchema,
  CurrencySchema,
  CountryVatSchema,
  UserPartnerSchema,
  UserPartnerDataSchema,
  UserPersonSchema,
  UserBasketSchema,
  BasketItemSchema,
  UserInvoiceContactGroupSchema,
  UserAddressSchema,
  UserSubdomainSchema,
  UserSubdomainTranslateSchema,
  CareerStepSchema,
} from '../../zodSchemas/userSchema';

// Exporting granular types for better usability
export type UserRolePermission = z.infer<typeof UserRolePermissionSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
export type UserLanguage = z.infer<typeof UserLanguageSchema>;
export type Currency = z.infer<typeof CurrencySchema>;
export type CountryVat = z.infer<typeof CountryVatSchema>;
export type UserCountry = z.infer<typeof UserCountrySchema>;
export type UserPartnerData = z.infer<typeof UserPartnerDataSchema>;
export type UserPartner = z.infer<typeof UserPartnerSchema>;
export type UserPerson = z.infer<typeof UserPersonSchema>;
export type BasketItem = z.infer<typeof BasketItemSchema>;
export type UserBasket = z.infer<typeof UserBasketSchema>;
export type UserAddress = z.infer<typeof UserAddressSchema>;
export type UserInvoiceContactGroup = z.infer<typeof UserInvoiceContactGroupSchema>;
export type UserSubdomainTranslate = z.infer<typeof UserSubdomainTranslateSchema>;
export type UserSubdomain = z.infer<typeof UserSubdomainSchema>;
export type CareerStep = z.infer<typeof CareerStepSchema>;

// User Profile Types
export type UserProfile = z.infer<typeof UserProfileSchema>;
export type UserProfileResponse = z.infer<typeof UserProfileResponseSchema>;
export type UpdateUserProfilePayload = z.infer<typeof UpdateUserProfilePayloadSchema>;

// User Documents Types
export type UserDocument = z.infer<typeof UserDocumentSchema>;
export type UserDocumentsResponse = z.infer<typeof UserDocumentsResponseSchema>;
export type GetUserDocumentsParams = z.infer<typeof GetUserDocumentsParamsSchema>;

// Unassigned Own Legals Types
export type LegalDocument = z.infer<typeof LegalDocumentSchema>;
export type UnassignedLegalsResponse = z.infer<typeof UnassignedLegalsResponseSchema>;

// Change Invoice Contact Group Types
export type ChangeInvoiceContactGroupPayload = z.infer<typeof ChangeInvoiceContactGroupPayloadSchema>;
export type ChangeInvoiceContactGroupResponse = z.infer<typeof ChangeInvoiceContactGroupResponseSchema>;
