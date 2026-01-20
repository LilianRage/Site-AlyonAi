import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import '../../styles/components/TrustBanner.css';

const TrustBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="trust-banner-section" id="trust">
      <div className="trust-banner-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="trust-banner-header"
        >
          <h2 className="trust-banner-title">{siteData.trust.title}</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="trust-banner-logos-grid"
        >
          {siteData.trust.partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="trust-banner-logo-card"
            >
              <div className="trust-banner-logo-wrapper">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="trust-banner-logo"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBanner;
