'use client';

import React from 'react';
import Link from 'next/link';
import { DKWLogo } from './DKWLogo';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiShield, 
  FiCheckCircle, 
  FiTruck, 
  FiHeart,
  FiExternalLink
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-stone-950 text-stone-300 pt-12 pb-8 border-t border-stone-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Trust Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pb-8 sm:pb-10 border-b border-stone-800">
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm truncate">Live Extraction</h4>
                <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">आँखों के सामने पिराई</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0">
                <FiShield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm truncate">Rajasthan Sortex</h4>
                <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">100% साफ छाँटी सरसों</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0">
                <FiTruck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm truncate">Free Delivery</h4>
                <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">Same-day up to 15km</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <FiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm truncate">Vedic Bilona Ghee</h4>
                <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">मिट्टी की हांड़ी का बिलोना घी</p>
              </div>
            </div>
          </div>

          {/* Main Footer Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-10">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <DKWLogo size="md" theme="light" />
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
                Authentic Lakdi Ki Ghani and Cold-Pressed oils crafted live in Delhi, accompanied by hand-churned Cow and Buffalo Vedic Bilona Ghee.
              </p>
              
              <div className="pt-1">
                <p className="text-xs text-amber-300 font-bold font-sans">
                  &ldquo;आँखों के सामने निकलता, भरोसे से बिकता है&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-stone-900 text-stone-300 border border-stone-800 font-mono">
                  FSSAI: 13322008000456
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-900 text-amber-400 border border-stone-800 font-medium">
                  Rajasthan Sortex Mustard
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-900 text-green-400 border border-stone-800 font-medium">
                  15km Free Delivery
                </span>
              </div>
            </div>

            {/* Quick Links: Pure Oils */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 text-stone-200">
                Pure Oils (शुद्ध तेल)
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/product/sarson-kacchi-ghani" className="hover:text-amber-300 transition-colors">
                    Mustard Kacchi Ghani Oil (कच्ची घानी)
                  </Link>
                </li>
                <li>
                  <Link href="/product/peeli-sarson-oil" className="hover:text-amber-300 transition-colors">
                    Peeli Sarson Oil (Yellow Mustard)
                  </Link>
                </li>
                <li>
                  <Link href="/product/safed-sarson-oil" className="hover:text-amber-300 transition-colors">
                    Safed Sarson Oil (White Mustard)
                  </Link>
                </li>
                <li>
                  <Link href="/product/mungfali-tel" className="hover:text-amber-300 transition-colors">
                    Pure Groundnut Oil (मूंगफली तेल)
                  </Link>
                </li>
                <li>
                  <Link href="/product/nariyal-tel" className="hover:text-amber-300 transition-colors">
                    Pure Coconut Oil (नारियल तेल)
                  </Link>
                </li>
                <li>
                  <Link href="/product/badam-tel" className="hover:text-amber-300 transition-colors">
                    Pure Badam Rogan (बादाम तेल)
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=oil" className="hover:text-amber-300 transition-colors text-amber-400 font-semibold pt-1 inline-block">
                    View All 15 Oils &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links: Ghee & About */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 text-stone-200">
                Bilona Ghee &amp; Info
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/product/cow-bilona-ghee" className="hover:text-amber-300 transition-colors">
                    Desi Cow Bilona Ghee
                  </Link>
                </li>
                <li>
                  <Link href="/product/buffalo-bilona-ghee" className="hover:text-amber-300 transition-colors">
                    Murrah Buffalo Bilona Ghee
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-amber-300 transition-colors">
                    All Products (सभी उत्पाद)
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-amber-300 transition-colors">
                    Our Process (हमारा तरीका)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-300 transition-colors">
                    About DKW (हमारे बारे में)
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-300 transition-colors">
                    Contact &amp; Store Visit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Store Address & Contact */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 text-stone-200">
                Visit Our Store (दुकान का पता)
              </h4>
              <ul className="space-y-3 text-xs text-stone-400">
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="text-amber-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-200 font-medium">
                      A1/10, Main Road Krishna Nagar, Near Chhachi Building, Delhi - 110051
                    </span>
                    <a
                      href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1 mt-1 font-semibold"
                    >
                      <span>View on Google Maps</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiClock className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>Open Daily: 9:00 AM – 11:00 PM</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiPhone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <a href="tel:9971207645" className="hover:text-amber-300 font-semibold text-white">
                    +91 9971207645
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiMail className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <a href="mailto:delhikolhuwale@gmail.com" className="hover:text-amber-300 text-stone-300">
                    delhikolhuwale@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiTruck className="text-green-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-green-300 font-medium">
                    Same-Day Free Home Delivery (&lt;15 km)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Clean Bottom Copyright Bar */}
          <div className="pt-6 mt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} Delhi Kolhu Wale. A1/10 Krishna Nagar, Delhi-110051.
            </p>
            <div className="flex items-center gap-4 text-stone-400">
              <a href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                Google Maps
              </a>
              <span>•</span>
              <a href="tel:9971207645" className="hover:text-stone-300 transition-colors">
                Call: 9971207645
              </a>
              <span>•</span>
              <a href="https://wa.me/919971207645" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919971207645?text=Hello%20Delhi%20Kolhu%20Wale,%20I%20want%20to%20order%20pure%20cold-pressed%20oil%20and%20bilona%20ghee."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm p-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp with Delhi Kolhu Wale"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="hidden sm:inline">Order via WhatsApp</span>
      </a>
    </>
  );
};
