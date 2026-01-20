import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import fondFumee from '../assets/Fond_fumee.png';

// Image du satellite
const satelliteImage = '/images/png-transparent-international-space-station-zvezda-spacecraft-satellite-satellite-photography-outer-space-space-station-removebg-preview.png';

// Images pour chaque module (icônes représentatives)
const moduleImages = {
  1: '🔋', // PowerMind - Batterie
  2: '📡', // MeshMind - Communication
  3: '💊', // SmartFleet - Santé
  4: '🔍', // FusionEye - Fusion
  5: '🛡️', // GuardianEye - Protection
  6: '📋', // IntelliTask - Planification
};

// Données des 6 modules
const modules = [
  {
    id: 1,
    name: 'PowerMind',
    tagline: 'Gestion Énergétique',
    description: 'Notre module PowerMind révolutionne la gestion énergétique des satellites grâce au reinforcement learning. En analysant continuellement les cycles orbitaux, l\'exposition solaire et la consommation de chaque sous-système, l\'IA prédit et optimise la charge des batteries en temps réel.',
    stats: { value: '+50%', label: 'Durée de vie batteries' }
  },
  {
    id: 2,
    name: 'MeshMind',
    tagline: 'Communications',
    description: 'MeshMind optimise les communications inter-satellites grâce aux Graph Neural Networks. Notre algorithme de routage intelligent analyse en permanence la topologie de la constellation pour trouver le chemin optimal, réduisant la latence et maximisant le débit.',
    stats: { value: '-40%', label: 'Latence réseau' }
  },
  {
    id: 3,
    name: 'SmartFleet',
    tagline: 'Monitoring Santé',
    description: 'SmartFleet assure le monitoring continu de la santé de chaque satellite de la constellation. Grâce aux algorithmes de machine learning, le système détecte les anomalies subtiles avant qu\'elles ne deviennent critiques.',
    stats: { value: '72h', label: 'Prédiction pannes' }
  },
  {
    id: 4,
    name: 'FusionEye',
    tagline: 'Fusion de Données',
    description: 'FusionEye combine les données SAR et optiques pour extraire des insights de haute valeur directement à bord du satellite. Le traitement embarqué intelligent filtre, compresse et enrichit les données avant transmission.',
    stats: { value: '-70%', label: 'Volume données' }
  },
  {
    id: 5,
    name: 'GuardianEye',
    tagline: 'Anti-Collision',
    description: 'GuardianEye protège le satellite contre les collisions avec les débris spatiaux et autres objets. Le système prend des décisions d\'évitement en temps réel, sans attendre les instructions du sol.',
    stats: { value: '<1s', label: 'Temps réaction' }
  },
  {
    id: 6,
    name: 'IntelliTask',
    tagline: 'Planification',
    description: 'IntelliTask permet au satellite de décider autonomement quoi capturer et quand. En analysant le contexte temps-réel, l\'IA optimise chaque opportunité de capture pour maximiser la valeur des données collectées.',
    stats: { value: '3x', label: 'Productivité' }
  }
];

// Composant Carte Module
const ModuleCard = ({ module, isOpen, onClick }) => {
  return (
    <div className="w-full">
      {/* Carte principale */}
      <button
        onClick={onClick}
        className={`
          w-full bg-white border border-gray-200 overflow-hidden transition-all duration-300
          hover:shadow-lg hover:border-gray-300
          ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'}
        `}
      >
        {/* Moitié haute - Image/Icône */}
        <div className="h-24 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100">
          <span className="text-5xl">{moduleImages[module.id]}</span>
        </div>
        
        {/* Moitié basse - Titre */}
        <div className="p-4 flex items-center justify-between">
          <div className="text-left">
            <h3 className="font-bold text-black text-lg">{module.name}</h3>
            <p className="text-gray-500 text-sm">{module.tagline}</p>
          </div>
          
          {/* Flèche */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </button>
      
      {/* Contenu déplié */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-t-0 border-gray-200 rounded-b-2xl p-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {module.description}
              </p>
              
              {/* Stat */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <span className="text-2xl font-bold text-black">{module.stats.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{module.stats.label}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TechnologyPage = () => {
  const [openModule, setOpenModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Image de fond */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${fondFumee})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay blanc semi-transparent */}
      <div className="fixed inset-0 z-0 bg-white/85" />
      
      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour</span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-black">Notre Technologie</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="relative z-10 pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Côté gauche - Cadre avec satellite */}
            <div className="lg:w-1/2">
              <div 
                className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 lg:p-12 h-full min-h-[500px] flex flex-col justify-center items-center"
                style={{
                  borderRadius: '80px 20px 20px 80px'
                }}
              >
                {/* Titre */}
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 text-center">
                  Intelligence Embarquée
                </h2>
                <p className="text-gray-600 text-center mb-8 max-w-md">
                  6 modules d'IA qui transforment chaque satellite en système autonome intelligent
                </p>
                
                {/* Image satellite */}
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  {/* Cercle décoratif */}
                  <div className="absolute inset-4 border border-dashed border-gray-300 rounded-full"></div>
                  
                  <motion.img 
                    src={satelliteImage}
                    alt="Satellite ALYON"
                    className="w-4/5 h-4/5 object-contain grayscale"
                    animate={{ 
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Stats globales */}
                <div className="flex gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">6</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">100%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Autonome</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">24/7</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Actif</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Côté droit - Cartes modules */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isOpen={openModule === module.id}
                    onClick={() => handleModuleClick(module.id)}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnologyPage;
