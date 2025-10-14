import React from 'react';
import Icon from '../ui/Icon';
import '../../styles/components/HeroSection.css';

const HeroSection = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section id="hero" className="hero-section">
      {/* Particules flottantes pour enrichir l'effet */}
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-tagline-new">L'IA pour chaque défi</h1>
          
          <div className="hero-logo-container">
            <img 
              src="/images/logo-Alyon-Black-rogne.png" 
              alt="ALYON AI" 
              className="hero-logo-image"
            />
          </div>
          
          <div className="hero-cta">
            <button 
              className="hero-button"
              onClick={() => scrollToSection('solutions')}
            >
              <Icon name="arrow" size={20} color="white" />
              Démarrer avec ALYON AI
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
