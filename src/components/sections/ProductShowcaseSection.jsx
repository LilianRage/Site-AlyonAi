import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SatelliteGlobeAnimation from '../ui/SatelliteGlobeAnimation';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const MOBILE_BP = 530;

const ProductShowcaseSection = () => {
  const { t } = useLanguage();
  const ps = t.productShowcase;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < MOBILE_BP;

  // Globe and text always sit side by side; the globe shrinks continuously
  // with the viewport so the text column never gets squeezed off-screen.
  const contentWidth = Math.min(width, 1100) - 48;
  const gapPx = Math.min(64, Math.max(16, contentWidth * 0.06));
  const minTextWidth = 150;
  let imageWidthPx = Math.min(500, contentWidth * 0.42);
  if (contentWidth - imageWidthPx - gapPx < minTextWidth) {
    imageWidthPx = Math.max(70, contentWidth - gapPx - minTextWidth);
  }
  const textWidthPx = Math.max(0, contentWidth - imageWidthPx - gapPx);
  const titleFontPx = Math.min(textWidthPx / 15, 32);

  return (
    <section
      id="product-showcase"
      style={{
        backgroundColor: '#ffffff',
        padding: '6rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="blurBlue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <filter id="blurYellow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path
            d="M 0 10 C 30 12, 85 155, 145 138 C 185 126, 128 58, 205 70 C 235 75, 250 148, 252 170"
            fill="none"
            stroke="rgba(56,118,255,0.1)"
            strokeWidth="40"
            filter="url(#blurBlue)"
          />
          <path
            d="M 0 390 C 55 388, 45 258, 115 252 C 162 248, 145 328, 198 318 C 228 312, 250 246, 252 230"
            fill="none"
            stroke="rgba(255,210,0,0.1)"
            strokeWidth="40"
            filter="url(#blurYellow)"
          />
      </svg>


      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `${imageWidthPx}px 1fr`,
            gap: `${gapPx}px`,
            alignItems: 'center',
          }}
        >
          {/* Image — no container, just the image with a drop-shadow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
              }}
            >
              <SatelliteGlobeAnimation />
            </div>
          </motion.div>

          {/* Text */}
          <div style={{ minWidth: 0 }}>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(0,0,0,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {ps.label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              style={{
                fontSize: `${titleFontPx}px`,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#000',
                margin: '0 0 0.5rem 0',
                whiteSpace: 'nowrap',
              }}
            >
              {ps.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              style={{
                fontSize: isMobile ? '0.75rem' : '1.1rem',
                fontWeight: 300,
                color: '#666',
                marginBottom: '1.25rem',
              }}
            >
              {ps.subtitle}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              style={{
                fontSize: isMobile ? '0.7rem' : '1rem',
                color: '#555',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
                maxWidth: '480px',
              }}
            >
              {ps.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              <Link
                to="/technologie"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: isMobile ? '0.5rem 0.9rem' : '0.75rem 1.75rem',
                  background: '#000',
                  color: '#fff',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  fontSize: isMobile ? '0.65rem' : '0.95rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#222';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {ps.cta}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
