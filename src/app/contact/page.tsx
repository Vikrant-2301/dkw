'use client';

import React, { useState } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiCheckCircle, 
  FiSend,
  FiCalendar 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white p-8 sm:p-12 shadow-xl border border-stone-800 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
          Visit Us In Delhi NCR
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-serif mt-2">
          Contact Delhi Kolhu Wale
        </h1>
        <p className="text-xl text-amber-300 font-bold font-sans mt-2">
          आँखों के सामने निकलता भरोसे से बिकता है
        </p>
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
          Have a question about our cold-pressed oils or want to book an in-person live extraction appointment? Reach out anytime!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
              Store &amp; Workshop Details
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Delhi Workshop &amp; Experience Mill</h4>
                  <p className="text-stone-600 mt-0.5">
                    Plot 14, Main Road, Delhi NCR - 110085, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Phone Helpline</h4>
                  <a href="tel:9971207645" className="text-red-700 font-extrabold hover:underline">
                    +91 9971207645
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">WhatsApp Direct Support</h4>
                  <a
                    href="https://wa.me/919971207645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-bold hover:underline"
                  >
                    +91 9971207645 (Chat Now)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Email</h4>
                  <p className="text-stone-600">care@dkw.com / orders@dkw.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Visiting Hours</h4>
                  <p className="text-stone-600">Monday to Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100">
              <a
                href="https://wa.me/919971207645?text=Hello%20DKW,%20I%20want%20to%20visit%20the%20Delhi%20Kolhu%20workshop."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow"
              >
                <FaWhatsapp className="text-lg" />
                <span>Send WhatsApp Location Request</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <h2 className="text-xl font-bold text-stone-900">Send Us a Message</h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Fill the form below and our team will get back to you within 2 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-green-50 rounded-2xl border border-green-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FiCheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Message Received!</h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Thank you, <strong>{formData.name}</strong>. Our Delhi team will call you at <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-stone-800 text-white text-xs font-bold rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9971207645"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Live Extraction Visit">Book Live Extraction Visit in Delhi</option>
                    <option value="Bulk Order">Bulk / Festive Gifting Order</option>
                    <option value="Distributorship">Store Partnership / Gaushala</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <FiSend />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
