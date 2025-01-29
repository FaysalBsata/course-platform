import { pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { createdAt, id, updatedAt } from '../schemaHelpers';
import { CourseTable } from './course';
import { relations } from 'drizzle-orm';
export const courseSectionStatuses = ['public', 'private'] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const CourseSectionStatusEnum = pgEnum(
  'course_section_status',
  courseSectionStatuses
);
export const CourseSectionTable = pgTable('course_sections', {
  id,
  name: text().notNull(),
  status: CourseSectionStatusEnum().notNull().default('private'),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: 'cascade' }),
  createdAt,
  updatedAt,
});

export const CourseSectionRelationships = relations(
  CourseSectionTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
  })
);
