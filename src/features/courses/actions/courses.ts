'use server';

import { z } from 'zod';
import { coursesSchema } from '../schemas/courses';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/services/clerk';
import {
  canCreateCourses,
  canDeleteCourses,
  canUpdateCourses,
} from '../permissions/courses';
import {
  insertCourse,
  deleteCourse as deleteCourseDB,
  updateCourse as updateCourseDB,
} from '../db/courses';

export async function createCourse(unsafeData: z.infer<typeof coursesSchema>) {
  const { success, data } = coursesSchema.safeParse(unsafeData);
  if (!success || !canCreateCourses(await getCurrentUser())) {
    return { error: true, message: 'There was an error creating the course' };
  }
  const course = await insertCourse(data);
  redirect(`/admin/courses/${course.id}/edit`);
}

export async function updateCourse(
  id: string,
  unsafeData: z.infer<typeof coursesSchema>
) {
  const { success, data } = coursesSchema.safeParse(unsafeData);
  if (!success || !canUpdateCourses(await getCurrentUser())) {
    return { error: true, message: 'There was an error updating the course' };
  }
  await updateCourseDB(id, data);
  return { error: false, message: 'Successfully updated your course' };
}

export async function deleteCourse(id: string) {
  if (!canDeleteCourses(await getCurrentUser())) {
    return { error: true, message: 'There was an error deleting your course' };
  }
  await deleteCourseDB(id);
  return { error: false, message: 'Your course was deleted successfully!' };
}
