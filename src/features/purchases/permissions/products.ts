import { Role } from '@/drizzle/schema';

export function canRefundPurchases({ role }: { role: Role | undefined }) {
  return role === 'admin';
}
