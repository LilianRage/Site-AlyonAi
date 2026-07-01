import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../../contexts/LanguageContext';

// Shared layout for legal pages (Mentions légales, Politique de confidentialité).
const LegalLayout = ({ title, lastUpdated, children }) => {
  const { lang } = useLanguage();
  const backLabel = lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home';
  const updatedLabel = lang === 'fr' ? 'Dernière mise à jour' : 'Last updated';

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Header />

      <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#666',
              textDecoration: 'none',
              marginBottom: '40px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ fontSize: '38px', fontWeight: 700, color: '#000', marginBottom: '8px', lineHeight: 1.2 }}>
              {title}
            </h1>
            {lastUpdated && (
              <p style={{ fontSize: '14px', color: '#999', marginBottom: '48px' }}>
                {updatedLabel} : {lastUpdated}
              </p>
            )}

            <div className="legal-prose">{children}</div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Small helper components to keep legal pages readable.
export const LegalSection = ({ heading, children }) => (
  <section style={{ marginBottom: '36px' }}>
    {heading && (
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '14px' }}>
        {heading}
      </h2>
    )}
    <div style={{ fontSize: '15px', color: '#444', lineHeight: 1.75 }}>{children}</div>
  </section>
);

export default LegalLayout;
