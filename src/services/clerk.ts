import { Role } from '@/drizzle/schema';
import { clerkClient } from '@clerk/nextjs/server';
const client = await clerkClient();
export async function syncClerkUserMetadata(user: {
  id: string;
  clerkUserId: string;
  role: Role;
}) {
  return client.users.updateUserMetadata(user.clerkUserId, {
    publicMetadata: {
      dbId: user.id,
      role: user.role,
    },
  });
}
