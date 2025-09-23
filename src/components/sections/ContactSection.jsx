import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Icon from '../ui/Icon';
import '../../styles/components/ContactSection.css';

const ContactSection = ({ data }) => {
  const animationRef = useRef(null);
  const particle1Ref = useRef(null);
  const particle2Ref = useRef(null);
  const logoRef = useRef(null);
  const explosionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détection responsive
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!animationRef.current) return;

    const particle1 = particle1Ref.current;
    const particle2 = particle2Ref.current;
    const logo = logoRef.current;
    const explosion = explosionRef.current;

    // Dimensions responsive
    const containerWidth = isMobile ? 300 : 400;
    const containerHeight = isMobile ? 200 : 250;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Animation des particules qui se baladent
    const animateParticles = () => {
      // Timeline pour les particules
      const tl = gsap.timeline({ repeat: -1 });
      
      // Ajuster les paths selon la taille
      const path1 = isMobile 
        ? `M 30,160 Q 100,40 180,100 T 270,70 T 220,150 T 30,160`
        : `M 40,180 Q 120,50 200,120 T 320,80 T 280,180 T 40,180`;
      
      const path2 = isMobile
        ? `M 270,50 Q 200,120 150,80 T 40,110 T 120,30 T 270,50`
        : `M 320,60 Q 240,150 180,100 T 50,140 T 140,40 T 320,60`;
        
      // Phase 1: Les particules se baladent aléatoirement
      tl.set([particle1, particle2], { scale: 1, opacity: 0.7 })
        .to(particle1, {
          duration: 4,
          motionPath: {
            path: path1,
            autoRotate: false,
          },
          ease: "none"
        }, 0)
        .to(particle2, {
          duration: 4,
          motionPath: {
            path: path2,
            autoRotate: false,
          },
          ease: "none"
        }, 0)
        
        // Phase 2: Les particules convergent vers le logo (centre exact)
        .to([particle1, particle2], {
          duration: 1.5,
          x: centerX,
          y: centerY,
          scale: 0.5,
          ease: "power2.inOut"
        })
        
        // Phase 3: Explosion de fumée organique qui se propage
        .to(explosion, {
          duration: 0.6,
          scale: isMobile ? 5 : 6,
          rotation: 180,
          opacity: 0.9,
          borderRadius: '50% 30% 70% 40%',
          ease: "power2.out"
        })
        .to(explosion, {
          duration: 0.8,
          scale: isMobile ? 7 : 8,
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
          scale: isMobile ? 9 : 10,
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
          ease: "none"
        })
        .to(particle1, {
          duration: 1,
          x: isMobile ? 30 : 40,
          y: isMobile ? 160 : 180,
          scale: 1,
          opacity: 0.7,
          ease: "power2.inOut"
        }, "-=0.1")
        .to(particle2, {
          duration: 1,
          x: isMobile ? 270 : 320,
          y: isMobile ? 50 : 60,
          scale: 1,
          opacity: 0.7,
          ease: "power2.inOut"
        }, "-=1");
    };

    animateParticles();

    return () => {
      gsap.killTweensOf([particle1, particle2, logo, explosion]);
    };
  }, [isMobile]);

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
          justifyContent: isMobile ? 'center' : 'space-between', 
          alignItems: 'center',
          gap: isMobile ? '30px' : '40px',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap'
        }}>
          <div className="contact-info" style={{ 
            flex: isMobile ? 'none' : '1', 
            minWidth: isMobile ? '280px' : '300px',
            width: isMobile ? '100%' : 'auto'
          }}>
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
                width: isMobile ? '300px' : '400px',
                height: isMobile ? '200px' : '250px',
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
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                margin: isMobile ? '0 auto' : '0'
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
                  left: isMobile ? '30px' : '40px',
                  top: isMobile ? '160px' : '180px',
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
                  left: isMobile ? '270px' : '320px',
                  top: isMobile ? '50px' : '60px',
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
                    width: isMobile ? '120px' : '150px',
                    height: 'auto',
                    maxHeight: isMobile ? '80px' : '100px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
              
              {/* Texte d'action en dessous du logo */}
              <div
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '15px' : '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: isMobile ? '14px' : '16px',
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