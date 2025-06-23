import api from "../../../core/api/api";
import { LoginPayloadSchema, LoginResponseSchema } from "../../../core/zodSchemas/authSchema";
import type { LoginPayload, LoginResponse } from "../../../core/types/api/auth";

/**
 * Logs in a user.
 * @param payload - The login credentials (username and password).
 * @param showLoading - Whether to show the global loading indicator for this request.
 * @returns A promise resolving to the login response, including tokens and user data.
 */
export async function login(
  payload: LoginPayload,
  showLoading: boolean = true
): Promise<LoginResponse> {
  const validatedPayload = LoginPayloadSchema.parse(payload);
  const url = `/login`;

  const response = await api.post<LoginResponse>(url, validatedPayload, { showLoading });

  return LoginResponseSchema.parse(response.data);
}


