import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from '../ui/Icon';
import '../../styles/components/ContactSection.css';

const ContactSection = ({ data }) => {
  const animationRef = useRef(null);
  const particle1Ref = useRef(null);
  const particle2Ref = useRef(null);
  const logoRef = useRef(null);
  const explosionRef = useRef(null);

  useEffect(() => {
    if (!animationRef.current) return;

    const particle1 = particle1Ref.current;
    const particle2 = particle2Ref.current;
    const logo = logoRef.current;
    const explosion = explosionRef.current;

    // Animation des particules qui se baladent
    const animateParticles = () => {
      // Timeline pour les particules
      const tl = gsap.timeline({ repeat: -1 });        // Phase 1: Les particules se baladent aléatoirement
      tl.set([particle1, particle2], { scale: 1, opacity: 0.7 })
        .to(particle1, {
          duration: 4,
          motionPath: {
            path: "M 40,260 Q 150,60 250,150 T 420,100 T 350,230 T 40,260",
            autoRotate: false,
          },
          ease: "none"
        }, 0)
        .to(particle2, {
          duration: 4,
          motionPath: {
            path: "M 420,80 Q 300,190 230,130 T 60,180 T 180,50 T 420,80",
            autoRotate: false,
          },
          ease: "none"
        }, 0)
        
        // Phase 2: Les particules convergent vers le logo (centre exact)
        .to([particle1, particle2], {
          duration: 1.5,
          x: 250, // Centre du cadran (500px / 2)
          y: 160, // Centre du cadran (320px / 2)
          scale: 0.5,
          ease: "power2.inOut"
        })
        
        // Phase 3: Explosion de fumée organique qui se propage (plus visible)
        .to(explosion, {
          duration: 0.6,
          scale: 8,
          rotation: 180,
          opacity: 0.9,
          borderRadius: '50% 30% 70% 40%',
          ease: "power2.out"
        })
        .to(explosion, {
          duration: 0.8,
          scale: 12,
          rotation: 360,
          opacity: 0.7,
          borderRadius: '40% 70% 30% 60%',
          ease: "power1.out"
        }, "-=0.3")
        .to([particle1, particle2], {
          duration: 0.4,
          scale: 0,
          opacity: 0,
          rotation: 360
        }, "-=0.6")
        .to(logo, {
          duration: 0.5,
          scale: 1.1,
          ease: "elastic.out(1, 0.3)"
        }, "-=0.3")
        
        // Phase 4: Dissipation naturelle de la fumée
        .to(explosion, {
          duration: 1.2,
          scale: 15,
          rotation: 540,
          opacity: 0,
          borderRadius: '30% 80% 20% 90%',
          ease: "power2.in"
        })
        .to(logo, {
          duration: 0.5,
          scale: 1,
          ease: "elastic.out(1, 0.3)"
        }, "-=0.8")
        
        // Phase 5: Transition fluide - repositionner les particules progressivement
        .to(explosion, {
          duration: 0.1,
          scale: 0,
          rotation: 0,
          ease: "none"
        })
        .to(particle1, {
          duration: 1,
          x: 40,
          y: 260,
          scale: 1,
          opacity: 0.7,
          ease: "power2.inOut"
        }, "-=0.1")
        .to(particle2, {
          duration: 1,
          x: 420,
          y: 80,
          scale: 1,
          opacity: 0.7,
          ease: "power2.inOut"
        }, "-=1");
    };

    animateParticles();

    return () => {
      gsap.killTweensOf([particle1, particle2, logo, explosion]);
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Prêt à démarrer ?
          </h2>
          <p className="contact-subtitle">
            Contactez-nous pour discuter de vos besoins en IA industrielle
          </p>
        </div>

        <div className="contact-content" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          <div className="contact-info" style={{ flex: '1', minWidth: '300px' }}>
            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="mail" size={24} color="white" />
              </div>
              <div>
                <strong>Email</strong>
                <p>{data.contact.email}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="location" size={24} color="white" />
              </div>
              <div>
                <strong>Adresse</strong>
                <p>{data.contact.address}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="business" size={24} color="white" />
              </div>
              <div>
                <strong>LinkedIn</strong>
                <p>
                  <a href={data.contact.linkedIn} target="_blank" rel="noopener noreferrer">
                    Suivez-nous
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta" style={{ flex: '0 0 auto' }}>
            <div 
              ref={animationRef}
              className="logo-animation-container"
              style={{
                width: '500px',
                height: '320px',
                background: '#fafafa',
                border: '2px solid #e5e7eb',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(0, 0, 0, 0.05)';
              }}
              onClick={() => {
                window.location.href = 'mailto:contact@alyon.ai?subject=Démarrage de projet IA&body=Bonjour,%0D%0A%0D%0AJe souhaiterais discuter d\'un projet d\'intelligence artificielle pour mon entreprise.%0D%0A%0D%0ACordialement,';
              }}
            >
              {/* Particule 1 - Bleu */}
              <div
                ref={particle1Ref}
                style={{
                  position: 'absolute',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)',
                  left: '40px',
                  top: '260px',
                  zIndex: 1
                }}
              />
              
              {/* Particule 2 - Jaune */}
              <div
                ref={particle2Ref}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  boxShadow: '0 0 15px rgba(251, 191, 36, 0.8)',
                  left: '430px',
                  top: '50px',
                  zIndex: 1
                }}
              />
              
              {/* Explosion de fumée organique */}
              <div
                ref={explosionRef}
                style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  borderRadius: '60% 40% 50% 70%',
                  background: `
                    radial-gradient(ellipse 120% 80% at 30% 20%, rgba(37, 99, 235, 0.6) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 120% at 70% 80%, rgba(251, 191, 36, 0.5) 0%, transparent 50%),
                    radial-gradient(ellipse 100% 100% at 50% 50%, rgba(147, 197, 253, 0.5) 20%, rgba(254, 240, 138, 0.4) 40%, rgba(255, 255, 255, 0.3) 60%, transparent 80%)
                  `,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
                  zIndex: 2,
                  filter: 'blur(1px)',
                  opacity: 0
                }}
              >
                {/* Particules de fumée secondaires */}
                <div style={{
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50% 40% 60% 30%',
                  background: 'rgba(37, 99, 235, 0.4)',
                  top: '-10px',
                  right: '-5px',
                  filter: 'blur(1px)'
                }} />
                <div style={{
                  position: 'absolute',
                  width: '15px',
                  height: '15px',
                  borderRadius: '40% 60% 50% 70%',
                  background: 'rgba(251, 191, 36, 0.4)',
                  bottom: '-8px',
                  left: '-3px',
                  filter: 'blur(1px)'
                }} />
                <div style={{
                  position: 'absolute',
                  width: '25px',
                  height: '18px',
                  borderRadius: '70% 30% 40% 60%',
                  background: 'rgba(147, 197, 253, 0.3)',
                  top: '50%',
                  right: '-12px',
                  filter: 'blur(1px)'
                }} />
              </div>
              
              {/* Logo central */}
              <div
                ref={logoRef}
                style={{
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/images/logo-Alyon-Black-rogne.png" 
                  alt="Logo Alyon" 
                  style={{
                    width: '150px',
                    height: 'auto',
                    maxHeight: '100px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
              
              {/* Texte d'action en dessous du logo */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '16px',
                  color: '#6b7280',
                  fontWeight: '500',
                  textAlign: 'center',
                  zIndex: 3
                }}
              >
                Démarrer votre projet IA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;