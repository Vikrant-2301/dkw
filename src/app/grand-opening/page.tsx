'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import './grand-opening.css';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiNavigation,
  FiStar,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const OPENING_DATE = new Date('2026-11-01T09:00:00+05:30');

function getTimeLeft() {
  const difference = OPENING_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOpen: true };
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference % 86400000) / 3600000),
    minutes: Math.floor((difference % 3600000) / 60000),
    seconds: Math.floor((difference % 60000) / 1000),
    isOpen: false,
  };
}

function useOpeningCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isOpen: false });

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return time;
}

const products = [
  {
    number: '01',
    hindi: 'सरसों का तेल',
    english: 'Cold-Pressed Mustard Oil',
    description: 'तीखा, असली और आँखों के सामने निकला हुआ पारंपरिक सरसों का तेल।',
    symbol: 'सरसों',
    tone: 'mustard',
    image: '/images/4.png',
  },
  {
    number: '02',
    hindi: 'मूंगफली का तेल',
    english: 'Groundnut Oil',
    description: 'धीमी आंच पर तैयार, दैनिक भोजन और उत्तम स्वास्थ्य का साथी।',
    symbol: 'मूंगफली',
    tone: 'peanut',
    image: '/images/3.png',
  },
  {
    number: '03',
    hindi: 'तिल का तेल',
    english: 'Sesame Oil',
    description: 'प्राकृतिक गुणों से भरपूर, खान-पान और पूजा के लिए सर्वोत्तम।',
    symbol: 'तिल',
    tone: 'sesame',
    image: '/images/2.png',
  },
  {
    number: '04',
    hindi: 'नारियल का तेल',
    english: 'Pure Coconut Oil',
    description: 'ताज़े नारियल से बना सुगंधित और 100% शुद्ध तेल।',
    symbol: 'नारियल',
    tone: 'coconut',
    image: '/images/1.png',
  },
  {
    number: '05',
    hindi: 'A2 बिलोना देसी घी',
    english: 'Traditional Bilona Ghee',
    description: 'पारंपरिक मथनी से तैयार, दानेदार और सुगंधित शुद्ध देसी घी।',
    symbol: 'शुद्ध घी',
    tone: 'ghee',
    image: '/images/2.png',
  },
];

