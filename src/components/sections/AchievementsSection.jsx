import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Cpu, Zap, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AchievementsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rdProjects = [
    {
      title: "Model Merging Techniques",
      description: "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles plus performants et efficaces avec des ressources limitées.",
      icon: FileText,
      status: "Publié",
      category: "Publication scientifique",
      image: "/images/Image_l0l90bl0l90bl0l9.png"
    },
    {
      title: "IA Embarquée pour Satellites",
      description: "Développement d'algorithmes d'intelligence artificielle optimisés pour fonctionner directement à bord des satellites avec contraintes énergétiques.",
      icon: Cpu,
      status: "En cours",
      category: "R&D Active",
      image: "/images/Image_8tdmm78tdmm78tdm.png"
    },
    {
      title: "Traitement d'Images par IA",
      description: "Analyse et traitement d'images satellites en temps réel grâce à des réseaux de neurones optimisés pour l'embarqué spatial.",
      icon: Zap,
      status: "En cours",
      category: "R&D Active",
      image: "/images/Image_pxmkv3pxmkv3pxmk.png"
    },
    {
      title: "Prise de Décision Autonome",
      description: "Systèmes de décision en temps réel pour la gestion autonome des opérations satellites sans intervention humaine.",
      icon: Radio,
      status: "En cours",
      category: "R&D Active",
      image: "/images/Image_gt28pxgt28pxgt28.png"
    }
  ];

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rdProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [rdProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rdProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rdProjects.length) % rdProjects.length);
  };

  return (
    <section id="achievements" style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
    
        <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2 block">
              Recherches & Développements
        </span>
          
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px', position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid #e5e5e5',
            backgroundColor: '#fafafa',
            minHeight: '450px'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '450px'
                }}
              >
                {/* Image en haut */}
                <div style={{
                  height: '200px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5'
                }}>
                  <img 
                    src={rdProjects[currentSlide].image}
                    alt={rdProjects[currentSlide].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Contenu en bas */}
                <div style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  flex: 1
                }}>

                {/* Category Badge */}
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#666',
                  backgroundColor: '#f5f5f5',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  marginBottom: '16px',
                  border: '1px solid #e5e5e5'
                }}>
                  {rdProjects[currentSlide].category}
                </span>

                {/* Title */}
                <h3 style={{ 
                  fontSize: '28px', 
                  fontWeight: 600, 
                  color: '#000', 
                  marginBottom: '16px',
                  maxWidth: '700px'
                }}>
                  {rdProjects[currentSlide].title}
                </h3>

                {/* Description */}
                <p style={{ 
                  fontSize: '16px', 
                  color: '#666', 
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: '650px'
                }}>
                  {rdProjects[currentSlide].description}
                </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '12px',
                backgroundColor: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft style={{ width: '20px', height: '20px', color: '#000' }} />
            </button>

            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '12px',
                backgroundColor: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight style={{ width: '20px', height: '20px', color: '#000' }} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '24px'
          }}>
            {rdProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: currentSlide === index ? '#000' : '#d5d5d5',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <Link
            to="/recherche"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Découvrir notre R&D
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AchievementsSection;
