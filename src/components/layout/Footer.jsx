import React from 'react';
import '../../styles/components/Footer.css';

const Footer = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
            <img 
              src="/images/logo-Alyon-Black-rogne.png" 
              alt="ALYON AI" 
              className="logo-image"
              style={{
                height: '60px',
                width: 'auto'
              }}
            />
          </div>
          
          <nav className="footer-nav">
            <a href="#solutions" className="footer-link">Solutions</a>
            <a href="#press" className="footer-link">Presse</a>
            <a href="#team" className="footer-link">Équipe</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
          
          <div className="footer-contact">
            <a href={`mailto:${data.contact.email}`} className="footer-email">
              {data.contact.email}
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 ALYON AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
