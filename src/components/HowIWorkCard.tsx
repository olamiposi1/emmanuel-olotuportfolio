import React, { useState } from 'react';
import { WORK_STEPS } from '../data';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export const HowIWorkCard: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = WORK_STEPS[activeStepIndex];

  return (
    <div className="bg-[#f2f4f6] hover:bg-[#eff1f4] dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800 shadow-soft flex flex-col justify-between h-full group">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-wide uppercase">
            How I work
          </span>
          <Layers className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
        </div>

        {/* Step Title & Description */}
        <div className="min-h-[110px]">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight transition-all">
            {activeStep.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed mt-2 animate-in fade-in duration-200">
            {activeStep.description}
          </p>

          {/* Deliverables tags */}
          {activeStep.deliverables && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {activeStep.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[10px] font-medium text-neutral-600 dark:text-neutral-300 bg-white/80 dark:bg-neutral-800/80 px-2 py-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-700"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Step Pills Selector matching reference */}
      <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
        {WORK_STEPS.map((step, index) => {
          const isActive = index === activeStepIndex;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepIndex(index)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md scale-105'
                  : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/70 dark:bg-neutral-800/80 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:border-neutral-700'
              }`}
            >
              {step.stepNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};