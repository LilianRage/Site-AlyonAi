import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const MOBILE_BP = 530;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BP);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BP);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Bloquer le scroll quand la sidebar est ouverte
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      setTimeout(() => {
        const el = document.getElementById(sectionId.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      navigate('/#' + sectionId);
      setTimeout(() => {
        const el = document.getElementById(sectionId.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const navItems = [
    { label: t.nav.home, action: () => scrollToSection('hero') },
    { label: t.nav.product, action: () => { setMenuOpen(false); navigate('/technologie'); } },
    { label: t.nav.rd, action: () => scrollToSection('achievements') },
    { label: t.nav.contact, action: () => scrollToSection('contact') },
  ];

  return (
    <>
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
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            style={{ display: 'flex', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
          >
            <img
              src="/images/logo-Alyon-Black-rogne.png"
              alt="ALYON AI Logo"
              style={{ height: isMobile ? '38px' : '56px', width: 'auto' }}
            />
          </button>

          {/* Desktop nav (>= 490px) */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {navItems.map((item) => (
                <NavLink key={item.label} onClick={item.action}>{item.label}</NavLink>
              ))}
            </nav>
          )}

          {/* Desktop lang switcher (>= 490px) */}
          {!isMobile && <LangSwitcher lang={lang} toggleLang={toggleLang} />}

          {/* Mobile: hamburger (< 490px) */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                background: 'transparent',
                border: '1.5px solid #e0e0e0',
                borderRadius: '8px',
                padding: '8px 10px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              aria-label="Open menu"
            >
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#111', borderRadius: '2px' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#111', borderRadius: '2px' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#111', borderRadius: '2px' }} />
            </button>
          )}
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.35)',
            zIndex: 1100,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '260px',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 1200,
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Sidebar header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #f0f0f0' }}>
          <img
            src="/images/logo-Alyon-Black-rogne.png"
            alt="ALYON AI Logo"
            style={{ height: '34px', width: 'auto' }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'transparent',
              border: '1.5px solid #e0e0e0',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              color: '#333',
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: '12px 12px', flex: 1 }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '14px 16px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#222',
                background: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '2px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Lang switcher at bottom */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid #f0f0f0' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            Language
          </p>
          <LangSwitcher lang={lang} toggleLang={toggleLang} fullWidth />
        </div>
      </div>
    </>
  );
};

const LangSwitcher = ({ lang, toggleLang, fullWidth }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      border: '1.5px solid #d0d0d0',
      borderRadius: '8px',
      overflow: 'hidden',
      width: fullWidth ? '100%' : 'auto',
    }}
  >
    <LangButton active={lang === 'en'} onClick={() => lang !== 'en' && toggleLang()} fullWidth={fullWidth}>
      EN
    </LangButton>
    <span style={{ width: '1px', height: '18px', backgroundColor: '#d0d0d0', flexShrink: 0 }} />
    <LangButton active={lang === 'fr'} onClick={() => lang !== 'fr' && toggleLang()} fullWidth={fullWidth}>
      FR
    </LangButton>
  </div>
);

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

const LangButton = ({ children, active, onClick, fullWidth }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: fullWidth ? 1 : 'none',
        padding: '8px 14px',
        fontSize: '13px',
        fontWeight: active ? 700 : 500,
        color: active ? '#000' : isHovered ? '#333' : '#999',
        backgroundColor: active ? '#f5f5f5' : isHovered ? '#fafafa' : 'transparent',
        border: 'none',
        cursor: active ? 'default' : 'pointer',
        transition: 'all 0.15s ease',
        letterSpacing: '0.05em',
        minWidth: fullWidth ? 0 : '42px',
        textAlign: 'center',
      }}
    >
      {children}
    </button>
  );
};

export default Header;
