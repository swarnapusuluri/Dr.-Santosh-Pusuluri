// src/App.jsx
import { useState } from "react";
import './App.css';

// Import all components
import {
  Header,
  HeroSection,
  ServicesSection,
  ContactSection,
  ServiceModal,
  DrSantoshModal,
  Footer // NEW: Import Footer
} from './components';

// Import data
import { services } from './data/servicesData';
import { drSantoshCV } from './data/cvData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDrSantoshModalOpen, setIsDrSantoshModalOpen] = useState(false);

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
  };

  const openDrSantoshModal = () => {
    setIsDrSantoshModalOpen(true);
  };

  const closeDrSantoshModal = () => {
    setIsDrSantoshModalOpen(false);
  };

  return (
    <div className="app">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* NEW: Pass openDrSantoshModal to Header */}
      <Header onHeaderTitleClick={openDrSantoshModal} />
      {/* END NEW */}

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

      {/* NEW: Render Footer */}
      <Footer />
      {/* END NEW */}
    </div>
  );
}