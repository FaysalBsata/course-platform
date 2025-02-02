import { Role } from '@/drizzle/schema';

export function canAccessAdminPages({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
