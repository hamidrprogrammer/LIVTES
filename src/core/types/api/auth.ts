import { z } from 'zod';
import type {
  LoginPayloadSchema,
  LoginResponseSchema,
} from '../../zodSchemas/authSchema';
import type { UserProfile } from './user'; // Re-exporting for convenience if needed

export type LoginPayload = z.infer<typeof LoginPayloadSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

// If you need to explicitly type the user part of the LoginResponse separately
// export type AuthUser = z.infer<typeof LoginResponseSchema>['user'];
// However, UserProfile from user.ts should suffice.
export type { UserProfile };
