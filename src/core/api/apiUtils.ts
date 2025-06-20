import { z } from 'zod';
import { showToast } from '../../lib/shared/stores/toastStore';

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
}

export function getRefreshToken(): string | null {
  return null;
}

export async function refreshToken(): Promise<string | null> {
  return null;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public errors?: unknown,
    public requestId?: unknown,
    message?: string
  ) {
    super(message || `API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

export interface RequestOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: (attemptIndex: number) => number;
  isPublic?: boolean;
}

export async function handleApiResponse<T>(response: Response, schema?: z.ZodType<T>): Promise<T> {
  const contentType = response.headers.get('content-type');
  const serverRequestId = response.headers.get('X-Request-ID');
  let responseData;

  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    responseData = undefined;
  } else if (contentType && contentType.includes('application/json')) {
    responseData = await response.json();
  } else {
    const textResponse = await response.text();
    if (!response.ok) {
      throw new ApiError(response.status, response.statusText, textResponse, serverRequestId, `Unexpected content type: ${contentType}. Server response: ${textResponse.substring(0, 200)}`);
    }
    responseData = textResponse as unknown as T;
  }

  if (!response.ok) {
    const message = typeof responseData === 'object' && responseData && 'message' in responseData && typeof responseData.message === 'string'
      ? responseData.message
      : `HTTP error ${response.status}`;
    const errors = typeof responseData === 'object' && responseData && 'errors' in responseData
      ? responseData.errors
      : (typeof responseData === 'object' && responseData !== null && !('errors' in responseData) && !('message' in responseData) ? responseData : undefined);

    throw new ApiError(response.status, response.statusText, errors, serverRequestId, message);
  }

  if (schema) {
    const validationResult = schema.safeParse(responseData);
    if (!validationResult.success) {
      console.error('API response validation error:', validationResult.error.format());
      throw new Error(`API response validation failed: ${validationResult.error.message} (Request ID: ${serverRequestId || 'N/A'})`);
    }
    return validationResult.data;
  }
  return responseData as T;
}

export const getApiErrorMessage = (error: ApiError): string => {
  if (error.errors?.data?.message) {
    return error.errors.data.message;
  }
  if (error.errors && typeof error.errors === 'object') {
    const firstErrorKey = Object.keys(error.errors)[0];
    if (firstErrorKey && Array.isArray(error.errors[firstErrorKey])) {
      return error.errors[firstErrorKey][0];
    }
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred.';
};

export const handleApiError = (error: unknown) => {
  if (error instanceof ApiError) {
    const userMessage = getApiErrorMessage(error);
    showToast(userMessage, 'error');

    if (error.status === 401) {
      console.error('Authentication error:', error);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('auth:logout', { detail: { reason: '401 Unauthorized' } }));
      }
    }
  } else if (error instanceof Error && error.name === 'AbortError') {
    showToast('The request timed out. Please try again.', 'error');
  } else {
    showToast('A network error occurred. Please check your connection.', 'error');
  }
};


