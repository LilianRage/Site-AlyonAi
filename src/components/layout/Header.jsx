import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Si on est sur la page d'accueil, scroll direct
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, rediriger vers la page d'accueil avec l'ancre
      navigate('/#' + sectionId);
      // Attendre que la page se charge puis scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        borderBottom: isScrolled ? '1px solid #f0f0f0' : 'none',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="header-container" style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        {/* Logo à gauche */}
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <img
            src="/images/logo-Alyon-Black-rogne.png"
            alt="ALYON AI Logo"
            style={{
              height: '70px',
              width: 'auto'
            }}
          />
        </button>

        {/* Navigation Desktop */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
          className="hidden md:flex"
        >
          <NavLink onClick={() => scrollToSection('hero')}>Accueil</NavLink>
          <NavLink onClick={() => navigate('/technologie')}>Produit</NavLink>
          <NavLink onClick={() => scrollToSection('achievements')}>R&D</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </nav>

        {/* CTA Button à droite */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block"
          style={{
            backgroundColor: '#111',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#111'}
        >
          Nous contacter
        </button>

      </div>
    </header>
  );
};

// Composant NavLink simple
const NavLink = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: 500,
        color: isHovered ? '#000' : '#555',
        background: isHovered ? '#f5f5f5' : 'transparent',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  );
};

export default Header;
