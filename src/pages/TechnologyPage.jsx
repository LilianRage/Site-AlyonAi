import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import fondFumee from '../assets/Fond_fumee.png';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import SatelliteGlobeAnimation from '../components/ui/SatelliteGlobeAnimation';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const STACK_BP = 860;
const CARDS_STACK_BP = 640;

const TechnologyPage = () => {
  const { t } = useLanguage();
  const tech = t.tech;
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isStacked = width < STACK_BP;
  const isCardsStacked = width < CARDS_STACK_BP;

  // Hero globe and text always sit side by side; the globe shrinks
  // continuously with the viewport so the text column is never squeezed off-screen.
  const heroContentWidth = Math.min(width, 1100) - 48;
  const heroGapPx = Math.min(64, Math.max(16, heroContentWidth * 0.06));
  const heroMinTextWidth = 150;
  let heroImageWidthPx = Math.min(560, heroContentWidth * 0.42);
  if (heroContentWidth - heroImageWidthPx - heroGapPx < heroMinTextWidth) {
    heroImageWidthPx = Math.max(70, heroContentWidth - heroGapPx - heroMinTextWidth);
  }
  const heroTextWidthPx = Math.max(0, heroContentWidth - heroImageWidthPx - heroGapPx);
  const heroTitleFontPx = Math.min(heroTextWidthPx / 15, 34);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#fff' }}>
      <Header />

      {/* Background smoke */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${fondFumee})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />

      <main className="relative z-10" style={{ paddingTop: '60px', paddingBottom: '6rem' }}>

        {/* Back link — above the video */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#888',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            {tech.back}
          </Link>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 0' }}>

          {/* ── HERO ── */}
          <section style={{ marginBottom: '7rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `1fr ${heroImageWidthPx}px`, gap: `${heroGapPx}px`, alignItems: 'center' }}>

              {/* Left: text */}
              <div style={{ minWidth: 0 }}>
                <motion.span
                  variants={fadeUp} initial="hidden" animate="visible" custom={0}
                  style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}
                >
                  {tech.productLabel}
                </motion.span>

                <motion.h1
                  variants={fadeUp} initial="hidden" animate="visible" custom={1}
                  style={{ fontSize: `${heroTitleFontPx}px`, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#000', margin: '0 0 1rem 0', whiteSpace: 'nowrap' }}
                >
                  {tech.title}
                </motion.h1>

                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={2}
                  style={{ fontSize: '1.2rem', fontWeight: 300, color: '#555', marginBottom: '1.5rem', lineHeight: 1.5 }}
                >
                  {tech.subtitle}
                </motion.p>

                <motion.p
                  variants={fadeUp} initial="hidden" animate="visible" custom={3}
                  style={{ fontSize: '1rem', color: '#666', lineHeight: 1.75, maxWidth: '460px' }}
                >
                  {tech.description}
                </motion.p>

                <motion.div
                  variants={fadeUp} initial="hidden" animate="visible" custom={4}
                  style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
                >
                  {tech.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '0.35rem 0.9rem',
                      background: '#000',
                      color: '#fff',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right: product image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div style={{ width: '100%', aspectRatio: '1 / 1' }}>
                  <SatelliteGlobeAnimation />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── SPECS ── */}
          <section style={{ marginBottom: '7rem' }}>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: isCardsStacked ? '1fr' : 'repeat(3, 1fr)',
                gap: '1px',
                background: '#e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
              }}
            >
              {tech.specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                  style={{
                    background: '#fff',
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
                    {s.label}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#222', lineHeight: 1.5 }}>
                    {s.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── EXPLODED VIEW ── */}
          <section style={{ marginBottom: '7rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isStacked ? '1fr' : '1fr 1fr', gap: isStacked ? '2rem' : '4rem', alignItems: 'center' }}>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <img
                  src="/images/Boitier_alyon_visu_eclate.png"
                  alt="Conception 3D du module de calcul ALYON AI"
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: '20px',
                    maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 100%)',
                  }}
                />
              </motion.div>

              <div style={{ minWidth: 0 }}>
                <motion.span
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                  style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}
                >
                  {tech.hardwareLabel}
                </motion.span>

                <motion.h2
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', margin: '0 0 1.25rem 0', lineHeight: 1.1 }}
                >
                  {tech.hardwareTitle.split('\n').map((line, i) => (
                    <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                  ))}
                </motion.h2>

                <motion.p
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                  style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, marginBottom: '1.5rem' }}
                >
                  {tech.hardwareDesc}
                </motion.p>

                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                >
                  {tech.hardwareFeatures.map((line, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#000', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', color: '#444' }}>{line}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── SOFTWARE / VIDEO POC ── */}
          <section style={{ marginBottom: '5rem' }}>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>
                {tech.softwareLabel}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', margin: '0 auto 1rem', lineHeight: 1.1, maxWidth: '600px' }}>
                {tech.softwareTitle}
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                {tech.softwareDesc}
              </p>
            </motion.div>

            {/* Detect / Act / Alert steps */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: isCardsStacked ? '1fr' : 'repeat(3, 1fr)',
                gap: '1px',
                background: '#e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
              }}
            >
              {tech.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                  style={{
                    background: '#fff',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#000',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#000' }}>
                    {step.title}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                    {step.desc}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── BY THE NUMBERS ── */}
          <section style={{ marginBottom: '5rem' }}>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '2.5rem' }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>
                {tech.capabilitiesLabel}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#000', margin: '0 auto', lineHeight: 1.1, maxWidth: '600px' }}>
                {tech.capabilitiesTitle}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: isCardsStacked ? '1fr' : 'repeat(3, 1fr)',
                gap: '1px',
                background: '#e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
              }}
            >
              {tech.capabilities.map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: '#fff',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#000', letterSpacing: '-0.02em' }}>
                    {c.value}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                    {c.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ── CTA ── */}
          <motion.section
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', paddingTop: '2rem' }}
          >
            <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem' }}>
              {tech.ctaText}
            </p>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 2rem',
                background: '#000',
                color: '#fff',
                borderRadius: '9999px',
                fontWeight: 500,
                fontSize: '1rem',
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
              {tech.ctaBtn}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.section>

        </div>
      </main>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
};

export default TechnologyPage;
