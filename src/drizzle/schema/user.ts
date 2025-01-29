import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createdAt, id, updatedAt } from '../schemaHelpers';
import { UserCourseAccessTable } from './userCourseAccess';
import { relations } from 'drizzle-orm';
export const roleOptions = ['admin', 'user'] as const;
export type Role = (typeof roleOptions)[number];
export const userRoleEnum = pgEnum('user_role', roleOptions);
export const UserTable = pgTable('users', {
  id,
  clerkUserId: text().notNull().unique(),
  email: text().notNull(),
  name: text().notNull(),
  role: userRoleEnum().notNull().default('user'),
  imageUrl: text(),
  deletedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
});

export const UserRelationships = relations(UserTable, ({ many }) => ({
  userCourseAccesses: many(UserCourseAccessTable),
}));
