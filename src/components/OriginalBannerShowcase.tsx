'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiGlobe, FiCheckCircle } from 'react-icons/fi';

export const OriginalBannerShowcase: React.FC = () => {
  const products = [
    { label: 'YELLOW MUSTARD', href: '/product/yellow-mustard-oil' },
    { label: 'BLACK MUSTARD', href: '/product/black-mustard-oil' },
    { label: 'COCONUT OIL', href: '/product/wood-pressed-coconut-oil' },
    { label: 'BADAM ROGAN', href: '/product/pure-badam-rogan-almond-oil' },
    { label: 'WHITE SESAME OIL', href: '/product/wood-pressed-white-sesame-oil' },
    { label: 'GROUNDNUT OIL', href: '/product/wood-pressed-groundnut-oil' },
  ];

  return (
    <section className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container replicating the authentic brand identity banner */}
      <div className="relative rounded-3xl overflow-hidden bg-[#244265] text-white shadow-2xl border-2 sm:border-4 border-amber-400/40 p-5 sm:p-8 lg:p-10">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Header Row with Helpline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/15 pb-4 mb-6 relative z-10 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-amber-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span>Official Brand Emblem &amp; Certified Store</span>
          </div>

          <a
            href="tel:9971207645"
            className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full transition-all shadow-md group"
          >
            <FiPhone className="group-hover:rotate-12 transition-transform" />
            <span>M.: 9971207645</span>
          </a>
        </div>

        {/* Main Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Column: Brand Emblem Badge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative w-44 sm:w-56 lg:w-64 aspect-square drop-shadow-2xl transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo.png"
                alt="DKW Delhi Kolhu Wale Official Emblem"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
                className="object-contain"
                priority
              />
            </div>
            <a
              href="https://www.dkw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-amber-200 hover:text-white font-mono font-bold text-xs sm:text-sm tracking-widest flex items-center gap-1.5"
            >
              <FiGlobe className="text-amber-400" />
              <span>www.dkw.com</span>
            </a>
          </div>

          {/* Center Column: Slogan, Subtext & Pill Buttons */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-4">
            {/* Main Western Slab Serif Title */}
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase font-serif text-white drop-shadow-lg">
                DELHI KOLHU WALE
              </h2>
              <span className="text-amber-300 font-bold text-xs sm:text-sm">TM</span>
            </div>

            {/* Core Hindi Slogan */}
            <div className="bg-amber-400/10 border-l-4 border-amber-400 px-3.5 py-2 rounded-r-xl w-full">
              <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-amber-300 font-sans tracking-wide">
                आँखों के सामने निकलता भरोसे से बिकता है
              </p>
            </div>

            {/* Sub-text in Hindi */}
            <p className="text-xs sm:text-base lg:text-lg text-amber-100/90 font-medium leading-relaxed max-w-2xl">
              आपकी आँखों के सामने निकले सभी प्रकार के शुद्ध तेल व देसी गाय और भैंस का शुद्ध बिलोना देसी घी हमारे यहाँ मिलता है।
            </p>

            {/* 100% Pure Pill Badge */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white text-stone-900 font-black tracking-widest text-[11px] sm:text-xs uppercase shadow-lg border-2 border-amber-300">
                <FiCheckCircle className="text-red-600 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                100% PURE OIL &amp; DESI GHEE
              </span>
            </div>

            {/* Product Pills (Clickable tags directly from the banner!) */}
            <div className="w-full pt-2">
              <p className="text-[11px] sm:text-xs font-semibold text-amber-200/80 mb-2 uppercase tracking-wider">
                Click any product below to order direct from Kolhu:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {products.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-2.5 py-2 rounded-xl bg-white/95 hover:bg-amber-400 text-stone-900 hover:text-stone-950 font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow text-center flex items-center justify-center hover:scale-[1.02] active:scale-95"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Heritage Showcase Row */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {/* Card 1: Traditional Bilona Churning */}
          <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
              <Image
                src="/images/bilona_tradition.jpg"
                alt="Traditional Bilona Churning in clay pot"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-amber-300 font-bold text-xs sm:text-sm">Vedic Terracotta Bilona Ghee</h4>
              <p className="text-[11px] sm:text-xs text-white/80 line-clamp-2 mt-0.5">
                Hand-churned in clay matkas from cultured curd, retaining natural aroma and pure nutrition.
              </p>
            </div>
          </div>

          {/* Card 2: Live Wood-Press Kolhu Ghani */}
          <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
              <Image
                src="/images/process_live.jpg"
                alt="Lakdi Ka Kolhu Mustard Oil Machine"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-amber-300 font-bold text-xs sm:text-sm">Lakdi Ki Ghani (Wooden Kolhu)</h4>
              <p className="text-[11px] sm:text-xs text-white/80 line-clamp-2 mt-0.5">
                Slow crushed without artificial heat. Zero chemicals, 100% natural pure oil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
