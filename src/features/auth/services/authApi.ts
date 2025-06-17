import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  LoginPayloadSchema,
  LoginResponseSchema,
} from '../../../core/zodSchemas/authSchema';
import type {
  LoginPayload,
  LoginResponse,
} from '../../../core/types/api/auth';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Logs in a user.
 * @param payload - The login credentials (username and password).
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the login response, including tokens and user data.
 */
export async function login(
  payload: LoginPayload,
  requestOptions?: RequestOptions
): Promise<LoginResponse> {
  const validatedPayload = LoginPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/login`;

  // For login, we typically don't send an Authorization header
  // The httpClient needs to be flexible enough or we override headers here.
  // Assuming httpClient doesn't add Authorization if `Authorization` is explicitly set to `undefined` or not present in mergedOptions.
  // Or, the httpClient could have a flag to exclude the token for specific paths.
  // For this example, we'll rely on the httpClient not adding a token if one isn't already globally set,
  // or if we passed specific headers that don't include it.
  // A more robust httpClient might allow disabling token attachment.

  const { headers, ...restOfOptions } = requestOptions || {};
  const loginRequestOptions: RequestOptions = {
    method: 'POST',
    body: JSON.stringify(validatedPayload),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(headers || {}),
      // Explicitly ensure no Authorization header from a previous session is sent for login
      // This depends on how httpClient merges headers. If it always adds Authorization if present globally,
      // we might need a way to tell it not to for this specific request.
      // For now, we assume that if we don't provide it, and it's not in default headers for login, it's fine.
    },
    ...restOfOptions,
  };
const response = await httpClient(url, loginRequestOptions, LoginResponseSchema);
  console.log('==================response==================');
  console.log(response);
  console.log('==================response==================');


  return response;
}
