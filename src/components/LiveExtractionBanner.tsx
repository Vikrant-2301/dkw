'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiEye, FiCalendar, FiCheckCircle, FiClock, FiMapPin, FiPhone, FiVideo, FiX } from 'react-icons/fi';

export const LiveExtractionBanner: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    visitType: 'in-person',
    oilType: 'Yellow Mustard Oil'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="live-extraction">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-red-950 text-white shadow-2xl border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/30 border border-red-500/50 text-amber-300 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Delhi NCR Exclusive Open Transparency
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                आँखों के सामने निकलता, <br />
                <span className="text-amber-400 font-serif italic">भरोसे से बिकता है</span>
              </h2>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed pt-2">
                Don&apos;t just take our word for purity. Walk straight into our Delhi Kolhu workshop, select your raw seeds from gunny bags, watch our wooden pestle slowly press the oil at 14 RPM, and get it bottled warm in front of your eyes.
              </p>
            </div>

            {/* 3 Pillars of Live Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <FiEye className="text-amber-400 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-white">100% Visible</h4>
                <p className="text-xs text-stone-400 mt-1">Zero hidden blending rooms or secret factory pipelines.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <FiClock className="text-amber-400 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-white">Fresh Every Day</h4>
                <p className="text-xs text-stone-400 mt-1">Pressing runs daily 8:00 AM – 8:00 PM in Delhi.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xs p-4 rounded-xl border border-white/10">
                <FiMapPin className="text-amber-400 w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm text-white">Delhi NCR Stores</h4>
                <p className="text-xs text-stone-400 mt-1">Same-day home delivery or walk-in pickup.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setModalOpen(true);
                  setBooked(false);
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-black text-sm transition-all shadow-lg hover:shadow-amber-400/20 hover:scale-102"
              >
                <FiCalendar className="w-4 h-4" />
                <span>Book Live Extraction Visit</span>
              </button>

              <a
                href="tel:9599207645"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <FiPhone className="text-amber-400" />
                <span>Call Us: 9599207645</span>
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 group">
              <Image
                src="/images/process_live.jpg"
                alt="Lakdi Ki Ghani Wood-Press Kolhu live extraction in action"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live Unit Snapshot
                  </span>
                  <p className="text-white font-bold text-sm mt-2">
                    Traditional Wood Mortar &amp; Pestle (Lakdi Ka Kolhu) in Delhi
                  </p>
                  <p className="text-xs text-amber-200">Natural slow pressing without artificial heat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment / Live Demo Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white text-stone-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
            <div className="p-6 bg-gradient-to-r from-red-800 to-stone-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Schedule Live Extraction Demo</h3>
                <p className="text-xs text-amber-200 mt-1">
                  Delhi Kolhu Wale • Watch your oil freshly pressed
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {booked ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900">Visit Scheduled!</h4>
                <p className="text-sm text-stone-600">
                  Thank you, <strong>{formData.name || 'Friend'}</strong>. Our Delhi workshop manager will reach you at <strong>{formData.phone || '+91 9599207645'}</strong> to confirm your slot and share Google Maps location!
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9599207645"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Visit Mode
                    </label>
                    <select
                      value={formData.visitType}
                      onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="in-person">In-Person (Delhi Store)</option>
                      <option value="video-call">Live Video Call Demo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Which Oil/Ghee would you like to see pressed?
                  </label>
                  <select
                    value={formData.oilType}
                    onChange={(e) => setFormData({ ...formData, oilType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Yellow Mustard Oil">Yellow Mustard Oil (पीली सरसों)</option>
                    <option value="Black Mustard Oil">Black Mustard Oil (काली सरसों)</option>
                    <option value="A2 Bilona Ghee">Vedic A2 Gir Cow Bilona Ghee</option>
                    <option value="Badam Rogan">Badam Rogan Sweet Almond</option>
                    <option value="White Sesame Oil">White Sesame Oil (तिल का तेल)</option>
                    <option value="Coconut Oil">Virgin Coconut Oil (नारियल तेल)</option>
                  </select>
                </div>

                <p className="text-[11px] text-stone-500 italic">
                  * Live demo is 100% free of charge. You only pay if you decide to buy freshly extracted oil bottled in front of you.
                </p>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm shadow-md transition-colors"
                >
                  Confirm Live Demonstration Slot
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
