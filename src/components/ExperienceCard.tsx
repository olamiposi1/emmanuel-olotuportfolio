import React, { useState } from 'react';
import { EXPERIENCE_LIST } from '../data';
import { ExperienceItem } from '../types';
import { Briefcase, ChevronRight, Sparkles } from 'lucide-react';

export const ExperienceCard: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <div className="bg-[#f2f4f6] hover:bg-[#eff1f4] dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800 shadow-soft flex flex-col justify-between h-full group">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-wide uppercase">
            My Experience
          </span>
          <Briefcase className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
        </div>

        {/* Timeline List */}
        <div className="relative pl-3 space-y-4">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[1.5px] bg-neutral-300/70 dark:bg-neutral-700" />

          {EXPERIENCE_LIST.map((exp, index) => {
            const isCurrent = index === 0;
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className="relative pl-4 cursor-pointer group/item transition-all"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[11px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#f2f4f6] dark:border-neutral-900 transition-all duration-200 ${
                    isCurrent
                      ? 'bg-neutral-900 dark:bg-white scale-110 shadow-xs'
                      : 'bg-neutral-400 dark:bg-neutral-600 group-hover/item:bg-neutral-700 dark:group-hover/item:bg-neutral-400'
                  }`}
                />

                {/* Role Title */}
                <h4
                  className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                    isCurrent
                      ? 'text-neutral-900 dark:text-white'
                      : 'text-neutral-700 dark:text-neutral-300 group-hover/item:text-black dark:group-hover/item:text-white'
                  }`}
                >
                  {exp.role} at {exp.company}
                </h4>

                {/* Meta details */}
                <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium mt-0.5">
                  {exp.period} - {exp.type} - {exp.commitment}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Footer Link */}
      {selectedExp && (
        <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400 animate-in fade-in duration-200">
          <p className="font-medium text-neutral-900 dark:text-white">{selectedExp.description}</p>
        </div>
      )}
    </div>
  );
};