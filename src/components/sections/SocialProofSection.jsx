import React from 'react';
import '../../styles/components/SocialProofSection.css';

const SocialProofSection = ({ data }) => {
  return (
    <section id="about" className="social-proof-section">
      <div className="social-proof-container">
        <div className="social-proof-header">
          <h2 className="social-proof-title">
            Ils nous font confiance
          </h2>
        </div>

        <div className="testimonials-grid">
          {data.socialProof.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <cite className="author-name">
                    {testimonial.author}
                  </cite>
                  <span className="author-company">
                    {testimonial.company}
                  </span>
                </div>
                <span className="sector-badge">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats simples */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Réduction des arrêts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Précision de détection</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Surveillance continue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
