import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/server-actions/getCurrentUser';

export const instant = false;

export default async function ProtectedLayout({ children }: LayoutProps<'/'>) {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/');
  }

  return <>{children}</>;
}
