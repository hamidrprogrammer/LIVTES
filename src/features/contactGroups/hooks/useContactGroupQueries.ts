import { useQuery, useMutation, useQueryClient, type UseQueryOptions, type UseMutationOptions, type QueryKey } from '@tanstack/react-query';
import {
  getContactGroupDetail,
  validateContactGroupAddress,
  listContactGroups,
  createContactGroup,
  updateContactGroup,
  deleteContactGroup,
} from '../services/contactGroupApi';
import type {
  ContactGroupDetailResponse,
  ValidateAddressResponse,
  ListContactGroupsResponse,
  ListContactGroupsParams,
  ContactGroup,
  CreateContactGroupPayload,
  UpdateContactGroupPayload,
} from '../../../core/types/api/contactGroup';
import type { ApiError } from '../../../core/httpClient/httpClient';

// START: تعریف کلیدهای کوئری برای مدیریت بهتر کش
export const contactGroupQueryKeys = {
  all: ['contactGroups'] as const,
  lists: () => [...contactGroupQueryKeys.all, 'list'] as const,
  list: (params?: ListContactGroupsParams) =>
    [...contactGroupQueryKeys.lists(), params ?? {}] as const,
  details: () => [...contactGroupQueryKeys.all, 'detail'] as const,
  detail: (contactGroupId: string | number) =>
    [...contactGroupQueryKeys.details(), contactGroupId] as const,
  validations: () => [...contactGroupQueryKeys.all, 'validations'] as const,
  validationStatus: (contactGroupId: string | number) =>
    [...contactGroupQueryKeys.validations(), contactGroupId] as const,
};
// END

/**
 * Hook to fetch the details of a specific contact group.
 */
export function useGetContactGroupDetailQuery(
  contactGroupId: string | number,
  options?: Omit<UseQueryOptions<ContactGroupDetailResponse, ApiError, ContactGroupDetailResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<ContactGroupDetailResponse, ApiError, ContactGroupDetailResponse, QueryKey>({
    queryKey: contactGroupQueryKeys.detail(contactGroupId),
    queryFn: ({ signal }) => getContactGroupDetail(contactGroupId, { signal }),
    enabled: !!contactGroupId,
    ...options,
  });
}

/**
 * Hook to fetch a list of contact groups.
 */
export function useListContactGroupsQuery(
  params?: ListContactGroupsParams,
  options?: Omit<UseQueryOptions<ListContactGroupsResponse, ApiError, ListContactGroupsResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<ListContactGroupsResponse, ApiError, ListContactGroupsResponse, QueryKey>({
    queryKey: contactGroupQueryKeys.list(params),
    queryFn: ({ signal }) => listContactGroups(params, { signal }),
    ...options,
  });
}

/**
 * Hook to validate the address of a specific contact group.
 */
export function useValidateContactGroupAddressQuery(
  contactGroupId: string | number,
  options?: Omit<UseQueryOptions<ValidateAddressResponse, ApiError, ValidateAddressResponse, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<ValidateAddressResponse, ApiError, ValidateAddressResponse, QueryKey>({
    queryKey: contactGroupQueryKeys.validationStatus(contactGroupId),
    queryFn: ({ signal }) => validateContactGroupAddress(contactGroupId, { signal }),
    ...options,
  });
}

/**
 * Example of using select with useGetContactGroupDetailQuery to get only the address.
 */
export function useGetContactGroupAddress(
  contactGroupId: string | number,
  options?: Omit<UseQueryOptions<ContactGroupDetailResponse, ApiError, ContactGroup['address'] | undefined, QueryKey>, 'queryKey' | 'queryFn' | 'enabled' | 'select'>
) {
    return useQuery<ContactGroupDetailResponse, ApiError, ContactGroup['address'] | undefined, QueryKey>({
        queryKey: contactGroupQueryKeys.detail(contactGroupId),
        queryFn: ({ signal }) => getContactGroupDetail(contactGroupId, { signal }),
        enabled: !!contactGroupId,
        select: (response) => response.data?.address,
        ...options,
    });
}

/**
 * Hook for creating a new contact group.
 */
export function useCreateContactGroupMutation(
  options?: Omit<UseMutationOptions<{ data: ContactGroup }, ApiError, CreateContactGroupPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactGroup,
    onSuccess: () => {
      // After creating, invalidate the list to refetch with the new address
      queryClient.invalidateQueries({ queryKey: contactGroupQueryKeys.lists() });
    },
    ...options,
  });
}

/**
 * Hook for updating an existing contact group.
 */
export function useUpdateContactGroupMutation(
  options?: Omit<UseMutationOptions<{ data: ContactGroup }, ApiError, { id: number; payload: UpdateContactGroupPayload }>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => updateContactGroup(id, payload),
    onSuccess: (data, variables) => {
      // After updating, invalidate both the list and the specific detail query
      queryClient.invalidateQueries({ queryKey: contactGroupQueryKeys.lists() });
      queryClient.invalidateQueries({ queryKey: contactGroupQueryKeys.detail(variables.id) });
    },
    ...options,
  });
}

/**
 * Hook for deleting a contact group.
 */
export function useDeleteContactGroupMutation(
  options?: Omit<UseMutationOptions<{ message: string }, ApiError, number>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContactGroup,
    onSuccess: () => {
      // After deleting, invalidate the list to remove the address from the UI
      queryClient.invalidateQueries({ queryKey: contactGroupQueryKeys.lists() });
    },
    ...options,
  });
}