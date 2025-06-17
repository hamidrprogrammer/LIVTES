import { useMutation, useQueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { login } from '../services/authApi';
import type { LoginPayload, LoginResponse, UserProfile } from '../../../core/types/api/auth';
import type { ApiError } from '../../../core/httpClient/httpClient';
import { userQueryKeys } from '../../user/hooks/useUserQueries'; // For updating user profile cache

// Auth Query Keys (mostly for consistency or if there were auth-related queries)
export const authQueryKeys = {
  session: ['auth', 'session'] as const,
};

// Define a type for the context if using optimistic updates, not strictly needed for login
// interface LoginOptimisticContext { previousProfile?: UserProfileResponse }

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

  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data, variables, context) => {
      // 1. Update the user profile in React Query cache with the data from login
      // This avoids an immediate refetch of the profile if the login response contains it.
      const userProfileData: { data: UserProfile } = { data: data.user };
      queryClient.setQueryData(userQueryKeys.profile(), userProfileData);

      // 2. Invalidate any queries that might depend on authentication state,
      //    though specific profile data is already set.
      //    This is more of a general cleanup or for other auth-dependent data.
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all }); // Invalidate all user-related data
      queryClient.invalidateQueries({ queryKey: authQueryKeys.session }); // If we had a session query

      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Handle login specific errors if needed
      console.error('Login failed:', error.message);
      if (error.status === 401) {
        // Specific handling for unauthorized, e.g. "Invalid credentials"
      }
      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    // Spread the rest of the options
    ...options,
  });
}
