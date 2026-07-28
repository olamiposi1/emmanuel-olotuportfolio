import React from 'react';
import { motion } from 'motion/react';
import { Layout, Compass, Palette, Search } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const services = [
    {
      number: '01.',
      title: 'UI/UX DESIGN',
      description:
        'Designing intuitive, user-centered digital experiences that solve real problems and drive engagement.',
      icon: Layout,
    },
    {
      number: '02.',
      title: 'WEB DESIGN',
      description:
        'Creating responsive, high-converting websites that balance aesthetics with performance.',
      icon: Compass,
    },
    {
      number: '03.',
      title: 'GRAPHIC DESIGN',
      description:
        'Occasional design support for simple visual assets when needed.',
      icon: Palette,
    },
    {
      number: '04.',
      title: 'USER RESEARCH',
      description:
        'Understanding users before designing solutions. I conduct research to uncover user needs, behaviors, and pain points through competitor analysis, user flows, and usability evaluation - ensuring design decisions are rooted in real insights.',
      icon: Search,
    },
  ];

  return (
    <section id="about" className="w-full bg-[#fafaf8] dark:bg-[#0d0d0f] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-sans">
            WHO I AM & WHAT I DO
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight mt-2">
            About Me
          </h2>
        </div>

        {/* Main Editorial Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white dark:bg-neutral-900 rounded-[28px] p-6 sm:p-10 lg:p-12 border border-neutral-200/80 dark:border-neutral-800 shadow-[0_12px_36px_rgba(0,0,0,0.03)] space-y-6"
        >

          <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans font-normal pt-2">
            <p>
              I'm Emmanuel Olotu, a Product Designer, WordPress Designer, and product builder who turns ideas into digital experiences people love to use. I design products, websites, and AI-powered tools that simplify complex problems and help businesses grow.
            </p>
            <p>
              My work spans startups and businesses across fintech, healthcare, real estate, and professional services. From intuitive mobile apps to high-performing WordPress websites, I build products that are simple, useful, and built around people.
              </p>
            <p>
              I'm also building Brief Clarity, an AI tool that transforms messy client messages into clear, structured project briefs, helping freelancers spend less time chasing requirements and more time creating.
            </p>
            <p>
              Currently, I'm growing POSI.yourDesigner while exploring the future of AI, product design, and digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Services Sub-section */}
        <div className="pt-8 space-y-8">
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-['Instrument_Serif',serif] font-normal text-neutral-900 dark:text-white tracking-tight uppercase">
              My Services
            </h3>
            <div className="w-12 h-0.5 bg-neutral-900 dark:bg-white mt-2 mx-auto sm:mx-0" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="bg-white dark:bg-neutral-900 rounded-[24px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  {/* Subtle Wavy Line Pattern background overlay matching reference image */}
                  <svg
                    className="absolute inset-x-0 bottom-0 w-full h-32 opacity-15 pointer-events-none text-neutral-400 dark:text-neutral-600 stroke-current"
                    viewBox="0 0 400 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 60 C 100 20, 200 100, 300 40 C 350 10, 380 80, 400 60" strokeWidth="1" />
                    <path d="M0 80 C 120 40, 220 110, 320 50 C 360 30, 390 90, 400 70" strokeWidth="1" />
                    <path d="M0 100 C 140 60, 240 120, 340 60 C 370 40, 395 100, 400 80" strokeWidth="1" />
                  </svg>

                  <div className="relative z-10">
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-neutral-900 dark:text-white">
                        <IconComponent className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-200 dark:text-neutral-700 tracking-wider font-mono">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h4 className="text-lg font-bold tracking-wider text-neutral-900 dark:text-white uppercase font-sans mb-3">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};