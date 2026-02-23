import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { LocationSection } from './components/LocationSection';
import { LeaseholdSection } from './components/LeaseholdSection';
import { OpportunitySection } from './components/OpportunitySection';
import { InvestmentSection } from './components/InvestmentSection';
import { TrustSection } from './components/TrustSection';
import { ProcessSection } from './components/ProcessSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black-900 text-white font-sans selection:bg-gold-400 selection:text-black">
      <main>
        <HeroSection onCtaClick={openModal} />
        <LocationSection />
        <LeaseholdSection />
        <OpportunitySection />
        <InvestmentSection onCtaClick={openModal} />
        <TrustSection />
        <ProcessSection />
        <FinalCTA onCtaClick={openModal} />
      </main>

      <Footer />
      
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;