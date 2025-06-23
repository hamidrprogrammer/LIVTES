import { useMutation, useQueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { login } from '../services/authApi';
import type { LoginPayload, LoginResponse, UserProfile } from '../../../core/types/api/auth';
import { ApiError, handleApiError } from '../../../core/api/apiUtils'; // Import ApiError and handleApiError
import { userQueryKeys } from '../../user/hooks/useUserQueries'; // For updating user profile cache
import { useLoading } from '../../../core/loading/LoadingContext'; // Import useLoading hook

// Auth Query Keys (mostly for consistency or if there were auth-related queries)
export const authQueryKeys = {
  session: ['auth', 'session'] as const,
};

/**
 * Hook for user login.
 * Manages the mutation for logging in a user.
 *
 * Callbacks for `onSuccess` (e.g., storing token, navigation) should be provided
 * by the component using this hook.
 */
export function useLoginMutation(
  options?: Omit<UseMutationOptions<LoginResponse, ApiError, LoginPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  const { setLoading } = useLoading(); // Get setLoading from global loading context

  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: async (payload: LoginPayload) => {
      setLoading(true); // Activate global loading indicator
      try {
        const response = await login(payload, false); // Pass false to prevent individual API call from setting global loading
        return response;
      } finally {
        setLoading(false); // Deactivate global loading indicator
      }
    },
    onSuccess: (data, variables, context) => {
      // 1. Update the user profile in React Query cache with the data from login
      const userProfileData: { data: UserProfile } = { data: data.user };
      queryClient.setQueryData(userQueryKeys.profile(), userProfileData);

      // 2. Invalidate any queries that might depend on authentication state,
      //    though specific profile data is already set.
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all }); // Invalidate all user-related data
      queryClient.invalidateQueries({ queryKey: authQueryKeys.session }); // If we had a session query

      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Use the centralized error handler for API errors
      handleApiError(error);

      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    // Spread the rest of the options
    ...options,
  });
}


