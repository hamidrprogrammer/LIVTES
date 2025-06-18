// new project/features/coupons/stores/couponStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AppliedCouponDetails } from '@/core/types/api/coupon';

interface CouponState {
  appliedCoupon: AppliedCouponDetails | null;
  setAppliedCoupon: (coupon: AppliedCouponDetails | null) => void;
  clearAppliedCoupon: () => void;
}

export const useCouponStore = create<CouponState>()(
  devtools(
    persist(
      (set) => ({
        appliedCoupon: null,
        setAppliedCoupon: (coupon) => set({ appliedCoupon: coupon }),
        clearAppliedCoupon: () => set({ appliedCoupon: null }),
      }),
      {
        name: 'coupon-storage', // unique name
      }
    )
  )
);