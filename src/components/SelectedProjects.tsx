import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_LIST, ProjectItem } from '../projectsData';

interface SelectedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'Web/Mobile App' | 'Websites'>('Web/Mobile App');

  const filteredProjects = PROJECTS_LIST.filter((p) => p.category === activeTab);

  return (
    <section
  id="projects"
  className="w-full bg-[#fafaf8] dark:bg-[#0d0d0f] py-24 sm:py-36 px-10 sm:px-16 lg:px-24 transition-colors duration-300"
>
         <div className="max-w-[1700px] w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14 sm:mb-20">
          {/* Small Uppercase Label */}
          <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans">
            CASE STUDIES
          </span>

          {/* Large Editorial Heading */}
          <h2 className="text-5xl sm:text-7xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight leading-none">
            Selected Projects
          </h2>

          {/* Segmented Filter Control */}
          <div className="mt-6 inline-flex items-center p-1.5 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-full border border-neutral-200/70 dark:border-neutral-700 shadow-2xs">
            <button
              onClick={() => setActiveTab('Web/Mobile App')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium font-sans transition-all duration-300 cursor-pointer ${
                activeTab === 'Web/Mobile App'
                  ? 'bg-[#18181b] text-white shadow-sm'
                  : 'bg-white/0 text-neutral-600 hover:text-neutral-900 hover:bg-white/60 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-700/60'
              }`}
            >
              Web/Mobile Apps
            </button>
            <button
              onClick={() => setActiveTab('Websites')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium font-sans transition-all duration-300 cursor-pointer ${
                activeTab === 'Websites'
                  ? 'bg-[#18181b] text-white shadow-sm'
                  : 'bg-white/0 text-neutral-600 hover:text-neutral-900 hover:bg-white/60 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-700/60'
              }`}
            >
              Websites
            </button>
          </div>
        </div>

        {/* Portfolio Grid: Generous 40px - 56px Gap for ultra-spacious layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 lg:gap-10 w-full"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onClick={() => {
  if (project.actionText === 'View Live Site' && project.actionUrl) {
    window.open(project.actionUrl, '_blank', 'noopener,noreferrer');
  } else {
    onSelectProject(project);
  }
}}
                className="group bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-6 lg:p-7 border border-black/[0.05] dark:border-white/[0.05] shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] transition-all duration-350 ease-out flex flex-col justify-between cursor-pointer hover:-translate-y-2.5 overflow-hidden"
              >
                {/* Top Thumbnail Preview Container */}
                <div className={`rounded-2xl overflow-hidden mb-5 relative h-44 sm:h-52 lg:h-60 ${project.cardBg} flex items-center justify-center p-3 sm:p-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[18px] shadow-xs group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Project Info Section */}
                <div className="flex flex-col justify-between flex-1 space-y-4">
                  {/* Title */}
                  <h3 className={`font-serif text-lg sm:text-xl font-bold tracking-tight ${project.textColor} px-1`}>
                    {project.title}
                  </h3>

                  {/* Description Panel with Speech Bubble / Pill Notch */}
                  <div className="relative pt-2">
                    {/* Top Notch Tab matching Reference Image */}
                    <div className={`w-16 h-4 rounded-t-xl absolute -top-2 left-6 ${project.badgeColor.split(' ')[0]}`} />

                    <div
                      className={`${project.badgeColor} p-5 sm:p-6 rounded-[24px] relative font-sans text-[13px] sm:text-[14px] text-neutral-700 leading-[1.6] flex flex-col justify-between space-y-4`}
                    >
                      <p className="font-normal text-neutral-700/90 dark:text-neutral-200">
  {project.shortDescription}
</p>

                      {/* CTA Link */}
                      <div className="flex items-center justify-end gap-1.5 text-[15px] font-semibold text-neutral-900 dark:text-white pt-2 group/link">
                        <span className="group-hover/link:underline">{project.actionText}</span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-900 dark:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};