import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import fondFumee from '../assets/Fond_fumee.png';

// Image du satellite
const satelliteImage = '/images/png-transparent-international-space-station-zvezda-spacecraft-satellite-satellite-photography-outer-space-space-station-removebg-preview.png';

// Données des 6 modules avec descriptions complètes
const modules = [
  {
    id: 1,
    name: 'PowerMind',
    tagline: 'Gestion Énergétique Intelligente',
    description: 'Notre module PowerMind révolutionne la gestion énergétique des satellites grâce au reinforcement learning. En analysant continuellement les cycles orbitaux, l\'exposition solaire et la consommation de chaque sous-système, l\'IA prédit et optimise la charge des batteries en temps réel. Le système adapte dynamiquement les profils de charge/décharge pour maximiser l\'efficacité tout en préservant la santé des cellules.',
    features: [
      'Prédiction de consommation par Machine Learning',
      'Optimisation des cycles charge/décharge',
      'Gestion thermique adaptative',
      'Extension de la durée de vie des batteries'
    ],
    stats: { value: '+50%', label: 'Durée de vie batteries' }
  },
  {
    id: 2,
    name: 'MeshMind',
    tagline: 'Communications Inter-Satellites',
    description: 'MeshMind optimise les communications inter-satellites grâce aux Graph Neural Networks. Notre algorithme de routage intelligent analyse en permanence la topologie de la constellation pour trouver le chemin optimal, réduisant la latence et maximisant le débit. Le système anticipe les changements de configuration orbitale pour un handover sans interruption.',
    features: [
      'Routage intelligent par Graph Neural Networks',
      'Compression adaptative des données',
      'Redondance automatique multi-chemins',
      'Handover prédictif sans interruption'
    ],
    stats: { value: '-40%', label: 'Latence réseau' }
  },
  {
    id: 3,
    name: 'SmartFleet',
    tagline: 'Monitoring & Santé de Flotte',
    description: 'SmartFleet assure le monitoring continu de la santé de chaque satellite de la constellation. Grâce aux algorithmes de machine learning, le système détecte les anomalies subtiles avant qu\'elles ne deviennent critiques, permettant une maintenance prédictive. Les opérateurs reçoivent des alertes anticipées et des recommandations d\'action.',
    features: [
      'Détection d\'anomalies par Deep Learning',
      'Monitoring automatisé 24/7',
      'Alertes prédictives intelligentes',
      'Diagnostic embarqué autonome'
    ],
    stats: { value: '72h', label: 'Prédiction des pannes' }
  },
  {
    id: 4,
    name: 'FusionEye',
    tagline: 'Fusion de Données Multi-Sources',
    description: 'FusionEye combine les données SAR et optiques pour extraire des insights de haute valeur directement à bord du satellite. Le traitement embarqué intelligent filtre, compresse et enrichit les données avant transmission, réduisant drastiquement la bande passante nécessaire tout en augmentant la valeur informationnelle.',
    features: [
      'Fusion SAR + optique en temps réel',
      'Edge processing embarqué haute performance',
      'Filtrage intelligent par pertinence',
      'Compression sémantique avancée'
    ],
    stats: { value: '-70%', label: 'Volume de données transmis' }
  },
  {
    id: 5,
    name: 'GuardianEye',
    tagline: 'Évitement de Collisions Autonome',
    description: 'GuardianEye protège le satellite contre les collisions avec les débris spatiaux et autres objets. Le système prend des décisions d\'évitement en temps réel, sans attendre les instructions du sol. Essentiel pour la conformité avec les nouvelles réglementations ESA 2027 sur la durabilité spatiale.',
    features: [
      'Détection de menaces en temps réel',
      'Manœuvre d\'évitement autonome',
      'Calcul de trajectoire optimale',
      'Coordination avec la constellation'
    ],
    stats: { value: '<1s', label: 'Temps de réaction' }
  },
  {
    id: 6,
    name: 'IntelliTask',
    tagline: 'Planification Autonome de Mission',
    description: 'IntelliTask permet au satellite de décider autonomement quoi capturer et quand. En analysant le contexte temps-réel (conditions météo, géométrie solaire, ressources disponibles, priorités mission), l\'IA optimise chaque opportunité de capture pour maximiser la valeur des données collectées.',
    features: [
      'Décision contextuelle intelligente',
      'Optimisation des opportunités de capture',
      'Re-planification dynamique en vol',
      'Apprentissage continu des performances'
    ],
    stats: { value: '3x', label: 'Productivité mission' }
  }
];

const TechnologyPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (module) => {
    setSelectedModule(selectedModule?.id === module.id ? null : module);
  };

  const closePanel = () => {
    setSelectedModule(null);
  };

  // Calcul des positions en cercle (6 positions espacées de 60°)
  const getPosition = (index) => {
    const angle = (index * 60 - 90) * (Math.PI / 180); // Commence en haut
    const radius = 240; // Distance du centre - plus grand
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <div className="min-h-screen text-black relative">
      {/* Image de fond */}
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
      <div className="fixed inset-0 z-0 bg-white/90" />
      
      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour</span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Notre Technologie</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="pt-20 min-h-screen flex flex-col lg:flex-row relative z-10">
        
        {/* Zone satellite + numéros */}
        <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedModule ? 'lg:w-1/2' : 'w-full'}`}>
          <div className="relative" style={{ width: '650px', height: '650px' }}>
            
            {/* Cercle décoratif */}
            <div 
              className="absolute border border-gray-300 rounded-full"
              style={{
                width: '480px',
                height: '480px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Cercle intérieur */}
            <div 
              className="absolute border border-dashed border-gray-200 rounded-full"
              style={{
                width: '320px',
                height: '320px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />

            {/* Image satellite au centre */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px'
              }}
            >
              <motion.img 
                src={satelliteImage}
                alt="Satellite ALYON"
                className="max-w-full max-h-full grayscale"
                style={{
                  objectFit: 'contain'
                }}
                animate={{ 
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* 6 numéros en cercle */}
            {modules.map((module, index) => {
              const pos = getPosition(index);
              const isSelected = selectedModule?.id === module.id;
              
              return (
                <button
                  key={module.id}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                  }}
                  onClick={() => handleModuleClick(module)}
                >
                  {/* Cercle avec numéro - sans animation de scale */}
                  <div 
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center 
                      text-2xl font-bold transition-colors duration-300 border-2 cursor-pointer
                      ${isSelected 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-black border-black hover:bg-black hover:text-white'
                      }
                    `}
                  >
                    {module.id}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panneau d'information détaillé */}
        <AnimatePresence>
          {selectedModule && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="lg:w-1/2 bg-white/95 backdrop-blur-sm border-l border-gray-200 p-8 lg:p-12 pt-24 lg:pt-28 overflow-y-auto max-h-screen"
            >
              {/* Bouton fermer */}
              <button
                onClick={closePanel}
                className="absolute top-24 right-6 w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Numéro et nom */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                  {selectedModule.id}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedModule.name}</h2>
                  <p className="text-gray-500">{selectedModule.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {selectedModule.description}
              </p>

              {/* Features */}
              {selectedModule.features && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Fonctionnalités clés</h3>
                  <ul className="space-y-3">
                    {selectedModule.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gray-100 text-black flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stat principale */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-5xl font-bold text-black mb-2">
                  {selectedModule.stats.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {selectedModule.stats.label}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        {!selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2"
          >
            <p className="text-gray-500 text-sm bg-white px-6 py-3 border border-gray-200">
              Cliquez sur un numéro pour découvrir le module
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default TechnologyPage;
