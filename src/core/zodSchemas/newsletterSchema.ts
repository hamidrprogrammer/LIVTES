import { z } from 'zod';

// Schema for POST /api/subscribe request body
export const SubscribeNewsletterPayloadSchema = z.object({
  email: z.string().email("Invalid email address."),
  // Optionally, include other fields if the API supports them, e.g., name, consent flags
  // first_name: z.string().optional(),
  // terms_accepted: z.boolean().refine(val => val === true, "You must accept the terms."),
});

// Schema for the nested "data" object in the response
export const SubscribeNewsletterResponseDataSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  is_active: z.boolean().nullable(), // is_active was null in the Postman example for a 201 response
  // created_at: z.string().datetime().optional(), // If API returns it
  // updated_at: z.string().datetime().optional(), // If API returns it
});

// Schema for the full response of POST /api/subscribe
export const SubscribeNewsletterResponseSchema = z.object({
  data: SubscribeNewsletterResponseDataSchema,
});
