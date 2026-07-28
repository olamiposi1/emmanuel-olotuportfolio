import React, { useState } from 'react';
import { BOOK_DATA, ASSETS } from '../data';
import { BookOpen, Sparkles, X, Quote } from 'lucide-react';

export const ReadingCard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-[#f2f4f6] hover:bg-[#eff1f4] rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-neutral-200/50 shadow-soft flex flex-col justify-between h-full group cursor-pointer"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
            What I'm reading
          </span>
          <BookOpen className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
        </div>

        {/* Title & Author */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-snug">
            {BOOK_DATA.title}
          </h4>
          <p className="text-[11px] font-medium text-neutral-400 mt-0.5">
            {BOOK_DATA.author}
          </p>
        </div>

        {/* Book Cover Visual matching reference */}
        <div className="mt-3 flex justify-end relative">
          <div className="w-20 sm:w-24 h-28 sm:h-32 rounded-lg overflow-hidden shadow-card border border-neutral-200/80 transform transition-transform group-hover:scale-105 group-hover:-rotate-2 bg-neutral-200">
            <img
              src={ASSETS.dieterBook}
              alt={BOOK_DATA.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-neutral-100 relative animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md shrink-0">
                <img
                  src={ASSETS.dieterBook}
                  alt={BOOK_DATA.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60 uppercase">
                  {BOOK_DATA.status}
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-1.5 leading-snug">
                  {BOOK_DATA.title}
                </h3>
                <p className="text-xs text-neutral-500 font-medium">By {BOOK_DATA.author}</p>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] font-medium text-neutral-600 mb-1">
                    <span>Reading progress</span>
                    <span>{BOOK_DATA.progressPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neutral-900 rounded-full"
                      style={{ width: `${BOOK_DATA.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              {BOOK_DATA.description}
            </p>

            {/* Favorite Quote */}
            {BOOK_DATA.favoriteQuote && (
              <div className="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-100 flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-xs italic text-neutral-700">
                  "{BOOK_DATA.favoriteQuote}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
