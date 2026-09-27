'use client';

import React from 'react';
import { FiCheck, FiX, FiInfo } from 'react-icons/fi';
import Link from 'next/link';

export const ProcessComparison: React.FC = () => {
  const comparisonData = [
    {
      parameter: 'Extraction Machine',
      dkw: 'Lakdi Ki Ghani (Wood Mortar & Pestle at 14 RPM)',
      refined: 'Industrial Steel Screw Expellers at 10,000+ RPM',
      benefit: 'Wood absorbs friction heat, preventing oxidation',
    },
    {
      parameter: 'Operating Temperature',
      dkw: 'Below 38°C (Strict Cold Extraction)',
      refined: 'Above 200°C – 250°C Extreme Heat',
      benefit: 'Preserves delicate cold vitamins & plant sterols',
    },
    {
      parameter: 'Solvent & Chemicals',
      dkw: '0% Chemicals. Pure natural seed pressing only',
      refined: 'Petroleum-based Hexane solvent extraction',
      benefit: 'Zero chemical toxins entering your family bloodstream',
    },
    {
      parameter: 'Bleaching & Refining',
      dkw: 'Unrefined. Naturally filtered through organic cotton cloth',
      refined: 'Treated with Caustic Soda, Acid wash & Bleaching Earth',
      benefit: 'Authentic golden clarity with natural fiber micro-nutrients',
    },
    {
      parameter: 'Trans-Fat Level',
      dkw: '0g Trans-Fat (Cardio-friendly natural lipids)',
      refined: 'Formed during industrial hydrogenated refining',
      benefit: 'Supports arterial health and prevents LDL bad cholesterol',
    },
    {
      parameter: 'Aroma & Taste',
      dkw: 'Rich, natural aroma of fresh Rajasthani seeds',
      refined: 'Chemically deodorized into bland, flavorless oil',
      benefit: 'Re-discovers the authentic taste of Grandma’s cooking',
    },
    {
      parameter: 'Production Transparency',
      dkw: 'आँखों के सामने निकलता (Watch live at our Delhi unit)',
      refined: 'Manufactured behind closed multinational factory walls',
      benefit: '100% visible honesty and unshakeable customer trust',
    },
  ];

  return (
    <section className="py-10 sm:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-black tracking-widest text-red-700 uppercase bg-red-100 px-3.5 py-1.5 rounded-full border border-red-200">
          Know The Truth About What You Eat
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 mt-3 font-serif">
          DKW Wooden Kolhu vs Commercial Refined Oil
        </h2>
        <p className="text-stone-600 mt-2 text-xs sm:text-base leading-relaxed">
          Refined oils look transparent because they are chemically bleached with acid and solvents. Discover why switching to authentic Lakdi Ki Ghani is the single greatest health upgrade for your household.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-5 px-6 bg-stone-50 font-bold text-stone-700 text-xs sm:text-sm uppercase tracking-wider w-1/4">
                  Feature / Parameter
                </th>
                <th className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 font-black text-red-800 text-sm sm:text-base uppercase tracking-wider w-3/8 border-x-2 border-amber-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-600" />
                    <span>DKW Wooden Kolhu (Lakdi Ghani)</span>
                  </div>
                </th>
                <th className="py-5 px-6 bg-stone-100 font-bold text-stone-500 text-xs sm:text-sm uppercase tracking-wider w-3/8">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span>Commercial Refined &amp; Packet Oils</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr
                  key={row.parameter}
                  className={`transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                  } hover:bg-amber-50/40`}
                >
                  <td className="py-4 px-6 font-bold text-stone-800">
                    <div className="flex flex-col">
                      <span>{row.parameter}</span>
                      <span className="text-[11px] text-amber-800/80 font-normal mt-0.5">
                        {row.benefit}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-6 bg-amber-50/40 font-semibold text-stone-900 border-x-2 border-amber-300">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.dkw}</span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiX className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="line-through text-stone-400 decoration-red-400/80">
                        {row.refined}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Comparison View (Fully Responsive!) */}
        <div className="md:hidden divide-y divide-stone-200">
          {comparisonData.map((row) => (
            <div key={row.parameter} className="p-4 space-y-3 bg-white">
              <div>
                <span className="text-xs font-black text-stone-900 uppercase tracking-wide">
                  {row.parameter}
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5">{row.benefit}</p>
              </div>

              {/* DKW Pill */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-950">
                  <FiCheck className="text-green-700 stroke-[3]" />
                  <span>DKW Wooden Kolhu:</span>
                </div>
                <p className="text-xs font-semibold text-stone-800 pl-4">{row.dkw}</p>
              </div>

              {/* Commercial Refined Pill */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500">
                  <FiX className="text-red-600 stroke-[3]" />
                  <span>Commercial Refined:</span>
                </div>
                <p className="text-xs text-stone-400 line-through pl-4">{row.refined}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="p-5 sm:p-6 bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <FiInfo className="w-6 h-6 text-amber-400 flex-shrink-0 hidden sm:inline" />
            <p className="text-xs sm:text-sm text-stone-300">
              Every drop from Delhi Kolhu Wale is backed by our <strong>100% Purity or 100% Refund</strong> guarantee.
            </p>
          </div>
          <Link
            href="/process"
            className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
          >
            Read Extraction Guide
          </Link>
        </div>
      </div>
    </section>
  );
};
