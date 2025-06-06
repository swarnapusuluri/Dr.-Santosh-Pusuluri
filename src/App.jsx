// src/App.jsx
import { useState } from "react";
import './App.css';

// Import all components from the components folder
import {
  Header,
  HeroSection,
  ServicesSection,
  ContactSection,
  ServiceModal
} from './components';

// Import services data
import { services } from './data/servicesData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service) => {
    console.log('[App] handleLearnMore called. Service:', service.name);
    setSelectedService(service);
    setIsModalOpen(true);
    console.log('[App] State updated: isModalOpen = true, selectedService =', service.name);
  };

  const closeModal = () => {
    console.log('[App] closeModal called.');
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
      console.log('[App] selectedService set to null after animation delay.');
    }, 300);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    window.open('tel:+918331995566'); // Opens phone dialer
    closeModal();
  };

  return (
    <div className="app">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />
      <HeroSection
        scrollToServices={scrollToServices}
        handleBookConsultation={handleBookConsultation}
      />
      <ServicesSection services={services} onLearnMore={handleLearnMore} />
      <ContactSection
        handleBookConsultation={handleBookConsultation}
      />

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
        handleBookConsultation={handleBookConsultation}
      />
    </div>
  );
}