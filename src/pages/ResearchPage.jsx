import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const ResearchPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const res = t.research;
  const rdProjects = res.projects;

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Header />

      <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>

          {/* Back Button */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#666',
              textDecoration: 'none',
              marginBottom: '40px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            {res.back}
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2 block">
              {res.label}
            </span>
            <p style={{
              fontSize: '18px',
              color: '#d0cece',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              marginTop: '16px',
            }}>
              {res.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px',
          }}>
            {rdProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: '#fafafa',
                  borderRadius: '24px',
                  border: '1px solid #e5e5e5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#000';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e5e5';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div style={{ height: '180px', width: '100%', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#666',
                    backgroundColor: '#f5f5f5',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5',
                  }}>
                    {project.category}
                  </span>

                  <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#000', marginBottom: '12px' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>
                    {project.shortDescription}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#888' }}>
                    <Calendar style={{ width: '14px', height: '14px' }} />
                    {project.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
            overflowY: 'auto',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              maxWidth: '760px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {/* Banner image */}
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderRadius: '24px 24px 0 0', flexShrink: 0 }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0.45)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: '#fff',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
            >
              ×
            </button>

            {/* Content */}
            <div style={{ padding: '32px' }}>

              {/* Title + status badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px' }}>
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#000', margin: 0, lineHeight: 1.3 }}>
                  {selectedProject.title}
                </h2>
                <span style={{
                  flexShrink: 0,
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  backgroundColor: (selectedProject.status === 'Published' || selectedProject.status === 'Publié') ? '#000' : '#f0f0f0',
                  color: (selectedProject.status === 'Published' || selectedProject.status === 'Publié') ? '#fff' : '#555',
                  border: '1px solid #e0e0e0',
                }}>
                  {selectedProject.status}
                </span>
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar style={{ width: '14px', height: '14px', color: '#999' }} />
                  <span style={{ fontSize: '13px', color: '#888' }}>{selectedProject.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users style={{ width: '14px', height: '14px', color: '#999' }} />
                  <span style={{ fontSize: '13px', color: '#888' }}>{selectedProject.team}</span>
                </div>
              </div>

              {/* Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {selectedProject.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '11px 22px',
                        backgroundColor: '#000',
                        color: '#fff',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 600,
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#333';
                        e.currentTarget.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#000';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {link.type === 'pdf'
                        ? <FileText style={{ width: '14px', height: '14px' }} />
                        : <ExternalLink style={{ width: '14px', height: '14px' }} />
                      }
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Full description */}
              <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.75, marginBottom: '28px' }}>
                {selectedProject.fullDescription}
              </p>

              {/* Publication */}
              {selectedProject.publication && (
                <div style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  padding: '24px',
                  marginBottom: '28px',
                }}>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    marginBottom: '14px',
                  }}>
                    {selectedProject.publication.venue}
                  </span>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.4 }}>
                    {selectedProject.publication.title}
                  </h3>

                  <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    Abstract
                  </h4>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.7, marginBottom: '20px' }}>
                    {selectedProject.publication.abstract}
                  </p>

                  <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    {res.scientificContributions}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                    {selectedProject.publication.contributions.map((contrib, index) => (
                      <li key={index} style={{ fontSize: '14px', color: '#475569', padding: '5px 0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#000', flexShrink: 0 }}>→</span>
                        {contrib}
                      </li>
                    ))}
                  </ul>

                  <div style={{ borderLeft: '3px solid #000', paddingLeft: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#000', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      {res.operationalImpact}
                    </span>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                      {selectedProject.publication.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Objectives */}
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#000', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target style={{ width: '16px', height: '16px' }} />
                  {res.objectives}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {selectedProject.objectives.map((obj, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#444', padding: '10px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ width: '5px', height: '5px', backgroundColor: '#000', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default ResearchPage;
