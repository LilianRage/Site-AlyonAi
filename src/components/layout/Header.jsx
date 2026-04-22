import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#' + sectionId);
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
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="header-container"
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <img
            src="/images/logo-Alyon-Black-rogne.png"
            alt="ALYON AI Logo"
            style={{ height: '70px', width: 'auto' }}
          />
        </button>

        {/* Navigation Desktop */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          className="hidden md:flex"
        >
          <NavLink onClick={() => scrollToSection('hero')}>{t.nav.home}</NavLink>
          <NavLink onClick={() => navigate('/technologie')}>{t.nav.product}</NavLink>
          <NavLink onClick={() => scrollToSection('achievements')}>{t.nav.rd}</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>{t.nav.contact}</NavLink>
        </nav>

        {/* Right side: CTA + Language switcher */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '12px', display: 'flex' }}>
          {/* Language toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <LangButton active={lang === 'en'} onClick={() => lang !== 'en' && toggleLang()}>
              EN
            </LangButton>
            <span style={{ width: '1px', height: '16px', backgroundColor: '#e5e5e5', flexShrink: 0 }} />
            <LangButton active={lang === 'fr'} onClick={() => lang !== 'fr' && toggleLang()}>
              FR
            </LangButton>
          </div>

        </div>
      </div>
    </header>
  );
};

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
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
};

const LangButton = ({ children, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '6px 11px',
        fontSize: '12px',
        fontWeight: active ? 700 : 400,
        color: active ? '#000' : isHovered ? '#333' : '#999',
        backgroundColor: active ? '#f5f5f5' : isHovered ? '#fafafa' : 'transparent',
        border: 'none',
        cursor: active ? 'default' : 'pointer',
        transition: 'all 0.15s ease',
        letterSpacing: '0.04em',
      }}
    >
      {children}
    </button>
  );
};

export default Header;
