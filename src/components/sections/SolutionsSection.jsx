import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../ui/Icon';
import '../../styles/components/SolutionsSection.css';

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = ({ data }) => {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const videoPreloadRefs = useRef([]);

  // Configuration des données pour chaque étape - utilisation de useMemo pour éviter la re-création à chaque rendu
  const stepsData = useMemo(() => [
    {
      video: "/47339-451297052_detected.mp4",
      leftCard: data.solutions[0],
      rightCard: data.solutions[0],
    },
    {
      video: "/sift_demo_final.mp4", // Remplacez par votre deuxième vidéo
      leftCard: data.solutions[1],
      rightCard: data.solutions[1],
    },
    {
      video: "/169631-841557068.mp4", // Remplacez par votre troisième vidéo
      leftCard: data.solutions[2],
      rightCard: data.solutions[2],
    }
  ], [data.solutions]);

  // Preload des vidéos pour améliorer la réactivité
  useEffect(() => {
    // Capture the ref value at the beginning of the effect
    const videosRef = videoPreloadRefs.current;
    
    // Preload toutes les vidéos en arrière-plan
    stepsData.forEach((step, index) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.src = step.video;
      videosRef[index] = video;
    });

    return () => {
      // Cleanup - use the captured ref value to avoid stale closure
      videosRef.forEach(video => {
        if (video) {
          video.src = '';
          video.load();
        }
      });
    };
  }, [stepsData]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const triggerHeight = window.innerHeight * 3; // Hauteur pour les 3 étapes

    // Fonction pour animer les cartes en fonction du scroll
    const animateCardsOnScroll = (progress) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      
      // Calculer les transitions entre les étapes avec le scroll en temps réel
      const step1Transition = Math.min(Math.max((progress - 0) / (1/3), 0), 1); // 0 à 1/3
      const step2Transition = Math.min(Math.max((progress - 1/3) / (1/3), 0), 1); // 1/3 à 2/3
      
      // Animer les cartes de l'étape 0 (première carte se rétrécit progressivement entre étape 0 et 1)
      const step0Cards = section.querySelectorAll('[class*="step-0"]');
      step0Cards.forEach(card => {
        animateCardTransition(card, step1Transition);
      });

      // Animer les cartes de l'étape 1 (deuxième carte se rétrécit progressivement entre étape 1 et 2)
      const step1Cards = section.querySelectorAll('[class*="step-1"]');
      step1Cards.forEach(card => {
        animateCardTransition(card, step2Transition);
      });

      // Les cartes de l'étape 2 (dernière étape) ne se rétrécie jamais
      const step2Cards = section.querySelectorAll('[class*="step-2"]');
      step2Cards.forEach(card => {
        animateCardTransition(card, 0); // Toujours en grand
      });
    };

    // Créer le ScrollTrigger pour rendre la section sticky
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 2%", // Déclenche quand le haut de la section arrive à 80px du haut de l'écran
      end: `+=${triggerHeight}`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newStep = Math.floor(progress * 3);
        const clampedStep = Math.min(newStep, 2);
        
        // Animation progressive des cartes basée sur le scroll
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

  // Fonction pour animer une carte individuelle
  const animateCardTransition = (card, transitionProgress) => {
    if (!card) return;

    // Pour la nouvelle logique : réduction uniquement en hauteur (bidirectionnelle)
    const minHeight = 100; // Hauteur minimale du cadran rétréci (bonne taille actuelle)
    const maxHeight = 280; // Hauteur maximale du cadran ouvert (plus grande)
    
    // Interpolation bidirectionnelle - fonctionne dans les deux sens
    const currentHeight = maxHeight - (transitionProgress * (maxHeight - minHeight));

    // Animer la carte - seulement la hauteur et pas de changement de scale/opacity
    gsap.set(card, {
      height: `${currentHeight}px`,
      overflow: 'hidden',
      marginBottom: `${transitionProgress * 8}px` // Légère marge entre les cartes
    });

    // Animer les éléments internes - apparition/disparition progressive du contenu du bas
    const description = card.querySelector('.solution-description, .benefits-list');
    const header = card.querySelector('.solution-header, .benefits-header');

    // Le header reste toujours visible et en haut
    if (header) {
      gsap.set(header, {
        marginBottom: '8px', // Marge constante
        opacity: 1 // Toujours visible
      });
    }

    // La description apparaît/disparaît progressivement par le bas
    if (description) {
      gsap.set(description, {
        opacity: 1 - (transitionProgress * 1.5), // Disparition/apparition progressive
        height: transitionProgress > 0.4 ? 0 : 'auto', // Collapse/expand en hauteur
        overflow: 'hidden',
        marginTop: transitionProgress > 0.4 ? 0 : '8px'
      });
    }
  };

  // État précédent pour détecter les cartes qui sortent
  const [previousStep, setPreviousStep] = useState(0);

  // Effet séparé pour animer les cartes lors du changement d'étape
  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    
    // Détecter le sens du changement
    const isMovingForward = currentStep > previousStep;
    const isMovingBackward = currentStep < previousStep;

    if (isMovingForward) {
      // Animation d'entrée pour les nouvelles cartes (scroll vers le bas)
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
      // Animation de sortie pour les cartes qui disparaissent (scroll vers le haut)
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

      // Pas d'animation d'entrée pour les cartes qui redeviennent actives
      // Elles vont juste bénéficier de l'animation d'ouverture normale
    }

    // Mettre à jour l'étape précédente
    setPreviousStep(currentStep);

  }, [currentStep, previousStep]);

  // Supprimer la fonction handleStepAnimation pour l'instant
  const getSolutionIcon = (index) => {
    const iconNames = ['predictive', 'qualityControl', 'intelligentAssistance'];
    return iconNames[index] || 'predictive';
  };

  const renderCard = (solution, position, className, isCompact = false, animationDelay = 0, stepIndex = 0) => (
    <div 
      className={`solution-card ${className} step-${stepIndex}`}
      style={{
        background: 'linear-gradient(135deg, #5488e0 0%, #4374d9 100%)',
        borderRadius: '20px',
        padding: '24px',
        color: 'white',
        boxShadow: '0 15px 40px rgba(84, 136, 224, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transform: 'translateY(0)', // Pas de scale
        opacity: 1, // Pas de changement d'opacité
        marginBottom: '0',
        overflow: 'hidden',
        transition: 'none',
        height: 'auto', // Hauteur automatique par défaut, sera animée par GSAP
        minHeight: '100px' // Hauteur minimale pour les cartes rétrécies
      }}
    >
      <div className="solution-card-content">
        <div className="solution-header" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '8px' // Marge réduite par défaut
        }}>
          <div 
            className="solution-icon"
            style={{
              width: '48px', // Taille constante
              height: '48px', // Taille constante
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
              size={20} // Taille constante
              color="white" 
              className="solution-icon-svg"
            />
          </div>
          <h3 className="solution-title" style={{ 
            fontSize: '18px', // Taille constante
            fontWeight: '600', 
            color: 'white', 
            margin: 0,
            lineHeight: 1.2
          }}>
            {solution.title}
          </h3>
        </div>
        <div 
          className="solution-description" 
          style={{ 
            fontSize: '14px', 
            color: 'rgba(255, 255, 255, 0.9)', 
            margin: 0,
            opacity: 1,
            height: 'auto',
            overflow: 'hidden',
            marginTop: '8px'
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
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
        border: '2px solid #e5e7eb',
        transform: 'translateY(0)', // Pas de scale
        opacity: 1, // Pas de changement d'opacité
        marginBottom: '0',
        overflow: 'hidden',
        transition: 'none',
        height: 'auto', // Hauteur automatique par défaut, sera animée par GSAP
        minHeight: '100px' // Hauteur minimale pour les cartes rétrécies
      }}
    >
      <div className="benefits-card-content">
        <div className="benefits-header" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '8px' // Marge réduite par défaut
        }}>
          <div 
            className="benefits-icon"
            style={{
              width: '48px', // Taille constante
              height: '48px', // Taille constante
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
              size={40} 
              color="white" 
              className="benefits-icon-svg"
            />
          </div>
          <h4 className="benefits-title" style={{ 
            fontSize: '18px', // Taille constante
            fontWeight: '600', 
            color: '#1f2937', 
            margin: 0,
            lineHeight: 1.2
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
          {solution.benefits.map((benefit, idx) => (
            <li 
              key={idx} 
              className="benefit-item"
              style={{
                fontSize: '14px',
                color: '#4b5563',
                marginBottom: '8px',
                paddingLeft: '16px',
                position: 'relative',
                transform: 'translateY(0)'
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#5488e0', fontWeight: 'bold' }}>•</span>
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
        // border supprimée
      }}
    >
      <div 
        className="solutions-sticky-container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px'
          // border supprimée
        }}
      >
        
        {/* Titre fixe */}
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
              fontSize: '48px',
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
              fontSize: '20px',
              color: '#666666',
              margin: 0,
              fontWeight: 400,
              lineHeight: 1.5
            }}
          >
            Trois domaines d'expertise pour transformer votre industrie
          </p>
        </div>

        {/* Layout principal avec cartes et vidéo */}
        <div 
          className="solutions-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr 300px',
            gap: '60px',
            width: '100%',
            maxWidth: '1200px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          
          {/* Colonne gauche */}
          <div 
            className="solutions-left"
            style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start', // Commencer du haut pour remonter les cadrans
              gap: '0px' // Pas de gap pour que les cartes se collent
            }}
          >
            {/* Cartes précédentes rétrécies */}
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
            
            {/* Carte actuelle en grand */}
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

          {/* Vidéo centrale */}
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
              position: 'relative'
            }}
          >
            <video 
              key={currentStep} // Force le rechargement de la vidéo
              className="solutions-video-sticky"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '24px'
              }}
            >
              <source src={stepsData[currentStep].video} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {/* Preload des vidéos suivantes en arrière-plan */}
            {stepsData.map((step, index) => (
              index !== currentStep && (
                <video
                  key={`preload-${index}`}
                  preload="auto"
                  muted
                  style={{ display: 'none' }}
                  src={step.video}
                />
              )
            ))}
          </div>

          {/* Colonne droite */}
          <div 
            className="solutions-right"
            style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start', // Commencer du haut pour remonter les cadrans
              gap: '0px' // Pas de gap pour que les cartes se collent
            }}
          >
            {/* Cartes précédentes rétrécies */}
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
            
            {/* Carte actuelle en grand */}
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

        </div>

        {/* Indicateur d'étape */}
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
