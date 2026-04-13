import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import fondFumee from '../../assets/Fond_fumee.png';

const ModulesSection = () => {
  const videoRef = useRef(null);

  return (
    <section
      id="modules"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Background image bleeding to the sides */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fondFumee})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.65,
          transform: 'scale(1.15)',
          filter: 'blur(2px)',
        }}
      />

      {/* Light gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.3) 100%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'rgba(0,0,0,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}>
            Produit
          </span>
        </motion.div>

        {/* Video — plan principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
            width: '100%',
            aspectRatio: '16 / 9',
            background: '#000',
          }}
        >
          <video
            ref={videoRef}
            src="/videos/Video_presentation.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>

        {/* Bouton Découvrir */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <Link
            to="/technologie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.625rem 1.75rem',
              background: '#000',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 500,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#222'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <span>Découvrir</span>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
