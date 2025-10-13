import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../ui/Icon';
import '../../styles/components/SolutionsSection.css';

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = ({ data }) => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]); // ✅ Array pour toutes les vidéos
  const [currentStep, setCurrentStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const stepsData = [
    {
      video: "/video1-optimized.mp4",
      leftCard: data.solutions[0],
      rightCard: data.solutions[0],
    },
    {
      video: "/video2-optimized.mp4",
      leftCard: data.solutions[1],
      rightCard: data.solutions[1],
    },
    {
      video: "/video3-optimized.mp4",
      leftCard: data.solutions[2],
      rightCard: data.solutions[2],
    }
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // ✅ Préchargement de TOUTES les vidéos au montage
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.load(); // Force le préchargement
        if (index === 0) {
          video.play().catch(e => console.log('Autoplay prevented:', e));
        }
      }
    });
  }, []);

  // ✅ Changement de vidéo SANS rechargement
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentStep) {
          video.style.display = 'block';
          video.style.opacity = '1';
          video.play().catch(e => console.log('Play prevented:', e));
        } else {
          video.style.display = 'none';
          video.style.opacity = '0';
          video.pause();
        }
      }
    });
  }, [currentStep]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const triggerHeight = window.innerHeight * 3;

    const animateCardsOnScroll = (progress) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      
      const step1Transition = Math.min(Math.max((progress - 0) / (1/3), 0), 1);
      const step2Transition = Math.min(Math.max((progress - 1/3) / (1/3), 0), 1);
      
      const step0Cards = section.querySelectorAll('[class*="step-0"]');
      step0Cards.forEach(card => {
        animateCardTransition(card, step1Transition);
      });

      const step1Cards = section.querySelectorAll('[class*="step-1"]');
      step1Cards.forEach(card => {
        animateCardTransition(card, step2Transition);
      });

      const step2Cards = section.querySelectorAll('[class*="step-2"]');
      step2Cards.forEach(card => {
        animateCardTransition(card, 0);
      });
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 2%",
      end: `+=${triggerHeight}`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newStep = Math.floor(progress * 3);
        const clampedStep = Math.min(newStep, 2);
        
        animateCardsOnScroll(progress);
        
        setCurrentStep(clampedStep);
        setIsSticky(self.isActive);
      },
      onToggle: (self) => {
        setIsSticky(self.isActive);
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const animateCardTransition = (card, transitionProgress) => {
    if (!card) return;

    const minHeight = 100;
    const maxHeight = 280;
    
    const currentHeight = maxHeight - (transitionProgress * (maxHeight - minHeight));

    gsap.set(card, {
      height: `${currentHeight}px`,
      overflow: 'hidden',
      marginBottom: `${transitionProgress * 8}px`
    });

    const description = card.querySelector('.solution-description, .benefits-list');
    const header = card.querySelector('.solution-header, .benefits-header');

    if (header) {
      gsap.set(header, {
        marginBottom: '8px',
        opacity: 1
      });
    }

    if (description) {
      gsap.set(description, {
        opacity: 1 - (transitionProgress * 1.5),
        height: transitionProgress > 0.4 ? 0 : 'auto',
        overflow: 'hidden',
        marginTop: transitionProgress > 0.4 ? 0 : '8px'
      });
    }
  };

  const [previousStep, setPreviousStep] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    
    const isMovingForward = currentStep > previousStep;
    const isMovingBackward = currentStep < previousStep;

    if (isMovingForward) {
      const newCards = section.querySelectorAll(`[class*="step-${currentStep}"]`);
      newCards.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            y: 30,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            delay: index * 0.15
          }
        );
      });
    } 
    
    if (isMovingBackward) {
      const disappearingCards = section.querySelectorAll(`[class*="step-${previousStep}"]`);
      disappearingCards.forEach((card, index) => {
        gsap.to(card, {
          y: -30,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "back.in(1.2)",
          delay: index * 0.1
        });
      });
    }

    setPreviousStep(currentStep);

  }, [currentStep, previousStep]);

  const getSolutionIcon = (index) => {
    const iconNames = ['predictive', 'qualityControl', 'intelligentAssistance'];
    return iconNames[index] || 'predictive';
  };

  const renderCard = (solution, position, className, isCompact = false, animationDelay = 0, stepIndex = 0) => (
    <div 
      className={`solution-card ${className} step-${stepIndex}`}
      style={{
        background: 'linear-gradient(135deg, #5488e0 0%, #4374d9 100%)',
        borderRadius: isMobile ? '16px' : '20px',
        padding: isMobile && position === 'mobile' ? '16px' : '24px',
        color: 'white',
        boxShadow: '0 15px 40px rgba(84, 136, 224, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transform: 'translateY(0)',
        opacity: 1,
        marginBottom: '0',
        overflow: 'hidden',
        transition: 'none',
        height: 'auto',
        minHeight: isMobile && position === 'mobile' ? '180px' : '100px'
      }}
    >
      <div className="solution-card-content">
        <div className="solution-header" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile && position === 'mobile' ? '12px' : '16px',
          marginBottom: '8px',
          flexDirection: isMobile && position === 'mobile' ? 'column' : 'row'
        }}>
          <div 
            className="solution-icon"
            style={{
              width: isMobile && position === 'mobile' ? '36px' : '48px',
              height: isMobile && position === 'mobile' ? '36px' : '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Icon 
              name={getSolutionIcon(data.solutions.indexOf(solution))} 
              size={isMobile && position === 'mobile' ? 16 : 20}
              color="white" 
              className="solution-icon-svg"
            />
          </div>
          <h3 className="solution-title" style={{ 
            fontSize: isMobile && position === 'mobile' ? '14px' : '18px',
            fontWeight: '600', 
            color: 'white', 
            margin: 0,
            lineHeight: 1.2,
            textAlign: isMobile && position === 'mobile' ? 'center' : 'left'
          }}>
            {solution.title}
          </h3>
        </div>
        <div 
          className="solution-description" 
          style={{ 
            fontSize: isMobile && position === 'mobile' ? '11px' : '14px',
            color: 'rgba(255, 255, 255, 0.9)', 
            margin: 0,
            opacity: 1,
            height: 'auto',
            overflow: 'hidden',
            marginTop: '8px',
            textAlign: isMobile && position === 'mobile' ? 'center' : 'left',
            lineHeight: 1.3
          }}
        >
          {solution.description}
        </div>
      </div>
    </div>
  );

  const renderBenefitsCard = (solution, className, isCompact = false, animationDelay = 0, stepIndex = 0) => (
    <div 
      className={`benefits-card ${className} step-${stepIndex}`}
      style={{
        background: '#ffffff',
        borderRadius: isMobile ? '16px' : '20px',
        padding: isMobile && className.includes('mobile') ? '16px' : '24px',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
        border: '2px solid #e5e7eb',
        transform: 'translateY(0)',
        opacity: 1,
        marginBottom: '0',
        overflow: 'hidden',
        transition: 'none',
        height: 'auto',
        minHeight: isMobile && className.includes('mobile') ? '180px' : '100px'
      }}
    >
      <div className="benefits-card-content">
        <div className="benefits-header" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile && className.includes('mobile') ? '12px' : '16px',
          marginBottom: '8px',
          flexDirection: isMobile && className.includes('mobile') ? 'column' : 'row'
        }}>
          <div 
            className="benefits-icon"
            style={{
              width: isMobile && className.includes('mobile') ? '36px' : '48px',
              height: isMobile && className.includes('mobile') ? '36px' : '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #5488e0 0%, #4374d9 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Icon 
              name="check" 
              size={isMobile && className.includes('mobile') ? 20 : 40} 
              color="white" 
              className="benefits-icon-svg"
            />
          </div>
          <h4 className="benefits-title" style={{ 
            fontSize: isMobile && className.includes('mobile') ? '14px' : '18px',
            fontWeight: '600', 
            color: '#1f2937', 
            margin: 0,
            lineHeight: 1.2,
            textAlign: isMobile && className.includes('mobile') ? 'center' : 'left'
          }}>
            Avantages clés
          </h4>
        </div>
        <ul 
          className="benefits-list" 
          style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            opacity: 1,
            height: 'auto',
            overflow: 'hidden',
            marginTop: '8px'
          }}
        >
          {(isMobile && className.includes('mobile') ? 
            solution.benefits.slice(0, 3) : 
            solution.benefits
          ).map((benefit, idx) => (
            <li 
              key={idx} 
              className="benefit-item"
              style={{
                fontSize: isMobile && className.includes('mobile') ? '10px' : '14px',
                color: '#4b5563',
                marginBottom: isMobile && className.includes('mobile') ? '4px' : '8px',
                paddingLeft: isMobile && className.includes('mobile') ? '12px' : '16px',
                position: 'relative',
                transform: 'translateY(0)',
                lineHeight: 1.2
              }}
            >
              <span style={{ 
                position: 'absolute', 
                left: 0, 
                color: '#5488e0', 
                fontWeight: 'bold',
                fontSize: isMobile && className.includes('mobile') ? '12px' : '14px'
              }}>•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section 
      id="solutions" 
      className={`solutions-section-sticky ${isSticky ? 'is-sticky' : ''}`}
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="solutions-sticky-container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          height: isMobile ? 'auto' : '100vh',
          minHeight: isMobile ? '100vh' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '30px' : '40px'
        }}
      >
        
        <div 
          className="solutions-header-fixed"
          style={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <h2 
            className="solutions-main-title"
            style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 16px 0'
            }}
          >
            Nos solutions IA
          </h2>
          <p 
            className="solutions-subtitle"
            style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#666666',
              margin: 0,
              fontWeight: 400,
              lineHeight: 1.5,
              padding: isMobile ? '0 16px' : '0'
            }}
          >
            Trois domaines d'expertise pour transformer votre industrie
          </p>
        </div>

        <div 
          className="solutions-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '300px 1fr 300px',
            gridTemplateRows: isMobile ? 'auto auto auto' : '1fr',
            gap: isMobile ? '30px' : '60px',
            width: '100%',
            maxWidth: '1200px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          
          {/* ✅ Container avec TOUTES les vidéos préchargées */}
          <div 
            className="video-container-sticky"
            style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '16/9',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#000000',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3), 0 15px 40px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              gridColumn: isMobile ? '1' : '2',
              gridRow: isMobile ? '1' : '1',
              justifySelf: 'center'
            }}
          >
            {/* ✅ Toutes les vidéos sont montées en même temps */}
            {stepsData.map((step, index) => (
              <video 
                key={index} // ✅ Index fixe, pas currentStep !
                ref={el => videoRefs.current[index] = el}
                className="solutions-video-sticky"
                autoPlay={index === 0}
                muted 
                loop 
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: index === 0 ? 'block' : 'none',
                  opacity: index === 0 ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <source src={step.video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            ))}
          </div>

          {isMobile ? (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                width: '100%',
                gridColumn: '1',
                gridRow: '2'
              }}
            >
              <div style={{ width: '100%' }}>
                {renderCard(
                  stepsData[currentStep].leftCard,
                  'mobile',
                  'current-mobile-left-card',
                  false,
                  0,
                  currentStep
                )}
              </div>
              
              <div style={{ width: '100%' }}>
                {renderBenefitsCard(
                  stepsData[currentStep].rightCard,
                  'current-mobile-right-card',
                  false,
                  0,
                  currentStep
                )}
              </div>
            </div>
          ) : (
            <>
              <div 
                className="solutions-left"
                style={{
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '0px',
                  gridColumn: '1',
                  gridRow: '1'
                }}
              >
                {stepsData.slice(0, currentStep).map((step, index) => (
                  <div 
                    key={`prev-left-${index}`} 
                    style={{ 
                      width: '100%',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {renderCard(
                      step.leftCard, 
                      'left', 
                      `prev-card-${index}`,
                      false,
                      0,
                      index
                    )}
                  </div>
                ))}
                
                <div 
                  style={{ 
                    width: '100%',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {renderCard(
                    stepsData[currentStep].leftCard,
                    'left',
                    'current-left-card',
                    false,
                    0,
                    currentStep
                  )}
                </div>
              </div>

              <div 
                className="solutions-right"
                style={{
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '0px',
                  gridColumn: '3',
                  gridRow: '1'
                }}
              >
                {stepsData.slice(0, currentStep).map((step, index) => (
                  <div 
                    key={`prev-right-${index}`} 
                    style={{ 
                      width: '100%',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {renderBenefitsCard(
                      step.rightCard, 
                      `prev-benefits-${index}`,
                      false,
                      0,
                      index
                    )}
                  </div>
                ))}
                
                <div 
                  style={{ 
                    width: '100%',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {renderBenefitsCard(
                    stepsData[currentStep].rightCard,
                    'current-right-card',
                    false,
                    0,
                    currentStep
                  )}
                </div>
              </div>
            </>
          )}

        </div>

        <div 
          className="step-indicator"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          {stepsData.map((_, index) => (
            <div 
              key={index}
              className={`step-dot ${index === currentStep ? 'active' : ''}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === currentStep ? '#5488e0' : '#e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: index === currentStep ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
