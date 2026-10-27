import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grand Opening — Delhi Kolhu Wale | 1 November 2026',
  description:
    'Delhi Kolhu Wale (DKW) ka naya outlet 1 November 2026 ko Krishna Nagar, Delhi mein khul raha hai. 100% shudh tel aur desi ghee. Aapko sadhar aamantran hai.',
};

export default function GrandOpeningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
