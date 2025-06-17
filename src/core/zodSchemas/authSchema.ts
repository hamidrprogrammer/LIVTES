import { z } from 'zod';
import { UserProfileSchema } from './userSchema'; // Reusing the detailed user profile schema

export const LoginPayloadSchema = z.object({
  username: z.string().min(1, "Username is required."), // Can be further refined, e.g., .email() if it's always an email
  password: z.string().min(1, "Password is required."),
  // otp_code: z.string().optional(), // If 2FA is part of the same request
});

export const LoginResponseSchema = z.object({
  data: z.object({
    token: z.string(),
    user: UserProfileSchema
  })
});