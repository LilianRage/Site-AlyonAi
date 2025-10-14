import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../ui/Icon';
import '../../styles/components/ResearchSection.css';

gsap.registerPlugin(ScrollTrigger);

const ResearchSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const researchData = [
    {
      title: "Modèles TOP 1",
      category: "LLM Frugaux",
      description: "Nos deux modèles compacts classés #1 sur Hugging Face. Le 2B pour l'edge computing et le 7B pour la haute performance, tous deux leaders en efficacité énergétique.",
      highlights: [
        "Modèle 2B - #1 catégorie compact",
        "Modèle 7B - #1 performance/efficacité",
        "Optimisés pour l'industrie"
      ],
      icon: "ai",
      link: "https://huggingface.co/collections/Alyon-AI/prymmal-project-68ecd362e4dea77ce5491990"
    },
    {
      title: "Projet UMA",
      category: "Aéronautique & Aérospatial",
      description: "Les tout premiers modèles (LLM et VLM) et datasets open source spécialisés dans l'aéronautique et l'aérospatial. Une innovation majeure pour démocratiser l'IA dans ce secteur stratégique.",
      highlights: [
        "Premier LLM aérospatial open source",
        "Datasets spécialisés aéronautique",
        "VLM (Vision-Language Model) dédié"
      ],
      icon: "rocket",
      link: "https://huggingface.co/collections/Alyon-AI/uma-68ecd1b2144d85d726703237"
    },
    {
      title: "R&D Future",
      category: "Innovation Continue",
      description: "Développement de nouvelles architectures neuronales et modèles de prochaine génération. Nos projets de R&D actuels repoussent les limites de l'IA industrielle.",
      highlights: [
        "Nouvelles architectures innovantes",
        "Modèles de nouvelle génération",
        "3+ projets R&D en cours"
      ],
      icon: "network",
      link: "https://huggingface.co/Alyon-AI"
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

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.research-card'),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section 
      id="research" 
      className="research-section"
      ref={sectionRef}
      style={{
        padding: isMobile ? '80px 0' : '120px 0',
        background: 'linear-gradient(180deg, #f8f9fbff 0%, #ffffff 50%, #f8f9fb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Décorations subtiles en arrière-plan */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(84, 136, 224, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(84, 136, 224, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div 
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '50px' : '70px'
          }}
        >
          <h2 
            style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 16px 0',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Innovation & Recherche
            <span
              style={{
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50%',
                height: 3,
                backgroundColor: '#000',
                borderRadius: 3,
                display: 'block'
              }}
            />
          </h2>
          
          <p 
            style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#475569',
              margin: '0 auto 30px',
              maxWidth: '800px',
              lineHeight: 1.6
            }}
          >
            Notre approche open source vise à démocratiser l'IA industrielle en partageant nos modèles et recherches. 
            Nous développons des solutions frugales et performantes, classées #1 sur Hugging Face, accessibles à tous.
          </p>

          <a 
            href="https://huggingface.co/Alyon-AI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              willChange: 'transform'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)';
            }}
          >
            <img src="/images/hf-logo.svg" alt="Hugging Face" style={{ width: 30, height: 30, marginRight: 8, verticalAlign: 'middle' }} />
            Voir notre Hugging Face
          </a>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px'
          }}
        >
          {researchData.map((item, index) => (
            <div 
              key={index}
              className="research-card"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: isMobile ? '24px' : '32px',
                boxShadow: '0 15px 40px #00000014',
                border: '2px solid #e5e7eb',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: '#5386df1a',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#5488e0',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                {item.category}
              </div>

              <h3 
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '700',
                  color: '#464646ff',
                  margin: '0 0 12px 0'
                }}
              >
                {item.title}
              </h3>

              <p 
                style={{
                  fontSize: '15px',
                  color: '#6b7280',
                  lineHeight: 1.6,
                  margin: '0 0 24px 0'
                }}
              >
                {item.description}
              </p>

              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {item.highlights.map((highlight, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '14px',
                      color: '#374151',
                      lineHeight: 1.5
                    }}
                  >
                    <span 
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: index === 0 ? '#60a5fa' : index === 1 ? '#3b82f6' : '#2349c6ff',
                        flexShrink: 0,
                        marginTop: '7px'
                      }}
                    />
                    <span style={{ fontWeight: '500' }}>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: index === 0 ? '#60a5fa' : index === 1 ? '#3b82f6' : '#2349c6ff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: index === 0 ? '0 5px 15px rgba(59, 130, 246, 0.35)' : index === 1 ? '0 5px 15px rgba(96, 165, 250, 0.35)' : '0 5px 15px rgba(30, 64, 175, 0.35)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = index === 0 ? '0 8px 20px rgba(59, 130, 246, 0.45)' : index === 1 ? '0 8px 20px rgba(96, 165, 250, 0.45)' : '0 8px 20px rgba(30, 64, 175, 0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = index === 0 ? '0 5px 15px rgba(59, 130, 246, 0.35)' : index === 1 ? '0 5px 15px rgba(96, 165, 250, 0.35)' : '0 5px 15px rgba(30, 64, 175, 0.35)';
                }}
              >
                Découvrir
                <Icon name="arrow" size={16} color="white" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
