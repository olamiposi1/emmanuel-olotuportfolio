import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      ' "Working with Emmanuel has been a positive experience. He communicates ideas clearly, works well with cross teams, and brings a thoughtful, user-focused approach to every task he handles."',
    author: 'Michael Adegbite',
    role: 'Founder, Micotech',
    rating: '4.9/5',
  },
  {
    id: 't-2',
    quote:
      ' "Emmanuel is a highly skilled and creative designer. He has a keen eye for detail and consistently delivers high-quality work that exceeds expectations. His ability to understand client needs and translate them into visually stunning designs is truly impressive."',
    author: 'Steve Ovirih',
    role: 'Editor, The Polity',
    rating: '4.9/5',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full bg-[#fafaf8] dark:bg-[#0d0d0f] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight">
            Kind Words from Collaborators
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-white dark:bg-neutral-900 rounded-[24px] p-8 sm:p-10 border border-neutral-200/80 dark:border-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              {/* Top Quote Icon & Text */}
              <div className="space-y-4">
                <div className="text-sky-300 dark:text-sky-400">
                  <Quote className="w-8 h-8 fill-sky-100/60 dark:fill-sky-900/40 text-sky-300 dark:text-sky-400 stroke-[1.5]" />
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-sans font-normal pt-1">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Row with Divider */}
              <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-neutral-800 flex items-end justify-between gap-4">
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-base font-sans">
                    {item.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                    {item.role}
                  </p>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base font-sans whitespace-nowrap">
                  {item.rating}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};