'use client';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ScrollToTop } from '@/components/ScrollToTop';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGrandOpening = pathname === '/grand-opening';

  if (isGrandOpening) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <CartDrawer />
      <Footer />
    </>
  );
}
