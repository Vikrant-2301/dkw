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
  FiHeart 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-stone-950 text-stone-300 pt-16 pb-10 border-t-4 border-amber-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Feature Banner Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-stone-800">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">आँखों के सामने निकलता</h4>
                <p className="text-xs text-stone-400 mt-0.5">Live extraction before your eyes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">100% Purity Guarantee</h4>
                <p className="text-xs text-stone-400 mt-0.5">NABL tested &amp; certified oils</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0">
                <FiTruck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Free Delivery on ₹799</h4>
                <p className="text-xs text-stone-400 mt-0.5">Same-day dispatch in Delhi NCR</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <FiHeart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Vedic 5-Step Bilona</h4>
                <p className="text-xs text-stone-400 mt-0.5">Clay pot curd churned ghee</p>
              </div>
            </div>
          </div>

          {/* Main Footer Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
            {/* Brand Intro */}
            <div className="lg:col-span-2 space-y-4">
              <DKWLogo size="lg" theme="light" />
              <p className="text-sm text-stone-400 leading-relaxed pr-6">
                Delhi Kolhu Wale is dedicated to bringing honest, unadulterated cold pressed oils and Vedic Bilona A2 Desi Ghee straight from the wooden churner to your dining table. Our mantra has always been simple:
                <strong className="text-amber-300 block mt-1">
                  &ldquo;आँखों के सामने निकलता भरोसे से बिकता है&rdquo;
                </strong>
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700 font-mono">
                  FSSAI Lic: 13322008000456
                </span>
                <span className="px-3 py-1 rounded bg-green-950 text-green-300 border border-green-800 font-bold">
                  NABL Tested
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Our Pure Range
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/product/yellow-mustard-oil" className="hover:text-amber-400 transition-colors">
                    Yellow Mustard Oil (पीली सरसों)
                  </Link>
                </li>
                <li>
                  <Link href="/product/black-mustard-oil" className="hover:text-amber-400 transition-colors">
                    Black Mustard Oil (काली सरसों)
                  </Link>
                </li>
                <li>
                  <Link href="/product/vedic-a2-bilona-gir-cow-ghee" className="hover:text-amber-400 transition-colors">
                    Vedic A2 Gir Cow Bilona Ghee
                  </Link>
                </li>
                <li>
                  <Link href="/product/pure-buffalo-bilona-desi-ghee" className="hover:text-amber-400 transition-colors">
                    Murrah Buffalo Bilona Ghee
                  </Link>
                </li>
                <li>
                  <Link href="/product/pure-badam-rogan-almond-oil" className="hover:text-amber-400 transition-colors">
                    Pure Badam Rogan (Almond)
                  </Link>
                </li>
                <li>
                  <Link href="/product/wood-pressed-coconut-oil" className="hover:text-amber-400 transition-colors">
                    Virgin Coconut Oil
                  </Link>
                </li>
                <li>
                  <Link href="/product/wood-pressed-white-sesame-oil" className="hover:text-amber-400 transition-colors">
                    White Sesame Oil (तिल तेल)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Transparency & Process */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Purity &amp; Process
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/process" className="hover:text-amber-400 transition-colors">
                    The Lakdi Ka Kolhu Method
                  </Link>
                </li>
                <li>
                  <Link href="/process#bilona" className="hover:text-amber-400 transition-colors">
                    5-Step Vedic Bilona Churning
                  </Link>
                </li>
                <li>
                  <Link href="/lab-reports" className="hover:text-amber-400 transition-colors">
                    Download NABL Lab Reports
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    About Delhi Kolhu Wale
                  </Link>
                </li>
                <li>
                  <Link href="/contact#schedule-visit" className="hover:text-amber-400 transition-colors">
                    Book Live Extraction Visit
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-amber-400 transition-colors">
                    Special Kitchen Combos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Visit & Contact */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Visit Delhi Mill
              </h4>
              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="text-amber-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    DKW Experience Mill, Plot 14, Main Road, Delhi NCR - 110085, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiPhone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <a href="tel:9971207645" className="hover:text-amber-300 font-bold">
                    +91 9971207645
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiMail className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>care@dkw.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiClock className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>Open Daily: 8:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} Delhi Kolhu Wale (DKW). All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-amber-400/80 font-serif">
                आँखों के सामने निकलता भरोसे से बिकता है
              </span>
              <span>•</span>
              <a href="https://www.dkw.com" className="hover:underline">www.dkw.com</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919971207645?text=Hello%20Delhi%20Kolhu%20Wale,%20I%20want%20to%20order%20pure%20cold-pressed%20oil%20and%20bilona%20ghee."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp with Delhi Kolhu Wale"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Order via WhatsApp</span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-300 animate-ping absolute -top-1 -right-1" />
      </a>
    </>
  );
};
