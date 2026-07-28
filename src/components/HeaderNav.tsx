import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderNavProps {
  onOpenContactModal: () => void;
  onBookCallClick: () => void;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenContactModal,
  onBookCallClick,
  activeSection = 'Home',
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Explorations', href: '#explorations' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (name: string, href: string) => {
    if (setActiveSection) {
      setActiveSection(name);
    }
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-4 sm:top-6 z-40 w-full px-4 flex justify-center">
      {/* Subtle Glassmorphism Frosted Frame / Backdrop Plate matching reference image */}
      <div className="relative flex items-center justify-center max-w-2xl w-full p-1.5 sm:p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
        
        {/* Floating Dark Pill Navigation Bar */}
        <nav className="bg-[#18181b] text-white px-3 sm:px-5 py-2.5 rounded-full shadow-lg border border-neutral-800/80 flex items-center justify-between gap-3 sm:gap-6 w-full">
        {/* Brand Logo */}
<div className="flex flex-col items-start leading-none pl-2 cursor-pointer" onClick={() => handleNavClick('Home', '#home')}>
  <span className="font-extrabold text-sm sm:text-base tracking-wider text-white font-mono uppercase">
    POSI
  </span>
  <span className="font-medium text-[8px] sm:text-[9px] tracking-wide text-neutral-400 font-sans normal-case">
    yourDesigner
  </span>
</div>

        {/* Center Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-300">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`transition-colors duration-200 cursor-pointer ${
                activeSection === item.name
                  ? 'text-white font-semibold'
                  : 'hover:text-white text-neutral-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Actions: Contact Pill Button + Sun/Theme Icon */}
        <div className="flex items-center gap-2">
          {/* White Pill Contact Button */}
          <button
            onClick={onOpenContactModal}
            className="bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-xs sm:text-sm px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            Contact
          </button>

          {/* Sun / Theme Icon Button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-800/90 hover:bg-neutral-700/80 border border-neutral-700/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200"
            title="Toggle theme mode"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            ) : (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-200" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white ml-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#18181b] text-white rounded-3xl p-4 shadow-2xl border border-neutral-800 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-3 px-2 py-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.href)}
                className="text-left text-sm font-medium text-neutral-300 hover:text-white py-1.5 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Ready to build?</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCallClick();
                }}
                className="bg-white text-neutral-900 font-semibold text-xs px-4 py-2 rounded-full"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

