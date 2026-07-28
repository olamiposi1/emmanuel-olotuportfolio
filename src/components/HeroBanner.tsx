import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, ASSETS } from '../data';

interface HeroBannerProps {
  onBookCallClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onBookCallClick }) => {
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-12 pb-8 sm:pb-12 text-center flex flex-col items-center justify-center">
      {/* Headlines Container - Centralized */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {/* Line 1: Hi, I'm [Avatar] Emmanuel Olotu! */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
          <span>Hi, I'm</span>
          
          {/* Avatar Badge directly inside line 1 */}
          <div className="inline-flex items-center justify-center relative my-1 group cursor-pointer">
            <div className="w-10 h-10 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-2xl overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
              <img
                src={ASSETS.avatar}
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle floating glow backdrop */}
            <div className="absolute inset-0 bg-neutral-900/10 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/20 transition-colors" />
          </div>

          <span>Emmanuel Olotu!</span>
        </div>

        {/* Line 2: I'm a Product Designer and a Website designer. */}
        <div className="text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3">
          <span className="font-light text-neutral-400 dark:text-neutral-500">I'm a</span>
<span className="font-bold text-neutral-900 dark:text-white">Product Designer</span>
<span className="font-light text-neutral-400 dark:text-neutral-500">and a</span>
          <span className="font-bold text-[#ff5500]">Website designer.</span>

          {/* Open to Work Badge */}
          <div className="relative inline-block my-1">
            <button
              onMouseEnter={() => setShowStatusTooltip(true)}
              onMouseLeave={() => setShowStatusTooltip(false)}
              onClick={onBookCallClick}
              className="group flex items-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-200/90 px-3.5 py-1.5 rounded-full shadow-badge hover:shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm font-medium text-neutral-800"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{PROFILE_DATA.status}</span>
            </button>

            {/* Hover Tooltip */}
            {showStatusTooltip && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 p-2.5 bg-neutral-900 text-white rounded-xl shadow-xl text-xs z-30 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-start gap-2 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Available for Q3/Q4 2026</p>
                    <p className="text-neutral-300 text-[11px] mt-0.5">Open to website design projects & UI/UX.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtext Body Paragraph - Centralized */}
      <p className="mt-6 sm:mt-8 text-neutral-600 dark:text-neutral-400 font-normal text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-center">
        {PROFILE_DATA.subtext.split('—').map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-neutral-400 font-light mx-1.5">—</span>}
            {part}
          </React.Fragment>
        ))}
      </p>

      {/* Centralized CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative">
        {/* Left Primary Button: "Get in touch" */}
        <button
          onClick={onBookCallClick}
          className="bg-[#18181b] hover:bg-black text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl shadow-md border border-neutral-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          Get in touch
        </button>

        {/* Right Secondary Button: "Read CV ↗" */}
        <a
          href="https://docs.google.com/document/d/1ZB458mZSVAw4SjBBQEqkWEioS0PJHp3c/edit?usp=sharing&ouid=103368779861872873422&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
          className="bg-[#f0f0f2] hover:bg-[#e4e4e8] text-neutral-900 font-medium text-sm sm:text-base px-6 py-3 rounded-xl border border-neutral-300/60 shadow-2xs hover:shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Read CV</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-600" />
        </a>
      </div>
    </section>
  );
};
