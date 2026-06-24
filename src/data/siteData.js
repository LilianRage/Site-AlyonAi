// Données de contenu pour le site Alyon AI - Satellites LEO Autonomes
export const siteData = {
  meta: {
    title: "ALYON AI - Surveillance autonome des satellites en orbite basse",
    description: "Alyon AI développe une intelligence embarquée qui permet aux satellites de surveiller leur propre état de santé, détecter les anomalies à bord et alerter le sol en quelques minutes, sans attendre un passage sol.",
    keywords: "satellites LEO, détection d'anomalies embarquée, intelligence artificielle embarquée, résilience satellite, surveillance autonome, constellations, espace, Europe, space tech",
    ogImage: "/images/alyon-ai-og.jpg",
    url: "https://alyon-ai.com"
  },

  company: {
    name: "ALYON AI",
    tagline: "Intelligence embarquée pour satellites autonomes",
    heroTagline: "Des satellites qui veillent sur eux-mêmes",
    heroTitle: "Détecter. Décider. Alerter.",
    description: "Alyon AI développe une intelligence embarquée qui permet aux satellites de surveiller leur propre état de santé, détecter les anomalies à bord et alerter le sol en quelques minutes, même loin de toute station sol.",
    mission: "Donner à chaque satellite l'intelligence pour surveiller son propre état de santé, détecter une anomalie à bord et alerter le sol via sa constellation, sans attendre un passage sol.",
    differentiator: "Détection active pendant les angles morts entre deux contacts sol, là où les solutions existantes sont aveugles."
  },

  stats: [
    { value: "10–20 min / 90", label: "Fenêtre de contact sol, par orbite" },
    { value: "< 10 min", label: "Entre la détection et l'alerte au sol" },
    { value: "99,98%", label: "Taux de livraison des alertes" },
    { value: "23%", label: "Des satellites LEO rencontrent un incident significatif en orbite" }
  ],

  modules: [
    {
      id: "Module 1",
      name: "Module 1",
      tagline: "Fleet Health Monitoring",
      description: "Monitoring continu de la santé des satellites avec détection d'anomalies par machine learning. Supervision automatisée des flottes entières.",
      features: ["Détection d'anomalies ML", "Monitoring continu 24/7", "Supervision automatisée", "Alertes prédictives"]
    },
    {
      id: "Module 2",
      name: "Module 2",
      tagline: "Intelligent Energy Management",
      description: "Optimisation intelligente de la gestion énergétique via reinforcement learning pour maximiser la durée de vie des batteries.",
      features: ["Reinforcement learning", "Extension missions +40-60%", "Optimisation batteries", "Gestion ressources adaptative"]
    },
    {
      id: "Module 3",
      name: "Module 3",
      tagline: "Autonomous Mission Planning",
      description: "Les satellites décident autonomiquement quoi capturer en fonction du contexte temps-réel : météo, géométrie, ressources disponibles.",
      features: ["Décision autonome", "Analyse contexte temps-réel", "Taux succès 60% → 90%+", "Planification dynamique"]
    },
    {
      id: "Module 4",
      name: "Module 4",
      tagline: "Multimodal Data Fusion",
      description: "Fusion multimodale SAR + optique pour extraire des insights de haute valeur à partir des données Sentinel avec traitement embarqué intelligent.",
      features: ["Fusion SAR + optique", "Données Sentinel", "Réduction bande passante 65-75%", "Edge processing"]
    },
    {
      id: "Module 5",
      name: "Module 5",
      tagline: "Autonomous Collision Avoidance",
      description: "Évitement de collisions autonome en temps réel. Essentiel face à la prolifération des débris spatiaux et bientôt obligatoire selon les directives ESA 2027.",
      features: ["Évitement temps réel", "Conformité ESA 2027", "Protection débris spatiaux", "Décision autonome"]
    },
    {
      id: "Module 6",
      name: "Module 6",
      tagline: "Inter-Satellite Communications",
      description: "Optimisation des communications inter-satellites via des algorithmes de routage basés sur des Graph Neural Networks.",
      features: ["Graph Neural Networks", "Routage optimisé", "Réduction latence", "Résilience mesh"]
    }
  ],

  platform: {
    title: "Plateforme Software SaaS",
    features: [
      "ITAR-free et souveraine",
      "Installation sur satellites existants ou nouveaux",
      "Architecture modulaire",
      "Réduction OPEX 45-60%"
    ],
    description: "Une plateforme software commercialisable en mode SaaS qui permet aux opérateurs européens de rendre leurs constellations scalables et économiquement viables face à la concurrence américaine et chinoise."
  },

  navigation: [
    { label: "Accueil", href: "#hero" },
    { label: "Produit", href: "#modules" },
    { label: "R&D", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ],

  contact: {
    email: "contact@alyon.ai",
    address: "Paris, France",
    linkedIn: "https://linkedin.com/company/alyon-ai"
  },

  trust: {
    title: "Écosystème",
    partners: [
      {
        name: "ECE Ilab",
        logo: "/images/Logo_ECE_Ilab.webp"
      },
      {
        name: "PDG Entreprises",
        logo: "/images/logoPaysGex.png"
      },
      {
        name: "CEIMIA",
        logo: "/images/Logo_CEIMIA.png"
      }
    ]
  }
};
