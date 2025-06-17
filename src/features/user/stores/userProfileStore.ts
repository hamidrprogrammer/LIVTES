import { create } from 'zustand';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import {
  getUserProfile as fetchUserProfileService,
  updateUserProfile as updateUserProfileService,
  getUserDocuments as fetchUserDocumentsService,
  getUnassignedLegals as fetchUnassignedLegalsService,
  changeInvoiceContactGroup as changeInvoiceContactGroupService,
} from '../services/userApi';
import type {
  UserProfile,
  UpdateUserProfilePayload,
  UserDocument,
  GetUserDocumentsParams,
  LegalDocument,
  ChangeInvoiceContactGroupPayload,
  ChangeInvoiceContactGroupResponse,
  UserProfileResponse,
  UserDocumentsResponse,
  UnassignedLegalsResponse,
} from '../../../core/types/api/user';
import type { ApiError } from '../../../core/httpClient/httpClient';
import type { PaginationLinks, Meta } from '../../../core/types/api/common';

// Helper to create a unique key for document list parameters
const createDocumentListKey = (params?: GetUserDocumentsParams): string => {
  if (!params) return 'default';
  return JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    acc[key as keyof GetUserDocumentsParams] = params[key as keyof GetUserDocumentsParams];
    return acc;
  }, {} as GetUserDocumentsParams));
};

interface UserProfileDataState {
  data: UserProfile | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface UserDocumentsDataState {
  data: UserDocument[] | null;
  links: PaginationLinks | null;
  meta: Meta | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface UnassignedLegalsDataState {
  data: LegalDocument[] | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface UserProfileStoreState {
  profile: UserProfileDataState;
  documents: Record<string, UserDocumentsDataState>;
  unassignedLegals: UnassignedLegalsDataState;
  isUpdatingProfile: boolean;
  updateProfileError: ApiError | null;
  isChangingInvoiceContactGroup: boolean;
  changeInvoiceContactGroupError: ApiError | null;
}

interface UserProfileStoreActions {
  fetchUserProfile: () => Promise<void>;
  updateUserProfile: (payload: UpdateUserProfilePayload) => Promise<boolean>;
  fetchUserDocuments: (params?: GetUserDocumentsParams) => Promise<void>;
  fetchUnassignedLegals: () => Promise<void>;
  changeInvoiceContactGroup: (payload: ChangeInvoiceContactGroupPayload) => Promise<boolean>;
  clearUserProfile: () => void;
  clearUserDocuments: (params?: GetUserDocumentsParams) => void;
}

const initialProfileState: UserProfileDataState = {
  data: null,
  isLoading: false,
  error: null,
};

const initialUnassignedLegalsState: UnassignedLegalsDataState = {
  data: null,
  isLoading: false,
  error: null,
};

const initialState: UserProfileStoreState = {
  profile: { ...initialProfileState },
  documents: {},
  unassignedLegals: { ...initialUnassignedLegalsState },
  isUpdatingProfile: false,
  updateProfileError: null,
  isChangingInvoiceContactGroup: false,
  changeInvoiceContactGroupError: null,
};

export const useUserProfileStore = create<UserProfileStoreState & UserProfileStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      fetchUserProfile: async () => {
        set(state => {
          state.profile.isLoading = true;
          state.profile.error = null;
        });
        try {
          const response: UserProfileResponse = await fetchUserProfileService();
          set(state => {
            state.profile.data = response.data;
            state.profile.isLoading = false;
          });
        } catch (error) {
          set(state => {
            state.profile.isLoading = false;
            state.profile.error = error as ApiError;
          });
          console.error('Failed to fetch user profile:', error);
        }
      },

      updateUserProfile: async (payload) => {
        set(state => {
          state.isUpdatingProfile = true;
          state.updateProfileError = null;
        });
        try {
          const response: UserProfileResponse = await updateUserProfileService(payload);
          set(state => {
            state.profile.data = response.data;
            state.isUpdatingProfile = false;
          });
          return true;
        } catch (error) {
          set(state => {
            state.isUpdatingProfile = false;
            state.updateProfileError = error as ApiError;
          });
          console.error('Failed to update user profile:', error);
          return false;
        }
      },

      fetchUserDocuments: async (params) => {
        const listKey = createDocumentListKey(params);
        set(state => {
          state.documents[listKey] = {
            ...(state.documents[listKey] || { data: null, links: null, meta: null, error: null }),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response: UserDocumentsResponse = await fetchUserDocumentsService(params);
          set(state => {
            state.documents[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.documents[listKey] = {
               ...(state.documents[listKey] || { data: null, links: null, meta: null }),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch user documents for params ${listKey}:`, error);
        }
      },

      fetchUnassignedLegals: async () => {
        set(state => {
          state.unassignedLegals.isLoading = true;
          state.unassignedLegals.error = null;
        });
        try {
          const response: UnassignedLegalsResponse = await fetchUnassignedLegalsService();
          set(state => {
            state.unassignedLegals.data = response.data;
            state.unassignedLegals.isLoading = false;
          });
        } catch (error) {
          set(state => {
            state.unassignedLegals.isLoading = false;
            state.unassignedLegals.error = error as ApiError;
          });
          console.error('Failed to fetch unassigned legals:', error);
        }
      },

      changeInvoiceContactGroup: async (payload) => {
        set(state => {
          state.isChangingInvoiceContactGroup = true;
          state.changeInvoiceContactGroupError = null;
        });
        try {
          await changeInvoiceContactGroupService(payload);
          set(state => {
            state.isChangingInvoiceContactGroup = false;
          });
          await get().fetchUserProfile();
          return true;
        } catch (error) {
          set(state => {
            state.isChangingInvoiceContactGroup = false;
            state.changeInvoiceContactGroupError = error as ApiError;
          });
          console.error('Failed to change invoice contact group:', error);
          return false;
        }
      },
      
      clearUserProfile: () => {
        set(state => {
            state.profile = { ...initialProfileState };
        });
      },

      clearUserDocuments: (params) => {
        const listKey = createDocumentListKey(params);
        set(state => {
            delete state.documents[listKey];
        });
      },
    }),
    'UserProfileStore'
  )
);

export const selectUserProfile = (state: UserProfileStoreState) => state.profile;
export const selectUserDocuments = (params?: GetUserDocumentsParams) => (state: UserProfileStoreState): UserDocumentsDataState | undefined =>
  state.documents[createDocumentListKey(params)];
export const selectUnassignedLegals = (state: UserProfileStoreState) => state.unassignedLegals;

export const selectIsUpdatingProfile = (state: UserProfileStoreState) => state.isUpdatingProfile;
export const selectUpdateProfileError = (state: UserProfileStoreState) => state.updateProfileError;

export const selectIsChangingInvoiceContactGroup = (state: UserProfileStoreState) => state.isChangingInvoiceContactGroup;
export const selectChangeInvoiceContactGroupError = (state: UserProfileStoreState) => state.changeInvoiceContactGroupError;

export const selectUserFullName = (state: UserProfileStoreState): string | null => {
    const profileData = state.profile.data;
    if (!profileData) return null;
    if (profileData.person?.full_name) return profileData.person.full_name;
    if (profileData.person?.first_name && profileData.person?.last_name) {
        return `${profileData.person.first_name} ${profileData.person.last_name}`;
    }
    return profileData.username || null;
};
