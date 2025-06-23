/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions, type QueryKey } from '@tanstack/react-query';
import {
  getUserProfile,
  updateUserProfile,
  getUserDocuments,
  getUnassignedLegals,
  changeInvoiceContactGroup,
  changePassword,
  deactivateAccount,
} from '../services/userApi';
import type {
  UserProfileResponse,
  UpdateUserProfilePayload,
  UserDocumentsResponse,
  GetUserDocumentsParams,
  UnassignedLegalsResponse,
  ChangeInvoiceContactGroupPayload,
  ChangeInvoiceContactGroupResponse,
  UserProfile,
} from '../../../core/types/api/user';
import type { ApiError } from '../../../core/httpClient/httpClient';
import { ChangePasswordPayload } from '@/core/zodSchemas/userSchema';

// Query Keys Factory
export const userQueryKeys = {
  all: ['user'] as const,
  profile: () => [...userQueryKeys.all, 'profile'] as const,
  documents: (params?: GetUserDocumentsParams) => [...userQueryKeys.all, 'documents', params ?? {}] as const,
  unassignedLegals: () => [...userQueryKeys.all, 'unassignedLegals'] as const,
};

export function useDeactivateAccountMutation(
  options?: Omit<UseMutationOptions<any, ApiError, void>, 'mutationFn'>
) {
  return useMutation<any, ApiError, void>({
    mutationFn: deactivateAccount,
    ...options,
  });
}
export function useChangePasswordMutation(
  options?: Omit<UseMutationOptions<any, ApiError, ChangePasswordPayload>, 'mutationFn'>
) {
  return useMutation<any, ApiError, ChangePasswordPayload>({
    mutationFn: changePassword,
    ...options,
  });
}
/**
 * Hook to fetch the current user's profile.
 */
export function useGetUserProfileQuery(
  options?: Omit<UseQueryOptions<UserProfileResponse, ApiError, UserProfileResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<UserProfileResponse, ApiError, UserProfileResponse, QueryKey>({
    queryKey: userQueryKeys.profile(),
    queryFn: ({ signal }) => getUserProfile({ signal }),
    ...options,
  });
}

/**
 * Hook to update the current user's profile.
 */
export function useUpdateUserProfileMutation(
  options?: Omit<UseMutationOptions<UserProfileResponse, ApiError, UpdateUserProfilePayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  return useMutation<UserProfileResponse, ApiError, UpdateUserProfilePayload>({
    mutationFn: updateUserProfile,
    onSuccess: (data, variables, context) => {
      // Invalidate and refetch the user profile query after a successful update
      queryClient.invalidateQueries({ queryKey: userQueryKeys.profile() });
      // Optionally, you can set the query data immediately if the response is the full profile
      queryClient.setQueryData(userQueryKeys.profile(), data);
       if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
}

/**
 * Hook to fetch the current user's documents.
 */
export function useGetUserDocumentsQuery(
  params?: GetUserDocumentsParams,
  options?: Omit<UseQueryOptions<UserDocumentsResponse, ApiError, UserDocumentsResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<UserDocumentsResponse, ApiError, UserDocumentsResponse, QueryKey>({
    queryKey: userQueryKeys.documents(params),
    queryFn: ({ signal }) => getUserDocuments(params, { signal }),
    ...options,
  });
}

/**
 * Hook to fetch unassigned legal documents for the current user.
 */
export function useGetUnassignedLegalsQuery(
  options?: Omit<UseQueryOptions<UnassignedLegalsResponse, ApiError, UnassignedLegalsResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<UnassignedLegalsResponse, ApiError, UnassignedLegalsResponse, QueryKey>({
    queryKey: userQueryKeys.unassignedLegals(),
    queryFn: ({ signal }) => getUnassignedLegals({ signal }),
    ...options,
  });
}

/**
 * Hook to change the user's invoice contact group.
 */
export function useChangeInvoiceContactGroupMutation(
  options?: Omit<UseMutationOptions<ChangeInvoiceContactGroupResponse, ApiError, ChangeInvoiceContactGroupPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  return useMutation<ChangeInvoiceContactGroupResponse, ApiError, ChangeInvoiceContactGroupPayload>({
    mutationFn: changeInvoiceContactGroup,
    onSuccess: () => {
      // After changing the invoice contact group, the user profile might have changed.
      // It's good practice to invalidate the user profile to refetch it.
      queryClient.invalidateQueries({ queryKey: userQueryKeys.profile() });
      // Depending on the application, you might also need to invalidate other related queries,
      // e.g., if there's a query for fetching contact groups separately.
    },
    ...options,
  });
}