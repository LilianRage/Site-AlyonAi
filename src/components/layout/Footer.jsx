import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Separator } from '../ui/Separator';
import { siteData } from '../../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Si on est sur la page d'accueil, scroll direct
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, rediriger vers la page d'accueil avec l'ancre
      navigate('/#' + sectionId);
      // Attendre que la page se charge puis scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/images/logo-Alyon-Black-rogne.png" 
              alt="ALYON AI" 
              style={{ height: '60px', width: 'auto' }}
            />
            <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
              {siteData.company.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-500 hover:text-black transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a 
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-black transition-colors duration-300"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li>{siteData.contact.address}</li>
              <li>
                <a 
                  href={siteData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-300"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Alyon AI. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-black transition-colors">
              Confidentialité
            </a>
            <a href="/terms" className="hover:text-black transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
