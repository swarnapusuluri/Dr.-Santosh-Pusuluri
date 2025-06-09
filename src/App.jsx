// src/App.jsx
import { useState } from "react";
import './App.css';

// Import all components (NEW: SwarnaInfoModal)
import {
  Header,
  HeroSection,
  ServicesSection,
  ContactSection,
  ServiceModal,
  DrSantoshModal,
  Footer,
  SwarnaInfoModal // NEW: Import SwarnaInfoModal
} from './components';

// Import data
import { services } from './data/servicesData';
import { drSantoshCV } from './data/cvData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDrSantoshModalOpen, setIsDrSantoshModalOpen] = useState(false);
  // NEW: State for SwarnaInfoModal
  const [isSwarnaInfoModalOpen, setIsSwarnaInfoModalOpen] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    window.open('tel:+918331995566');
    closeServiceModal();
    closeDrSantoshModal();
    closeSwarnaInfoModal(); // NEW: Close Swarna modal too if open
  };

  const openDrSantoshModal = () => {
    setIsDrSantoshModalOpen(true);
  };

  const closeDrSantoshModal = () => {
    setIsDrSantoshModalOpen(false);
  };

  // NEW: Functions to open/close SwarnaInfoModal
  const openSwarnaInfoModal = () => {
    setIsSwarnaInfoModalOpen(true);
  };

  const closeSwarnaInfoModal = () => {
    setIsSwarnaInfoModalOpen(false);
  };
  // END NEW

  return (
    <div className="app">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* MODIFIED: Pass onOpenSwarnaInfoModal to Header */}
      <Header
        onHeaderTitleClick={openDrSantoshModal}
        onOpenSwarnaInfoModal={openSwarnaInfoModal} // NEW PROP
      />

      <HeroSection
        scrollToServices={scrollToServices}
        handleBookConsultation={handleBookConsultation}
        onLearnMoreAboutDrSantosh={openDrSantoshModal}
      />
      <ServicesSection services={services} onLearnMore={handleLearnMore} />
      <ContactSection
        handleBookConsultation={handleBookConsultation}
      />

      <ServiceModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={closeServiceModal}
        handleBookConsultation={handleBookConsultation}
      />

      <DrSantoshModal
        isOpen={isDrSantoshModalOpen}
        onClose={closeDrSantoshModal}
        cvData={drSantoshCV}
      />

      {/* NEW: Render SwarnaInfoModal */}
      <SwarnaInfoModal
        isOpen={isSwarnaInfoModalOpen}
        onClose={closeSwarnaInfoModal}
      />
      {/* END NEW */}

      <Footer />
    </div>
  );
}