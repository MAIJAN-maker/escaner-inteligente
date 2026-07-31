import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdentifySection } from './components/IdentifySection';
import { WhatIsScannerSection } from './components/WhatIsScannerSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { ImportantNoticeSection } from './components/ImportantNoticeSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PolicyModals } from './components/PolicyModals';
import { ModalType } from './types';
import { handleHotmartCheckout } from './config';

export default function App() {
  const [activePolicyModal, setActivePolicyModal] = useState<ModalType>(null);

  const handleOpenPolicyModal = (type: ModalType) => {
    setActivePolicyModal(type);
  };

  const handleClosePolicyModal = () => {
    setActivePolicyModal(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#2D2D2D] font-sans antialiased selection:bg-[#F8C1D1] selection:text-[#2D2D2D]">
      {/* Sticky Header Navbar */}
      <Navbar onOpenCheckout={handleHotmartCheckout} />

      {/* Main Landing Sections */}
      <main>
        {/* Sección 1: Hero */}
        <HeroSection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 2: ¿Te identificas? */}
        <IdentifySection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 3: ¿Qué es el Escáner? & Los 5 Perfiles */}
        <WhatIsScannerSection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 4: ¿Qué recibes? */}
        <WhatYouGetSection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 5: ¿Cómo funciona? */}
        <HowItWorksSection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 6: Para quién es */}
        <WhoIsItForSection onOpenCheckout={handleHotmartCheckout} />

        {/* Sección 7: Importante (Aviso educativo) */}
        <ImportantNoticeSection />

        {/* Sección 8: CTA Final */}
        <FinalCtaSection onOpenCheckout={handleHotmartCheckout} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenPolicyModal} />

      {/* Privacy, Terms, Contact & Disclaimer Modals */}
      <PolicyModals
        activeModal={activePolicyModal}
        onClose={handleClosePolicyModal}
      />
    </div>
  );
}
