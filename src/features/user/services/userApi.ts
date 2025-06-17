import { httpClient, type RequestOptions, type ApiError } from '../../../core/httpClient/httpClient';
import {
  UserProfileResponseSchema,
  UpdateUserProfilePayloadSchema,
  UserDocumentsResponseSchema,
  GetUserDocumentsParamsSchema,
  UnassignedLegalsResponseSchema,
  ChangeInvoiceContactGroupPayloadSchema,
  ChangeInvoiceContactGroupResponseSchema,
  ChangePasswordPayload,
} from '../../../core/zodSchemas/userSchema';
import type {
  UserProfileResponse,
  UpdateUserProfilePayload,
  UserDocumentsResponse,
  GetUserDocumentsParams,
  UnassignedLegalsResponse,
  ChangeInvoiceContactGroupPayload,
  ChangeInvoiceContactGroupResponse,

} from '../../../core/types/api/user';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches the current user's profile.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the user's profile.
 */


export async function getUserProfile(
  requestOptions?: RequestOptions
): Promise<UserProfileResponse> {
  const url = `${API_BASE_URL}/users/profile`;
  const response = await httpClient(url, requestOptions, UserProfileResponseSchema);
    console.log('==================response==================');
    console.log(response);
    console.log('==================response==================');
  
  
    return response;
 
}

/**
 * Updates the current user's profile.
 * @param payload - The data to update the user profile with.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the updated user's profile.
 */

export const changePassword = async (payload: ChangePasswordPayload,  requestOptions?: RequestOptions
): Promise<any> => {
  const response = await httpClient(`${API_BASE_URL}/users/profile/change-password`,  {
      method: 'PUT',
      body: JSON.stringify(payload),
      ...requestOptions,
    },);
  return response;
};
export async function updateUserProfile(
  payload: UpdateUserProfilePayload,
  requestOptions?: RequestOptions
): Promise<UserProfileResponse> {
  const validatedPayload = UpdateUserProfilePayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/users/profile/edit`;
  const ursl =httpClient(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    UserProfileResponseSchema
  );
  console.log('============ursl========================');
  console.log(ursl);
  console.log('====================================');
  return ursl
}

/**
 * Fetches the current user's documents.
 * @param params - Query parameters for pagination and sorting.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a list of user documents.
 */
export async function getUserDocuments(
  params?: GetUserDocumentsParams,
  requestOptions?: RequestOptions
): Promise<UserDocumentsResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetUserDocumentsParamsSchema.parse(params);
    if (validatedParams.page) {
      queryParams.set('page', String(validatedParams.page));
    }
    if (validatedParams.per_page) {
      queryParams.set('per_page', String(validatedParams.per_page));
    }
    if (validatedParams['orderBy[id]']) {
      queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
    }
  }
  const url = `${API_BASE_URL}/users/profile/documents${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  // Assuming UserDocumentsResponseSchema includes proper parsing for empty response body if API returns that
  // For now, if the response is truly empty (as in Postman) but is 200 OK,
  // and if UserDocumentsResponseSchema expects data, it will fail validation.
  // This needs to be aligned with actual API behavior for empty lists.
  // If an empty list is `{"data": [], ...}`, the schema is fine.
  // If it's literally an empty body for an empty list, schema needs adjustment or http client.
  return httpClient(url, requestOptions, UserDocumentsResponseSchema);
}

/**
 * Fetches unassigned legal documents for the current user.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a list of unassigned legal documents.
 */
export async function getUnassignedLegals(
  requestOptions?: RequestOptions
): Promise<UnassignedLegalsResponse> {
  const url = `${API_BASE_URL}/users/unassigned-own-legals`;
  return httpClient(url, requestOptions, UnassignedLegalsResponseSchema);
}

/**
 * Changes the user's invoice contact group.
 * @param payload - The payload containing the new invoice_contact_group_id.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the API's response message.
 */
export async function changeInvoiceContactGroup(
  payload: ChangeInvoiceContactGroupPayload,
  requestOptions?: RequestOptions
): Promise<ChangeInvoiceContactGroupResponse> {
  const validatedPayload = ChangeInvoiceContactGroupPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/users/profile/change-invoice-contact-group`;
  return httpClient(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    ChangeInvoiceContactGroupResponseSchema
  );
}
