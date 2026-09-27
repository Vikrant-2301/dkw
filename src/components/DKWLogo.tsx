import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DKWLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  theme?: 'dark' | 'light' | 'original';
}

export const DKWLogo: React.FC<DKWLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  theme = 'original',
}) => {
  const sizeMap = {
    sm: { img: 36, text: 'text-sm sm:text-base', sub: 'text-[9px]' },
    md: { img: 44, text: 'text-base sm:text-lg xl:text-xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { img: 64, text: 'text-xl sm:text-2xl', sub: 'text-xs' },
    xl: { img: 88, text: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01] flex-shrink-0 ${className}`}
      aria-label="Delhi Kolhu Wale - Home"
    >
      {/* Precision Extracted Emblem Badge from Brand Banner */}
      <div className="relative flex-shrink-0 drop-shadow-sm">
        <div
          style={{ width: currentSize.img, height: currentSize.img }}
          className="relative rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-amber-400 via-amber-200 to-amber-500 shadow-sm ring-1 ring-amber-300/80"
        >
          <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5 overflow-hidden">
            <Image
              src="/logo.png"
              alt="DKW Delhi Kolhu Wale Logo"
              width={currentSize.img}
              height={currentSize.img}
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>
      </div>

      {/* Brand Typography with Guaranteed Single-Line Fit */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span
            className={`font-black tracking-wide uppercase font-serif ${
              theme === 'light'
                ? 'text-white'
                : 'text-stone-900 group-hover:text-red-700 transition-colors'
            } ${currentSize.text} leading-tight`}
          >
            DELHI KOLHU WALE
          </span>
          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-900 border border-amber-400/50 leading-none">
            TM
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 text-stone-600 mt-0.5 whitespace-nowrap">
            <span
              className={`font-bold text-red-600 ${currentSize.sub} font-sans leading-none`}
            >
              दिल्ली कोल्हू वाले
            </span>
            <span className="text-amber-500 text-[10px] leading-none">•</span>
            <span
              className={`${
                theme === 'light' ? 'text-amber-200' : 'text-stone-500'
              } font-medium ${currentSize.sub} leading-none`}
            >
              100% Pure Oil &amp; Ghee
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
