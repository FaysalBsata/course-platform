import { Role } from '@/drizzle/schema';

export function canCreateCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canDeleteCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canUpdateCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
