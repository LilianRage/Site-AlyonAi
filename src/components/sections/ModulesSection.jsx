import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaveParticles from '../ui/WaveParticles';
import { Cpu } from 'lucide-react';

// Image du satellite
const satelliteImage = '/images/satellite_alyon_sans_fond.png';

const ModulesSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  const satelliteOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const satelliteScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
  const satelliteRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const textOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.25, 0.4], [-30, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.4, 0.55], [20, 0]);

  return (
    <>
      <div
        ref={containerRef}
        id="modules"
        className="modules-scroll-container"
        style={{
          height: '200vh',
          position: 'relative'
        }}
      >
        <div
          className="modules-sticky-container"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'white',
            zIndex: 10,
            overflow: 'hidden',
            paddingTop: '8rem'
          }}
        >
          <WaveParticles scrollYProgress={scrollYProgress} />

          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-8 relative z-10">
            {/* Section Title */}
            <motion.div
              className="text-center mb-8"
              style={{
                opacity: titleOpacity,
                y: titleY
              }}
            >
              <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                Innovation spatiale
              </span>

            </motion.div>

            {/* Main Content - Text Left + Satellite Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Description */}
              <motion.div
                className="modules-text-content"
                style={{
                  opacity: textOpacity,
                  x: textX,
                  marginTop: '10rem'
                }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    L'intelligence artificielle au cœur du satellite
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Notre plateforme logicielle embarquée transforme chaque satellite en un système
                    autonome capable de prendre des décisions en temps réel. De la gestion énergétique
                    à l'évitement de collisions, notre IA optimise chaque aspect des opérations spatiales.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>IA embarquée</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>6 modules intégrés</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>100% souverain</span>
                  </div>

                </div>

              </motion.div>

              {/* Right: Satellite Visual */}
              <motion.div
                className="modules-satellite-visual flex justify-center"
                style={{
                  opacity: satelliteOpacity,
                  scale: satelliteScale,
                  rotate: satelliteRotate,
                  marginTop: '10rem'
                }}
              >
                <div className="relative">
                  {/* Satellite Image */}
                  <div className="w-80 h-80 md:w-96 md:h-96 relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-400/20 rounded-full blur-3xl"></div>

                    {/* Orbiting rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full border border-gray-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                    </div>
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-full h-full border border-gray-200 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                    </div>
                    <div className="absolute inset-8 flex items-center justify-center">
                      <div className="w-full h-full border border-gray-300 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                    </div>

                    {/* Center Satellite Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={satelliteImage}
                        alt="Satellite ALYON"
                        className="w-64 h-64 md:w-80 md:h-80 object-contain filter grayscale contrast-110"
                      />
                    </div>

                    {/* Orbiting dots */}
                    <div className="absolute top-4 left-1/2 w-3 h-3 bg-black rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/3 left-4 w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Discover Button */}
            <motion.div
              className="modules-discover-btn text-center"
              style={{
                opacity: buttonOpacity,
                y: buttonY,
                marginTop: '10rem'
              }}
            >
              <Link
                to="/technologie"
                className="inline-flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span className="text-white">Découvrir</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Explorez notre satellite interactif et découvrez chaque module en détail
              </p>

            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModulesSection;