function FloralMark({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      width="40"
      height="40"
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
    >
      <g stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="50" cy="24" rx="9" ry="20" />
        <ellipse cx="50" cy="76" rx="9" ry="20" />
        <ellipse cx="24" cy="50" rx="20" ry="9" />
        <ellipse cx="76" cy="50" rx="20" ry="9" />
        <ellipse cx="31.5" cy="31.5" rx="8" ry="18" transform="rotate(-45 31.5 31.5)" />
        <ellipse cx="68.5" cy="31.5" rx="8" ry="18" transform="rotate(45 68.5 31.5)" />
        <ellipse cx="31.5" cy="68.5" rx="8" ry="18" transform="rotate(45 31.5 68.5)" />
        <ellipse cx="68.5" cy="68.5" rx="8" ry="18" transform="rotate(-45 68.5 68.5)" />
        <circle cx="50" cy="50" r="9" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

function DecorativeCorners() {
  return (
    <>
      <span className="dkw-corner dkw-corner-tl" aria-hidden="true" style={{ position: 'absolute', width: '40px', height: '40px' }}><FloralMark /></span>
      <span className="dkw-corner dkw-corner-tr" aria-hidden="true" style={{ position: 'absolute', width: '40px', height: '40px' }}><FloralMark /></span>
      <span className="dkw-corner dkw-corner-bl" aria-hidden="true" style={{ position: 'absolute', width: '40px', height: '40px' }}><FloralMark /></span>
      <span className="dkw-corner dkw-corner-br" aria-hidden="true" style={{ position: 'absolute', width: '40px', height: '40px' }}><FloralMark /></span>
    </>
  );
}

export default function GrandOpeningPage() {
  const { days, hours, minutes, seconds, isOpen } = useOpeningCountdown();

  // Client hydration check to prevent any FOUC on SSR
  const [mounted, setMounted] = useState(false);
  const [showInvitation, setShowInvitation] = useState(true);
  const [closingInvitation, setClosingInvitation] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerConfetti = useCallback(() => {
    try {
      const colors = ['#f4a51c', '#ffd86b', '#e7a61c', '#8c2425', '#fff5dc'];
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.6, x: 0.5 },
        colors,
        zIndex: 10002,
      });
    } catch {
      // Graceful fallback
    }
  }, []);

  const closeInvitation = useCallback(() => {
    if (closingInvitation) return;
    setClosingInvitation(true);
    triggerConfetti();
    window.setTimeout(() => setShowInvitation(false), 850);
  }, [closingInvitation, triggerConfetti]);

  useEffect(() => {
    if (!showInvitation || !mounted) return;
    const timer = window.setTimeout(closeInvitation, 4200);
    return () => window.clearTimeout(timer);
  }, [showInvitation, mounted, closeInvitation]);

  return (
    <main className="dkw-page">
      {/* ============================================================
          GRAND OPENING INTRO ANIMATION (HYDRATION-SAFE OVERLAY)
          ============================================================ */}
      {mounted && showInvitation && (
        <div
          className={`dkw-intro-overlay ${closingInvitation ? 'is-leaving' : ''}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: '#1f0609',
            color: '#fff0c7',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Grand opening invitation preview"
        >
          <div className="dkw-intro-curtain" />

          <div className="dkw-intro-content">
            <div className="dkw-intro-seal">
              <Image src="/logo.png" alt="Delhi Kolhu Wale" width={104} height={104} priority />
            </div>

            <div className="dkw-intro-kicker">Special Invitation · Grand Opening</div>

            <h2 className="dkw-intro-title">
              दिल्ली कोल्हू वाले
              <span>भव्य शुभारंभ</span>
            </h2>

            <p className="dkw-intro-copy">
              शुद्धता और परंपरा के इस पावन अवसर पर आपका हार्दिक स्वागत है।
              आइए, हमारे नए आउटलेट के शुभारंभ का हिस्सा बनिए।
            </p>

            <div className="dkw-intro-date">
              <span>1 November 2026 · रविवार सुबह 9 बजे से</span>
            </div>

            <button className="dkw-intro-open" onClick={closeInvitation}>
              ✦ निमंत्रण स्वीकार करें / Enter Grand Opening ✦
            </button>
          </div>
        </div>
      )}

      {/* ============================================================
          TOP ANNOUNCEMENT RIBBON
          ============================================================ */}
      <div className="dkw-topline">
        <span className="dot">✦</span>
        <span>आँखों के सामने निकलता</span>
        <span className="dot">·</span>
        <span>भरोसे से बिकता है</span>
        <span className="dot">✦</span>
        <span>100% शुद्ध तेल और देसी घी</span>
        <span className="dot">·</span>
        <span>कृष्णा नगर, दिल्ली</span>
        <span className="dot">✦</span>
      </div>

      {/* ============================================================
          HERO SECTION (BALANCED SINGLE SCREEN ON DESKTOP, BOLD TEXT)
          ============================================================ */}
      <section className="dkw-hero" id="top">
        <DecorativeCorners />
        <div className="dkw-hero-glow" />

        {/* Thematic Asset 1: Pure Golden Splash behind headline */}
        <Image
          className="dkw-hero-oil-splash"
          src="/images/1.png"
          alt=""
          width={500}
          height={500}
          priority
        />

        {/* Header Bar: Brand Identity on Left, Visit Pill on Right */}
        <header className="dkw-hero-header" aria-label="Brand and navigation">
          <div className="dkw-hero-brand">
            <div className="dkw-hero-brand-logo">
              <Image src="/logo.png" alt="Delhi Kolhu Wale logo" width={68} height={68} priority />
            </div>
            <div>
              <div className="dkw-hero-brand-name">DELHI KOLHU WALE</div>
              <div className="dkw-hero-brand-sub dkw-hindi">दिल्ली कोल्हू वाले · शुद्धता का भरोसा</div>
            </div>
          </div>

          <a className="dkw-nav-pill" href="#visit">
            VISIT OUR NEW OUTLET ↗
          </a>
        </header>

        {/* Main Content: Brand Heading & Actions on Left, Royal Invitation Card on Right */}
        <div className="dkw-hero-content">
          {/* Left Column: Authoritative Typography */}
          <div className="dkw-hero-copy">
            <div className="dkw-eyebrow">
              <FiStar />
              <span>आप सादर आमंत्रित हैं · Grand Opening</span>
              <FiStar />
            </div>

            <h1>
              परंपरा का स्वाद,
              <br />
              <em>अब आपके और करीब।</em>
            </h1>

            <p className="dkw-hero-description">
              दिल्ली कोल्हू वाले के नए आउटलेट के शुभारंभ पर आपका हार्दिक स्वागत है।
              आइए, <strong>शुद्ध तेल और देसी घी</strong> के स्वाद और भरोसे का उत्सव साथ मनाएँ।
            </p>

            <div className="dkw-hero-actions">
              <a className="dkw-btn dkw-btn-gold" href="tel:9599207645">
                <FiPhone /> Call: +91 9599207645
              </a>
              <a
                className="dkw-btn dkw-btn-outline"
                href="https://wa.me/919599207645?text=Hello%20DKW%2C%20I%20want%20to%20visit%20your%20new%20outlet%20grand%20opening%20on%201st%20November!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>

            <div className="dkw-trust-row">
              <span><FiCheckCircle /> 100% शुद्ध तेल और घी</span>
              <span><FiCheckCircle /> परिवार के स्वास्थ्य के लिए</span>
              <span><FiCheckCircle /> दिल्ली में आपका स्वागत</span>
            </div>
          </div>

          {/* Right Column: Grand Opening Royal Invitation Card */}
          <div className="dkw-invitation" aria-label="Grand opening invitation card">
            <div className="dkw-invitation-inner">
              {/* Thematic Asset 2: Droplet Watermark Accent */}
              <Image
                className="dkw-invitation-oil"
                src="/images/2.png"
                alt=""
                width={120}
                height={140}
              />

              <div style={{ width: '46px', height: '46px' }}>
                <FloralMark className="dkw-card-flower" />
              </div>

              <div className="dkw-card-overline">Delhi Kolhu Wale invites you</div>
              <div className="dkw-card-title">
                शुभारंभ
                <span>मंगलमय हो</span>
              </div>
              <div className="dkw-card-rule"><span>✦</span></div>
              <div className="dkw-card-date">1 November 2026</div>
              <div className="dkw-card-time">SUNDAY · 9:00 AM ONWARDS</div>
              <div className="dkw-card-address">
                A1/10, Near Chhachi Building,<br />
                Main Road, Krishna Nagar,<br />
                Delhi – 110051
              </div>
              <div className="dkw-card-seal">
                शुभ
                <span>आरंभ</span>
                ✦ ✦ ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DYNAMIC MARQUEE (NO FORBIDDEN PHRASES)
          ============================================================ */}
      <div className="dkw-marquee" aria-label="Pure Cold-pressed Oil and Desi Ghee">
        <div className="dkw-marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              कोल्ड प्रेस्ड शुद्ध तेल <b>✦</b> शुद्ध A2 बिलोना देसी घी <b>✦</b> परंपरा और भरोसा <b>✦</b>
              सरसों · मूंगफली · तिल · नारियल <b>✦</b> स्वाद जो घर जैसा हो <b>✦</b>
              आँखों के सामने निकलता, भरोसे से बिकता है <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================
          PRODUCTS SECTION (THEMATIC USE OF 1-4.PNG)
          ============================================================ */}
      <section className="dkw-section dkw-products-section" id="products">
        <div className="dkw-section-inner">
          <div className="dkw-products-heading-row">
            <div>
              <div className="dkw-section-kicker">From our family to yours</div>
              <h2 className="dkw-section-heading">हर रसोई की अपनी कहानी।</h2>
            </div>
            <p className="dkw-section-intro">
              रोज़ के खाने से लेकर खास मौकों तक — हमारे यहाँ तेल और देसी घी की
              पारंपरिक और शुद्ध पसंद का स्वागत है।
            </p>
          </div>

          <div className="dkw-product-grid">
            {products.map((product) => (
              <article className="dkw-product-card" key={product.number}>
                <span className="dkw-product-number">{product.number}</span>
                <div className={`dkw-product-art ${product.tone}`}>
                  <Image
                    className="dkw-product-art-img"
                    src={product.image}
                    alt={`${product.english} visual`}
                    width={140}
                    height={140}
                  />
                </div>
                <div className="dkw-product-hindi">{product.hindi}</div>
                <div className="dkw-product-english">{product.english}</div>
                <p className="dkw-product-description">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STORY & LIVE EXTRACTION (THEMATIC USE OF 3.PNG)
          ============================================================ */}
      <section className="dkw-section dkw-story-section">
        <div className="dkw-section-inner dkw-story-grid">
          <div className="dkw-story-illustration" aria-hidden="true">
            {/* Thematic Asset 3: Pure Golden Stream pouring into ripple puddle */}
            <Image
              className="dkw-story-pour-img"
              src="/images/3.png"
              alt="Live Pure Oil Extraction"
              width={340}
              height={340}
            />

            <div className="dkw-story-badge">
              ✦ शुद्धता का भरोसा ✦
            </div>
          </div>

          <div className="dkw-story-copy">
            <div className="dkw-section-kicker">Rooted in tradition</div>
            <h2 className="dkw-section-heading">स्वाद में परंपरा,<br />रिश्तों में भरोसा।</h2>
            <p className="dkw-section-intro">
              कुछ स्वाद सिर्फ खाने का हिस्सा नहीं होते — वे यादों, परिवार और
              परंपरा से जुड़े होते हैं। दिल्ली कोल्हू वाले में आपका स्वागत है।
            </p>
            <div className="dkw-story-quote">
              “एक बार सेवा का अवसर अवश्य दें — जो एक बार आता है, वो बार-बार आता है।”
            </div>
            <div className="dkw-story-points">
              <div className="dkw-story-point">
                <FiCheckCircle />
                <span>कोल्ड प्रेस्ड सरसों, मूंगफली, तिल और नारियल तेल की पसंद</span>
              </div>
              <div className="dkw-story-point">
                <FiCheckCircle />
                <span>बिलोना विधि का A2 गाय का शुद्ध देसी घी</span>
              </div>
              <div className="dkw-story-point">
                <FiCheckCircle />
                <span>कृष्णा नगर में नए आउटलेट पर आपका हार्दिक स्वागत है</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COUNTDOWN SECTION
          ============================================================ */}
      <section className="dkw-section dkw-countdown-section" id="countdown">
        <div className="dkw-section-inner dkw-countdown-layout">
          <div>
            <div className="dkw-section-kicker">Mark your calendar</div>
            <h2 className="dkw-section-heading">
              {isOpen ? 'हमारा नया आउटलेट खुल चुका है!' : 'उद्घाटन में अब कितना समय बाकी है?'}
            </h2>
            <p className="dkw-section-intro">
              1 नवंबर 2026, सुबह 9 बजे से — कृष्णा नगर, दिल्ली में हमारे नए आउटलेट पर
              पधारें। हमें आपकी प्रतीक्षा रहेगी।
            </p>
          </div>
          <div>
            <div className="dkw-countdown-boxes" aria-label="Countdown to grand opening">
              {[
                { value: days, label: 'Days / दिन' },
                { value: hours, label: 'Hours / घंटे' },
                { value: minutes, label: 'Minutes / मिनट' },
                { value: seconds, label: 'Seconds / सेकंड' },
              ].map((item) => (
                <div className="dkw-time-box" key={item.label}>
                  <div className="dkw-time-number" suppressHydrationWarning>
                    {mounted ? String(item.value).padStart(2, '0') : '--'}
                  </div>
                  <div className="dkw-time-label">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="dkw-countdown-note">
              ✦ &nbsp; रविवार, 1 नवंबर 2026 · सुबह 9 बजे से &nbsp; ✦
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          VISIT STORE & GOOGLE MAP SECTION
          ============================================================ */}
      <section className="dkw-section dkw-visit-section" id="visit">
        <div className="dkw-section-inner">
          <div className="dkw-section-kicker">Come say hello</div>
          <h2 className="dkw-section-heading">रास्ता आपके दिल से,<br />मिलते हैं कृष्णा नगर में।</h2>
          <p className="dkw-section-intro">
            उद्घाटन के दिन हमसे मिलने आइए। नीचे दिए गए पते पर पहुँचें या दिशा-निर्देश
            खोलकर अपनी यात्रा आसान बनाएँ।
          </p>

          <div className="dkw-visit-grid">
            <div className="dkw-visit-card">
              <h3>आपका इंतज़ार रहेगा।</h3>
              <div className="dkw-detail-row">
                <div className="dkw-detail-icon"><FiCalendar /></div>
                <div>
                  <div className="dkw-detail-label">Grand opening</div>
                  <div className="dkw-detail-value">Sunday, 1 November 2026</div>
                </div>
              </div>
              <div className="dkw-detail-row">
                <div className="dkw-detail-icon"><FiClock /></div>
                <div>
                  <div className="dkw-detail-label">Opening time</div>
                  <div className="dkw-detail-value">9:00 AM onwards</div>
                </div>
              </div>
              <div className="dkw-detail-row">
                <div className="dkw-detail-icon"><FiMapPin /></div>
                <div>
                  <div className="dkw-detail-label">Visit us</div>
                  <div className="dkw-detail-value">A1/10, Near Chhachi Building, Main Road, Krishna Nagar, Delhi – 110051</div>
                </div>
              </div>
              <div className="dkw-detail-row">
                <div className="dkw-detail-icon"><FiPhone /></div>
                <div>
                  <div className="dkw-detail-label">Call for details</div>
                  <a className="dkw-detail-value" href="tel:9599207645">+91 9599207645</a>
                </div>
              </div>
              <div className="dkw-hero-actions">
                <a className="dkw-btn dkw-btn-gold" href="https://maps.app.goo.gl/DvzUPscBrJFgtv1Y7" target="_blank" rel="noopener noreferrer">
                  <FiNavigation /> Get Directions <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="dkw-map-wrap">
              <div className="dkw-map-label"><FiMapPin /> DELHI KOLHU WALE · KRISHNA NAGAR</div>
              <iframe
                title="Delhi Kolhu Wale store location in Krishna Nagar, Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.214479904321!2d77.27458617549646!3d28.66037297564757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2523ae2e2b%3A0x5eaa96900853cafc!2sDELHI%20KOLHU%20WALE!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL INVITATION CALL TO ACTION
          ============================================================ */}
      <section className="dkw-final-cta">
        <div style={{ width: '46px', height: '46px', margin: '0 auto 14px' }}>
          <FloralMark className="dkw-final-flower" />
        </div>
        <h2>शुभारंभ में ज़रूर पधारें।</h2>
        <p>
          आपका आना हमारे लिए खुशी की बात होगी। अपने परिवार के साथ आइए और
          दिल्ली कोल्हू वाले के नए सफ़र का हिस्सा बनिए।
        </p>
        <div className="dkw-hero-actions">
          <a className="dkw-btn dkw-btn-gold" href="tel:9599207645"><FiPhone /> +91 9599207645</a>
          <a
            className="dkw-btn dkw-btn-outline"
            href="https://wa.me/919599207645?text=Hello%20DKW%2C%20I%20want%20to%20visit%20your%20new%20outlet%20grand%20opening%20on%201st%20November!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>
      </section>

      {/* ============================================================
          FOOTER (NO FORBIDDEN PHRASES)
          ============================================================ */}
      <footer className="dkw-footer">
        <div className="dkw-footer-inner">
          <div><strong>DELHI KOLHU WALE</strong> · आँखों के सामने निकलता, भरोसे से बिकता है</div>
          <div>Open Daily 9:00 AM – 11:00 PM · A1/10 Krishna Nagar, Delhi-110051</div>
          <div>© {new Date().getFullYear()} Delhi Kolhu Wale. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
