import React, { useState } from 'react';
import { X, Mail, Copy, Check, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA, ASSETS } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCallClick: () => void;
}

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

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onBookCallClick }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/lajuicy99' },
    { name: 'Twitter/X', url: 'https://twitter.com/Lajuicy99' },
    { name: 'TikTok', url: 'https://tiktok.com/@POSIyourDesigner' },
    { name: 'GitHub', url: 'https://github.com/Olamiposi1' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-neutral-100 dark:border-neutral-800 relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Profile Card Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0 border border-neutral-200 dark:border-neutral-700">
            <img
              src={ASSETS.avatar}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover object-top grayscale contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {PROFILE_DATA.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              UI/UX Designer &amp; <span className="text-[#ff5500] font-bold">Website Designer</span>
            </p>
            <div className="flex items-center gap-1.5 mt-1 text-[11px] text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Bio paragraph */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-700">
          UI/UX Designer with 3+ years of experience, building freelance income through UI/UX and website design work, currently expanding into web development and vibe-coding real products.
        </p>

        {/* Quick Contact Actions */}
        <div className="space-y-2.5">
          <button
            onClick={handleCopyEmail}
            className="w-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-xs sm:text-sm px-4 py-3 rounded-2xl flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span className="font-mono">{PROFILE_DATA.email}</span>
            </div>
            {copied ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-xs">
                <Check className="w-3.5 h-3.5" /> Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onBookCallClick();
            }}
            className="w-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-orange-400 dark:text-orange-500" />
            <span>Book a call</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-medium">
          <span>Socials:</span>
          <div className="flex items-center gap-3">
            {socialLinks.map((network) => (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-0.5"
              >
                {network.name === 'TikTok' ? (
                  <TikTokIcon className="w-3 h-3" />
                ) : (
                  <span>{network.name}</span>
                )}
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};