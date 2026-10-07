'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DKWLogo } from './DKWLogo';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { 
  FiShoppingBag, 
  FiSearch, 
  FiMenu, 
  FiX, 
  FiPhone, 
  FiArrowRight,
  FiMapPin 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, subtotal, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products for search modal
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.hindiName.includes(searchQuery) ||
          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/process', label: 'Our Process' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact & Visit' },
  ];

  return (
    <>
      {/* Top Banner with Hindi Tagline & Call Support */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-amber-100 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Brand Tagline */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
            <span className="font-bold tracking-wide text-amber-200">
              आँखों के सामने निकलता भरोसे से बिकता है
            </span>
            <span className="hidden md:inline text-amber-400/50">•</span>
            <span className="hidden md:inline text-stone-300 font-medium">
              100% Sortex Rajasthan Mustard • Free Delivery up to 15km (15km फ्री डिलीवरी)
            </span>
          </div>

          {/* Quick Contacts */}
          <div className="flex items-center gap-3.5 text-xs text-stone-300">
            <a
              href="tel:9971207645"
              className="flex items-center gap-1.5 hover:text-amber-300 font-semibold transition-colors"
            >
              <FiPhone className="text-amber-400 w-3.5 h-3.5" />
              <span>9971207645</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="https://wa.me/919971207645"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              <FaWhatsapp className="text-sm" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <span className="text-stone-600 hidden lg:inline">|</span>
            <a
              href="https://maps.app.goo.gl/FnANhHdWnkR1vUZ49"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium"
            >
              <FiMapPin className="w-3.5 h-3.5" />
              <span>कृष्णा नगर (Krishna Nagar)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-stone-200/90 ${
          scrolled ? 'shadow-md py-2.5' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <DKWLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'text-red-700 bg-red-50/90 font-bold shadow-2xs'
                        : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 sm:p-2.5 rounded-full text-stone-600 hover:text-red-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Search catalog"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-red-50 hover:bg-red-100 text-stone-800 border border-red-200/80 transition-all group shadow-2xs cursor-pointer"
                aria-label="View shopping basket"
              >
                <div className="relative">
                  <FiShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-red-700 group-hover:scale-110 transition-transform" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white font-extrabold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="font-bold text-xs uppercase tracking-wider text-stone-700">
                  Cart
                </span>
                {subtotal > 0 && (
                  <span className="hidden sm:inline text-xs font-extrabold text-red-700 pl-1 border-l border-red-200">
                    ₹{subtotal}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 shadow-2xl py-4 px-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-red-50 text-red-700 font-bold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href="tel:9971207645"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs"
              >
                <FiPhone className="text-red-700" />
                <span>Call Helpline: +91 9971207645</span>
              </a>
              <a
                href="https://wa.me/919971207645"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 text-white font-bold text-xs shadow"
              >
                <FaWhatsapp className="text-base" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
            <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1">
                <FiSearch className="w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search pure yellow mustard, bilona ghee, badam rogan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-base sm:text-lg focus:outline-none text-stone-800 placeholder-stone-400"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-500"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-stone-100">
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center text-stone-500 space-y-3">
                  <p className="text-xs sm:text-sm font-medium">Quick suggestions:</p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {['Yellow Mustard Oil', 'A2 Bilona Ghee', 'Badam Rogan', 'Black Mustard', 'Coconut Oil'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-200"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="py-8 text-center text-stone-500">
                  <p>No products found matching &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs text-stone-400 mt-1">Try searching for &quot;mustard&quot;, &quot;ghee&quot; or &quot;oil&quot;</p>
                </div>
              ) : (
                filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-4 py-3 hover:bg-amber-50/50 px-2 rounded-xl transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0 relative">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="56px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-stone-900 group-hover:text-red-700 text-sm truncate">
                        {p.name}
                      </h4>
                      <p className="text-xs text-red-600 font-semibold truncate">{p.hindiName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold text-stone-900 text-sm">₹{p.price}</span>
                        <span className="text-xs text-stone-400 line-through">₹{p.originalPrice}</span>
                      </div>
                    </div>
                    <FiArrowRight className="w-4 h-4 text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
