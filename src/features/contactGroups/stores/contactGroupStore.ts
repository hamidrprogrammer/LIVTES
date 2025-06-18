/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import {
  getContactGroupDetail as getContactGroupDetailService,
  validateContactGroupAddress as validateContactGroupAddressService,
  listContactGroups as listContactGroupsService, // NEW import
} from '../services/contactGroupApi';
import type {
  ContactGroup,
  ContactGroupDetailResponse,
  ValidateAddressResponse,
  ListContactGroupsParams, // NEW import
  ListContactGroupsResponse, // NEW import
} from '../../../core/types/api/contactGroup';
import type { ApiError } from '../../../core/httpClient/httpClient';
import { createListKey } from '@/core/utils/createListKey';
import { Meta, PaginationLinks } from '@/core/types/api/settings';


interface ContactGroupDetailState {
  data: ContactGroup | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface AddressValidationState {
  message: string | null;
  isValid: boolean | null;
  isLoading: boolean;
  error: ApiError | null;
}

// NEW: State for a paginated list of contact groups
interface ContactGroupListState {
  data: ContactGroup[] | null;
  links: PaginationLinks | null;
  meta: Meta | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface ContactGroupStoreState {
  contactGroupDetails: Record<string | number, ContactGroupDetailState>;
  addressValidationStatus: Record<string | number, AddressValidationState>;
  contactGroupLists: Record<string, ContactGroupListState>; // NEW state slice
}

interface ContactGroupStoreActions {
  fetchContactGroupDetail: (contactGroupId: string | number) => Promise<void>;
  validateAddress: (contactGroupId: string | number) => Promise<boolean>;
  fetchContactGroupList: (params?: ListContactGroupsParams) => Promise<void>; // NEW action
  clearContactGroupDetail: (contactGroupId: string | number) => void;
  clearAddressValidationStatus: (contactGroupId: string | number) => void;
  clearContactGroupList: (params?: ListContactGroupsParams) => void; // NEW action
  clearAllContactGroupData: () => void;
}

const initialDetailState: ContactGroupDetailState = {
  data: null,
  isLoading: false,
  error: null,
};

const initialValidationState: AddressValidationState = {
  message: null,
  isValid: null,
  isLoading: false,
  error: null,
};

// NEW: Initial state for a list
const initialListState: ContactGroupListState = {
    data: null,
    links: null,
    meta: null,
    isLoading: false,
    error: null,
};


const initialState: ContactGroupStoreState = {
  contactGroupDetails: {},
  addressValidationStatus: {},
  contactGroupLists: {}, // NEW
};

export const useContactGroupStore = create<ContactGroupStoreState & ContactGroupStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      // ... existing actions (fetchContactGroupDetail, validateAddress)

      /**
       * NEW: Fetches a list of contact groups.
       */
      fetchContactGroupList: async (params) => {
        const listKey = createListKey('contact-groups', params);
        set(state => {
          state.contactGroupLists[listKey] = {
            ...(state.contactGroupLists[listKey] || initialListState),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response: ListContactGroupsResponse = await listContactGroupsService(params);
          set(state => {
            state.contactGroupLists[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.contactGroupLists[listKey] = {
              ...(state.contactGroupLists[listKey] || initialListState),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch contact group list for params ${listKey}:`, error);
        }
      },
      
      // ... existing clear actions
      clearContactGroupList: (params) => {
        const listKey = createListKey('contact-groups', params);
        set(state => {
          delete state.contactGroupLists[listKey];
        });
      },

      clearAllContactGroupData: () => {
        set(initialState);
      },
      fetchContactGroupDetail: (contactGroupId) => {
        throw new Error('Function not implemented.');
      },
      validateAddress: (contactGroupId) => {
        throw new Error('Function not implemented.');
      },
      clearContactGroupDetail: (contactGroupId) => {
        throw new Error('Function not implemented.');
      },
      clearAddressValidationStatus: (contactGroupId) => {
        throw new Error('Function not implemented.');
      }
    }),
    'ContactGroupStore'
  )
);

// Selectors
export const selectContactGroupDetail = (contactGroupId: string | number) => (state: ContactGroupStoreState): ContactGroupDetailState | undefined =>
  state.contactGroupDetails[contactGroupId];

export const selectAddressValidationStatus = (contactGroupId: string | number) => (state: ContactGroupStoreState): AddressValidationState | undefined =>
  state.addressValidationStatus[contactGroupId];

// NEW: Selector for contact group list
export const selectContactGroupList = (params?: ListContactGroupsParams) => (state: ContactGroupStoreState): ContactGroupListState | undefined =>
  state.contactGroupLists[createListKey('contact-groups', params)];

if (typeof window !== 'undefined') {
  window.addEventListener('auth:logout', () => {
     
    useContactGroupStore.getState().clearAllContactGroupData();
  });
}