import React from 'react';
import { motion } from 'motion/react';

export interface JourneyItem {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  description?: string;
}

export const JOURNEY_LIST: JourneyItem[] = [
  {
    id: 'j-1',
    company: 'Micotech',
    role: 'UI/UX Design Intern',
    location: 'Lagos, Nigeria',
    period: '2025 - Present',
    description: 'Designed visually appealing and user-friendly interfaces for digital products, including websites and mobile apps. Created wireframes & prototypes to test and refine designs.',
  },
  {
    id: 'j-2',
    company: 'Amakre Blofintech Firm',
    role: 'UX/UI Designer',
    period: '2025 - Present',
    description: 'Responsible for designing intuitive digital experiences, translating requirements into functional interfaces, and improving product usability. Additionally, I support and mentor tech students in design, providing guidance on UI/UX processes, tools, and industry best practices.',
  },
  {
    id: 'j-4',
    company: 'I4G Zuri',
    role: 'UI/UX Design Internship',
    location: 'Nigeria',
    period: 'March 2022 - Sept 2022',
    description: 'Designed visually appealing and user-friendly interfaces for digital products, including websites and mobile apps. Created wireframes & prototypes to test and refine designs. Collaborated with cross-functional teams, including developers and stakeholders, to ensure designs met both design and technical requirements.',
  },
];

export const ProfessionalJourney: React.FC = () => {
  return (
    <section id="journey" className="w-full bg-[#fafaf8] dark:bg-[#0d0d0f] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* White Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white dark:bg-neutral-900 rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 dark:border-neutral-800 shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          {JOURNEY_LIST.map((item) => (
            <div
              key={item.id}
              className="px-6 py-6 sm:px-10 sm:py-8 border-b border-neutral-200/60 dark:border-neutral-800 last:border-b-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/60 transition-colors duration-200 group"
            >
              {/* Left Column: Company, Role & Description */}
              <div className="flex flex-col flex-1 space-y-1.5">
                <h3 className="font-['Instrument_Serif',serif] text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-neutral-200 transition-colors">
                  {item.company}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans font-medium">
                  {item.role}
                  {item.location ? ` • ${item.location}` : ''}
                </p>
                {item.description && (
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans font-normal leading-relaxed pt-2 max-w-2xl">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Right Column: Period Date */}
              <div className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-sans font-medium uppercase tracking-wider sm:text-right whitespace-nowrap pt-1 sm:pt-1">
                {item.period}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};