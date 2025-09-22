import React, { useEffect } from 'react';
import '../../styles/components/PressSection.css';

const PressSection = () => {
  // Press articles data
  const articles = [
    {
      id: 1,
      title: "Décollage avec ALYON AI",
      quote: "Youri Lalain et Lilian Rage, bousculent les codes de l'IA industrielle avec leur startup lyonnaise ALYON AI.",
      image: "/images/ArticlesDL.png",
      logo: "/images/Logo_Dauphine.jpg",
      mediaName: "Le Dauphiné Libéré",
      date: "27 Mai 2025",
      link: "https://www.ledauphine.com/economie/2025/05/27/le-tour-de-l-actu-deeptech",
    },
    {
      id: 2,
      title: "L'IA responsable au cœur de la stratégie d'ALYON",
      quote: "Ce projet est en lice dans la catégorie Ingénierie 4.0 du Grand Challenge des écoles d'ingénieurs.",
      image: "/images/ArticleUN.png",
      logo: "/images/Logo-usine-nouvelle.webp",
      mediaName: "L'Usine Nouvelle",
      date: "15 Mai 2025",
      link: "https://www.usinenouvelle.com/article/cette-ia-peut-identifier-les-composants-de-moteurs-d-avions-et-de-fusees-a-partir-d-images.N2231069",
    }
  ];
  
  // Observer setup for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const reveals = document.querySelectorAll('.press-reveal');
    reveals.forEach((el) => observer.observe(el));
    
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="press" className="press-section">
      <div className="press-container">
        <div className="press-header press-reveal">
          <h2 className="press-title">Retour sur nous</h2>
          <p className="press-subtitle">
            Découvrez ce que les médias disent de nos innovations et de notre impact
          </p>
        </div>
        
        <div className="press-grid">
          {articles.map((article, index) => (
            <div key={article.id} className="press-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="press-card">
                <div 
                  className="press-image" 
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="press-content">
                  <div className="media-logo">
                    <img src={article.logo} alt={article.mediaName} />
                  </div>
                  <h3 className="press-card-title">{article.title}</h3>
                  <p className="press-quote">"{article.quote}"</p>
                  <div className="press-footer">
                    <div className="press-date">{article.date}</div>
                    <a href={article.link} className="press-link" target="_blank" rel="noopener noreferrer">
                      Lire l'article
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
