'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiShield, 
  FiArrowRight,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';

export default function LabReportsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white p-8 sm:p-12 shadow-xl border border-stone-800 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3.5 py-1.5 rounded-full border border-amber-800">
          FSSAI प्रमाणित व 100% शुद्धता
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-serif mt-3 text-white">
          शुद्धता और भरोसे का वादा
        </h1>
        <p className="text-xl text-amber-300 font-bold font-sans mt-2">
          आँखों के सामने निकलता, भरोसे से बिकता है
        </p>
        <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mt-3">
          दिल्ली कोल्हू वाले पर प्रत्येक तेल राजस्थान की 100% सॉर्टेक्स साफ सरसों व पारंपरिक बीजों से आपकी आँखों के सामने निकलता है। शून्य मिलावट, शून्य केमिकल।
        </p>
      </div>

      {/* Trust Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
            <FiCheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">सॉर्टेक्स साफ सरसों</h4>
            <p className="text-xs text-stone-500 mt-0.5">राजस्थान के अव्वल बीज</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center flex-shrink-0">
            <FiCheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">आँखों के सामने पिराई</h4>
            <p className="text-xs text-stone-500 mt-0.5">दुकान पर लाइव देखें</p>
          </div>
        </div>
      </div>

      {/* Visit Store Callout */}
      <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-300 max-w-4xl mx-auto text-center space-y-3">
        <h3 className="text-xl font-bold text-stone-900">
          असली शुद्धता देखने के लिए हमारी दुकान पर पधारें
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          A1/10, मेन रोड कृष्णा नगर, चाची बिल्डिंग के पास, दिल्ली - 110051 (सुबह 9am से रात 11pm)
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/shop"
            className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold"
          >
            उत्पाद देखें (Shop)
          </Link>
          <a
            href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold"
          >
            Google Maps लोकेशन
          </a>
        </div>
      </div>
    </div>
  );
}
