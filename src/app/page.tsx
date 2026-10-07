'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES, TESTIMONIALS, FAQS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiTruck, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiChevronDown, 
  FiStar,
  FiShoppingBag,
  FiCheck,
  FiExternalLink
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroTab, setHeroTab] = useState<number>(0);
  const [heroAdded, setHeroAdded] = useState(false);

  // 3 featured picks: Mustard Kacchi Ghani, Cow Bilona Ghee, Badam Rogan
  const heroFeaturedProducts = [
    PRODUCTS.find((p) => p.id === 'sarson-kacchi-ghani') || PRODUCTS[0],
    PRODUCTS.find((p) => p.id === 'cow-bilona-ghee') || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === 'badam-tel') || PRODUCTS[2],
  ];

  const currentHeroProduct = heroFeaturedProducts[heroTab] || heroFeaturedProducts[0];

  const handleHeroQuickAdd = () => {
    addToCart(currentHeroProduct, currentHeroProduct.volumes[0], 1);
    setHeroAdded(true);
    setTimeout(() => setHeroAdded(false), 2000);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Balanced 60/40 English-Hindi Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#14233a] via-[#0f1b2c] to-[#0a121e] text-white py-12 sm:py-16 lg:py-20 border-b border-amber-500/20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Brand Typography & Slogans */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 text-xs font-semibold tracking-wide">
                <span>📍 Krishna Nagar, Delhi (कृष्णा नगर)</span>
                <span>•</span>
                <span>Open Daily: 9am to 11pm</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1.5 sm:space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-serif tracking-wide leading-tight">
                  DELHI KOLHU WALE
                  <span className="text-amber-400 text-xs sm:text-sm align-top ml-1">TM</span>
                </h1>
                <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-amber-300 font-sans tracking-wide leading-snug">
                  आँखों के सामने निकलता, भरोसे से बिकता है
                </p>
                <p className="text-xs sm:text-base text-amber-100/90 font-medium tracking-wide">
                  100% Pure Wood-Pressed Oils &amp; Clay-Pot Vedic Bilona Ghee
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Extracted fresh before your eyes using <strong>100% Sortex Cleaned Rajasthan Mustard</strong> (राजस्थान की सॉर्टेक्स सरसों). Available in both traditional Wood-Pressed (लकड़ी का कोल्हू) and Cold-Pressed (कच्ची घानी) methods. Pure A2 Cow and Murrah Buffalo Bilona Ghee hand-churned in earthen clay pots.
              </p>

              {/* 4 Trust Highlights */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-[11px] sm:text-xs text-stone-200 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl border border-white/10">
                  <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                  <span>100% Rajasthan Sortex Mustard</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl border border-white/10">
                  <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                  <span>Wood-Pressed &amp; Cold-Pressed</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl border border-white/10">
                  <FiTruck className="text-green-400 flex-shrink-0" />
                  <span>Free Same-Day Delivery (&lt;15km)</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-lg sm:rounded-xl border border-white/10">
                  <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                  <span>Cow &amp; Buffalo Bilona Ghee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 pt-2">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span>Shop Pure Range</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all text-center"
                  >
                    <FiMapPin className="text-amber-400 w-3.5 h-3.5 flex-shrink-0" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href="https://wa.me/919971207645?text=Hello%20Delhi%20Kolhu%20Wale,%20I%20want%20to%20order%20pure%20cold%20pressed%20oil%20and%20ghee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-all text-center"
                  >
                    <FaWhatsapp className="text-sm flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Product Stage */}
            <div className="lg:col-span-5 relative">
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-3 bg-white/10 p-1 rounded-2xl border border-white/15 max-w-sm mx-auto">
                {[
                  { en: 'Kacchi Ghani Mustard', short: 'Mustard Oil' },
                  { en: 'Cow Bilona Ghee', short: 'Cow Ghee' },
                  { en: 'Pure Badam Rogan', short: 'Badam Rogan' },
                ].map((item, idx) => (
                  <button
                    key={item.en}
                    onClick={() => setHeroTab(idx)}
                    className={`flex-1 py-1.5 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer text-center whitespace-nowrap ${
                      heroTab === idx
                        ? 'bg-amber-400 text-stone-950 shadow-sm'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <span className="sm:hidden">{item.short}</span>
                    <span className="hidden sm:inline">{item.en}</span>
                  </button>
                ))}
              </div>

              <div className="relative rounded-2xl bg-white text-stone-900 p-5 shadow-2xl border border-amber-400/50 max-w-sm mx-auto">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-200">
                  <Image
                    src={currentHeroProduct.image}
                    alt={currentHeroProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-stone-950 shadow-xs">
                    <span>{currentHeroProduct.category === 'ghee' ? 'Clay-Pot Bilona Ghee' : 'Sortex Mustard • Wood & Cold Pressed'}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-stone-900 text-base leading-snug line-clamp-1">
                        {currentHeroProduct.name}
                      </h3>
                      <p className="text-xs text-red-700 font-bold mt-0.5">
                        {currentHeroProduct.hindiName}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-lg font-black text-stone-900">
                        ₹{currentHeroProduct.volumes[0].price}
                      </span>
                      <span className="text-xs text-stone-400 line-through block">
                        ₹{currentHeroProduct.volumes[0].originalPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2">
                    {currentHeroProduct.shortDesc}
                  </p>

                  <button
                    onClick={handleHeroQuickAdd}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      heroAdded
                        ? 'bg-green-700 text-white'
                        : 'bg-red-700 hover:bg-red-800 text-white'
                    }`}
                  >
                    {heroAdded ? (
                      <>
                        <FiCheck className="w-4 h-4" />
                        <span>Added to Cart ✓</span>
                      </>
                    ) : (
                      <>
                        <FiShoppingBag className="w-4 h-4" />
                        <span>Quick Add ({currentHeroProduct.volumes[0].size})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Free Delivery & Timing Notice Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-800 shadow-xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
              <FiTruck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-stone-900">
                Same-Day Free Home Delivery up to 15 km in Delhi NCR!
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                15 किमी तक उसी दिन मुफ्त होम डिलीवरी • Open Daily: 9:00 AM – 11:00 PM • Helpline: 9971207645
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:9971207645"
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
            >
              <FiPhone className="text-amber-400" />
              <span>Call Us</span>
            </a>
            <a
              href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
            >
              <FiMapPin />
              <span>Shop Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid (Only 2 Categories: Oil & Ghee) */}
      <section className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8" id="products">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-700 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200 inline-block">
              100% Traditional Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
              Our Pure Oils &amp; Vedic Bilona Ghee
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              All oils available in Wood-Pressed &amp; Cold-Pressed • Ghee available in Desi Cow &amp; Murrah Buffalo
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid: 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Real Bilingual Testimonials (English & Hindi) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold tracking-widest text-red-700 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Real Customer Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
            Words of Trust from Real Families (ग्राहकों की राय)
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Genuine experiences from residents of Krishna Nagar, Laxmi Nagar, and Preet Vihar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                
                {/* English Review */}
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                  &ldquo;{t.english}&rdquo;
                </p>

                {/* Original Hindi Quote */}
                <p className="text-xs text-stone-500 leading-relaxed italic border-t border-stone-100 pt-2 font-sans">
                  &ldquo;{t.hindi}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{t.name}</h4>
                  <p className="text-[11px] text-stone-400">{t.location}</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visit Krishna Nagar Store & Workshop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-stone-900 text-white p-4 sm:p-10 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Visit Us in Delhi (सीधे दुकान पर पधारें)
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                A1/10, Main Road Krishna Nagar, Near Chhachi Building
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                You are welcome to visit our shop any day between <strong>9:00 AM and 11:00 PM</strong>. Watch the slow wooden Kolhu or cold-press machine extract your oil live in front of you, or pick up fresh golden Bilona Ghee.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>A1/10, Main Road Krishna Nagar, Near Chhachi Building, Delhi - 110051</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>Open Daily: 9:00 AM – 11:00 PM (Monday to Sunday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <span>Order Helpline: +91 9971207645 (Call / WhatsApp)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <FiMapPin />
                  <span>View on Google Maps</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:9971207645"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
                >
                  <FiPhone className="text-amber-400" />
                  <span>Call: 9971207645</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-lg">
                <Image
                  src="/images/process_live.jpg"
                  alt="Delhi Kolhu Wale Live Mustard Oil Extraction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-bold">
                    Live Wood-Press Extraction • आंखों के सामने ताज़ा पिराई
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-widest text-red-700 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
            Frequently Asked Questions (अक्सर पूछे जाने वाले सवाल)
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm hover:text-red-700 cursor-pointer"
              >
                <span>{faq.q}</span>
                <FiChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-red-700' : 'text-stone-400'
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final Order CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-red-900 via-stone-900 to-red-950 text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-xl border border-red-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Same-Day Free Delivery up to 15km
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Switch to 100% Pure Wood-Pressed Oils &amp; Vedic Bilona Ghee
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Experience the authentic taste of childhood with free same-day doorstep delivery across Delhi NCR up to 15km.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919971207645?text=Hello%20Delhi%20Kolhu%20Wale,%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
              >
                <FaWhatsapp className="text-base" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href="tel:9971207645"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
              >
                <FiPhone className="text-amber-400" />
                <span>Call Helpline: 9971207645</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
