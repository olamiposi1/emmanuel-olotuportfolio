import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroBanner } from './components/HeroBanner';
import { SelectedProjects } from './components/SelectedProjects';
import { ProfessionalJourney } from './components/ProfessionalJourney';
import { DesignExplorations } from './components/DesignExplorations';
import { AboutMe } from './components/AboutMe';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ProjectDetailOverlay } from './components/ProjectDetailOverlay';
import { ExperienceCard } from './components/ExperienceCard';
import { HowIWorkCard } from './components/HowIWorkCard';
import { BookCallModal } from './components/BookCallModal';
import { ContactModal } from './components/ContactModal';
import { ProjectItem } from './projectsData';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#fafaf8] text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-orange-500 selection:text-white transition-colors duration-300">
        {/* Floating Header Navigation */}
        <HeaderNav
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onBookCallClick={() => setIsBookCallOpen(true)}
          activeSection="Selected Projects"
          setActiveSection={(section) => {
            if (section === 'Home') {
              setSelectedProject(null);
            }
          }}
        />

        {/* Detailed Case Study Overlay Page */}
        <ProjectDetailOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBookCallClick={() => setIsBookCallOpen(true)}
        />

        {/* Interactive Modals */}
        <BookCallModal
          isOpen={isBookCallOpen}
          onClose={() => setIsBookCallOpen(false)}
        />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          onBookCallClick={() => setIsBookCallOpen(true)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#0d0d0f] text-neutral-900 dark:text-neutral-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-orange-500 selection:text-white transition-colors duration-300">
      {/* Floating Header Navigation matching the uploaded reference image */}
      <HeaderNav
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onBookCallClick={() => setIsBookCallOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content wrapper - full width so each section can control its own max-width */}
      <main className="w-full pt-4 sm:pt-8 pb-16">
        <div id="home" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBanner onBookCallClick={() => setIsBookCallOpen(true)} />

          {/* Side-by-side Bento Cards: Experience & How I Work */}
          <section id="experience" className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
              <div id="about" className="md:col-span-2 h-full min-h-[230px]">
                <ExperienceCard />
              </div>
              <div className="md:col-span-3 h-full min-h-[230px]">
                <HowIWorkCard />
              </div>
            </div>
          </section>
        </div>

        {/* Selected Projects Case Studies Section */}
        <SelectedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Professional Journey Section */}
        <ProfessionalJourney />

        {/* Design Explorations Section */}
        <DesignExplorations />

        {/* About Me Editorial Section */}
        <AboutMe />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Footer */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-16">
          <Footer
            onBookCallClick={() => setIsBookCallOpen(true)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        </div>
      </main>

      {/* Interactive Modals */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onBookCallClick={() => setIsBookCallOpen(true)}
      />
    </div>
  );
}