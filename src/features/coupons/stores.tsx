import { create } from 'zustand';
import { applyStore } from '../../../core/middle/zustand';
import {
  getCoupons as getCoupons,
  setCoupons as setCoupons,
} from '../services/api';
import type {
  CouponInfo,
  CouponListInfoResponse,
 GetCouponListInfoParams,
 SetCouponInfoPayload,
  SetCouponSuccess,
  AppliedCouponInfo,
} from '../../../core/types/api/coupon';
import type { ApiError } from '../../../core/httpClient/httpClient';
import type { PaginationLinks, Meta } from '../../../core/types/api/common';

const createListKey = (params?: GetCouponListInfoParams): string => {
  if (!params || Object.keys(params).length === 0) return 'default';
  return JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    ...acc,
    [key as keyof typeof params]: params[key as keyof typeof params],
  }, {}));
};

interface CouponListState {
  data: CouponInfo[] | null;
  links: PaginationLinks | null;
  meta: Meta | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface AppliedCouponState {
  details: AppliedCouponInfo | null;
  message: string | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface CouponStoreState {
  couponLists: Record<string, CouponListState>;
  appliedCoupon: AppliedCouponState;
}

interface CouponStoreActions {
  fetchCouponList: (params?: GetCouponListInfoParams) => Promise<void>;
  applyCoupon: (payload: SetCouponInfoPayload) => Promise<boolean>;
  clearAppliedCoupon: () => void;
  clearCouponList: (params?: GetCouponListInfoParams) => void;
  clearAllCouponData: () => void;
}

const initialListState: CouponListState = {
    data: null,
    links: null,
    meta: null,
    isLoading: false,
    error: null,
};

const initialAppliedCouponState: AppliedCouponState = {
    details: null,
    message: null,
    isLoading: false,
    error: null,
};

const initialState: CouponStoreState = {
  couponLists: {},
  appliedCoupon: { ...initialAppliedCouponState },
};

export const useCouponStore = create<CouponStoreState & CouponStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      fetchCouponList: async (params) => {
        const listKey = createListKey(params);
        set(state => {
          state.couponLists[listKey] = {
            ...(state.couponLists[listKey] || initialListState),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response: CouponListInfoResponse = await getCouponsService(params);
          set(state => {
            state.couponLists[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.couponLists[listKey] = {
              ...(state.couponLists[listKey] || initialListState),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch coupon list for params ${listKey}:`, error);
        }
      },

      applyCoupon: async (payload) => {
        set(state => {
          state.appliedCoupon.isLoading = true;
          state.appliedCoupon.error = null;
          state.appliedCoupon.message = null;
        });
        try {
          const response: SetCouponSuccess = await setCouponsService(payload);
          set(state => {
            state.appliedCoupon.details = response.data.coupon || null;
            state.appliedCoupon.message = response.data.message;
            state.appliedCoupon.isLoading = false;
            state.appliedCoupon.error = null;
          });
          return true;
        } catch (error) {
          const apiError = error as ApiError;
          set(state => {
            state.appliedCoupon.isLoading = false;
            state.appliedCoupon.error = apiError;
            state.appliedCoupon.message = apiError.message;
            state.appliedCoupon.details = null;
          });
          console.error('Failed to apply coupon:', apiError);
          return false;
        }
      },

      clearAppliedCoupon: () => {
        set(state => {
          state.appliedCoupon = { ...initialAppliedCouponState };
        });
      },
      
      clearCouponList: (params) => {
        const listKey = createListKey(params);
        set(state => {
            delete state.couponLists[listKey];
        });
      },

      clearAllCouponData: () => {
        set(initialState);
      }
    }),
    'CouponStore'
  )
);

export const selectCouponList = (params?: GetCouponListInfoParams) => (state: CouponStoreState): CouponListState | undefined =>
  state.couponLists[createListKey(params)];

export const selectAppliedCouponState = (state: CouponStoreState): AppliedCouponState => state.appliedCoupon;
export const selectAppliedCouponDetails = (state: CouponStoreState): AppliedCouponInfo | null => state.appliedCoupon.details;
export const selectIsApplyingCoupon = (state: CouponStoreState): boolean => state.appliedCoupon.isLoading;
export const selectApplyCouponError = (state: CouponStoreState): ApiError | null => state.appliedCoupon.error;
export const selectApplyCouponMessage = (state: CouponStoreState): string | null => state.appliedCoupon.message;

if (typeof window !== 'undefined') {
  window.addEventListener('auth:logout', () => {
    console.log('CouponStore: auth:logout event received, clearing all coupon data.');
    useCouponStore.getState().clearAllCouponData();
  });
}
