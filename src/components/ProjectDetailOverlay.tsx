import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem } from '../projectsData';

interface ProjectDetailOverlayProps {
  project: ProjectItem | null;
  onClose: () => void;
  onBookCallClick: () => void;
}

export const ProjectDetailOverlay: React.FC<ProjectDetailOverlayProps> = ({
  project,
  onClose,
  onBookCallClick,
}) => {
  useEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project]);

  if (!project) return null;

  const { details } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-[#fafaf8] dark:bg-[#0d0d0f] text-neutral-900 dark:text-white font-['Plus_Jakarta_Sans',sans-serif] z-50 pt-4 pb-20"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8">
        {/* Back to Home Button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white mb-6 sm:mb-10 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Project Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight mb-8 sm:mb-10">
          {project.title}
        </h1>

        {/* Hero Mockup Banner */}
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121214] p-3 sm:p-6 shadow-xl border border-neutral-800/80 mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[580px] object-contain rounded-xl sm:rounded-2xl mx-auto shadow-md"
          />
        </div>

        {/* Metadata Bar (Industry, Year, Tool) */}
        <div className="grid grid-cols-3 gap-4 border-y border-neutral-200/80 dark:border-neutral-800 py-6 mb-12 text-left font-sans">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
              INDUSTRY
            </p>
            <p className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white">
              {details.industry}
            </p>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
              YEAR
            </p>
            <p className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white">
              {details.year}
            </p>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
              TOOL
            </p>
            <p className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white">
              {details.tool}
            </p>
          </div>
        </div>

        {/* High Level Case Study Content */}
        <div className="space-y-12 text-neutral-800 dark:text-neutral-300 leading-relaxed font-sans max-w-3xl">
          {/* Overview */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-wide">
              Project overview
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {details.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-wide">
              Problem
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {details.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-wide">
              Solution
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {details.solution}
            </p>
          </div>

          {/* Feature Sections with UI mocks */}
          {details.sections.map((section, idx) => (
            <div key={idx} className="pt-8 space-y-6 border-t border-neutral-200/60 dark:border-neutral-800">
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-[1.8]">
                  {section.description}
                </p>
              </div>

              {section.image && (
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121214] p-3 sm:p-6 shadow-xl border border-neutral-800/80 my-8">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto max-h-[520px] object-contain rounded-xl sm:rounded-2xl mx-auto shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Box matching Reference Image 2 */}
        <div className="mt-20 p-8 sm:p-14 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-xs text-center flex flex-col items-center justify-center space-y-4">
          <h3 className="text-3xl sm:text-5xl font-['Instrument_Serif',serif] text-neutral-900 dark:text-white font-normal">
            Let's Build Something Meaningful
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed font-sans">
            I'm open to freelance design work, product collaborations, and long-term partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={onBookCallClick}
              className="bg-[#18181b] hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              Work With Me
            </button>
            <button
              onClick={onClose}
              className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium px-5 py-3 rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Read CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};