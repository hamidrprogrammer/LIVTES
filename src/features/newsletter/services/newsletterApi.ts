import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  SubscribeNewsletterPayloadSchema,
  SubscribeNewsletterResponseSchema,
} from '../../../core/zodSchemas/newsletterSchema';
import type {
  SubscribeNewsletterPayload,
  SubscribeNewsletterResponse,
} from '../../../core/types/api/newsletter';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Subscribes an email address to the newsletter.
 * @param payload - The email address to subscribe.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the subscription response.
 */
export async function subscribeToNewsletter(
  payload: SubscribeNewsletterPayload,
  requestOptions?: RequestOptions
): Promise<SubscribeNewsletterResponse> {
  const validatedPayload = SubscribeNewsletterPayloadSchema.parse(payload);
  const url = `${API_BASE_URL}/subscribe`;

  // This endpoint might not require an Authorization token if it's for public subscriptions
  // The httpClient should be configured to handle this, or we can explicitly omit the token.
  // For now, assuming httpClient handles token attachment appropriately based on global state or specific options.

  return httpClient(
    url,
    {
      method: 'POST',
      body: JSON.stringify(validatedPayload),
      ...requestOptions,
    },
    SubscribeNewsletterResponseSchema
  );
}
