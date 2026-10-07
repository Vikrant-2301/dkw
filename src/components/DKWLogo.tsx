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
    sm: { imgClass: 'w-7 h-7 sm:w-8 sm:h-8', text: 'text-xs sm:text-sm', sub: 'text-[8px] sm:text-[9px]' },
    md: { imgClass: 'w-8 h-8 sm:w-11 sm:h-11', text: 'text-[13px] sm:text-base xl:text-xl', sub: 'text-[8px] sm:text-[10px]' },
    lg: { imgClass: 'w-12 h-12 sm:w-16 sm:h-16', text: 'text-lg sm:text-2xl', sub: 'text-xs' },
    xl: { imgClass: 'w-16 h-16 sm:w-20 sm:h-20', text: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label="Delhi Kolhu Wale - Home"
    >
      {/* Precision Extracted Emblem Badge from Brand Banner */}
      <div className="relative flex-shrink-0 drop-shadow-sm">
        <div
          className={`${currentSize.imgClass} relative rounded-lg sm:rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-amber-400 via-amber-200 to-amber-500 shadow-sm ring-1 ring-amber-300/80`}
        >
          <div className="w-full h-full bg-white rounded-[7px] sm:rounded-[10px] flex items-center justify-center p-0.5 overflow-hidden">
            <Image
              src="/logo.png"
              alt="DKW Delhi Kolhu Wale Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>
      </div>

      {/* Brand Typography with Guaranteed Single-Line Fit */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <span
            className={`font-black tracking-wide uppercase font-serif ${
              theme === 'light'
                ? 'text-white'
                : 'text-stone-900 group-hover:text-red-700 transition-colors'
            } ${currentSize.text} leading-tight`}
          >
            DELHI KOLHU WALE
          </span>
          <span className="text-[7px] sm:text-[9px] font-black px-1 sm:px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-900 border border-amber-400/50 leading-none">
            TM
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1 sm:gap-1.5 text-stone-600 mt-0.5 whitespace-nowrap">
            <span
              className={`font-bold text-red-600 ${currentSize.sub} font-sans leading-none`}
            >
              दिल्ली कोल्हू वाले
            </span>
            <span className="text-amber-500 text-[8px] sm:text-[10px] leading-none">•</span>
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
