'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiMapPin, 
  FiPhone,
  FiClock,
  FiExternalLink
} from 'react-icons/fi';

export default function ProcessPage() {
  return (
    <div className="space-y-14 pb-16">
      {/* Header Hero */}
      <section className="relative bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            100% Honest Craftsmanship • Zero Chemicals
          </div>
          <h1 className="text-2xl sm:text-5xl font-black font-serif leading-tight">
            Our Traditional Process: Kolhu, Kacchi Ghani &amp; Bilona Ghee
          </h1>
          <p className="text-lg sm:text-2xl text-amber-300 font-bold font-sans">
            आँखों के सामने निकलता, भरोसे से बिकता है
          </p>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Delhi Kolhu Wale, our doors are open every single day. See how we turn 100% Sortex cleaned Rajasthan mustard and earthen clay-pot curd into pure nutrition.
          </p>
        </div>
      </section>

      {/* Part 1: Lakdi Ka Kolhu & Kacchi Ghani */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40">
            <Image
              src="/images/process_live.jpg"
              alt="Lakdi Ki Ghani and Kacchi Ghani extraction in Delhi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-amber-200 text-xs font-bold">
                A1/10 Krishna Nagar, Delhi • Live extraction in front of customers
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Two Authentic Extraction Methods
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Wood-Pressed (लकड़ी का कोल्हू) &amp; Cold-Pressed (कच्ची घानी)
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We exclusively use <strong>100% Sortex Cleaned Native Rajasthan Mustard (राजस्थान की सॉर्टेक्स सरसों)</strong>. The electronic Sortex process inspects every individual seed to remove dust, stones, and damaged seeds, ensuring the oil is clear, pure, and free from bitter aftertaste.
            </p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Customers can choose between our <strong>Traditional Wooden Kolhu (Lakdi Ki Ghani)</strong> or <strong>Standard Cold-Pressed (Kacchi Ghani)</strong> methods. Both extract oil slowly without artificial heat, chemical solvents (hexane), or acid bleaching.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                <FiCheckCircle className="text-green-700 w-5 h-5 mb-1" />
                <span className="block text-sm font-bold text-stone-900">Rajasthan Sortex Seeds</span>
                <span className="text-xs text-stone-600">राजस्थान की 100% सॉर्टेक्स सरसों</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                <FiCheckCircle className="text-green-700 w-5 h-5 mb-1" />
                <span className="block text-sm font-bold text-stone-900">100% Pure &amp; Honest</span>
                <span className="text-xs text-stone-600">Zero chemicals, zero palm oil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Clay Pot Bilona Ghee (Cow & Buffalo) */}
      <section className="py-14 bg-stone-900 text-white" id="bilona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                Traditional Vedic Bilona Craft
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                Desi Cow &amp; Murrah Buffalo Bilona Ghee (देसी बिलोना घी)
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Industrial ghee brands make ghee by separating raw cream with centrifugal machines and boiling it. That is NOT authentic Bilona Ghee.
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                At Delhi Kolhu Wale, we culture milk into whole curd inside terracotta clay pots (मिट्टी की हांड़ी). The curd is churned bi-directionally with a wooden mathani to separate fresh cultured makkhan (butter), which is then gently simmered into golden, aromatic Danedar ghee.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-amber-200 font-semibold">
                ✓ Available in both Pure Desi Cow Ghee and Pure Murrah Buffalo Ghee.
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40">
              <Image
                src="/images/bilona_tradition.jpg"
                alt="Traditional clay-pot Bilona Ghee hand-churning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Visit Store in Krishna Nagar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-3xl p-8 sm:p-12 border border-amber-200 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-100 px-3 py-1 rounded-full">
            Open Store • Complete Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
            Visit Our Store &amp; Watch Your Oil Extracted Live
          </h2>
          <p className="text-stone-700 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            You are warmly invited to bring your family, inspect the raw seeds, watch the wooden Kolhu rotate, and take home fresh oil bottled in front of your eyes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <FiMapPin className="text-red-700 w-5 h-5 mb-2" />
              <h4 className="font-bold text-sm text-stone-900">Store Address (दुकान का पता)</h4>
              <p className="text-xs text-stone-600 mt-1">A1/10, Main Road Krishna Nagar, Near Chhachi Building, Delhi - 110051</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <FiClock className="text-red-700 w-5 h-5 mb-2" />
              <h4 className="font-bold text-sm text-stone-900">Timings (समय)</h4>
              <p className="text-xs text-stone-600 mt-1">Open Daily: 9:00 AM – 11:00 PM (Monday to Sunday)</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <FiPhone className="text-red-700 w-5 h-5 mb-2" />
              <h4 className="font-bold text-sm text-stone-900">Helpline &amp; WhatsApp</h4>
              <p className="text-xs text-stone-600 mt-1">+91 9599207645 (Same-day free delivery &lt;15km)</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://maps.app.goo.gl/DvzUPscBrJFgtv1Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <span>View Google Maps Location</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider shadow"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
