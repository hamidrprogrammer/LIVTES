import { z } from "zod";
import { 
    SubscribeNewsletterPayloadSchema, 
    SubscribeNewsletterResponseSchema,
    UnsubscribeNewsletterPayloadSchema 
} from "../../zodSchemas/newsletterSchema";

export type SubscribeNewsletterPayload = z.infer<typeof SubscribeNewsletterPayloadSchema>;
export type SubscribeNewsletterResponse = z.infer<typeof SubscribeNewsletterResponseSchema>;
export type UnsubscribeNewsletterPayload = z.infer<typeof UnsubscribeNewsletterPayloadSchema>;