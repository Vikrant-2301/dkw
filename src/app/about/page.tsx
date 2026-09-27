'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DKWLogo } from '@/components/DKWLogo';
import { 
  FiCheckCircle, 
  FiShield, 
  FiHeart, 
  FiAward, 
  FiPhone, 
  FiArrowRight, 
  FiMapPin 
} from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Delhi Kolhu Wale (DKW) Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif">
            Rooted in Tradition, Bound by Purity
          </h1>
          <p className="text-xl sm:text-2xl text-amber-300 font-bold font-sans">
            आँखों के सामने निकलता भरोसे से बिकता है
          </p>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We started with a single wooden Kolhu and an unrelenting refusal to accept adulterated, chemically bleached factory oils in our family food.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black tracking-widest text-red-700 uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
              Reviving India’s Lost Heritage of Honest Food
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Decades ago, every Indian neighborhood had a local <em>Kolhu</em> (oil mill). You could hear the slow, rhythmic turning of the wooden pestle, breathe in the fresh aroma of crushed mustard and sesame, and fill a stainless steel dabba with warm, frothy oil.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              When mega-industrial brands introduced refined packet oils, they replaced real food with petroleum-derived hexane solvent extraction, caustic soda bleaching, and synthetic deodorizing. Natural aroma vanished. Chronic heart ailments, gut inflammation, and acidity skyrocketed.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-semibold text-stone-800">
              <strong>Delhi Kolhu Wale</strong> was founded to restore that ancient trust. We brought the traditional Lakdi Ka Kolhu and the earthen pot Bilona mathani back to Delhi.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300">
              <p className="text-xs sm:text-sm text-stone-800 italic">
                &ldquo;If an oil brand cannot let you watch their extraction live, they have something to hide. We open our doors wide every single morning.&rdquo;
              </p>
              <span className="block text-xs font-bold text-red-700 mt-2">
                — Founders, Delhi Kolhu Wale
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40">
            <Image
              src="/images/hero.jpg"
              alt="Delhi Kolhu Wale Heritage Workshop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The 4 Purity Pillars */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white mt-2">
              Our Four Sacred Purity Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-white">100% Wood-Pressed</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Carved Vagai and Neem wood mortar &amp; pestle. Friction heat is strictly capped under 38°C to protect delicate seed enzymes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-400/20 text-red-400 flex items-center justify-center">
                <FiHeart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-white">Vedic Clay-Pot Bilona</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                A2 Gir Cow milk cultured into whole curd and hand-churned with bi-directional wooden mathani. Rich in healing butyric acid.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-green-400/20 text-green-400 flex items-center justify-center">
                <FiShield className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-white">Zero Chemicals</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                No hexane, no caustic soda, no bleaching earth, no argemone. Just pure, single-origin sun-dried seeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-white">Transparent Retail</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                आँखों के सामने निकलता भरोसे से बिकता है. Every customer is welcome to inspect, smell, and watch extraction live in Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
          Experience True Purity in Your Own Kitchen
        </h2>
        <p className="text-stone-600 text-sm sm:text-base">
          Order our freshly pressed Yellow Mustard Oil, Black Mustard Oil, or Vedic A2 Bilona Ghee with fast delivery across India.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="px-8 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
          >
            Explore Pure Products
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-sm"
          >
            Visit Our Delhi Store
          </Link>
        </div>
      </section>
    </div>
  );
}
