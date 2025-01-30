import { Role } from '@/drizzle/schema';
export {};
declare global {
  interface CustomJwtSessionClaims {
    dbId?: string;
    role?: Role;
  }
  interface UserPublicMetadata {
    dbId?: string;
    role?: Role;
  }
}
