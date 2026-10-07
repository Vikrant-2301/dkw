'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import confetti from 'canvas-confetti';
import { 
  FiCheckCircle, 
  FiTruck, 
  FiShield, 
  FiShoppingBag, 
  FiArrowRight, 
  FiPhone, 
  FiCreditCard, 
  FiPrinter,
  FiHome 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function CheckoutPage() {
  const { cart, subtotal, discount, shippingFee, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110051',
    deliveryType: 'standard',
    paymentMethod: 'upi',
  });

  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Generate random order ID
    const newOrderId = `DKW-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    setOrderId(newOrderId);
    setOrderDate(now);
    setIsOrdered(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}

    clearCart();
  };

  // If order was placed, show the success confirmation receipt!
  if (isOrdered) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center shadow-inner">
            <FiCheckCircle className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Order Confirmed &amp; In Production
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif">
              Thank You for Trusting Purity!
            </h1>
            <p className="text-sm sm:text-base text-stone-600">
              Your order <strong>#{orderId}</strong> has been received by our Delhi Kolhu workshop. Our team is cold-pressing and packing your fresh bottles.
            </p>
          </div>

          {/* Receipt Summary Card */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 text-left space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-semibold">Order Number:</span>
              <span className="font-extrabold text-stone-900 font-mono text-base">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-semibold">Order Date:</span>
              <span className="font-semibold text-stone-800">{orderDate}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-semibold">Shipping To:</span>
              <span className="font-semibold text-stone-800 text-right">
                {formData.name}, {formData.address}, {formData.city} - {formData.pincode}
              </span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-3">
              <span className="text-stone-500 font-semibold">Payment Mode:</span>
              <span className="font-bold text-amber-900 uppercase">
                {formData.paymentMethod === 'upi'
                  ? 'UPI / QR Code'
                  : formData.paymentMethod === 'cod'
                  ? 'Cash on Delivery (COD)'
                  : 'Credit / Debit Card'}
              </span>
            </div>
            <div className="flex justify-between pt-1 text-base font-extrabold text-stone-900">
              <span>Total Amount:</span>
              <span className="text-red-700">₹{total}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href={`https://wa.me/919971207645?text=Hello%20DKW,%20I%20placed%20order%20${orderId}%20for%20Rs%20${total}.%20Please%20share%20tracking%20update.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm shadow flex items-center justify-center gap-2 transition-all"
            >
              <FaWhatsapp className="text-lg" />
              <span>Get WhatsApp Live Order Tracking</span>
            </a>

            <button
              onClick={() => window.print()}
              className="py-3 px-6 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-stone-300"
            >
              <FiPrinter />
              <span>Print Invoice</span>
            </button>
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:underline pt-2"
            >
              <FiHome />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty, show prompt
  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 text-stone-400 flex items-center justify-center">
          <FiShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900">Your basket is empty</h1>
        <p className="text-xs sm:text-sm text-stone-500">
          Please select pure cold-pressed oils or Vedic Bilona Ghee before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-700 text-white rounded-xl text-xs font-bold shadow"
        >
          <span>Explore Shop</span>
          <FiArrowRight />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
          Secure Checkout
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Direct from Delhi Kolhu Wale workshop to your doorstep.
        </p>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Customer and Shipping Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Contact Information */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-700 text-white text-xs flex items-center justify-center">1</span>
              <span>Contact &amp; Delivery Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9971207645"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Email Address (For Tax Invoice) *
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Street Address / House No. / Landmark *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Flat / House No., Colony, Landmark..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  State *
                </label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Pin Code *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          {/* 2. Payment Method */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-700 text-white text-xs flex items-center justify-center">2</span>
              <span>Select Payment Option</span>
            </h2>

            <div className="space-y-3">
              {/* UPI Option */}
              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                formData.paymentMethod === 'upi' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                  className="mt-1 text-amber-600 focus:ring-amber-500"
                />
                <div className="flex-1 text-xs">
                  <span className="font-bold text-stone-900 text-sm block">Instant UPI / QR Code (GPay, PhonePe, Paytm)</span>
                  <span className="text-stone-500 block mt-0.5">Zero convenience fee. Faster dispatch directly to your doorstep.</span>
                </div>
              </label>

              {/* COD Option */}
              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                formData.paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className="mt-1 text-amber-600 focus:ring-amber-500"
                />
                <div className="flex-1 text-xs">
                  <span className="font-bold text-stone-900 text-sm block">Cash on Delivery (COD)</span>
                  <span className="text-stone-500 block mt-0.5">Pay in cash or UPI to delivery executive upon physical package inspection.</span>
                </div>
              </label>

              {/* Card / Netbanking */}
              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                formData.paymentMethod === 'card' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className="mt-1 text-amber-600 focus:ring-amber-500"
                />
                <div className="flex-1 text-xs">
                  <span className="font-bold text-stone-900 text-sm block">Credit / Debit Card / Net Banking</span>
                  <span className="text-stone-500 block mt-0.5">All Indian banks and RuPay / Visa / Mastercard supported.</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
              Order Summary ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
            </h2>

            {/* Items list */}
            <div className="divide-y divide-stone-100 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedVolume.size}`} className="py-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 relative flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <h4 className="font-bold text-stone-900 truncate">{item.product.name}</h4>
                    <p className="text-stone-500">
                      {item.selectedVolume.size} × {item.quantity}
                    </p>
                  </div>
                  <span className="font-bold text-stone-900 text-xs">
                    ₹{item.selectedVolume.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculation */}
            <div className="space-y-2 text-xs text-stone-600 border-t border-stone-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-900">₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Coupon Discount</span>
                  <span className="font-semibold">-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-semibold text-stone-900">
                  {shippingFee === 0 ? <strong className="text-green-700 font-bold">FREE</strong> : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-stone-900 pt-3 border-t border-stone-200">
                <span>Total Payable</span>
                <span className="text-red-700">₹{total}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-red-700/25 transition-all hover:scale-101 cursor-pointer"
            >
              Confirm &amp; Place Order (₹{total})
            </button>

            {/* Trust Assurances */}
            <div className="text-[11px] text-stone-500 space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <FiShield className="text-green-600" />
                <span>100% Purity or 100% Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTruck className="text-amber-600" />
                <span>Packed in Safe Break-Proof Glass Bottle Cushions</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
