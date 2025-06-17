import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  ContactGroupDetailResponseSchema,
  ValidateAddressResponseSchema,
  ListContactGroupsParamsSchema,
  ListContactGroupsResponseSchema,
  CreateContactGroupPayloadSchema,
  UpdateContactGroupPayloadSchema,
} from '../../../core/zodSchemas/contactGroupSchema';
import type {
  ContactGroupDetailResponse,
  ValidateAddressResponse,
  ListContactGroupsParams,
  ListContactGroupsResponse,
  CreateContactGroupPayload,
  UpdateContactGroupPayload,
  ContactGroup,
} from '../../../core/types/api/contactGroup';
import queryString from 'query-string';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches the details of a specific contact group.
 * این تابع برای زمانی استفاده می‌شود که کاربر روی یک آدرس کلیک می‌کند تا جزئیات آن را ببیند
 */
export async function getContactGroupDetail(
  contactGroupId: string | number,
  requestOptions?: RequestOptions
): Promise<ContactGroupDetailResponse> {
  const url = `${API_BASE_URL}/contact-groups/${contactGroupId}`;
  return httpClient(url, requestOptions, ContactGroupDetailResponseSchema);
}

/**
 * Validates the address associated with a specific contact group.
 */
export async function validateContactGroupAddress(
  contactGroupId: string | number,
  requestOptions?: RequestOptions
): Promise<ValidateAddressResponse> {
  const url = `${API_BASE_URL}/shop/contact-group/${contactGroupId}/validate-address`;
  return httpClient(url, requestOptions, ValidateAddressResponseSchema);
}

/**
 * START: این تابع کامل شده برای دریافت لیست آدرس‌ها با صفحه‌بندی است
 * Fetches a list of contact groups with pagination.
 */
export async function listContactGroups(
  params?: ListContactGroupsParams,
  requestOptions?: RequestOptions
): Promise<ListContactGroupsResponse> {
  // Validate parameters and create a query string
  const validatedParams = params ? ListContactGroupsParamsSchema.parse(params) : {};
  const query = queryString.stringify(validatedParams);
  
  const url = `${API_BASE_URL}/contact-groups?${query}`;

  return httpClient(url, requestOptions, ListContactGroupsResponseSchema);
}
// END

/**
 * Creates a new contact group (address).
 */
export async function createContactGroup(
  payload: CreateContactGroupPayload,
  requestOptions?: RequestOptions
): Promise<{ data: ContactGroup }> {
  const validatedPayload = CreateContactGroupPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/contact-groups`;
  return httpClient(
    url,
    {
      method: 'POST',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    ContactGroupDetailResponseSchema // Assuming the response for create is the full detail object
  );
}

/**
 * Updates an existing contact group.
 */
export async function updateContactGroup(
  contactGroupId: number,
  payload: UpdateContactGroupPayload,
  requestOptions?: RequestOptions
): Promise<{ data: ContactGroup }> {
  const validatedPayload = UpdateContactGroupPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/contact-groups/${contactGroupId}`;
  return httpClient(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    ContactGroupDetailResponseSchema
  );
}

/**
 * Deletes a contact group.
 */
export async function deleteContactGroup(
  contactGroupId: number,
  requestOptions?: RequestOptions
): Promise<{ message: string }> {
  const url = `${API_BASE_URL}/contact-groups/${contactGroupId}`;
  return httpClient(
    url,
    {
      method: 'DELETE',
      ...requestOptions,
    }
    // Assuming no specific response schema is needed for delete on success
  );
}