import React from 'react';
import '../../styles/components/Header.css';

const Header = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
          <img 
            src="/images/logo-Alyon-Black-rogne.png" 
            alt="ALYON AI" 
            className="logo-image"
            style={{
              height: '70px',
              width: 'auto'
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="nav">
          <button onClick={() => scrollToSection('solutions')} className="nav-link">
            Solutions
          </button>
          <button onClick={() => scrollToSection('press')} className="nav-link">
            Presse
          </button>
          <button onClick={() => scrollToSection('team')} className="nav-link">
            Équipe
          </button>
          
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="cta-button"
          >
            Démarrer
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
