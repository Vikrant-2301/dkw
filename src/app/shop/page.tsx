'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { FiSearch, FiX, FiCheck } from 'react-icons/fi';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedPackaging, setSelectedPackaging] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesHindi = product.hindiName.includes(query);
        const matchesDesc = product.shortDesc.toLowerCase().includes(query);
        if (!matchesName && !matchesHindi && !matchesDesc) return false;
      }
      // Packaging filter
      if (selectedPackaging !== 'all') {
        const hasPackaging = product.volumes.some((v) =>
          v.packaging.toLowerCase().includes(selectedPackaging.toLowerCase())
        );
        if (!hasPackaging) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, selectedPackaging]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-red-950 text-white p-7 sm:p-9 shadow-xl border border-stone-800">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Delhi Kolhu Wale • Pure Catalog (शुद्ध उत्पाद)
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-white">
            100% Pure Oils &amp; Vedic Bilona Ghee
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Crafted from 100% Sortex cleaned Rajasthan mustard seeds (सॉर्टेक्स सरसों) and earthen clay-pot curd. Zero chemicals, zero hexane. Same-day free home delivery within 15 km in Delhi NCR.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search mustard, ghee, badam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <span className="text-xs font-semibold text-stone-500 whitespace-nowrap">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="featured">Featured &amp; Best Sellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated (★ 5.0)</option>
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-stone-100">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sub-Filters: Packaging options */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-stone-400 font-medium">Packaging:</span>
          {['all', 'Glass', 'Tin', 'Jar', 'Dropper'].map((pkg) => (
            <button
              key={pkg}
              onClick={() => setSelectedPackaging(pkg)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                selectedPackaging === pkg
                  ? 'bg-amber-100 text-amber-900 border border-amber-400'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {pkg === 'all' ? 'All Packaging' : pkg}
            </button>
          ))}

          {(selectedCategory !== 'all' || searchQuery || selectedPackaging !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSelectedPackaging('all');
              }}
              className="ml-auto text-red-600 hover:text-red-800 font-bold text-xs underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Products Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-stone-500">
          Showing <strong>{filteredProducts.length}</strong> pure items
        </p>
        <span className="text-xs text-green-700 font-bold flex items-center gap-1">
          <FiCheck className="w-3.5 h-3.5" /> All items extracted fresh this week
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
          <p className="text-lg font-bold text-stone-800">No products match your filters</p>
          <p className="text-xs text-stone-500">
            Try adjusting your search query or selecting &quot;All Products&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setSelectedPackaging('all');
            }}
            className="px-6 py-2.5 bg-red-700 text-white rounded-xl text-xs font-bold mt-2"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-500">
        <p className="text-base font-bold animate-pulse">Loading pure products catalog...</p>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
