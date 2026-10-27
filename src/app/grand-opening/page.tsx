'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiPhone, FiMapPin, FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/* ─── Countdown ─── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  });
  return t;
}

/* ─── Invitation reveal animation ─── */
const styles = `
  @keyframes sealPulse {
    0%   { transform: scale(0.7); opacity: 0; }
    50%  { transform: scale(1.06); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes sealFade {
    from { opacity: 1; transform: scale(1) rotate(0deg); }
    to   { opacity: 0; transform: scale(1.8) rotate(8deg); }
  }
  @keyframes overlayFade {
    from { opacity: 1; }
    to   { opacity: 0; pointer-events: none; }
  }
  @keyframes invTextFade {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes borderGlow {
    0%, 100% { border-color: rgba(201,168,76,0.2); }
    50%      { border-color: rgba(201,168,76,0.5); }
  }
  @keyframes cardReveal {
    from { opacity: 0; transform: translateY(32px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes borderDraw {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .seal-enter  { animation: sealPulse 1s cubic-bezier(.22,1,.36,1) 0.3s both; }
  .inv-text-1  { animation: invTextFade 0.8s ease 1s both; }
  .inv-text-2  { animation: invTextFade 0.8s ease 1.4s both; }
  .inv-line    { animation: invTextFade 0.6s ease 0.7s both; }
  .anim-card   { animation: cardReveal 1.2s cubic-bezier(.22,1,.36,1) 1.6s both; }
  .anim-logo   { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 2.2s both; }
  .anim-badge  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 2.6s both; }
  .anim-h1     { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 3.0s both; }
  .anim-text   { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) 3.3s both; }
  .anim-right  { animation: fadeUp 1.0s cubic-bezier(.22,1,.36,1) 3.6s both; }
  .anim-btns   { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 3.9s both; }
  .anim-border { animation: borderDraw 1.8s ease 0.5s both; }
  .overlay-anim { animation: overlayFade 1s ease-in-out 2.6s forwards; }
  .seal-anim    { animation: sealFade 0.8s ease 2.2s forwards; }
  .inv-shimmer {
    background: linear-gradient(90deg, transparent 30%, rgba(201,168,76,0.15) 50%, transparent 70%);
    background-size: 200% 100%;
    animation: shimmer 2.5s ease-in-out infinite;
  }
  .inv-border-glow { animation: borderGlow 2s ease-in-out infinite; }
`;

