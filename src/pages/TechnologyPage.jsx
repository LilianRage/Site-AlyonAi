import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import fondFumee from '../assets/Fond_fumee.png';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const satelliteImage = '/images/satellite_alyon.png';

// ============================================================================
// CONFIGURATION DES POINTS - MODIFIEZ ICI LES POSITIONS
// ============================================================================
const modules = [
  {
    id: 1,
    name: 'Module 2',
    category: 'Gestion Énergétique',
    position: { x: 43, y: 55 },
    description: 'Notre module Module 2 révolutionne la gestion énergétique des satellites grâce au reinforcement learning. En analysant continuellement les cycles orbitaux, l\'exposition solaire et la consommation de chaque sous-système, l\'IA prédit et optimise la charge des batteries en temps réel.',
    highlights: [
      'Prédiction de consommation par Machine Learning',
      'Optimisation dynamique des cycles charge/décharge',
      'Gestion thermique adaptative intelligente',
      'Extension de la durée de vie des batteries'
    ],
    impact: 'Prolonge significativement la durée de vie opérationnelle de la mission'
  },
  {
    id: 2,
    name: 'Module 6',
    category: 'Communications Inter-Satellites',
    position: { x: 40, y: 70 },
    description: 'Module 6 optimise les communications inter-satellites grâce aux Graph Neural Networks (GNN). Notre algorithme de routage intelligent analyse en permanence la topologie dynamique de la constellation pour trouver le chemin optimal à travers des centaines de satellites.',
    highlights: [
      'Routage intelligent par Graph Neural Networks',
      'Compression adaptative et contextuelle des données',
      'Redondance automatique multi-chemins',
      'Handover prédictif sans interruption de service'
    ],
    impact: 'Garantit une connectivité permanente à travers la constellation'
  },
  {
    id: 3,
    name: 'Module 1',
    category: 'Monitoring & Santé de Flotte',
    position: { x: 50, y: 60 },
    description: 'Module 1 assure le monitoring continu et intelligent de la santé de chaque satellite de la constellation. Grâce aux algorithmes de deep learning entraînés sur des millions de points de télémétrie, le système détecte les anomalies subtiles jusqu\'à 72 heures avant qu\'elles ne deviennent critiques.',
    highlights: [
      'Détection d\'anomalies par Deep Learning avancé',
      'Monitoring automatisé 24/7 de tous les sous-systèmes',
      'Alertes prédictives avec 72h d\'anticipation',
      'Diagnostic embarqué autonome et recommandations'
    ],
    impact: 'Prévient les défaillances avant qu\'elles ne deviennent critiques'
  },
  {
    id: 4,
    name: 'Module 4',
    category: 'Fusion de Données Multi-Sources',
    position: { x: 50, y: 80 },
    description: 'Module 4 combine les données SAR (radar à synthèse d\'ouverture) et optiques pour extraire des insights de haute valeur directement à bord du satellite. Le traitement embarqué intelligent utilise des réseaux de neurones optimisés pour filtrer, compresser et enrichir les données.',
    highlights: [
      'Fusion SAR + optique en temps réel à bord',
      'Edge processing haute performance embarqué',
      'Filtrage intelligent basé sur la pertinence',
      'Compression sémantique réduisant drastiquement du volume'
    ],
    impact: 'Transforme les données brutes en intelligence actionnable à bord'
  },
  {
    id: 5,
    name: 'Module 5',
    category: 'Évitement de Collisions Autonome',
    position: { x: 65, y: 45 },
    description: 'Module 5 protège le satellite contre les collisions avec les débris spatiaux et autres objets en orbite. Le système utilise des algorithmes de tracking multi-objets et prend des décisions d\'évitement en temps réel, sans attendre les instructions du sol.',
    highlights: [
      'Détection et tracking de menaces en temps réel',
      'Manœuvre d\'évitement autonome',
      'Calcul de trajectoire optimale multi-contraintes',
      'Coordination automatique avec la constellation'
    ],
    impact: 'Assure une protection continue sans dépendance au contrôle sol'
  },
  {
    id: 6,
    name: 'Module 3',
    category: 'Planification Autonome de Mission',
    position: { x: 52, y: 43 },
    description: 'Module 3 permet au satellite de décider autonomement quoi capturer, quand et comment. En analysant le contexte temps-réel incluant les conditions météorologiques, la géométrie solaire, les ressources disponibles à bord et les priorités de mission.',
    highlights: [
      'Décision contextuelle multi-facteurs intelligente',
      'Optimisation en temps réel des opportunités',
      'Re-planification dynamique en vol automatique',
      'Apprentissage continu des performances mission'
    ],
    impact: 'Maximise la valeur scientifique de chaque opportunité d\'observation'
  }
];

