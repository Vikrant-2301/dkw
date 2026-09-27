'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { ProductVolume } from '@/types';
import { useCart } from '@/context/CartContext';
import { 
  FiStar, 
  FiShoppingBag, 
  FiCheckCircle, 
  FiTruck, 
  FiShield, 
  FiArrowRight, 
  FiPlus, 
  FiMinus, 
  FiAward, 
  FiMapPin,
  FiChevronRight,
  FiCheck 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();

  const slug = params?.id as string;
  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  const [selectedVolume, setSelectedVolume] = useState<ProductVolume>(
    product?.volumes[0] || { size: '1 Liter', price: 360, originalPrice: 450, packaging: 'Bottle' }
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'nutrition' | 'extraction' | 'lab'>('benefits');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedMessage, setAddedMessage] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-stone-900">Product Not Found</h1>
        <p className="text-stone-500">The product you are looking for might have been moved or updated.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-700 text-white rounded-xl font-bold"
        >
          <span>Return to Shop</span>
          <FiArrowRight />
        </Link>
      </div>
    );
  }

  const allImages = [product.image, ...(product.additionalImages || [])];
  const currentImage = allImages[activeImageIndex] || product.image;

  const handleAddToCart = () => {
    addToCart(product, selectedVolume, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVolume, quantity);
    router.push('/checkout');
  };

  const discountPercent = Math.round(
    ((selectedVolume.originalPrice - selectedVolume.price) / selectedVolume.originalPrice) * 100
  );

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 pb-16 space-y-10">
      {/* Prominent Breadcrumbs with Generous Top Clearance */}
      <nav aria-label="Breadcrumb">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white py-2 px-4 rounded-xl border border-stone-200/90 shadow-2xs">
          <Link href="/" className="hover:text-red-700 transition-colors">
            Home
          </Link>
          <FiChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/shop" className="hover:text-red-700 transition-colors">
            Shop
          </Link>
          <FiChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-red-700 font-bold truncate max-w-[200px] sm:max-w-md">
            {product.name}
          </span>
        </div>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-md">
            <Image
              src={currentImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white shadow-md">
                {discountPercent}% OFF
              </span>
            )}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-stone-900 shadow-md">
              {product.category === 'bilona-ghee' ? 'Vedic Bilona Churn' : 'Lakdi Ki Ghani'}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {allImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden relative border-2 transition-all flex-shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-amber-500 scale-102 shadow-md'
                      : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Live Extraction Assurance */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center flex-shrink-0">
              <FiCheckCircle className="w-5 h-5 text-amber-900" />
            </div>
            <div className="text-xs">
              <h5 className="font-bold text-amber-950">आँखों के सामने निकलता भरोसे से बिकता है</h5>
              <p className="text-amber-800/80 mt-0.5">
                Every batch extracted fresh in Delhi under 38°C without friction heat or chemical solvents.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Purchasing */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            {/* Reviews Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-700">{product.rating} / 5.0</span>
              <span className="text-xs text-stone-400">({product.reviewsCount} verified reviews)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-red-700 font-bold mt-1 font-sans">
              {product.hindiName}
            </p>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200/90 flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              ₹{selectedVolume.price}
            </span>
            {selectedVolume.originalPrice > selectedVolume.price && (
              <span className="text-base text-stone-400 line-through">
                ₹{selectedVolume.originalPrice}
              </span>
            )}
            <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md ml-auto">
              Save ₹{selectedVolume.originalPrice - selectedVolume.price}
            </span>
          </div>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Size / Volume Picker - Enhanced to never clip text */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold uppercase tracking-wider text-stone-800">
                Select Size &amp; Packaging:
              </label>
              <span className="text-xs text-amber-800 font-semibold">
                Selected: {selectedVolume.size}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {product.volumes.map((vol) => {
                const isSelected = selectedVolume.size === vol.size;
                return (
                  <button
                    key={vol.size}
                    type="button"
                    onClick={() => setSelectedVolume(vol)}
                    className={`min-h-[84px] p-3 rounded-2xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 shadow-xs ring-1 ring-amber-400'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-extrabold text-xs text-stone-900">{vol.size}</span>
                      {isSelected && (
                        <FiCheck className="w-3.5 h-3.5 text-amber-700 stroke-[3]" />
                      )}
                    </div>
                    <div className="my-1">
                      <span className="text-sm text-red-700 font-extrabold">₹{vol.price}</span>
                    </div>
                    <span className="text-[10px] leading-tight text-stone-500 block truncate" title={vol.packaging}>
                      {vol.packaging}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border border-stone-300 rounded-xl px-4 py-2.5 bg-stone-50 w-full sm:w-36 h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-stone-600 hover:text-stone-900 p-1 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="font-bold text-sm text-stone-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-stone-600 hover:text-stone-900 p-1 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 px-6 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-700/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              >
                <FiShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{addedMessage ? 'Added to Basket ✓' : 'Add to Basket'}</span>
              </button>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="h-12 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            {/* WhatsApp Quick Order Link */}
            <a
              href={`https://wa.me/919971207645?text=Hello%20Delhi%20Kolhu%20Wale,%20I%20would%20like%20to%20order%20${encodeURIComponent(
                product.name
              )}%20(${selectedVolume.size})`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-50 hover:bg-green-100 text-green-800 font-bold text-xs sm:text-sm border border-green-200 transition-colors"
            >
              <FaWhatsapp className="text-base text-green-600" />
              <span>Order via WhatsApp (+91 9971207645)</span>
            </a>
          </div>

          {/* Quick Perks */}
          <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-stone-600 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <FiTruck className="text-red-700 w-4 h-4 flex-shrink-0" />
              <span>Free Delivery above ₹799</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="text-red-700 w-4 h-4 flex-shrink-0" />
              <span>NABL Lab Purity Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <FiAward className="text-red-700 w-4 h-4 flex-shrink-0" />
              <span>100% Traditional Lakdi Ghani</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-red-700 w-4 h-4 flex-shrink-0" />
              <span>Same-Day Delhi NCR Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section: Benefits, Nutrition, Extraction, Lab Certificate */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-stone-200 overflow-x-auto">
          {[
            { id: 'benefits', label: 'Health Benefits' },
            { id: 'nutrition', label: 'Nutritional Facts' },
            { id: 'extraction', label: 'Kolhu Extraction Specs' },
            { id: 'lab', label: 'Lab Purity Report' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-6 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-red-700 text-red-700 bg-red-50/50'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {activeTab === 'benefits' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-stone-900 text-lg">Key Health Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60">
                    <FiCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 font-medium">{b}</span>
                  </div>
                ))}
              </div>
              {product.smokePoint && (
                <div className="mt-4 p-4 rounded-xl bg-stone-100 text-xs text-stone-700">
                  <strong>Smoke Point &amp; Cooking Profile:</strong> {product.smokePoint}
                </div>
              )}
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-stone-900 text-lg">Nutritional Information (Approx per 100g)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs text-stone-500">Energy Value</span>
                  <span className="block text-base font-extrabold text-stone-900 mt-1">{product.nutritionalInfo.energy}</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs text-stone-500">Total Fats</span>
                  <span className="block text-base font-extrabold text-stone-900 mt-1">{product.nutritionalInfo.fat}</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs text-stone-500">Monounsaturated (MUFA)</span>
                  <span className="block text-base font-extrabold text-stone-900 mt-1">{product.nutritionalInfo.mufa}</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs text-stone-500">Polyunsaturated (PUFA)</span>
                  <span className="block text-base font-extrabold text-stone-900 mt-1">{product.nutritionalInfo.pufa}</span>
                </div>
              </div>
              <p className="text-xs text-stone-500 pt-2">
                * Rich in naturally occurring {product.nutritionalInfo.vitamins}. Zero chemical trans fats, 0mg cholesterol.
              </p>
            </div>
          )}

          {activeTab === 'extraction' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-stone-900 text-lg">Kolhu Extraction Engineering</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 font-semibold">Extraction Method:</span>
                  <p className="font-bold text-stone-900 mt-1">{product.extractionDetails.method}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 font-semibold">Temperature Maintained:</span>
                  <p className="font-bold text-green-700 mt-1">{product.extractionDetails.temperature}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 font-semibold">Rotation Speed:</span>
                  <p className="font-bold text-stone-900 mt-1">{product.extractionDetails.rpm}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 font-semibold">Seed Origin:</span>
                  <p className="font-bold text-stone-900 mt-1">{product.extractionDetails.seedOrigin}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lab' && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-stone-900 text-lg">NABL Laboratory Purity Testing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-green-200 bg-green-50/60">
                  <span className="text-green-800 font-semibold">Purity Score:</span>
                  <p className="font-extrabold text-green-950 mt-1">{product.labReportSummary.purity}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-green-200 bg-green-50/60">
                  <span className="text-green-800 font-semibold">Argemone &amp; Mineral Oil:</span>
                  <p className="font-extrabold text-green-950 mt-1">{product.labReportSummary.argemone}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-green-200 bg-green-50/60">
                  <span className="text-green-800 font-semibold">Free Fatty Acid (FFA):</span>
                  <p className="font-extrabold text-green-950 mt-1">{product.labReportSummary.freeFattyAcid}</p>
                </div>
                <div className="p-3.5 rounded-xl border border-green-200 bg-green-50/60">
                  <span className="text-green-800 font-semibold">Adulteration Status:</span>
                  <p className="font-extrabold text-green-950 mt-1">{product.labReportSummary.adulteration}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/lab-reports"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:underline"
                >
                  <span>View Full NABL Certificate &amp; FSSAI Documentation</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="space-y-6 pt-6 border-t border-stone-200">
        <h2 className="text-2xl font-extrabold text-stone-900 font-serif">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
