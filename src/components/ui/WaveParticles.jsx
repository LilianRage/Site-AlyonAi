import React from 'react';
import { motion, useTransform } from 'framer-motion';
import fondFumee from '../../assets/Fond_fumee.png';

const WaveParticles = ({ scrollYProgress }) => {
  // Animations basées sur le scroll
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8], [1.2, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9], [0, 0.4, 0.6, 0.3]);
  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Image de fond avec animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          scale,
          rotate,
          opacity,
          x,
          y,
          willChange: 'transform, opacity'
        }}
      >
        <img 
          src={fondFumee}
          alt=""
          className="w-full h-full object-cover"
          style={{
            mixBlendMode: 'normal',
            filter: 'blur(1px) brightness(1.1)'
          }}
        />
      </motion.div>

      {/* Overlay dégradé pour plus de profondeur */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 60% 50%, rgba(147, 197, 253, 0.05) 0%, rgba(253, 230, 138, 0.08) 50%, transparent 100%)',
          opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.5])
        }}
      />
    </div>
  );
};

export default WaveParticles;
