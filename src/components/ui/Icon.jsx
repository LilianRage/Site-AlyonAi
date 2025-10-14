import React from 'react';

const Icon = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const icons = {
    // Logo ALYON officiel - A stylisé avec point
    alyon: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        {/* Lettre A stylisée */}
        <path 
          d="M15 85 L35 25 L50 25 L70 85 L60 85 L55 70 L30 70 L25 85 Z M35 50 L50 50 L42.5 35 Z" 
          fill={color}
        />
        {/* Point moderne */}
        <circle cx="80" cy="75" r="8" fill={color} />
      </svg>
    ),

    // Logo ALYON - Circuit/Chip moderne (ancien)
    logo: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 4h16v16H4V4z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M9 9h6v6H9V9z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M12 4v5M12 15v5M4 12h5M15 12h5" stroke={color} strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill={color}/>
      </svg>
    ),

    // Maintenance prédictive - Engrenage avec analytics
    maintenance: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} strokeWidth="1.5"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // Contrôle qualité - Shield avec check
    quality: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12c0 1.66-1.34 3-3 3h-1l-2 2v-2H8c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v4z" stroke={color} strokeWidth="1.5"/>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke={color} strokeWidth="1.5" fill="none"/>
      </svg>
    ),

    // Assistance intelligente - Brain/Network
    assistance: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v1A2.5 2.5 0 0 0 9.5 8h5a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 14.5 2h-5z" stroke={color} strokeWidth="1.5"/>
        <path d="M12 8v4" stroke={color} strokeWidth="1.5"/>
        <path d="M8 12h8" stroke={color} strokeWidth="1.5"/>
        <path d="M8 16h8" stroke={color} strokeWidth="1.5"/>
        <path d="M12 20v2" stroke={color} strokeWidth="1.5"/>
        <circle cx="6" cy="14" r="1" fill={color}/>
        <circle cx="18" cy="14" r="1" fill={color}/>
        <circle cx="6" cy="18" r="1" fill={color}/>
        <circle cx="18" cy="18" r="1" fill={color}/>
      </svg>
    ),

    // Email moderne
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1.5"/>
        <path d="m22 7-10 5L2 7" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // Location moderne
    location: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={color} strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // Business/LinkedIn moderne
    business: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke={color} strokeWidth="1.5"/>
        <path d="m22 6-10 5L2 6" stroke={color} strokeWidth="1.5"/>
        <path d="M6 19v-2" stroke={color} strokeWidth="1.5"/>
        <path d="M10 19v-4" stroke={color} strokeWidth="1.5"/>
        <path d="M14 19v-6" stroke={color} strokeWidth="1.5"/>
        <path d="M18 19v-8" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // Arrow moderne pour boutons
    arrow: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M5 12h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m12 5 7 7-7 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // Rocket moderne pour CTA
    rocket: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke={color} strokeWidth="1.5"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke={color} strokeWidth="1.5"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke={color} strokeWidth="1.5"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // Play pour vidéos/démos
    play: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <polygon points="5,3 19,12 5,21" fill={color}/>
      </svg>
    ),

    // Check pour validation
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // Icônes spécialisées pour les solutions IA
    // Maintenance prédictive - Engrenage avec analytics avancé
    predictive: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke={color} strokeWidth="1.5"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke={color} strokeWidth="1.5"/>
        <path d="M8 12h2M14 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="6" r="1" fill={color}/>
        <circle cx="18" cy="18" r="1" fill={color}/>
      </svg>
    ),

    // Contrôle qualité automatisé - Shield avec inspection
    qualityControl: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="8" r="2" stroke={color} strokeWidth="1.5"/>
        <path d="M8 16h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),

    // Assistance intelligente - Cerveau avec réseau
    intelligentAssistance: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v1A2.5 2.5 0 0 0 9.5 8h5a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 14.5 2h-5z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M7 8v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12v2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 10h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="14" r="1" fill={color}/>
        <circle cx="16" cy="14" r="1" fill={color}/>
        <path d="M12 8l-2 2M12 8l2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),

    // AI - Chip/Processeur IA
    ai: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="5" y="5" width="14" height="14" rx="2" stroke={color} strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5"/>
        <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7 7L5.5 5.5M17 7l1.5-1.5M7 17l-1.5 1.5M17 17l1.5 1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill={color}/>
      </svg>
    ),

    // Brain - Cerveau
    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z" stroke={color} strokeWidth="1.5"/>
        <path d="M9 14v3a3 3 0 0 0 6 0v-3" stroke={color} strokeWidth="1.5"/>
        <circle cx="9" cy="9" r="1" fill={color}/>
        <circle cx="15" cy="9" r="1" fill={color}/>
        <path d="M12 11v2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),

    // Network - Réseau de neurones
    network: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="2" stroke={color} strokeWidth="1.5"/>
        <circle cx="6" cy="6" r="2" stroke={color} strokeWidth="1.5"/>
        <circle cx="18" cy="6" r="2" stroke={color} strokeWidth="1.5"/>
        <circle cx="6" cy="18" r="2" stroke={color} strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="2" stroke={color} strokeWidth="1.5"/>
        <path d="M12 10L6 8M12 10l6-2M12 14l-6 2M12 14l6 2" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),

    // GitHub
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill={color}/>
      </svg>
    ),

    // ChevronLeft
    chevronLeft: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // ChevronRight
    chevronRight: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[name] || null;
};

export default Icon;