import { create } from 'zustand';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import { subscribeToNewsletter as subscribeToNewsletterService } from '../services/newsletterApi';
import type {
  SubscribeNewsletterPayload,
  SubscribeNewsletterResponse,
  SubscribeNewsletterResponseData,
} from '../../../core/types/api/newsletter';
import type { ApiError } from '../../../core/httpClient/httpClient';

interface NewsletterSubscriptionState {
  responseData: SubscribeNewsletterResponseData | null; // Stores data like id, email, is_active from response
  isLoading: boolean;
  error: ApiError | null;
  successMessage: string | null;
}

interface NewsletterStoreActions {
  subscribe: (payload: SubscribeNewsletterPayload) => Promise<boolean>; // Returns true on success
  clearSubscriptionStatus: () => void;
}

const initialState: NewsletterSubscriptionState = {
  responseData: null,
  isLoading: false,
  error: null,
  successMessage: null,
};

export const useNewsletterStore = create<NewsletterSubscriptionState & NewsletterStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      /**
       * Subscribes an email to the newsletter.
       * @returns true if subscription was successful, false otherwise.
       */
      subscribe: async (payload) => {
        set({ isLoading: true, error: null, successMessage: null, responseData: null });
        try {
          const response: SubscribeNewsletterResponse = await subscribeToNewsletterService(payload);
          set({
            responseData: response.data,
            isLoading: false,
            error: null,
            successMessage: "Successfully subscribed to the newsletter!", // Or use a message from API if available
          });
          return true;
        } catch (error) {
          const apiError = error as ApiError;
          set({
            isLoading: false,
            error: apiError,
            successMessage: null,
            responseData: null,
          });
          console.error('Newsletter subscription failed:', apiError);
          return false;
        }
      },

      /**
       * Clears the current subscription status (error, success message, response data).
       */
      clearSubscriptionStatus: () => {
        set({
          responseData: null,
          isLoading: false, // Should not clear isLoading if an operation is in progress, but ok for manual clear
          error: null,
          successMessage: null,
        });
      },
    }),
    'NewsletterStore'
  )
);

// Selectors
export const selectNewsletterSubscriptionState = (state: NewsletterSubscriptionState) => state;
export const selectNewsletterIsLoading = (state: NewsletterSubscriptionState) => state.isLoading;
export const selectNewsletterError = (state: NewsletterSubscriptionState) => state.error;
export const selectNewsletterSuccessMessage = (state: NewsletterSubscriptionState) => state.successMessage;
export const selectNewsletterResponseData = (state: NewsletterSubscriptionState) => state.responseData;

// Newsletter subscription is usually not tied to a logged-in user,
// so clearing on 'auth:logout' might not be necessary unless the business logic dictates it.
// If it were, you'd add:
// if (typeof window !== 'undefined') {
//   window.addEventListener('auth:logout', () => {
//     useNewsletterStore.getState().clearSubscriptionStatus();
//   });
// }