export default function GrandOpeningPage() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2026-11-01T09:00:00+05:30'));
  const [overlayDone, setOverlayDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOverlayDone(true), 3600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen lg:h-dvh w-full flex flex-col overflow-x-hidden lg:overflow-hidden" style={{ background: '#f7f3ec' }}>

        {/* ── INVITATION OVERLAY (animates away) ── */}
        {!overlayDone && (
          <div
            className="overlay-anim fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
            style={{ background: 'linear-gradient(160deg, #1a150e 0%, #2b2318 40%, #3a2e1e 100%)', pointerEvents: 'all' }}
          >
            {/* Decorative frame lines */}
            <div className="absolute inset-3 sm:inset-6 border inv-border-glow pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.25)' }} />
            <div className="absolute inset-5 sm:inset-10 border inv-border-glow pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.12)', animationDelay: '0.5s' }} />
            {/* Corner flourishes */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-10 h-10 sm:w-16 sm:h-16 border-t-2 border-l-2 pointer-events-none inv-line" style={{ borderColor: '#c9a84c' }} />
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-16 sm:h-16 border-t-2 border-r-2 pointer-events-none inv-line" style={{ borderColor: '#c9a84c' }} />
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-16 sm:h-16 border-b-2 border-l-2 pointer-events-none inv-line" style={{ borderColor: '#c9a84c' }} />
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-16 sm:h-16 border-b-2 border-r-2 pointer-events-none inv-line" style={{ borderColor: '#c9a84c' }} />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 inv-shimmer pointer-events-none" />
            {/* Warm glow behind logo */}
            <div className="absolute pointer-events-none" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            {/* Seal */}
            <div className="seal-anim flex flex-col items-center gap-5 sm:gap-6 text-center px-4">
              <div className="seal-enter w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-2xl bg-[#2b2318] flex items-center justify-center p-2" style={{ boxShadow: '0 0 0 3px rgba(201,168,76,0.4), 0 0 0 8px rgba(201,168,76,0.15), 0 0 60px rgba(201,168,76,0.12)', }}>
                <Image src="/logo.png" alt="DKW Seal" width={180} height={180} className="w-full h-full object-contain" priority />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="inv-text-1 text-sm sm:text-base tracking-[0.25em] sm:tracking-[0.35em] uppercase font-bold" style={{ color: '#c9a84c' }}>आप सादर आमंत्रित हैं</p>
                <div className="inv-text-1 w-28 sm:w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />
                <p className="inv-text-2 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold" style={{ color: 'rgba(201,168,76,0.6)' }}>Grand Opening Invitation</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TOP BAR ── */}
        <div
          className="flex-shrink-0 text-amber-200/80 text-[10px] sm:text-[11px] font-semibold py-1.5 px-3 sm:px-4 text-center tracking-wider sm:tracking-widest uppercase leading-snug"
          style={{ background: '#2b2318' }}
        >
          आँखों के सामने निकलता &nbsp;&middot;&nbsp; भरोसे से बिकता है &nbsp;&middot;&nbsp; 100% शुद्ध तेल और देसी घी
        </div>

        {/* ── MAIN ── */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 anim-card">

          {/* ═══ LEFT — Invitation content ═══ */}
          <div
            className="w-full lg:w-[48%] flex-shrink-0 flex flex-col justify-center items-center lg:items-start px-5 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-5 gap-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #2b2318 0%, #3a2e1e 60%, #2e2318 100%)' }}
          >
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 border-t-2 border-l-2 border-amber-500/40 pointer-events-none anim-border" />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 border-t-2 border-r-2 border-amber-500/40 pointer-events-none anim-border" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 border-b-2 border-l-2 border-amber-500/40 pointer-events-none anim-border" />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 border-b-2 border-r-2 border-amber-500/40 pointer-events-none anim-border" />
            {/* Subtle warm glow center */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(180,130,40,0.07) 0%, transparent 70%)' }} />

            {/* Logo + Brand name */}
            <div className="anim-logo flex flex-col items-center lg:items-start gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-2xl bg-white p-2 flex-shrink-0"
                  style={{ boxShadow: '0 0 0 3px rgba(212,175,55,0.5), 0 0 0 7px rgba(212,175,55,0.15), 0 12px 40px rgba(0,0,0,0.5)' }}
                >
                  <Image src="/logo.png" alt="DKW Logo" width={140} height={140} className="w-full h-full object-contain" priority />
                </div>
                <div>
                  <p className="font-black text-xl sm:text-2xl xl:text-3xl uppercase tracking-wide font-serif text-white leading-tight">
                    DELHI KOLHU WALE
                  </p>
                  <p className="text-xs sm:text-sm font-semibold mt-1" style={{ color: '#c9a84c' }}>
                    दिल्ली कोल्हू वाले &nbsp;&middot;&nbsp; 100% Pure Oil &amp; Ghee
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-xs h-px opacity-30" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />

            {/* Badge */}
            <div
              className="anim-badge inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1 rounded-full border text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase text-center"
              style={{ borderColor: 'rgba(201,168,76,0.35)', background: 'rgba(201,168,76,0.08)', color: '#c9a84c' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: '#c9a84c' }} />
              Grand Opening &nbsp;&middot;&nbsp; भव्य उद्घाटन &nbsp;&middot;&nbsp; 1 Nov 2026
            </div>

            {/* Headline */}
            <div className="anim-h1 text-center lg:text-left">
              <h1 className="font-black text-white leading-snug text-2xl sm:text-3xl lg:text-[clamp(1.4rem,2.4vw,2rem)]">
                हमारा नया आउटलेट
                <br />
                <span style={{ color: '#c9a84c' }}>1 नवंबर 2026</span> को खुल रहा है
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm max-w-sm text-center lg:text-left mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
                You are cordially invited to our grand opening at Krishna Nagar, Delhi.
              </p>
            </div>

            {/* Invitation text */}
            <div
              className="anim-text w-full max-w-md rounded-xl p-3.5 sm:p-4 space-y-2 text-xs sm:text-sm leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                हमारे यहाँ मिलता है —{' '}
                <span className="font-semibold" style={{ color: '#c9a84c' }}>शुद्ध तेल और देसी घी</span>।
                लकड़ी की घानी में पिराया सरसों, मूंगफली, तिल, नारियल तेल और
                बिलोना विधि का{' '}
                <span className="font-semibold" style={{ color: '#c9a84c' }}>A2 गाय का देसी घी</span> — बिना मिलावट के।
              </p>
              <p
                className="border-l-2 pl-3 italic text-[11px] sm:text-xs"
                style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(201,168,76,0.75)' }}
              >
                &ldquo;एक बार सेवा का अवसर अवश्य दें — जो एक बार आता है, वो बार-बार आता है।&rdquo;
              </p>
            </div>

            {/* CTA buttons */}
            <div className="anim-btns flex flex-wrap sm:flex-nowrap w-full sm:w-auto gap-2.5 justify-center lg:justify-start">
              <a
                id="grand-opening-call"
                href="tel:9599207645"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap min-h-[42px]"
                style={{ background: '#c9a84c', color: '#1c1208' }}
              >
                <FiPhone className="w-3.5 h-3.5" />
                +91 9599207645
              </a>
              <a
                id="grand-opening-whatsapp"
                href="https://wa.me/919599207645?text=Hello%20DKW%2C%20I%20want%20to%20visit%20your%20new%20outlet%20grand%20opening%20on%201st%20November!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm text-white shadow-lg transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap min-h-[42px]"
                style={{ background: '#22863a' }}
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* ═══ RIGHT — Countdown + Details + Map ═══ */}
          <div
            className="flex-1 flex flex-col px-5 sm:px-8 lg:px-10 xl:px-12 py-6 lg:py-5 gap-4 anim-right relative lg:overflow-y-auto"
            style={{ background: '#f7f3ec' }}
          >
            {/* Subtle watermark pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, #8B6914 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* Countdown */}
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-widest mb-2.5 text-center flex items-center justify-center gap-2"
                style={{ color: '#8B6914' }}
              >
                <span className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(139,105,20,0.3))' }} />
                उद्घाटन में बचा समय — Countdown
                <span className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(139,105,20,0.3))' }} />
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[
                  { val: days, label: 'Days / दिन' },
                  { val: hours, label: 'Hours / घंटे' },
                  { val: minutes, label: 'Mins / मिनट' },
                  { val: seconds, label: 'Secs / सेकंड' },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-2.5 sm:py-3 px-1"
                    style={{ background: 'white', border: '1px solid rgba(139,105,20,0.2)', boxShadow: '0 2px 12px rgba(139,105,20,0.08)' }}
                  >
                    <span className="font-black tabular-nums leading-none text-xl sm:text-2xl lg:text-[clamp(1.4rem,2.8vw,2.2rem)]" style={{ color: '#2b2318' }}>
                      {String(val).padStart(2, '0')}
                    </span>
                    <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wide text-center leading-tight mt-0.5 px-0.5" style={{ color: '#8B6914' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event detail chips */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: <FiCalendar className="w-3.5 h-3.5" />, label: 'तारीख', value: '1 Nov 2026' },
                { icon: <FiClock className="w-3.5 h-3.5" />, label: 'समय', value: '9 AM onwards' },
                { icon: <FiMapPin className="w-3.5 h-3.5" />, label: 'स्थान', value: 'Krishna Nagar' },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl"
                  style={{ background: 'white', border: '1px solid rgba(139,105,20,0.18)', boxShadow: '0 1px 8px rgba(139,105,20,0.06)' }}
                >
                  <span style={{ color: '#8B6914' }}>{icon}</span>
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wide" style={{ color: '#8B6914', opacity: 0.7 }}>{label}</p>
                  <p className="font-black text-xs sm:text-sm leading-tight" style={{ color: '#2b2318' }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="flex-1 flex flex-col gap-1.5 min-h-[220px] lg:min-h-0">
              <p
                className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5"
                style={{ color: '#8B6914' }}
              >
                <FiMapPin className="w-3 h-3 flex-shrink-0" />
                <span>A1/10, Main Road, Krishna Nagar, Delhi – 110051</span>
              </p>
              <div
                className="w-full h-52 sm:h-60 lg:h-full lg:flex-1 rounded-2xl overflow-hidden min-h-[180px]"
                style={{ border: '1px solid rgba(139,105,20,0.22)', boxShadow: '0 4px 16px rgba(139,105,20,0.1)' }}
              >
                <iframe
                  title="DKW Delhi Kolhu Wale — Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4!2d77.2735!3d28.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcc800000001%3A0x1!2sA-1%2F10%2C+Main+Rd%2C+Krishna+Nagar%2C+Delhi%2C+110051!5e0!3m2!1sen!2sin!4v1698400000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '180px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://share.google/PkZcgjWVlrPZnpVs6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors self-start hover:opacity-80 py-1"
                style={{ color: '#8B6914' }}
              >
                <FiExternalLink className="w-3 h-3" />
                Google Maps पर खोलें / Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="flex-shrink-0 text-[10px] sm:text-[11px] py-2.5 px-4 flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left"
          style={{ background: '#2b2318', color: 'rgba(201,168,76,0.6)' }}
        >
          <p>FSSAI: 13322008000456 &nbsp;&middot;&nbsp; Open Daily 9:00 AM – 11:00 PM &nbsp;&middot;&nbsp; A1/10 Krishna Nagar, Delhi-110051</p>
          <p style={{ color: 'rgba(255,255,255,0.3)' }}>&copy; {new Date().getFullYear()} Delhi Kolhu Wale. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
