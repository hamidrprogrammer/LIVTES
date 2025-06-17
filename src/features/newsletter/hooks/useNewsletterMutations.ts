import { useMutation, type UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { subscribeToNewsletter } from '../services/newsletterApi';
import type {
  SubscribeNewsletterPayload,
  SubscribeNewsletterResponse,
} from '../../../core/types/api/newsletter';
import type { ApiError } from '../../../core/httpClient/httpClient';
// import { userQueryKeys } from '../../user/hooks/useUserQueries'; // If subscription status affects user profile

// Query Keys Factory (mostly for consistency or if there were newsletter-related queries)
export const newsletterQueryKeys = {
  all: ['newsletter'] as const,
  subscriptions: () => [...newsletterQueryKeys.all, 'subscriptions'] as const,
  // If there was a GET endpoint to check subscription status:
  // subscriptionStatus: (email: string) => [...newsletterQueryKeys.subscriptions(), email] as const,
};

/**
 * Hook for subscribing to the newsletter.
 */
export function useSubscribeToNewsletterMutation(
  options?: Omit<UseMutationOptions<SubscribeNewsletterResponse, ApiError, SubscribeNewsletterPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation<SubscribeNewsletterResponse, ApiError, SubscribeNewsletterPayload>({
    mutationFn: subscribeToNewsletter,
    onSuccess: (data, variables, context) => {
      // After successful subscription:
      // 1. Optionally, invalidate any queries that might reflect newsletter subscription status.
      //    For example, if the user profile contains a `newsletter_active` flag:
      //    queryClient.invalidateQueries({ queryKey: userQueryKeys.profile() });

      // 2. The primary action is usually to inform the user of success (e.g., via a toast notification).
      //    This would be handled by the component calling the mutation via its own onSuccess callback.

      // Call original onSuccess if provided in options
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Handle errors, e.g., email already subscribed, validation errors.
      console.error('Newsletter subscription failed:', error.message, error.errors);

      // Call original onError if provided in options
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
}
