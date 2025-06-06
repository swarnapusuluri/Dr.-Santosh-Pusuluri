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
  DrSantoshModal // NEW: Import DrSantoshModal
} from './components';

// Import data
import { services } from './data/servicesData';
import { drSantoshCV } from './data/cvData'; // NEW: Import CV Data

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDrSantoshModalOpen, setIsDrSantoshModalOpen] = useState(false); // NEW: State for Dr. Santosh modal

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
    closeServiceModal(); // Close service modal if booking from inside it
    closeDrSantoshModal(); // Close Dr. Santosh modal if booking from inside it (though not directly linked here)
  };

  // NEW: Functions to open/close Dr. Santosh CV modal
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

      <Header />
      <HeroSection
        scrollToServices={scrollToServices}
        handleBookConsultation={handleBookConsultation}
        onLearnMoreAboutDrSantosh={openDrSantoshModal} // NEW: Pass the open function
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

      {/* NEW: Dr. Santosh CV Modal */}
      <DrSantoshModal
        isOpen={isDrSantoshModalOpen}
        onClose={closeDrSantoshModal}
        cvData={drSantoshCV} // Pass the structured CV data
      />
      {/* END NEW */}
    </div>
  );
}