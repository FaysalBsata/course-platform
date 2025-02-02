import { Role } from '@/drizzle/schema';

export function canCreateCourses({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canDeleteCourses({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canUpdateCourses({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
