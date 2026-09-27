'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FiFileText, 
  FiCheckCircle, 
  FiShield, 
  FiDownload, 
  FiExternalLink, 
  FiArrowRight,
  FiPrinter 
} from 'react-icons/fi';

export default function LabReportsPage() {
  const [selectedBatch, setSelectedBatch] = useState('batch-current');

  const testParameters = [
    { parameter: 'Argemone Oil Test (TLC Method)', standard: 'Absent / Negative', result: 'NEGATIVE', status: 'Passed' },
    { parameter: 'Mineral Oil / Liquid Paraffin', standard: 'Negative (Holdt Test)', result: 'ABSENT', status: 'Passed' },
    { parameter: 'Free Fatty Acids (% as Oleic)', standard: 'Max 1.50%', result: '0.38%', status: 'Passed' },
    { parameter: 'Peroxide Value (meq O2/kg)', standard: 'Max 10.0', result: '1.42', status: 'Passed' },
    { parameter: 'Moisture and Insoluble Impurities', standard: 'Max 0.25%', result: '0.04%', status: 'Passed' },
    { parameter: 'Heavy Metals (Lead, Arsenic, Cadmium)', standard: 'Below Permissible Limits', result: 'NOT DETECTED', status: 'Passed' },
    { parameter: 'Hexane / Chemical Solvent Residue', standard: '0.00 ppm (Zero)', result: 'ZERO (0.00 ppm)', status: 'Passed' },
    { parameter: 'A2 Beta-Casein Protein (For Ghee)', standard: 'A2 Allele Verified', result: '100% A2 GIR COW', status: 'Passed' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white p-8 sm:p-12 shadow-xl border border-stone-800 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-950 px-3.5 py-1.5 rounded-full border border-green-800">
          NABL Accredited &amp; FSSAI Certified
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-serif mt-2">
          Laboratory Purity Reports
        </h1>
        <p className="text-xl text-amber-300 font-bold font-sans mt-2">
          आँखों के सामने निकलता भरोसे से बिकता है
        </p>
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
          Every batch of oil pressed and ghee churned at Delhi Kolhu Wale undergoes rigorous independent third-party laboratory analysis.
        </p>
      </div>

      {/* Trust Badges Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0">
            <FiShield className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">FSSAI Certified</h4>
            <p className="text-xs text-stone-500 font-mono mt-0.5">Lic No. 13322008000456</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
            <FiFileText className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">NABL Lab Tested</h4>
            <p className="text-xs text-stone-500 mt-0.5">ISO/IEC 17025 accredited labs</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
            <FiCheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">0% Chemical Residue</h4>
            <p className="text-xs text-stone-500 mt-0.5">Zero argemone, zero mineral oil</p>
          </div>
        </div>
      </div>

      {/* Main Certificate / Report Sheet */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden">
        {/* Report Header */}
        <div className="p-6 sm:p-8 bg-stone-50 border-b border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded">
              Official Quality Assurance Certificate
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1 font-serif">
              Master Chemical &amp; Fatty Acid Purity Certificate
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Sample: Delhi Kolhu Wale Virgin Wood-Pressed Yellow Mustard Oil &amp; Vedic A2 Ghee
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <FiPrinter />
              <span>Print Certificate</span>
            </button>
          </div>
        </div>

        {/* Parameters Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 uppercase tracking-wider text-[11px]">
                <th className="py-4 px-6 font-bold">Tested Parameter</th>
                <th className="py-4 px-6 font-bold">FSSAI Permissible Standard</th>
                <th className="py-4 px-6 font-bold text-stone-900">DKW Batch Value</th>
                <th className="py-4 px-6 font-bold text-right">Evaluation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {testParameters.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-stone-900">{row.parameter}</td>
                  <td className="py-4 px-6 text-stone-600">{row.standard}</td>
                  <td className="py-4 px-6 font-extrabold text-stone-950 font-mono">{row.result}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-green-100 text-green-800">
                      <FiCheckCircle className="w-3.5 h-3.5" /> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-amber-50/70 border-t border-amber-200/80 text-xs text-stone-700 space-y-2">
          <p>
            <strong>Note on Purity Guarantee:</strong> Any customer who proves adulteration (including presence of argemone, cheap palm oil, or mineral oil) in any sealed bottle of Delhi Kolhu Wale through an accredited NABL laboratory is entitled to a <strong>100% refund plus reimbursement of lab testing fees</strong>.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
        >
          <span>Order Certified Pure Products</span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
