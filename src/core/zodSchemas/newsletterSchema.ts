import { z } from 'zod';

export const SubscribeNewsletterPayloadSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export const SubscribeNewsletterResponseSchema = z.object({
  message: z.string(),
});

export const UnsubscribeNewsletterPayloadSchema = z.object({
  email: z.string().email(),
});