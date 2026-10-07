'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, ProductVolume } from '@/types';
import { useCart } from '@/context/CartContext';
import { FiStar, FiShoppingBag, FiCheck, FiArrowRight } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedVolume, setSelectedVolume] = useState<ProductVolume>(product.volumes[0]);
  const [justAdded, setJustAdded] = useState(false);

  const discountPercent = Math.round(
    ((selectedVolume.originalPrice - selectedVolume.price) / selectedVolume.originalPrice) * 100
  );

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVolume, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl border border-stone-200 hover:border-amber-400 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
      <div>
        {/* Badges on Top */}
        <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 right-1.5 sm:right-2.5 z-10 flex items-center justify-between pointer-events-none gap-1">
          <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold bg-amber-400 text-stone-950 shadow-xs border border-amber-300 truncate max-w-[65%]">
            {product.category === 'ghee' ? 'Bilona Ghee' : 'Wood & Cold Press'}
          </span>
          {discountPercent > 0 && (
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold bg-red-600 text-white shadow-xs flex-shrink-0">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Product Image Link */}
        <Link
          href={`/product/${product.slug}`}
          className="relative aspect-square w-full bg-stone-100 overflow-hidden block"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3">
            <span className="text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1">
              View <FiArrowRight className="w-3 h-3" />
            </span>
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-2 sm:p-3.5 flex flex-col">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <div className="inline-flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded text-amber-800 font-bold text-[9px] sm:text-[11px] border border-amber-200">
              <FiStar className="fill-amber-400 text-amber-500 w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{product.rating}</span>
            </div>
            <span className="text-[9px] sm:text-[11px] text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Title & Hindi Name */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-red-700 transition-colors">
            <h3 className="font-bold text-stone-900 text-xs sm:text-sm lg:text-base leading-tight line-clamp-1">
              {product.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-red-600 font-semibold mt-0.5 line-clamp-1">
              {product.hindiName}
            </p>
          </Link>

          {/* Sourcing Note */}
          {product.sourcingNote && (
            <p
              title={product.sourcingNote}
              className="mt-1 text-[9px] sm:text-[10px] font-semibold text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70 truncate block"
            >
              ★ {product.sourcingNote}
            </p>
          )}

          {/* Short Description (desktop only) */}
          <p className="hidden md:block text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Footer: Size & Price/Add */}
      <div className="p-2 pt-0 sm:p-3.5 sm:pt-0">
        <div className="pt-2 border-t border-stone-100">
          {/* Size / Volume Selector */}
          <div className="mb-2">
            <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-stone-500 mb-1">
              <span className="font-semibold">Size:</span>
              <span className="text-stone-400 truncate max-w-[60%] text-[8px] sm:text-[10px]">
                {selectedVolume.packaging}
              </span>
            </div>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-0.5">
              {product.volumes.map((vol) => (
                <button
                  key={vol.size}
                  type="button"
                  onClick={() => setSelectedVolume(vol)}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                    selectedVolume.size === vol.size
                      ? 'bg-amber-100 text-amber-950 border border-amber-500 font-bold shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border border-transparent'
                  }`}
                >
                  {vol.size}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between gap-1 pt-1">
            <div className="min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="text-sm sm:text-base lg:text-lg font-black text-stone-900">
                  ₹{selectedVolume.price}
                </span>
                {selectedVolume.originalPrice > selectedVolume.price && (
                  <span className="text-[9px] sm:text-xs text-stone-400 line-through">
                    ₹{selectedVolume.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`flex items-center justify-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-bold text-[10px] sm:text-xs transition-all shadow-xs cursor-pointer flex-shrink-0 ${
                justAdded
                  ? 'bg-green-700 text-white'
                  : 'bg-red-700 hover:bg-red-800 text-white hover:shadow-md'
              }`}
              aria-label={`Add ${product.name} to basket`}
            >
              {justAdded ? (
                <>
                  <FiCheck className="w-3 h-3" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <FiShoppingBag className="w-3 h-3" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
