import React from 'react';
import { FadeIn } from '../ui/Animations';

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-4 block">
              Notre Vision
            </span>
            
          </div>
        </FadeIn>

        {/* Vision Story + Stats - côte à côte */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '60px', alignItems: 'flex-start', marginTop: '50px', position: 'relative' }}>
          {/* Texte à gauche */}
          <div style={{ flex: '0 0 65%', paddingRight: '30px' }}>
            <FadeIn>
              <div className="space-y-6 text-left">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  L'Europe spatiale fait face à un défi majeur. Alors que les géants américains et chinois 
                  déploient des constellations de milliers de satellites, nos opérateurs européens peinent 
                  à rester compétitifs.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Le problème n'est pas le lancement — c'est ce qui vient après. Les <strong className="text-black font-semibold">coûts opérationnels</strong> explosent. 
                  Chaque satellite nécessite des équipes au sol pour le piloter, le surveiller, anticiper les pannes, 
                  éviter les collisions. Cette approche, héritée des débuts de l'ère spatiale, n'est tout simplement 
                  plus viable à l'échelle des constellations modernes.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Chez <strong className="text-black font-semibold">ALYON AI</strong>, nous avons une conviction : 
                  les satellites doivent devenir autonomes. Pas demain, pas dans dix ans — maintenant. Notre plateforme 
                  d'intelligence artificielle embarquée transforme chaque satellite en un agent capable de prendre 
                  ses propres décisions, de gérer son énergie, d'éviter les débris, et de communiquer intelligemment 
                  avec sa constellation.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Notre ambition ? <strong className="text-black font-semibold">Donner à l'Europe les moyens de son indépendance spatiale</strong>, 
                  avec une technologie souveraine, sans compromis sur les performances.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Séparateur vertical élégant */}
          <div style={{ 
            position: 'absolute',
            left: 'calc(70% - 30px)',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent 0%, #d1d5db 10%, #d1d5db 90%, transparent 100%)'
          }}>
            {/* Points décoratifs */}
            <div style={{ 
              position: 'absolute', 
              top: '20%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }} />
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }} />
            <div style={{ 
              position: 'absolute', 
              top: '80%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#000',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }} />
          </div>

          {/* Stats à droite */}
          <div style={{ flex: '0 0 30%', paddingLeft: '30px' }}>
            <FadeIn delay={200}>
              <div className="flex flex-col gap-8">
                {/* Stat 1 */}
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1 inline-block relative">
                    45%
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2 mb-1">Réduction OPEX</div>
                  <p className="text-gray-600 text-sm">
                    Moins d'interventions humaines, des opérations automatisées
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1 inline-block relative">
                    30%
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2 mb-1">Durée de vie étendue</div>
                  <p className="text-gray-600 text-sm">
                    Gestion intelligente de l'énergie et maintenance prédictive
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1 inline-block relative">
                    100%
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-2 mb-1">Souverain européen</div>
                  <p className="text-gray-600 text-sm">
                    Solution ITAR-free, sans dépendance technologique
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
