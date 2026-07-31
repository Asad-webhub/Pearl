import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { ApproachSection } from './components/ApproachSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesSection } from './components/IndustriesSection';
import { VisionSection } from './components/VisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiConsultantModal } from './components/AiConsultantModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';

export default function App() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [estimatorModalOpen, setEstimatorModalOpen] = useState(false);

  const [prefilledSolution, setPrefilledSolution] = useState('');
  const [prefilledDetails, setPrefilledDetails] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolutionForContact = (solutionTitle: string) => {
    setPrefilledSolution(solutionTitle);
    scrollToContact();
  };

  const handleSelectIndustryForContact = (industryName: string) => {
    setPrefilledSolution(`Digital Strategy for ${industryName}`);
    scrollToContact();
  };

  const handleTransferToContact = (details: string) => {
    setPrefilledDetails(details);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenAiConsultant={() => setAiModalOpen(true)}
        onOpenEstimator={() => setEstimatorModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Hero Section */}
      <main id="main-content">
        <Hero
          onOpenAiConsultant={() => setAiModalOpen(true)}
          onOpenEstimator={() => setEstimatorModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 6 Solution Categories & Explorer */}
        <SolutionsSection
          onSelectSolutionForContact={handleSelectSolutionForContact}
          onOpenEstimator={() => setEstimatorModalOpen(true)}
        />

        {/* Our Approach (Discover, Design, Develop, Deliver) */}
        <ApproachSection />

        {/* Why Choose Pearl Trinity */}
        <WhyChooseUs onOpenContact={scrollToContact} />

        {/* Industries We Support */}
        <IndustriesSection
          onSelectIndustryForContact={handleSelectIndustryForContact}
        />

        {/* Our Vision */}
        <VisionSection
          onOpenContact={scrollToContact}
          onOpenAiConsultant={() => setAiModalOpen(true)}
        />

        {/* Contact Pearl Trinity */}
        <ContactSection
          prefilledSolution={prefilledSolution}
          prefilledDetails={prefilledDetails}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Strategy Consultant Modal */}
      <AiConsultantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onTransferToContact={handleTransferToContact}
      />

      {/* Scope Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorModalOpen}
        onClose={() => setEstimatorModalOpen(false)}
        onTransferToContact={handleTransferToContact}
      />
    </div>
  );
}
