import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "DKW - Delhi Kolhu Wale | 100% Pure Wood-Pressed Oils & Vedic Bilona Ghee",
  description: "आँखों के सामने निकलता भरोसे से बिकता है - Delhi Kolhu Wale (DKW). 100% Pure Lakdi Ki Ghani Cold-Pressed Mustard Oils, Authentic Vedic A2 Gir Cow Bilona Desi Ghee, Pure Badam Rogan & Seed Oils. Visit our Delhi store or order online.",
  keywords: [
    "Delhi Kolhu Wale",
    "DKW",
    "Lakdi ki Ghani",
    "Cold Pressed Mustard Oil",
    "Yellow Mustard Oil",
    "Black Mustard Oil",
    "Vedic Bilona Ghee",
    "A2 Gir Cow Ghee",
    "Badam Rogan",
    "Pure Wood Pressed Oil Delhi",
    "आँखों के सामने निकलता भरोसे से बिकता है"
  ],
  authors: [{ name: "Delhi Kolhu Wale" }],
  openGraph: {
    title: "DKW - Delhi Kolhu Wale | 100% Pure Oil & Desi Ghee",
    description: "Extracted live before your eyes. 100% Pure Lakdi Ki Ghani Oils and Vedic Bilona Desi Ghee.",
    url: "https://www.dkw.com",
    siteName: "Delhi Kolhu Wale",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth scroll-pt-28">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans antialiased selection:bg-amber-300 selection:text-stone-900">
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
