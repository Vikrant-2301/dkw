'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Whenever route changes, scroll smoothly to the very top of the window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};
