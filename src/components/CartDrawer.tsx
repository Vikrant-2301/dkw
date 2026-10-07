'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { 
  FiX, 
  FiTrash2, 
  FiPlus, 
  FiMinus, 
  FiShoppingBag, 
  FiArrowRight, 
  FiShield, 
  FiTruck, 
  FiTag 
} from 'react-icons/fi';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    couponCode,
    applyCoupon,
    shippingFee,
    total,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponStatus, setCouponStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponStatus(res);
  };

  const freeShippingThreshold = 799;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slideIn">
          {/* Header */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-bold text-stone-900">Your Basket</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
              aria-label="Close cart"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-amber-50/80 px-5 py-3 border-b border-amber-200/60">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-800 mb-1.5">
              <span className="flex items-center gap-1.5 text-amber-900">
                <FiTruck className="text-amber-700" />
                {amountNeeded === 0 ? (
                  <span className="text-green-700 font-bold">🎉 You got FREE Shipping across India!</span>
                ) : (
                  <span>Add ₹{amountNeeded} more for <strong className="text-red-700">FREE Delivery</strong></span>
                )}
              </span>
              <span className="text-[11px] font-bold text-stone-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-green-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <FiShoppingBag className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-800">Your basket is empty</h3>
                  <p className="text-sm text-stone-500">
                    Add cold-pressed wood oils or Vedic Bilona Ghee to experience 100% pure nutrition.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold text-sm shadow transition-colors"
                >
                  <Link href="/shop" onClick={() => setIsCartOpen(false)}>
                    Explore Pure Oils &amp; Ghee
                  </Link>
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVolume.size}`}
                  className="flex gap-4 p-3.5 rounded-xl border border-stone-100 hover:border-amber-200 transition-colors bg-white shadow-xs"
                >
                  <div className="w-18 h-18 rounded-lg overflow-hidden bg-stone-100 relative flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-bold text-sm text-stone-900 hover:text-red-700 line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.selectedVolume.size)
                          }
                          className="text-stone-400 hover:text-red-600 p-1"
                          aria-label="Remove item"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                        <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {item.selectedVolume.size}
                        </span>
                        <span>{item.selectedVolume.packaging}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedVolume.size,
                              item.quantity - 1
                            )
                          }
                          className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedVolume.size,
                              item.quantity + 1
                            )
                          }
                          className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-stone-900 text-sm">
                          ₹{item.selectedVolume.price * item.quantity}
                        </span>
                        {item.selectedVolume.originalPrice > item.selectedVolume.price && (
                          <span className="text-[11px] text-stone-400 line-through ml-1.5">
                            ₹{item.selectedVolume.originalPrice * item.quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Coupon & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50/70 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. DKW10)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 uppercase font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponStatus && (
                <p
                  className={`text-xs font-semibold ${
                    couponStatus.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {couponStatus.message}
                </p>
              )}

              {couponCode && (
                <div className="flex items-center justify-between text-xs bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-lg">
                  <span>Coupon &quot;{couponCode}&quot; Active</span>
                  <span className="font-bold">-₹{discount}</span>
                </div>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>Discount</span>
                    <span className="font-semibold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-stone-900">
                    {shippingFee === 0 ? (
                      <span className="text-green-700 font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="text-red-700">₹{total}</span>
                </div>
              </div>

              {/* Checkout Action */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-extrabold text-sm shadow-lg shadow-red-700/20 transition-all hover:scale-[1.01]"
              >
                <span>Proceed to Secure Checkout</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <FiShield className="text-green-600" /> 100% Purity Guarantee
                </span>
                <span>•</span>
                <span>Leak-Proof Safe Packaging</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
