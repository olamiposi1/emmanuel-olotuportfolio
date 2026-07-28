import React, { useState, useEffect } from 'react';
import { ChevronsRight, Instagram, Twitter, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  onBookCallClick: () => void;
  onOpenContactModal: () => void;
}

// Simple inline TikTok icon (lucide-react has no built-in TikTok glyph)
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.6 5.82c-.9-.6-1.53-1.53-1.72-2.62h-2.9v13.3c0 1.34-1.09 2.43-2.43 2.43a2.43 2.43 0 1 1 0-4.86c.24 0 .47.03.69.1v-2.94a5.37 5.37 0 0 0-.69-.05A5.37 5.37 0 0 0 4.18 16.2a5.37 5.37 0 0 0 5.37 5.37 5.37 5.37 0 0 0 5.37-5.37V9.01a7.9 7.9 0 0 0 4.6 1.47V7.55a4.98 4.98 0 0 1-2.92-1.73Z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onBookCallClick, onOpenContactModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#0d0d0f] text-neutral-900 dark:text-white font-['Plus_Jakarta_Sans',sans-serif] pt-16 sm:pt-24 pb-12 px-6 sm:px-12 lg:px-16 border-t border-neutral-200/80 dark:border-neutral-800 relative">
      <div className="max-w-[1340px] mx-auto">
        {/* Top Hero Call To Action Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 sm:pb-20">
          {/* Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-['Instrument_Serif',serif] font-normal tracking-tight text-neutral-900 dark:text-white leading-[0.95]">
            Let‘s Connect <br />
            <span className="italic font-light"></span>
          </h2>

          {/* Floating Pill "Hire Me Now!" Button matching reference pill */}
          <div>
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center gap-3 bg-[#18181b] hover:bg-black text-white p-1.5 pr-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white group-hover:bg-neutral-700 transition-colors">
                <ChevronsRight className="w-5 h-5 text-neutral-200 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-sm font-semibold tracking-wide font-sans">
                Hire Me Now!
              </span>
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-neutral-200/80 dark:bg-neutral-800 mb-12 sm:mb-16" />

        {/* Middle Section: Logo, Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 pb-12">
          {/* Left Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
                ✦
              </div>
              <span className="text-2xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight">
                Emmanuel Olotu
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans max-w-sm">
              UI/UX Designer with 3+ years of experience, currently expanding into web development and building real products through design and code.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400 pt-2">
              <a
                href="https://instagram.com/lajuicy99"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Lajuicy99"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@POSIyourDesigner"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Olamiposi1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Contact Info Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Email Address Column */}
            <div className="space-y-3 font-sans text-right">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                Email Address
              </h4>
              <div className="space-y-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                <p>
                  <a href="mailto:emmanuelolamiposi1@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                    emmanuelolamiposi1@gmail.com
                  </a>
                </p>
                <p>
                  <a href="mailto:Olowojnr99@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                    Olowojnr99@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Number Column */}
            <div className="space-y-3 font-sans text-right">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                Phone Number
              </h4>
              <div className="space-y-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                <p>+234 806 996 4725</p>
                <p>070 4343 5687</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-nav Links row matching Reference Image */}
        <div className="flex flex-wrap items-center justify-end gap-6 sm:gap-10 py-6 font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Selected Projects
          </a>
          <a href="#journey" className="hover:text-black dark:hover:text-white transition-colors">
            Journey
          </a>
          <a href="#explorations" className="hover:text-black dark:hover:text-white transition-colors">
            Explorations
          </a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">
            About Us
          </a>
        </div>

        {/* Bottom Copyright Divider */}
        <div className="w-full h-px bg-neutral-200/80 dark:bg-neutral-800 my-6" />

        {/* Copyright notice */}
        <div className="text-center font-sans text-xs text-neutral-400 dark:text-neutral-600">
          All rights reserved @EmmanuelOlotu 2026
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 rounded-full bg-[#18181b] hover:bg-black text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};