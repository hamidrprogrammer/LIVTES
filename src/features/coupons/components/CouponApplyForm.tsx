import React, { useState, useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import {
  useCouponStore,
  selectAppliedCouponState,
  selectIsApplyingCoupon,
} from '../stores/couponStore';
import type { SetCouponInfoPayload } from '../../../core/types/api/coupon';

interface CouponApplyFormProps {
  invoiceContactGroupId?: number;
  onCouponApplied?: (success: boolean, message: string | null, details?: any) => void;
}

export const CouponApplyForm: React.FC<CouponApplyFormProps> = ({ invoiceContactGroupId, onCouponApplied }) => {
  const [couponCode, setCouponCode] = useState('');

  const { applyCoupon, clearAppliedCoupon } = useCouponStore(state => ({
    applyCoupon: state.applyCoupon,
    clearAppliedCoupon: state.clearAppliedCoupon,
  }), shallow);

  const isLoading = useCouponStore(selectIsApplyingCoupon);
  const appliedCouponState = useCouponStore(selectAppliedCouponState, shallow);

  useEffect(() => {
    return () => {
    };
  }, [clearAppliedCoupon]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      alert('Please enter a coupon code.');
      return;
    }
    clearAppliedCoupon();

    const payload: SetCouponInfoPayload = {
      code: couponCode.trim(),
      invoice_contact_group_id: invoiceContactGroupId,
    };
    const success = await applyCoupon(payload);
    
    if (onCouponApplied) {
        onCouponApplied(success, useCouponStore.getState().appliedCoupon.message, useCouponStore.getState().appliedCoupon.details);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Apply Coupon</h3>
      <div>
        <label htmlFor="couponCode">Coupon Code:</label>
        <input
          id="couponCode"
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Applying...' : 'Apply Coupon'}
      </button>

      {appliedCouponState.message && (
        <p style={{ color: appliedCouponState.error ? 'red' : 'green' }}>
          {appliedCouponState.message}
        </p>
      )}
      {appliedCouponState.details && (
        <div>
          <p>Discount Applied: {appliedCouponState.details.description || appliedCouponState.details.code}</p>
        </div>
      )}
      {appliedCouponState.error && appliedCouponState.error.errors && typeof appliedCouponState.error.errors === 'object' && (
        <div style={{color: 'red'}}>
            Detailed Errors:
            <ul>
                {Object.entries(appliedCouponState.error.errors).map(([field, messages]) => 
                    Array.isArray(messages) && messages.map((msg, idx) => <li key={`${field}-${idx}`}>{field}: {msg}</li>)
                )}
            </ul>
        </div>
      )}
    </form>
  );
};
