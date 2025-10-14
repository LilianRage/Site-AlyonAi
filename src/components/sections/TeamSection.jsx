import React, { useEffect, useState } from 'react';
import '../../styles/components/TeamSection.css';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

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
    
    const reveals = document.querySelectorAll('.team-reveal');
    reveals.forEach((el) => observer.observe(el));
    
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const teamMembers = [
    {
      id: 1,
      name: "Youri LALAIN",
      role: "Co-fondateur",
      photo: "/images/YouriPhoto.jpeg",
      linkedin: "https://www.linkedin.com/in/youri-lalain/",
      email: "youri.lalain@alyon.ai",
      bio: "Nous sommes convaincus que l'IA peut considérablement aider les équipes industrielles en automatisant les tâches de contrôle et d'analyse, afin qu'elles puissent se concentrer sur l'innovation et la valeur ajoutée."
    },
    {
      id: 2,
      name: "Lilian RAGE",
      role: "Co-fondateur",
      photo: "/images/LilianPhoto.jpeg",
      linkedin: "https://www.linkedin.com/in/lilian-rage-408a7921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "lilian.rage@alyon.ai",
      bio: "Notre conviction est que l'IA doit devenir un partenaire stratégique des entreprises industrielles, en leur permettant de gagner en performance, de sécuriser leur qualité et d'accélérer leur transition vers le futur."
    }
  ];
  
  const getCardGradient = (memberId) => {
    return memberId === 1 
      ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' 
      : 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)';
  };

  const getCardShadow = (memberId) => {
    return memberId === 1
      ? '0 15px 40px rgba(59, 130, 246, 0.35)'
      : '0 15px 40px rgba(96, 165, 250, 0.35)';
  };

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header team-reveal">
          <h2 className="team-title">Notre équipe</h2>
          <p className="team-subtitle">
            Rencontrez les experts qui donnent vie à vos projets d'intelligence artificielle
          </p>
        </div>
        
        <div className="team-content">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="team-reveal" 
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div 
                  className={`team-card ${hoveredMember?.id === member.id ? 'hovered' : ''}`}
                  style={{
                    background: getCardGradient(member.id),
                    boxShadow: getCardShadow(member.id)
                  }}
                >
                  <div className="member-photo">
                    <img src={member.photo} alt={member.name} />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cadre horizontal pour les biographies */}
          <div className={`bio-panel ${hoveredMember ? 'visible' : ''}`}>
            {hoveredMember && (
              <div className="bio-content">
                <h4 className="bio-name">{hoveredMember.name}</h4>
                <p className="bio-text">"{hoveredMember.bio}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