// Composant Point Interactif
const ModulePoint = ({ module, isSelected, onSelect, onHover, isHovered }) => {
  const pointSize = isSelected ? 20 : 16;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${module.position.x}%`,
        top: `${module.position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
        width: `${pointSize}px`,
        height: `${pointSize}px`
      }}
    >
      {/* Le point cliquable */}
      <button
        onClick={() => onSelect(module.id)}
        onMouseEnter={() => onHover(module.id)}
        onMouseLeave={() => onHover(null)}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: isSelected
            ? 'linear-gradient(135deg, #0066cc 0%, #0099ff 100%)'
            : isHovered
              ? 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
              : 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
          border: '3px solid white',
          boxShadow: isSelected
            ? '0 0 0 4px rgba(96, 165, 250, 0.3), 0 4px 20px rgba(96, 165, 250, 0.5)'
            : isHovered
              ? '0 0 0 3px rgba(96, 165, 250, 0.2), 0 4px 15px rgba(96, 165, 250, 0.4)'
              : '0 2px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          padding: 0,
          transition: 'background 0.2s ease, box-shadow 0.2s ease'
        }}
      />

      {/* Tooltip corrigé */}
      <AnimatePresence>
        {isHovered && !isSelected && (
          <motion.div
            // On ajoute x: "-50%" ici pour que Framer Motion le gère
            initial={{ opacity: 0, y: 5, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 10px)',
              left: '50%',
              // On retire le transform: 'translateX(-50%)' d'ici
              background: 'white',
              padding: '10px 16px',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              border: '1px solid #e5e7eb',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 100
            }}
          >
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#000',
              marginBottom: '2px'
            }}>
              {module.name}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {module.category}
            </div>
            {/* Flèche */}
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '12px',
              height: '12px',
              background: 'white',
              borderRight: '1px solid #e5e7eb',
              borderBottom: '1px solid #e5e7eb'
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Composant Panel de Description
const DescriptionPanel = ({ module, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
        border: '2px solid #e5e7eb',
        overflow: 'hidden',
        maxWidth: '900px',
        margin: '0 auto'
      }}
    >
      <div style={{
        padding: '28px 32px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)'
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #000 0%, #333 100%)',
            borderRadius: '50px',
            fontSize: '11px',
            fontWeight: '700',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: '12px'
          }}>
            {module.category}
          </div>
          <h3 style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#000',
            margin: 0,
            letterSpacing: '-0.5px'
          }}>
            {module.name}
          </h3>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '2px solid #e5e7eb',
            background: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f3f4f6';
            e.currentTarget.style.borderColor = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          <X style={{ width: '20px', height: '20px', color: '#333' }} />
        </button>
      </div>

      <div style={{ padding: '32px', background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)' }}>
        <p style={{
          fontSize: '15px',
          color: '#4b5563',
          lineHeight: 1.8,
          margin: '0 0 28px 0',
          fontWeight: '400'
        }}>
          {module.description}
        </p>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: '16px'
          }}>
            Points clés
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px'
          }}>
            {module.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#000',
                  flexShrink: 0,
                  marginTop: '6px'
                }} />
                <span style={{
                  fontSize: '14px',
                  color: '#374151',
                  fontWeight: '500',
                  lineHeight: 1.5
                }}>
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 32px',
            background: 'white',
            borderRadius: '16px',
            border: '2px solid #e5e7eb',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          <p style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#374151',
            margin: 0,
            lineHeight: 1.6,
            textAlign: 'center',
            letterSpacing: '0.2px'
          }}>
            {module.impact}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechnologyPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [searchParams] = useSearchParams();

  // Effet pour lire le paramètre 'module' dans l'URL au chargement
  useEffect(() => {
    const moduleParam = searchParams.get('module');
    if (moduleParam) {
      const moduleId = parseInt(moduleParam, 10);
      if (modules.some(m => m.id === moduleId)) {
        setSelectedModule(moduleId);
      }
    }
  }, [searchParams]);

  const handleModuleSelect = (moduleId) => {
    setSelectedModule(selectedModule === moduleId ? null : moduleId);
  };

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  return (
    <div className="min-h-screen relative">
      <Header />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${fondFumee})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #f8f9fb 0%, #ffffff 50%, #f8f9fb 100%)'
        }}
      />

      <main className="relative z-10 pt-24 pb-24 px-8">
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '120px' }}>

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
              position: 'relative',
              zIndex: 20
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Retour à l'accueil
          </Link>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2 block"
            >
              Nos technologies
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '16px',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '20px auto',
                lineHeight: 1.6
              }}
            >
              Cliquez sur les points bleus pour découvrir nos 6 modules d'IA
              qui transforment chaque satellite en système autonome.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              position: 'relative',
              maxWidth: '800px',
              margin: '0 auto 40px auto'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              border: '1px dashed #d1d5db',
              pointerEvents: 'none'
            }} />

            <img
              src={satelliteImage}
              alt="Satellite ALYON"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />

            {modules.map((module) => (
              <ModulePoint
                key={module.id}
                module={module}
                isSelected={selectedModule === module.id}
                isHovered={hoveredModule === module.id}
                onSelect={handleModuleSelect}
                onHover={setHoveredModule}
              />
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedModuleData && (
              <DescriptionPanel
                module={selectedModuleData}
                onClose={() => setSelectedModule(null)}
              />
            )}
          </AnimatePresence>

          {!selectedModule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                textAlign: 'center',
                padding: '24px',
                color: '#9ca3af',
                fontSize: '14px'
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                padding: '12px 20px',
                borderRadius: '50px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)'
                }} />
                Cliquez sur un point pour voir les détails du module
              </span>
            </motion.div>
          )}

        </div>
      </main>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
};

export default TechnologyPage;