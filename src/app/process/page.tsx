'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiEye, 
  FiShield, 
  FiClock, 
  FiThermometer, 
  FiMapPin, 
  FiPhone 
} from 'react-icons/fi';
import { ProcessComparison } from '@/components/ProcessComparison';

export default function ProcessPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Hero */}
      <section className="relative bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Zero Chemicals • Zero High-Heat
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif">
            The Ancient Art of Kolhu &amp; Vedic Bilona
          </h1>
          <p className="text-xl sm:text-2xl text-amber-300 font-bold font-sans">
            आँखों के सामने निकलता भरोसे से बिकता है
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At Delhi Kolhu Wale, we practice open-door craftsmanship. See how slow wood-pressing and clay-pot churning retain living prana, aroma, and essential fatty acids.
          </p>
        </div>
      </section>

      {/* Part 1: The Wooden Kolhu (Lakdi Ki Ghani) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40">
            <Image
              src="/images/process_live.jpg"
              alt="Lakdi Ki Ghani Machine crushing yellow mustard seeds"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-amber-200 text-xs font-bold">
                Operating live in Delhi NCR • 14 RPM slow cold extraction
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Lakdi Ka Kolhu (Cold-Pressed)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
              Why Wood Makes All The Difference
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              When seeds are crushed in modern industrial metal expellers, intense friction creates temperatures up to <strong>160°C to 200°C</strong>. This destroys fragile antioxidants, oxidizes delicate Omega-3 chains, and alters molecular structures.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              In our traditional <strong>Lakdi Ki Ghani (Wooden Kolhu)</strong>, the mortar and pestle are carved out of aged Vagai (Albizia Lebbeck) and Neem wood. Wood naturally absorbs heat, keeping the extraction temperature strictly <strong>under 38°C</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <FiThermometer className="text-red-700 w-5 h-5 mb-1" />
                <span className="block text-xl font-extrabold text-stone-900">&lt; 38°C</span>
                <span className="text-xs text-stone-600">Preserves natural Vitamin E</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <FiClock className="text-red-700 w-5 h-5 mb-1" />
                <span className="block text-xl font-extrabold text-stone-900">14 RPM</span>
                <span className="text-xs text-stone-600">Slow artisanal rotation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: The 5-Step Vedic Bilona Churning */}
      <section className="py-16 bg-stone-900 text-white" id="bilona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                Ancient Vedic 5-Samskara Method
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                How We Make True A2 Desi Cow Bilona Ghee
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Most commercial ghee brands do not make ghee from curd; they separate raw cream with centrifugal machines and boil it. That is NOT Bilona ghee.
              </p>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                According to the Charaka Samhita, authentic Vedic Ghee requires 5 sacred transformations:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { step: '1. Dugdham (A2 Gir Cow Milk)', desc: 'Grass-fed desi Gir cows milk, boiled slowly on earthen wood stoves.' },
                  { step: '2. Dadhi (Probiotic Curd)', desc: 'Cultured overnight into rich whole curd in traditional terracotta pots.' },
                  { step: '3. Manthana (Mathani Churning)', desc: 'Churned clockwise and anti-clockwise with wooden bilona to separate makkhan.' },
                  { step: '4. Makkhana (Pure Butter)', desc: 'Fresh cultured butter separated naturally without centrifuge machines.' },
                  { step: '5. Ghritham (Golden Simmer)', desc: 'Simmered over mild fire until it clarifies into golden, granular (danedar) nectar.' }
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-amber-300 font-bold text-xs sm:text-sm">{s.step}</h4>
                      <p className="text-stone-400 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40 order-1 lg:order-2">
              <Image
                src="/images/bilona_tradition.jpg"
                alt="Traditional Indian woman churning A2 curd with wooden bilona in clay matka"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-amber-200 text-xs font-bold">
                  Clay pot bi-directional churning • 30 liters milk yields only 1 liter ghee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Visit Our Delhi Unit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="visit-unit">
        <div className="bg-amber-50 rounded-3xl border-2 border-amber-300 p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-black tracking-widest text-red-700 uppercase bg-amber-200/80 px-3.5 py-1.5 rounded-full">
              Open Door Policy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
              Come Visit Us In Delhi &amp; Watch Your Oil Extracted Live
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              We have nothing to hide. You can come with your family, touch the raw yellow mustard seeds, watch the wooden pestle slowly rotate, and get your glass bottles filled right in front of you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                <FiMapPin className="text-red-700 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-stone-900">Delhi Workshop</h4>
                <p className="text-xs text-stone-500 mt-1">Plot 14, Main Road, Delhi NCR - 110085</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                <FiClock className="text-red-700 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-stone-900">Daily Timing</h4>
                <p className="text-xs text-stone-500 mt-1">Open all 7 days: 8:00 AM – 8:00 PM</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs">
                <FiPhone className="text-red-700 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-stone-900">Direct Helpline</h4>
                <p className="text-xs text-stone-500 mt-1">+91 9971207645 (Call / WhatsApp)</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
              >
                Shop Our Fresh Batches
              </Link>
              <a
                href="tel:9971207645"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm border border-stone-300"
              >
                Call for Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <ProcessComparison />
    </div>
  );
}
