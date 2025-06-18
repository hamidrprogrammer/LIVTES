/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod';
import { showToast } from '@/lib/shared/stores/toastStore'; // <<< IMPORT THE TOAST TRIGGER

// Helper function to get token (replace with your actual token storage mechanism)
// This should ideally interface with your auth state management (e.g., Zustand, Context, Redux)
function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
}

function getRefreshToken(): string | null {
 
  return null;
}

// Placeholder for your token refresh logic
// In a real app, this would make an API call to your refresh token endpoint
async function refreshToken(): Promise<string | null> {
 
  return null;
}


let isRefreshingToken = false;
let tokenRefreshPromise: Promise<string | null> | null = null;


export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public errors?: unknown,
    public requestId?: unknown,
    message?: string
  ){
    super(message || `API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
    // Log error details for telemetry/debugging if needed here or in a global handler
    // console.error(`ApiError (${requestId || 'N/A'}): ${status} ${statusText}`, errors, message);
  }
}

export interface RequestOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: (attemptIndex: number) => number;
  /** Set to true if the request does not require authentication token */
  isPublic?: boolean;
}

const DEFAULT_TIMEOUT = 15000; // 15 seconds
const DEFAULT_RETRIES = 1; // Default to 1 try (no retries) for general requests, 0 for token refresh itself
const defaultRetryDelay = (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000); // Exponential backoff

async function handleApiResponse<T>(response: Response, schema?: z.ZodType<T>): Promise<T> {
  const contentType = response.headers.get('content-type');
  const serverRequestId = response.headers.get('X-Request-ID'); // Example header for request ID
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
    // This case is unlikely if API is consistently JSON but handles edge cases
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

const getApiErrorMessage = (error: ApiError): string => {
    // Case 1: Message from the user's example -> data.message
    if (error.errors?.data?.message) {
        return error.errors.data.message;
    }
    // Case 2: Standard validation error message
    if (error.errors && typeof error.errors === 'object') {
        const firstErrorKey = Object.keys(error.errors)[0];
        if (firstErrorKey && Array.isArray(error.errors[firstErrorKey])) {
            return error.errors[firstErrorKey][0];
        }
    }
    // Case 3: General error message
    if (error.message) {
        return error.message;
    }
    return 'An unexpected error occurred.';
};
export async function httpClient<T>(
  url: string,
  options: RequestOptions = {},
  schema?: z.ZodType<T>
): Promise<T> {
  // ... existing implementation of httpClient options
  const { timeout = 15000, retries = 1, retryDelay = (attempt) => Math.min(1000 * 2 ** attempt, 30000), isPublic = false, ...fetchOptions } = options;
  let currentToken = isPublic ? null : getAuthToken();

  const makeRequest = async (attempt: number, tokenOverride?: string | null): Promise<T> => {
    // ... existing request setup (controller, headers, etc.)
    const controller = new AbortController();
    const requestTimeoutId = setTimeout(() => controller.abort(), timeout);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      ...fetchOptions.headers,
    };
    
    const effectiveToken = tokenOverride !== undefined ? tokenOverride : currentToken;
    if (effectiveToken && !isPublic) {
      headers['Authorization'] = `Bearer ${effectiveToken}`;
    }

    const mergedOptions: RequestInit = {
      ...fetchOptions,
      headers,
      signal: controller.signal,
    };

    try {
      const response = await fetch(url, mergedOptions);
      clearTimeout(requestTimeoutId);
      return await handleApiResponse(response, schema);
    } catch (error) {
      clearTimeout(requestTimeoutId);

      // +++ TRIGGER THE GLOBAL TOAST HERE +++
      if (error instanceof ApiError) {
        const userMessage = getApiErrorMessage(error);
        showToast(userMessage, 'error'); // Show the toast with the extracted message

        if (error.status === 401 && !isPublic) {
           console.error('Persistent 401 error...', error);
           if (typeof window !== 'undefined') {
               window.dispatchEvent(new CustomEvent('auth:logout', { detail: { reason: 'Persistent 401' } }));
           }
           throw error;
        }
      }
      
      if (attempt < retries && !(error instanceof ApiError && error.status < 500 && error.status !== 401 && error.status !== 429)) {
        await new Promise(resolve => setTimeout(resolve, retryDelay(attempt)));
        return makeRequest(attempt + 1, currentToken);
      }
      if (error instanceof ApiError) throw error;
      if (error instanceof Error && error.name === 'AbortError') {
        showToast('The request timed out. Please try again.', 'error');
        throw new ApiError(408, 'Request Timeout', undefined, undefined, 'Request timed out');
      }
      showToast('A network error occurred. Please check your connection.', 'error');
      throw new ApiError(0, 'Network Error', undefined, undefined, `Network request failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return makeRequest(0, currentToken);
}
// Example of how a global event listener for logout might look (e.g., in your main App component or auth provider)
// if (typeof window !== 'undefined') {
//   window.addEventListener('auth:logout', (event) => {
//      
//     // Implement actual logout logic: clear tokens, redirect to login, clear React Query cache etc.
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('refreshToken');
//     // queryClient.clear(); // Be careful with this, might be too aggressive
//     // window.location.href = '/login';
//   });
// }
