import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Download, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ResearchPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const rdProjects = [
    {
      id: 1,
      title: "Model Merging Techniques",
      shortDescription: "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles optimisés pour les applications spatiales.",
      fullDescription: "Notre recherche explore les méthodes avancées de fusion de modèles d'IA spécifiquement adaptées aux contraintes de l'environnement spatial. En fusionnant des modèles spécialisés, nous créons des solutions compactes et performantes capables de fonctionner autonomement en orbite.",
      image: "/images/Image_l0l90bl0l90bl0l9.png",
      status: "Publié",
      category: "Publication scientifique",
      date: "Décembre 2024",
      team: "Lilian RAGE, Youri LALAIN",
      objectives: [
        "Développer des techniques de fusion adaptées à l'embarqué spatial",
        "Créer des modèles compacts sans perte de performance",
        "Valider les résultats avec des benchmarks en environnement spatial"
      ],
      results: [
        "2 modèles classés Top 1 sur Hugging Face",
        "Réduction de 40% de la taille des modèles",
        "Publication d'un papier scientifique"
      ],
      publication: {
        venue: "IEEE • International Conference on Space AI 2025",
        title: "Adaptive Layer-Wise Spherical Interpolation: Optimisation du Model Merging pour l'Inférence Spatiale",
        abstract: "Cette étude introduit le protocole 'Layer-Adaptive SLERP', une méthodologie de fusion de modèles (Merging) conçue pour pallier les limitations matérielles des processeurs embarqués. En optimisant dynamiquement les trajectoires d'interpolation entre les poids synaptiques, nous parvenons à fusionner des capacités cognitives distinctes sans le coût computationnel d'un nouvel entraînement, garantissant une stabilité de réponse accrue en environnement radiatif.",
        contributions: [
            "Algorithme d'interpolation géométrique préservant la topologie des poids",
            "Système de pondération dynamique par couche (Dynamic Layer Weighting)",
            "Benchmark comparatif sur 6 architectures (LLM & Vision Transformers)",
        ],
        impact: "La réduction de 40% de l'empreinte mémoire permet le déploiement de modèles 7B et 2B performants sur des plateformes edge (FPGA/SoC), accélérant l'autonomie décisionnelle des constellations."
},
      links: [
        { label: "Lire le papier", url: "/Papier_scientifique_Merging.pdf", type: "pdf" },
        { label: "Hugging Face", url: "https://huggingface.co", type: "external" }
      ]
    },
    {
      id: 2,
      title: "IA Embarquée pour Satellites",
      shortDescription: "Développement d'algorithmes d'IA optimisés pour l'environnement spatial.",
      fullDescription: "Ce projet vise à créer des algorithmes d'intelligence artificielle capables de fonctionner dans les contraintes extrêmes de l'espace : radiation, température, puissance limitée. Notre approche permet aux satellites d'exécuter des tâches complexes de manière autonome sans communication constante avec la Terre.",
      image: "/images/Image_8tdmm78tdmm78tdm.png",
      status: "En cours",
      category: "R&D Active",
      date: "2024 - 2025",
      team: "Équipe R&D ALYON",
      objectives: [
        "Adapter les modèles IA aux contraintes spatiales",
        "Optimiser la consommation énergétique",
        "Garantir la résilience aux radiations",
        "Permettre la prise de décision autonome en orbite"
      ],
      results: [
        "Prototypes testés en simulation",
        "Réduction de 60% de la consommation énergétique",
        "Tests en environnement spatial prévus"
      ],
      links: []
    },
    {
      id: 3,
      title: "Traitement d'Images par IA",
      shortDescription: "Analyse et traitement d'images satellites en temps réel par IA embarquée.",
      fullDescription: "Ce projet vise à développer des algorithmes de computer vision optimisés pour l'analyse d'images satellites directement à bord. Notre approche utilise des réseaux de neurones convolutifs compacts capables de détecter des objets, analyser des terrains et identifier des anomalies en temps réel, sans nécessiter de transmission des images au sol.",
      image: "/images/Image_pxmkv3pxmkv3pxmk.png",
      status: "En cours",
      category: "R&D Active",
      date: "2024 - 2025",
      team: "Équipe Computer Vision ALYON",
      objectives: [
        "Développer des CNN ultra-légers pour l'embarqué spatial",
        "Détecter et classifier des objets depuis l'orbite",
        "Analyser les changements terrestres en temps réel",
        "Optimiser pour fonctionner avec contraintes énergétiques"
      ],
      results: [
        "Modèles de détection avec 95% de précision",
        "Traitement de 30 images/seconde embarqué",
        "Réduction de 80% du volume de données transmises"
      ],
      links: []
    },
    {
      id: 4,
      title: "Prise de Décision Autonome",
      shortDescription: "Systèmes de décision en temps réel pour opérations satellites autonomes.",
      fullDescription: "Ce projet développe des systèmes d'IA capables de prendre des décisions critiques en temps réel sans intervention humaine. L'objectif est de permettre aux satellites de gérer automatiquement les situations d'urgence, d'optimiser les opérations et d'éviter les collisions de manière autonome.",
      image: "/images/Image_gt28pxgt28pxgt28.png",
      status: "En cours",
      category: "R&D Active",
      date: "2024 - 2025",
      team: "Équipe Systèmes Autonomes",
      objectives: [
        "Développer des algorithmes de décision en temps réel",
        "Gérer l'évitement de collisions automatique",
        "Optimiser les trajectoires et manœuvres",
        "Assurer la sécurité opérationnelle autonome"
      ],
      results: [
        "Système de décision multi-critères opérationnel",
        "Simulations validées avec 99.9% de fiabilité",
        "Temps de réaction inférieur à 100ms"
      ],
      links: []
    }
  ];

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
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Retour à l'accueil
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                Nos Projets
            </span>

            <p style={{
              fontSize: '18px',
              color: '#d0cece',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              marginTop: '16px'
            }}>
              Découvrez nos projets de recherche et développement en intelligence artificielle embarquée pour le spatial.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {rdProjects.map((project, index) => {
              return (
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
                    overflow: 'hidden'
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
                  {/* Image en haut */}
                  <div style={{
                    height: '180px',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5'
                  }}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Contenu */}
                  <div style={{ padding: '24px' }}>

                  {/* Category */}
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#666',
                    backgroundColor: '#f5f5f5',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    marginBottom: '16px',
                    border: '1px solid #e5e5e5'
                  }}>
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#000',
                    marginBottom: '12px'
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '15px',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '16px'
                  }}>
                    {project.shortDescription}
                  </p>

                  {/* Date */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#888'
                  }}>
                    <Calendar style={{ width: '14px', height: '14px' }} />
                    {project.date}
                  </div>
                  </div>
                </motion.div>
              );
            })}
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
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
            overflowY: 'auto'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '32px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '48px',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #e5e5e5',
                backgroundColor: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: '#666',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.color = '#666';
              }}
            >
              ×
            </button>

            {/* Image Thumbnail - Top Left */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              border: '1px solid #e5e5e5',
              overflow: 'hidden',
              marginBottom: '24px'
            }}>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#000',
              marginBottom: '16px'
            }}>
              {selectedProject.title}
            </h2>

            {/* Meta Info */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar style={{ width: '16px', height: '16px', color: '#666' }} />
                <span style={{ fontSize: '14px', color: '#666' }}>{selectedProject.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users style={{ width: '16px', height: '16px', color: '#666' }} />
                <span style={{ fontSize: '14px', color: '#666' }}>{selectedProject.team}</span>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              {selectedProject.fullDescription}
            </p>

            {/* Publication Section - For first project */}
            {selectedProject.publication && (
                <div style={{
                    backgroundColor: '#f8fafc', // Bleu très léger pour différencier la partie "Recherche"
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    padding: '40px',
                    marginBottom: '40px',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                }}>
                    {/* Header Publication */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <div style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '800',
                        letterSpacing: '1px'
                    }}>
                        {selectedProject.publication.venue}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '12px', fontStyle: 'italic' }}>
                        Peer-reviewed Publication
                    </div>
                    </div>

                    <h3 style={{
                    fontSize: '26px',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '20px',
                    lineHeight: '1.3',
                    maxWidth: '90%'
                    }}>
                    {selectedProject.publication.title}
                    </h3>

                    {/* Grid Layout pour Abstract et Contributions */}
                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '40px',
                    marginTop: '30px'
                    }}>
                    {/* Colonne Gauche : Abstract */}
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', marginBottom: '12px', letterSpacing: '0.5px' }}>
                        Abstract
                        </h4>
                        <p style={{
                        fontSize: '15px',
                        color: '#334155',
                        lineHeight: '1.7',
                        textAlign: 'justify'
                        }}>
                        {selectedProject.publication.abstract}
                        </p>
                    </div>

                    {/* Colonne Droite : Contributions & Impact */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', marginBottom: '12px' }}>
                            Apports Scientifiques
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {selectedProject.publication.contributions.map((contrib, index) => (
                            <li key={index} style={{
                                fontSize: '13px',
                                color: '#475569',
                                padding: '6px 0',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'flex-start'
                            }}>
                                <span style={{ color: '#000' }}>→</span>
                                {contrib}
                            </li>
                            ))}
                        </ul>
                        </div>

                        <div style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        borderLeft: '4px solid #000',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                        }}>
                        <span style={{ fontWeight: '800', fontSize: '12px', color: '#000', display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>
                            Impact Opérationnel
                        </span>
                        <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                            {selectedProject.publication.impact}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Objectives */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Target style={{ width: '20px', height: '20px' }} />
                Objectifs
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {selectedProject.objectives.map((obj, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: '15px',
                      color: '#666',
                      padding: '12px 0',
                      borderBottom: '1px solid #f0f0f0',
                      display: 'flex',
                      alignItems: 'start',
                      gap: '12px'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0
                    }} />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000',
                marginBottom: '16px'
              }}>
                Résultats
              </h3>
              <div style={{
                display: 'grid',
                gap: '12px'
              }}>
                {selectedProject.results.map((result, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      backgroundColor: '#fafafa',
                      borderRadius: '12px',
                      border: '1px solid #e5e5e5',
                      fontSize: '14px',
                      color: '#666'
                    }}
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {selectedProject.links.length > 0 && (
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
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
                      padding: '12px 24px',
                      backgroundColor: '#000',
                      color: '#fff',
                      borderRadius: '100px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#000';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {link.type === 'pdf' ? <Download style={{ width: '14px', height: '14px' }} /> : <ExternalLink style={{ width: '14px', height: '14px' }} />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default ResearchPage;