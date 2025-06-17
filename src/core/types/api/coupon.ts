import { z } from 'zod';
import type {
  CouponSchema,
  CouponListResponseSchema,
  GetCouponListParamsSchema,
  SetCouponPayloadSchema,
  SetCouponSuccessResponseSchema,
  AppliedCouponDetailsSchema,
  SetCouponErrorResponseSchema,
} from '../../zodSchemas/couponSchema';

// Coupon Types
export type Coupon = z.infer<typeof CouponSchema>;
export type CouponListResponse = z.infer<typeof CouponListResponseSchema>;
export type GetCouponListParams = z.infer<typeof GetCouponListParamsSchema>;

// Set Coupon Types
export type SetCouponPayload = z.infer<typeof SetCouponPayloadSchema>;
export type AppliedCouponDetails = z.infer<typeof AppliedCouponDetailsSchema>;
export type SetCouponSuccessResponse = z.infer<typeof SetCouponSuccessResponseSchema>;
export type SetCouponErrorResponse = z.infer<typeof SetCouponErrorResponseSchema>;
