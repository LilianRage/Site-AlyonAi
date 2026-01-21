import React from 'react';
import ParticlesBackground from '../ui/ParticlesBackground';
import { FadeIn } from '../ui/Animations';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Particles Animation Background - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1] mb-6 sm:mb-8 px-2">
            <span className="block">Autonomous Satellites. </span>
            <span className="block mt-2 sm:mt-2 font-light italic text-gray-500">
              Endless Horizons
            </span>
          </h1>

        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={800}>
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block">
            <button
              onClick={() => scrollToSection('vision')}
              className="flex flex-col items-center text-gray-400 hover:text-black transition-colors group bg-transparent border-none cursor-pointer"
            >
              <div className="w-px h-12 sm:h-16 bg-gray-300 group-hover:bg-black transition-colors relative overflow-hidden">
                <div className="absolute top-0 w-full h-1/3 bg-black animate-bounce" />
              </div>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
