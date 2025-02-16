import { CourseSectionTable, Role } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export function canCreateCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canDeleteCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export function canUpdateCourseSections({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
export const wherePublicCourseSections = eq(
  CourseSectionTable.status,
  'public'
);
