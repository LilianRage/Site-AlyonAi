import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FadeIn, SlideInLeft, SlideInRight } from '../ui/Animations';
import { siteData } from '../../data/siteData';

const ContactSection = () => {
  const handleContact = () => {
    window.location.href = `mailto:${siteData.contact.email}`;
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/Video_terre_nuit.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Prêt à rendre vos satellites<br />
              <span className="italic font-light text-white/70">véritablement autonomes ?</span>
            </h2>
          </FadeIn>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button 
              onClick={handleContact}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid white',
                padding: '16px 48px',
                fontSize: '18px',
                fontWeight: 500,
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Nous Contacter →
            </button>
          </motion.div>
        </div>

        {/* Contact Info - Bottom Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-12 left-12 text-white"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
