import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { canAccessAdminPages } from '@/permissions/general';
import { getCurrentUser } from '@/services/clerk';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

export default function AdminConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <div className="flex items-center gap-2 mr-auto">
          <Link className="text-lg hover:underline" href="/">
            Bsata Schools
          </Link>
          <Badge>Admin</Badge>
        </div>

        <Link
          className="hover:bg-accent/10 flex items-center px-2"
          href="/admin/courses"
        >
          Courses
        </Link>
        <Link
          className="hover:bg-accent/10 flex items-center px-2"
          href="/admin/products"
        >
          Products
        </Link>
        <Link
          className="hover:bg-accent/10 flex items-center px-2"
          href="/admin/sales"
        >
          Sales
        </Link>
        <div className="size-8 self-center">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: { width: '100%', height: '100%' },
              },
            }}
          />
        </div>
      </nav>
    </header>
  );
}
async function AdminLink() {
  const user = await getCurrentUser();
  if (!canAccessAdminPages(user)) return null;
  return (
    <Link className="hover:bg-accent/10 flex items-center px-2" href="/admin">
      Admin
    </Link>
  );
}
