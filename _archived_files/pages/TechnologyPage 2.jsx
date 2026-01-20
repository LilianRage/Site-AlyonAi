import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

// Image du satellite
const satelliteImage = '/images/satellite-rendu-3d-isole-blanc_493806-8585.jpg.avif';

// Données des 6 modules
const modules = [
  {
    id: 1,
    name: 'PowerMind',
    tagline: 'Gestion Énergétique',
    description: 'Notre module PowerMind utilise le reinforcement learning pour optimiser la gestion énergétique de chaque satellite. En analysant les cycles orbitaux, l\'exposition solaire et la consommation de chaque sous-système, l\'IA prédit et optimise la charge des batteries en temps réel.',
    stats: [
      { value: '+50%', label: 'Durée de vie' },
      { value: '25%', label: 'Efficacité' },
      { value: '99.9%', label: 'Disponibilité' }
    ],
    features: [
      'Prédiction de consommation par ML',
      'Optimisation cycles charge/décharge',
      'Gestion thermique adaptative',
      'Extension durée de vie batteries'
    ]
  },
  {
    id: 2,
    name: 'MeshMind',
    tagline: 'Communications Inter-Satellites',
    description: 'MeshMind optimise les communications inter-satellites grâce aux Graph Neural Networks. Notre algorithme de routage intelligent trouve le chemin optimal à travers la constellation, réduisant la latence et maximisant le débit de données.',
    stats: [
      { value: '70%', label: 'Bande passante' },
      { value: '40%', label: 'Latence réduite' },
      { value: '99.5%', label: 'Fiabilité' }
    ],
    features: [
      'Routage par Graph Neural Networks',
      'Compression intelligente données',
      'Redondance automatique',
      'Handover prédictif'
    ]
  },
  {
    id: 3,
    name: 'SmartFleet',
    tagline: 'Monitoring Santé de Flotte',
    description: 'SmartFleet assure le monitoring continu de la santé de chaque satellite. Grâce au machine learning, le système détecte les anomalies avant qu\'elles ne deviennent critiques, permettant une maintenance prédictive.',
    stats: [
      { value: '95%', label: 'Détection' },
      { value: '72h', label: 'Prédiction' },
      { value: '45%', label: 'Interventions' }
    ],
    features: [
      'Détection d\'anomalies ML',
      'Monitoring 24/7 automatisé',
      'Alertes prédictives',
      'Diagnostic embarqué'
    ]
  },
  {
    id: 4,
    name: 'FusionEye',
    tagline: 'Fusion de Données',
    description: 'FusionEye combine les données SAR et optiques pour extraire des insights de haute valeur directement à bord. Le traitement embarqué intelligent réduit drastiquement la quantité de données à transmettre au sol.',
    stats: [
      { value: '70%', label: 'Volume réduit' },
      { value: '90%', label: 'Précision' },
      { value: '10x', label: 'Vitesse' }
    ],
    features: [
      'Fusion SAR + optique',
      'Edge processing embarqué',
      'Filtrage intelligent',
      'Compression sémantique'
    ]
  },
  {
    id: 5,
    name: 'GuardianEye',
    tagline: 'Évitement de Collisions',
    description: 'GuardianEye protège le satellite contre les collisions avec les débris spatiaux. Le système prend des décisions d\'évitement en temps réel, sans attendre les instructions du sol. Essentiel pour la conformité ESA 2027.',
    stats: [
      { value: '<1s', label: 'Réaction' },
      { value: '99.99%', label: 'Évitement' },
      { value: '100%', label: 'Conformité' }
    ],
    features: [
      'Détection temps réel',
      'Manœuvre autonome',
      'Calcul trajectoire optimal',
      'Coordination constellation'
    ]
  },
  {
    id: 6,
    name: 'IntelliTask',
    tagline: 'Planification Autonome',
    description: 'IntelliTask permet au satellite de décider autonomement quoi capturer. En analysant le contexte temps-réel (météo, géométrie solaire, ressources disponibles), l\'IA optimise chaque opportunité de capture.',
    stats: [
      { value: '90%', label: 'Succès' },
      { value: '3x', label: 'Productivité' },
      { value: '80%', label: 'Optimisation' }
    ],
    features: [
      'Décision contextuelle',
      'Optimisation opportunités',
      'Re-planification dynamique',
      'Apprentissage continu'
    ]
  }
];

// Positions des numéros autour du satellite (en cercle)
const getModulePositions = () => {
  const positions = [];
  const radius = 42; // % du conteneur
  const centerX = 50;
  const centerY = 50;
  
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 90) * (Math.PI / 180); // Commence en haut, espacé de 60°
    positions.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });
  }
  return positions;
};

const modulePositions = getModulePositions();

const TechnologyPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const closePanel = () => {
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour</span>
          </Link>
          <h1 className="text-xl font-bold text-black tracking-tight">Notre Technologie</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="pt-20 min-h-screen flex">
        {/* Zone principale avec satellite */}
        <div className={`flex-1 flex items-center justify-center p-8 transition-all duration-500 ${selectedModule ? 'lg:w-1/2' : 'w-full'}`}>
          <div className="relative w-full max-w-3xl aspect-square">
            
            {/* Cercle orbital décoratif */}
            <div className="absolute inset-[5%] border border-gray-200 rounded-full"></div>
            <div className="absolute inset-[15%] border border-dashed border-gray-300 rounded-full"></div>
            
            {/* Lignes connectant les modules au centre */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {modulePositions.map((pos, index) => (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke={hoveredModule === index + 1 || selectedModule?.id === index + 1 ? '#000' : '#e5e5e5'}
                  strokeWidth={hoveredModule === index + 1 || selectedModule?.id === index + 1 ? '2' : '1'}
                  strokeDasharray={hoveredModule === index + 1 || selectedModule?.id === index + 1 ? '0' : '4,4'}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            {/* Image du satellite au centre */}
            <div className="absolute inset-[20%] flex items-center justify-center" style={{ zIndex: 2 }}>
              <motion.div
                className="relative"
                animate={{ 
                  rotate: selectedModule ? 0 : [0, 2, -2, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={satelliteImage}
                  alt="Satellite ALYON"
                  className="w-full h-full object-contain filter grayscale contrast-110"
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
              </motion.div>
            </div>

            {/* Numéros des modules autour */}
            {modules.map((module, index) => {
              const pos = modulePositions[index];
              const isHovered = hoveredModule === module.id;
              const isSelected = selectedModule?.id === module.id;
              
              return (
                <motion.button
                  key={module.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ 
                    left: `${pos.x}%`, 
                    top: `${pos.y}%`,
                    zIndex: 10
                  }}
                  onClick={() => handleModuleClick(module)}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Cercle avec numéro */}
                  <div 
                    className={`
                      relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center 
                      transition-all duration-300 border-2
                      ${isSelected 
                        ? 'bg-black border-black text-white' 
                        : isHovered 
                          ? 'bg-black border-black text-white' 
                          : 'bg-white border-gray-300 text-black hover:border-black'
                      }
                    `}
                  >
                    <span className="text-2xl md:text-3xl font-bold">{module.id}</span>
                  </div>
                  
                  {/* Label au survol */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 -bottom-12 whitespace-nowrap text-center"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: isHovered || isSelected ? 1 : 0, y: isHovered || isSelected ? 0 : -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm font-bold text-black">{module.name}</p>
                    <p className="text-xs text-gray-500">{module.tagline}</p>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-[40%] bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-lg border border-blue-700">
              <div className="w-full h-full grid grid-cols-3 gap-0.5 p-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-blue-600/50 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Solar Panels - Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-[40%] bg-gradient-to-l from-blue-900 to-blue-800 rounded-lg shadow-lg border border-blue-700">
              <div className="w-full h-full grid grid-cols-3 gap-0.5 p-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-blue-600/50 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Clickable Areas */}
            {clickableAreas.map((area) => {
              const module = satelliteModules[area.id];
              const IconComponent = module.icon;
              const isHovered = hoveredArea === area.id;
              const isSelected = selectedModule?.id === module.id;
              
              return (
                <motion.button
                  key={area.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ 
                    left: `${area.x}%`, 
                    top: `${area.y}%`,
                  }}
                  onClick={() => handleAreaClick(area.id)}
                  onMouseEnter={() => setHoveredArea(area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Pulse effect */}
                  <div 
                    className={`absolute inset-0 rounded-full animate-ping ${isSelected ? 'opacity-75' : 'opacity-0 group-hover:opacity-50'}`}
                    style={{ backgroundColor: module.color, animationDuration: '2s' }}
                  ></div>
                  
                  {/* Button */}
                  <div 
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isSelected ? 'ring-4 ring-offset-2' : ''}`}
                    style={{ 
                      backgroundColor: isHovered || isSelected ? module.color : '#fff',
                      ringColor: module.color
                    }}
                  >
                    <IconComponent 
                      className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isHovered || isSelected ? 'text-white' : 'text-gray-600'}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Label tooltip */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap text-xs font-medium px-2 py-1 rounded bg-gray-900 text-white transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {area.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right Side - Info Panel */}
        <AnimatePresence>
          {selectedModule && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full lg:w-1/2 bg-white shadow-2xl z-40 overflow-y-auto pt-20"
            >
              <div className="p-8 lg:p-12">
                {/* Close button */}
                <button
                  onClick={closePanel}
                  className="absolute top-24 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                {/* Module Header */}
                <div className="mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${selectedModule.color}15` }}
                  >
                    <selectedModule.icon 
                      className="w-8 h-8" 
                      style={{ color: selectedModule.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-2">{selectedModule.name}</h2>
                  <p className="text-lg text-gray-500">{selectedModule.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {selectedModule.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {selectedModule.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="text-2xl md:text-3xl font-bold mb-1"
                        style={{ color: selectedModule.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Fonctionnalités clés
                  </h3>
                  <div className="space-y-3">
                    {selectedModule.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: selectedModule.color }}
                        ></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back to home */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour à l'accueil</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions when no module selected */}
        {!selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="text-gray-500 text-sm bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              Cliquez sur un composant du satellite pour découvrir nos modules
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default TechnologyPage;
