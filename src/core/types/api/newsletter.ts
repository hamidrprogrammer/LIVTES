import { z } from 'zod';
import type {
  SubscribeNewsletterPayloadSchema,
  SubscribeNewsletterResponseDataSchema,
  SubscribeNewsletterResponseSchema,
} from '../../zodSchemas/newsletterSchema';

export type SubscribeNewsletterPayload = z.infer<typeof SubscribeNewsletterPayloadSchema>;
export type SubscribeNewsletterResponseData = z.infer<typeof SubscribeNewsletterResponseDataSchema>;
export type SubscribeNewsletterResponse = z.infer<typeof SubscribeNewsletterResponseSchema>;
