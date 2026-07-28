import React, { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import generated image assets
import turboImg from '../assets/images/turbo.jpg';
import vaultxImg from '../assets/images/Vaultx.jpg';
import dashboardImg from '../assets/images/dashboard.jpg';
import artchainImg from '../assets/images/Artchain.jpg';
import holypepeImg from '../assets/images/Holypepe.jpg';
import mechalinkHeroImg from '../assets/images/Mechalink.jpg';
import streamlineImg from '../assets/images/Streamline.jpg';
import wagmiverseImg from '../assets/images/Wagmiverse.jpg';
interface ExplorationSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

const EXPLORATIONS: ExplorationSlide[] = [
    {
    id: 'exp-1',
    title: 'Turbo – UI/UX Design. Hero Section',
    subtitle: 'Crafted to make a strong first impression.',
    category: 'Web3 / NFT',
    image: turboImg,
  },
  {
    id: 'exp-2',
    title: 'VaultX – Crypto Hero Section',
    subtitle: 'Redefining cryptocurrency with seamless transactions and top-tier security.',
    category: 'Web3 / Crypto',
    image: vaultxImg,
  },
  {
    id: 'exp-3',
    title: 'Business Operations Dashboard',
    subtitle: 'A comprehensive dashboard for managing and visualizing business operations.',
    category: 'SaaS / Dashboard',
    image: dashboardImg,
  },
  {
    id: 'exp-4',
    title: 'ArtChain – NFT',
    subtitle: 'An NFT marketplace platform for discovering, buying, and selling digital collectibles securely.',
    category: 'Web3 / NFT',
    image: artchainImg,
  },
  {
    id: 'exp-5',
    title: 'Holy Pepe – Meme Coin',
    subtitle: 'A playful, high-energy hero section for Holy Pepe, a meme coin brand built around community and humor.',
    category: 'Web3 / Meme Coin',
    image: holypepeImg,
  },
  {
    id: 'exp-6',
    title: 'MechaLink – Website Hero',
    subtitle: 'Promoting fast, hassle-free roadside assistance with a bold, trust-driven layout.',
    category: 'Web Design / Automotive',
    image: mechalinkHeroImg,
  },
  {
    id: 'exp-7',
    title: 'StreamlinePro – SaaS',
    subtitle: 'A workflow automation SaaS platform designed to simplify team collaboration.',
    category: 'SaaS / Web Design',
    image: streamlineImg,
  },
  {
    id: 'exp-8',
    title: 'WAGMIverse – Meme Hero',
    subtitle: 'Community-driven hero section for WAGMIverse, a meme coin brand blending crypto culture with playful character design.',
    category: 'Web3 / Meme Coin',
    image: wagmiverseImg,
  },
];

export const DesignExplorations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPLORATIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === EXPLORATIONS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === EXPLORATIONS.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentItem = EXPLORATIONS[currentIndex];

  return (
    <section id="explorations" className="w-full bg-[#fafaf8] dark:bg-[#0d0d0f] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Title matching reference image */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight">
            Design Explorations
          </h2>
        </div>

        {/* Central Display Card with Carousel */}
        <div className="relative group">
          {/* Main Artwork Container */}
          <div className="w-full bg-[#0d0e12] rounded-[24px] sm:rounded-[32px] overflow-hidden p-2 sm:p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[24px]"
              >
                <img
  src={currentItem.image}
  alt={currentItem.title}
  className="w-full h-auto aspect-[3/2] object-contain rounded-[16px] sm:rounded-[20px]"
/>
              </motion.div>
            </AnimatePresence>

            {/* Slide Information Overlay Bar */}
            <div className="mt-4 px-3 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                  {currentItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-medium text-white font-sans">
                  {currentItem.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
                {currentItem.subtitle}
              </p>
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white dark:bg-neutral-800/90 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-neutral-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white dark:bg-neutral-800/90 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-neutral-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots Matching Reference Image */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {EXPLORATIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 h-2.5 bg-neutral-900 dark:bg-white'
                  : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};