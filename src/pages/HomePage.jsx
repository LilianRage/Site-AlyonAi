import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HeroGradientOverlay from '../components/sections/HeroGradientOverlay';
import TrustBanner from '../components/sections/TrustBanner';
import VisionSection from '../components/sections/VisionSection';
import ModulesSection from '../components/sections/ModulesSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';
import { siteData } from '../data/siteData';
import '../styles/globals.css';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.company.name,
    "description": siteData.company.description,
    "url": siteData.meta.url,
    "logo": `${siteData.meta.url}/images/alyon-ai-logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": siteData.contact.email,
      "areaServed": "EU",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "sameAs": [siteData.contact.linkedIn]
  };

  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <html lang="fr" />
          <title>{siteData.meta.title}</title>
          <meta name="description" content={siteData.meta.description} />
          <meta name="keywords" content={siteData.meta.keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteData.meta.url} />
          <meta property="og:title" content={siteData.meta.title} />
          <meta property="og:description" content={siteData.meta.description} />
          <meta property="og:image" content={`${siteData.meta.url}${siteData.meta.ogImage}`} />
          <meta property="og:locale" content="fr_FR" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={siteData.meta.title} />
          <meta property="twitter:description" content={siteData.meta.description} />
          <meta property="twitter:image" content={`${siteData.meta.url}${siteData.meta.ogImage}`} />
          
          {/* Liens */}
          <link rel="canonical" href={siteData.meta.url} />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          
          {/* Polices */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          
          {/* Données structurées */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        
        <Header />
        
        <main>
          <HeroSection />
          
          <VisionSection />
          <ModulesSection />
          <AchievementsSection />
          <ContactSection />
          <HeroGradientOverlay />
          <TrustBanner />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
