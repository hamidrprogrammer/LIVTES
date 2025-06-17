// File: ge/new project/core/zodSchemas/storeCreditSchema.ts

import { z } from 'zod';

export const storeCreditTransactionSchema = z.object({
  id: z.string(),
  type: z.enum(['refund', 'purchase', 'adjustment', 'bonus']),
  amount: z.number(),
  description: z.string(),
  createdAt: z.string().datetime(),
});

export const getStoreCreditResponseSchema = z.object({
  balance: z.number(),
  currency: z.string(),
  transactions: z.array(storeCreditTransactionSchema),
  total: z.number(),
  totalPages: z.number(),
  currentPage: z.number(),
});