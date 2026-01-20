import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const handleModuleClick = (moduleIndex) => {
    // Mapping des modules de siteData vers TechnologyPage
    // siteData: SmartFleet(0), PowerMind(1), IntelliTask(2), FusionEye(3), GuardianEye(4), MeshMind(5)
    // TechnologyPage: PowerMind(1), MeshMind(2), SmartFleet(3), FusionEye(4), GuardianEye(5), IntelliTask(6)
    const moduleMapping = {
      0: 3, // SmartFleet -> 3
      1: 1, // PowerMind -> 1
      2: 6, // IntelliTask -> 6
      3: 4, // FusionEye -> 4
      4: 5, // GuardianEye -> 5
      5: 2  // MeshMind -> 2
    };
    navigate('/technologie?module=' + moduleMapping[moduleIndex]);
    setIsMobileMenuOpen(false);
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
      <div style={{
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
              height: '100px',
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
          <NavDropdown 
            trigger="Modules"
            items={siteData.modules.map(m => ({ label: m.name, desc: m.tagline }))}
            onItemClick={handleModuleClick}
            onViewAllClick={() => navigate('/technologie')}
          />
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            padding: '8px',
            background: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '20px',
            height: '14px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
            }} />
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#333',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className="md:hidden"
        style={{
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          maxHeight: isMobileMenuOpen ? '300px' : '0',
          opacity: isMobileMenuOpen ? 1 : 0,
          borderTop: isMobileMenuOpen ? '1px solid #f0f0f0' : 'none'
        }}
      >
        <nav style={{ padding: '16px 24px' }}>
          {siteData.navigation.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '15px',
                fontWeight: 500,
                color: '#333',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                borderBottom: '1px solid #f5f5f5'
              }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            style={{
              width: '100%',
              marginTop: '16px',
              backgroundColor: '#111',
              color: '#fff',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            Nous contacter
          </button>
        </nav>
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

// Composant NavDropdown
const NavDropdown = ({ trigger, items, onItemClick, onViewAllClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={() => { setIsOpen(true); setIsHovered(true); }}
      onMouseLeave={() => { setIsOpen(false); setIsHovered(false); }}
    >
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
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
        {trigger}
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
          style={{
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        paddingTop: '8px',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
        transition: 'all 0.2s ease',
        zIndex: 100
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          border: '1px solid #eee',
          padding: '8px 0',
          minWidth: '200px'
        }}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onItemClick(index)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 16px',
                fontSize: '14px',
                color: '#333',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <span style={{ fontWeight: 500 }}>{item.label}</span>
              {item.desc && (
                <span style={{ display: 'block', fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  {item.desc}
                </span>
              )}
            </button>
          ))}
          <div style={{ borderTop: '1px solid #eee', margin: '4px 0' }} />
          <button
            onClick={onViewAllClick}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '10px 16px',
              fontSize: '14px',
              color: '#333',
              fontWeight: 500,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}
          >
            Voir tous les modules →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
