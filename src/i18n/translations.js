export const translations = {
  en: {
    productShowcase: {
      label: 'Our Product',
      title: 'OBC-1',
      subtitle: 'The on-board brain for satellite autonomy',
      description:
        'The OBC-1 enables satellites and constellations to run multiple critical missions at once: on-board data processing, intelligent bus management, autonomous collision avoidance and constellation coordination, to reduce dependence on ground stations.',
      cta: 'Discover the product',
    },
    nav: {
      home: 'Home',
      product: 'Product',
      rd: 'R&D',
      contact: 'Contact',
      contactBtn: 'Contact Us',
    },
    footer: {
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      legal: 'Legal Notice',
      description:
        'Alyon AI is developing the next generation of autonomous satellites for Europe, in response to the OPEX crisis facing the space industry.',
    },
    vision: {
      label: 'Our Vision',
      p1: 'European space faces a major challenge. While American and Chinese giants deploy constellations of thousands of satellites, European operators struggle to remain competitive.',
      p2: "The problem isn't the launch — it's what comes after. <strong class=\"text-black font-semibold\">Operational costs</strong> are exploding. Each satellite requires ground teams to operate it, monitor it, anticipate failures, and avoid collisions. This approach, inherited from the early days of the space age, is simply no longer viable at the scale of modern constellations.",
      p3: 'At <strong class="text-black font-semibold">ALYON AI</strong>, we have a conviction: satellites must become autonomous. Not tomorrow, not in ten years — now. Our embedded artificial intelligence platform transforms each satellite into an agent capable of making its own decisions, managing its energy, avoiding debris, and communicating intelligently with its constellation.',
      p4: 'Our ambition? <strong class="text-black font-semibold">Give Europe the means of its space independence</strong>, with a sovereign technology, without compromise on performance.',
      stat1Title: 'PROFITABILITY',
      stat1Sub: 'OPEX Optimization',
      stat1Desc: "The 'brain' in orbit to ensure the economic viability of large-scale constellations.",
      stat2Title: 'LONGEVITY',
      stat2Sub: 'Extended Mission',
      stat2Desc: 'Autonomous resource management to maximize the lifecycle of each satellite.',
      stat3Title: 'SOVEREIGNTY',
      stat3Sub: 'Tech Independence',
      stat3Desc: 'A European and ITAR-free architecture for total freedom of action in orbit.',
    },
    modules: {
      label: 'Product',
      discover: 'Discover',
    },
    achievements: {
      label: 'Research & Development',
      discoverRD: 'Discover our R&D',
      projects: [
        {
          title: 'Model Merging Techniques',
          description:
            'Research on AI model merging techniques to create more powerful and efficient models with limited resources.',
          status: 'Published',
          category: 'Scientific Publication',
        },
        {
          title: 'Embedded AI for Satellites',
          description:
            'Development of AI algorithms optimized to operate directly on board satellites with energy constraints.',
          status: 'In Progress',
          category: 'Active R&D',
        },
        {
          title: 'AI Image Processing',
          description:
            'Real-time satellite image analysis and processing using neural networks optimized for space-embedded systems.',
          status: 'In Progress',
          category: 'Active R&D',
        },
        {
          title: 'Autonomous Decision Making',
          description:
            'Real-time decision systems for autonomous satellite operations management without human intervention.',
          status: 'In Progress',
          category: 'Active R&D',
        },
      ],
    },
    contact: {
      title: 'Ready to make your satellites',
      titleItalic: 'truly autonomous?',
      btn: 'Contact Us →',
    },
    trust: {
      title: 'Ecosystem',
    },
    tech: {
      back: 'Back to home',
      productLabel: 'Product',
      subtitle: 'Edge Computing Module',
      description:
        'A compact on-board computer designed for space. The OBC-1 embeds 40 TOPS of AI power directly in orbit, reducing processing latency and downlink bandwidth requirements.',
      specs: [
        { label: 'AI Performance', value: '40 TOPS' },
        { label: 'Processor', value: 'NVIDIA Jetson Orin Nano 8GB' },
        { label: 'Format', value: '0.5U CubeSat' },
        { label: 'Power', value: '6 – 16V DC' },
        { label: 'Thermal', value: '-30°C to +60°C' },
        { label: 'Origin', value: 'Made in France' },
      ],
      hardwareLabel: 'Hardware',
      hardwareTitle: 'Designed for space.\nIntegrated in 0.5U.',
      hardwareDesc:
        'CNC-machined aluminum enclosure, black anodized. Fully passive thermal management via a copper spreader — no fans, no moving parts. Harwin Gecko connectors with space heritage.',
      hardwareFeatures: [
        '4-layer FR-4 carrier board, 90 × 96 mm',
        'M.2 NVMe PCIe Gen3 x4 storage',
        'Interfaces: UART, I²C, CAN bus, USB-C',
        '6 – 16V DC power supply (satellite bus)',
      ],
      softwareLabel: 'Software',
      softwareTitle: 'An AI architecture adapted to each mission',
      softwareDesc:
        'Our embedded software stack is configured for different use cases — Earth observation, collision avoidance, constellation management. The POC below illustrates our real-time processing capabilities.',
      capabilitiesLabel: 'By the numbers',
      capabilitiesTitle: 'What the OBC-1 enables',
      capabilities: [
        { value: '40 TOPS', label: 'Embedded AI compute' },
        { value: '< 100ms', label: 'Collision avoidance reaction' },
        { value: '30 img/s', label: 'On-board image processing' },
        { value: '65–75%', label: 'Downlink bandwidth saved' },
        { value: '6+', label: 'Simultaneous autonomous tasks' },
        { value: '−30 / +60°C', label: 'Operating temperature range' },
      ],
      ctaText: 'Interested in integration or partnership?',
      ctaBtn: 'Contact Us',
    },
    research: {
      back: 'Back to home',
      label: 'Our Projects',
      subtitle:
        'Discover our research and development projects in embedded artificial intelligence for space.',
      scientificContributions: 'Scientific Contributions',
      operationalImpact: 'Operational Impact',
      objectives: 'Objectives',
      projects: [
        {
          id: 1,
          title: 'Model Merging Techniques',
          shortDescription:
            'Research on AI model merging techniques to create optimized models for space applications.',
          fullDescription:
            'Our research explores advanced AI model merging methods specifically adapted to the constraints of the space environment. By merging specialized models, we create compact and high-performance solutions capable of operating autonomously in orbit.',
          status: 'Published',
          category: 'Scientific Publication',
          date: 'December 2024',
          team: 'Lilian RAGE, Youri LALAIN',
          objectives: [
            'Develop merging techniques adapted to space embedded systems',
            'Create compact models without performance loss',
            'Validate results with benchmarks in space environment',
          ],
          results: [
            '2 models ranked Top 1 on Hugging Face',
            '40% reduction in model size',
            'Publication of a scientific paper',
          ],
          publication: {
            venue: 'IEEE • International Conference on Space AI 2025',
            title:
              'Adaptive Layer-Wise Spherical Interpolation: Optimizing Model Merging for Spatial Inference',
            abstract:
              "This study introduces the 'Layer-Adaptive SLERP' protocol, a model merging methodology designed to overcome the hardware limitations of embedded processors. By dynamically optimizing interpolation trajectories between synaptic weights, we merge distinct cognitive capabilities without the computational cost of new training, guaranteeing increased response stability in a radiative environment.",
            contributions: [
              'Geometric interpolation algorithm preserving weight topology',
              'Dynamic Layer Weighting system',
              'Comparative benchmark on 6 architectures (LLM & Vision Transformers)',
            ],
            impact:
              'The 40% reduction in memory footprint enables the deployment of high-performing 7B and 2B models on edge platforms (FPGA/SoC), accelerating autonomous decision-making of constellations.',
          },
          links: [
            { label: 'Read the paper', url: '/Papier_scientifique_Merging.pdf', type: 'pdf' },
            { label: 'Hugging Face', url: 'https://huggingface.co', type: 'external' },
          ],
          image: '/images/Image_l0l90bl0l90bl0l9.png',
        },
        {
          id: 2,
          title: 'Embedded AI for Satellites',
          shortDescription: 'Development of AI algorithms optimized for the space environment.',
          fullDescription:
            'This project aims to create artificial intelligence algorithms capable of operating under the extreme constraints of space: radiation, temperature, limited power. Our approach enables satellites to execute complex tasks autonomously without constant communication with Earth.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2024 - 2025',
          team: 'ALYON R&D Team',
          objectives: [
            'Adapt AI models to space constraints',
            'Optimize energy consumption',
            'Guarantee radiation resilience',
            'Enable autonomous decision-making in orbit',
          ],
          results: [
            'Prototypes tested in simulation',
            '60% reduction in energy consumption',
            'Space environment tests planned',
          ],
          links: [],
          image: '/images/Image_8tdmm78tdmm78tdm.png',
        },
        {
          id: 3,
          title: 'AI Image Processing',
          shortDescription: 'Real-time AI-based analysis and processing of satellite images by embedded AI.',
          fullDescription:
            'This project aims to develop computer vision algorithms optimized for satellite image analysis directly on board. Our approach uses compact convolutional neural networks capable of detecting objects, analyzing terrain and identifying anomalies in real time, without requiring image transmission to the ground.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2024 - 2025',
          team: 'ALYON Computer Vision Team',
          objectives: [
            'Develop ultra-lightweight CNNs for space embedded systems',
            'Detect and classify objects from orbit',
            'Analyze terrain changes in real time',
            'Optimize for operation with energy constraints',
          ],
          results: [
            'Detection models with 95% accuracy',
            'Processing of 30 images/second onboard',
            '80% reduction in transmitted data volume',
          ],
          links: [],
          image: '/images/Image_pxmkv3pxmkv3pxmk.png',
        },
        {
          id: 4,
          title: 'Autonomous Decision Making',
          shortDescription: 'Real-time decision systems for autonomous satellite operations.',
          fullDescription:
            'This project develops AI systems capable of making critical decisions in real time without human intervention. The goal is to enable satellites to automatically manage emergency situations, optimize operations and avoid collisions autonomously.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2024 - 2025',
          team: 'Autonomous Systems Team',
          objectives: [
            'Develop real-time decision algorithms',
            'Manage automatic collision avoidance',
            'Optimize trajectories and maneuvers',
            'Ensure autonomous operational safety',
          ],
          results: [
            'Operational multi-criteria decision system',
            'Simulations validated with 99.9% reliability',
            'Reaction time under 100ms',
          ],
          links: [],
          image: '/images/Image_gt28pxgt28pxgt28.png',
        },
      ],
    },
    meta: {
      description:
        'Alyon AI is developing the next generation of autonomous LEO satellites for Europe. Modular software platform for truly autonomous constellations.',
    },
    company: {
      description:
        'Alyon AI is developing the next generation of autonomous satellites for Europe, in response to the OPEX crisis facing the space industry.',
    },
    stats: [
      { value: '45-60%', label: 'OPEX Reduction' },
      { value: '40-60%', label: 'Lifetime Extension' },
      { value: '90%+', label: 'Capture Success Rate' },
      { value: '65-75%', label: 'Bandwidth Reduction' },
    ],
  },

  fr: {
    productShowcase: {
      label: 'Notre Produit',
      title: 'OBC-1',
      subtitle: "Le cerveau embarqué pour l'autonomie satellitaire",
      description:
        "L'OBC-1 permet aux satellites et aux constellations d'exécuter plusieurs missions critiques simultanément : traitement de données embarqué, gestion intelligente du bus, évitement autonome de collisions et coordination de constellation, pour réduire la dépendance aux stations sol.",
      cta: 'Découvrir le produit',
    },
    nav: {
      home: 'Accueil',
      product: 'Produit',
      rd: 'R&D',
      contact: 'Contact',
      contactBtn: 'Nous contacter',
    },
    footer: {
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      legal: 'Mentions légales',
      description:
        "Alyon AI développe la prochaine génération de satellites autonomes pour l'Europe, en réponse à la crise OPEX que traverse l'industrie spatiale.",
    },
    vision: {
      label: 'Notre Vision',
      p1: "L'Europe spatiale fait face à un défi majeur. Alors que les géants américains et chinois déploient des constellations de milliers de satellites, nos opérateurs européens peinent à rester compétitifs.",
      p2: "Le problème n'est pas le lancement — c'est ce qui vient après. Les <strong class=\"text-black font-semibold\">coûts opérationnels</strong> explosent. Chaque satellite nécessite des équipes au sol pour le piloter, le surveiller, anticiper les pannes, éviter les collisions. Cette approche, héritée des débuts de l'ère spatiale, n'est tout simplement plus viable à l'échelle des constellations modernes.",
      p3: 'Chez <strong class="text-black font-semibold">ALYON AI</strong>, nous avons une conviction : les satellites doivent devenir autonomes. Pas demain, pas dans dix ans — maintenant. Notre plateforme d\'intelligence artificielle embarquée transforme chaque satellite en un agent capable de prendre ses propres décisions, de gérer son énergie, d\'éviter les débris, et de communiquer intelligemment avec sa constellation.',
      p4: 'Notre ambition ? <strong class="text-black font-semibold">Donner à l\'Europe les moyens de son indépendance spatiale</strong>, avec une technologie souveraine, sans compromis sur les performances.',
      stat1Title: 'RENTABILITÉ',
      stat1Sub: 'Optimisation OPEX',
      stat1Desc: 'Le « cerveau » en orbite pour garantir la viabilité économique des constellations à grande échelle.',
      stat2Title: 'PÉRENNITÉ',
      stat2Sub: 'Mission étendue',
      stat2Desc: 'Une gestion autonome des ressources pour maximiser le cycle de vie de chaque satellite.',
      stat3Title: 'SOUVERAINETÉ',
      stat3Sub: 'Indépendance Tech',
      stat3Desc: 'Une architecture européenne et ITAR-free pour une liberté d\'action totale en orbite.',
    },
    modules: {
      label: 'Produit',
      discover: 'Découvrir',
    },
    achievements: {
      label: 'Recherches & Développements',
      discoverRD: 'Découvrir notre R&D',
      projects: [
        {
          title: 'Model Merging Techniques',
          description:
            "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles plus performants et efficaces avec des ressources limitées.",
          status: 'Publié',
          category: 'Publication scientifique',
        },
        {
          title: 'IA Embarquée pour Satellites',
          description:
            "Développement d'algorithmes d'intelligence artificielle optimisés pour fonctionner directement à bord des satellites avec contraintes énergétiques.",
          status: 'En cours',
          category: 'R&D Active',
        },
        {
          title: "Traitement d'Images par IA",
          description:
            "Analyse et traitement d'images satellites en temps réel grâce à des réseaux de neurones optimisés pour l'embarqué spatial.",
          status: 'En cours',
          category: 'R&D Active',
        },
        {
          title: 'Prise de Décision Autonome',
          description:
            'Systèmes de décision en temps réel pour la gestion autonome des opérations satellites sans intervention humaine.',
          status: 'En cours',
          category: 'R&D Active',
        },
      ],
    },
    contact: {
      title: 'Prêt à rendre vos satellites',
      titleItalic: 'véritablement autonomes ?',
      btn: 'Nous Contacter →',
    },
    trust: {
      title: 'Écosystème',
    },
    tech: {
      back: "Retour à l'accueil",
      productLabel: 'Produit',
      subtitle: 'Edge Computing Module',
      description:
        "Un ordinateur de bord compact conçu pour l'espace. L'OBC-1 embarque 40 TOPS de puissance IA directement en orbite, réduisant la latence de traitement et les besoins en bande passante descendante.",
      specs: [
        { label: 'AI Performance', value: '40 TOPS' },
        { label: 'Processeur', value: 'NVIDIA Jetson Orin Nano 8GB' },
        { label: 'Format', value: '0.5U CubeSat' },
        { label: 'Alimentation', value: '6 – 16V DC' },
        { label: 'Thermique', value: '-30°C à +60°C' },
        { label: 'Origine', value: 'Made in France' },
      ],
      hardwareLabel: 'Hardware',
      hardwareTitle: "Conçu pour l'espace.\nIntégré en 0.5U.",
      hardwareDesc:
        "Boîtier aluminium usiné CNC, anodisé noir. Gestion thermique entièrement passive via un spreader en cuivre — aucun ventilateur, aucune pièce mobile. Connecteurs Harwin Gecko à héritage spatial.",
      hardwareFeatures: [
        'Carte porteuse 4 couches FR-4, 90 × 96 mm',
        'Stockage M.2 NVMe PCIe Gen3 x4',
        'Interfaces : UART, I²C, CAN bus, USB-C',
        'Alimentation 6 – 16V DC (bus satellite)',
      ],
      softwareLabel: 'Software',
      softwareTitle: 'Une architecture IA adaptée à chaque mission',
      softwareDesc:
        "Notre stack logiciel embarqué se configure pour différents cas d'usage — observation terrestre, évitement de collision, gestion de constellation. Le POC ci-dessous illustre nos capacités de traitement en temps réel.",
      capabilitiesLabel: 'En chiffres',
      capabilitiesTitle: "Ce que permet l'OBC-1",
      capabilities: [
        { value: '40 TOPS', label: "Puissance IA embarquée" },
        { value: '< 100ms', label: "Réaction évitement de collision" },
        { value: '30 img/s', label: "Traitement d'images embarqué" },
        { value: '65–75%', label: 'Bande passante descendante économisée' },
        { value: '6+', label: 'Tâches autonomes simultanées' },
        { value: '−30 / +60°C', label: "Plage de température de fonctionnement" },
      ],
      ctaText: 'Intéressé par une intégration ou un partenariat ?',
      ctaBtn: 'Nous contacter',
    },
    research: {
      back: "Retour à l'accueil",
      label: 'Nos Projets',
      subtitle:
        'Découvrez nos projets de recherche et développement en intelligence artificielle embarquée pour le spatial.',
      scientificContributions: 'Apports scientifiques',
      operationalImpact: 'Impact opérationnel',
      objectives: 'Objectifs',
      projects: [
        {
          id: 1,
          title: 'Model Merging Techniques',
          shortDescription:
            "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles optimisés pour les applications spatiales.",
          fullDescription:
            "Notre recherche explore les méthodes avancées de fusion de modèles d'IA spécifiquement adaptées aux contraintes de l'environnement spatial. En fusionnant des modèles spécialisés, nous créons des solutions compactes et performantes capables de fonctionner autonomement en orbite.",
          status: 'Publié',
          category: 'Publication scientifique',
          date: 'Décembre 2024',
          team: 'Lilian RAGE, Youri LALAIN',
          objectives: [
            "Développer des techniques de fusion adaptées à l'embarqué spatial",
            'Créer des modèles compacts sans perte de performance',
            'Valider les résultats avec des benchmarks en environnement spatial',
          ],
          results: [
            '2 modèles classés Top 1 sur Hugging Face',
            "Réduction de 40% de la taille des modèles",
            "Publication d'un papier scientifique",
          ],
          publication: {
            venue: 'IEEE • International Conference on Space AI 2025',
            title:
              "Adaptive Layer-Wise Spherical Interpolation : Optimisation du Model Merging pour l'Inférence Spatiale",
            abstract:
              "Cette étude introduit le protocole 'Layer-Adaptive SLERP', une méthodologie de fusion de modèles (Merging) conçue pour pallier les limitations matérielles des processeurs embarqués. En optimisant dynamiquement les trajectoires d'interpolation entre les poids synaptiques, nous parvenons à fusionner des capacités cognitives distinctes sans le coût computationnel d'un nouvel entraînement, garantissant une stabilité de réponse accrue en environnement radiatif.",
            contributions: [
              "Algorithme d'interpolation géométrique préservant la topologie des poids",
              'Système de pondération dynamique par couche (Dynamic Layer Weighting)',
              'Benchmark comparatif sur 6 architectures (LLM & Vision Transformers)',
            ],
            impact:
              "La réduction de 40% de l'empreinte mémoire permet le déploiement de modèles 7B et 2B performants sur des plateformes edge (FPGA/SoC), accélérant l'autonomie décisionnelle des constellations.",
          },
          links: [
            { label: 'Lire le papier', url: '/Papier_scientifique_Merging.pdf', type: 'pdf' },
            { label: 'Hugging Face', url: 'https://huggingface.co', type: 'external' },
          ],
          image: '/images/Image_l0l90bl0l90bl0l9.png',
        },
        {
          id: 2,
          title: 'IA Embarquée pour Satellites',
          shortDescription: "Développement d'algorithmes d'IA optimisés pour l'environnement spatial.",
          fullDescription:
            "Ce projet vise à créer des algorithmes d'intelligence artificielle capables de fonctionner dans les contraintes extrêmes de l'espace : radiation, température, puissance limitée. Notre approche permet aux satellites d'exécuter des tâches complexes de manière autonome sans communication constante avec la Terre.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2024 - 2025',
          team: 'Équipe R&D ALYON',
          objectives: [
            'Adapter les modèles IA aux contraintes spatiales',
            'Optimiser la consommation énergétique',
            'Garantir la résilience aux radiations',
            'Permettre la prise de décision autonome en orbite',
          ],
          results: [
            'Prototypes testés en simulation',
            "Réduction de 60% de la consommation énergétique",
            'Tests en environnement spatial prévus',
          ],
          links: [],
          image: '/images/Image_8tdmm78tdmm78tdm.png',
        },
        {
          id: 3,
          title: "Traitement d'Images par IA",
          shortDescription: "Analyse et traitement d'images satellites en temps réel par IA embarquée.",
          fullDescription:
            "Ce projet vise à développer des algorithmes de computer vision optimisés pour l'analyse d'images satellites directement à bord. Notre approche utilise des réseaux de neurones convolutifs compacts capables de détecter des objets, analyser des terrains et identifier des anomalies en temps réel, sans nécessiter de transmission des images au sol.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2024 - 2025',
          team: 'Équipe Computer Vision ALYON',
          objectives: [
            "Développer des CNN ultra-légers pour l'embarqué spatial",
            "Détecter et classifier des objets depuis l'orbite",
            'Analyser les changements terrestres en temps réel',
            'Optimiser pour fonctionner avec contraintes énergétiques',
          ],
          results: [
            "Modèles de détection avec 95% de précision",
            "Traitement de 30 images/seconde embarqué",
            "Réduction de 80% du volume de données transmises",
          ],
          links: [],
          image: '/images/Image_pxmkv3pxmkv3pxmk.png',
        },
        {
          id: 4,
          title: 'Prise de Décision Autonome',
          shortDescription: 'Systèmes de décision en temps réel pour opérations satellites autonomes.',
          fullDescription:
            "Ce projet développe des systèmes d'IA capables de prendre des décisions critiques en temps réel sans intervention humaine. L'objectif est de permettre aux satellites de gérer automatiquement les situations d'urgence, d'optimiser les opérations et d'éviter les collisions de manière autonome.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2024 - 2025',
          team: 'Équipe Systèmes Autonomes',
          objectives: [
            'Développer des algorithmes de décision en temps réel',
            "Gérer l'évitement de collisions automatique",
            'Optimiser les trajectoires et manœuvres',
            'Assurer la sécurité opérationnelle autonome',
          ],
          results: [
            'Système de décision multi-critères opérationnel',
            'Simulations validées avec 99.9% de fiabilité',
            "Temps de réaction inférieur à 100ms",
          ],
          links: [],
          image: '/images/Image_gt28pxgt28pxgt28.png',
        },
      ],
    },
    meta: {
      description:
        "Alyon AI développe la prochaine génération de satellites LEO autonomes pour l'Europe. Plateforme logicielle modulaire pour des constellations véritablement autonomes.",
    },
    company: {
      description:
        "Alyon AI développe la prochaine génération de satellites autonomes pour l'Europe, en réponse à la crise OPEX que traverse l'industrie spatiale.",
    },
    stats: [
      { value: '45-60%', label: 'Réduction OPEX' },
      { value: '40-60%', label: 'Extension durée de vie' },
      { value: '90%+', label: 'Taux de succès captures' },
      { value: '65-75%', label: 'Réduction bande passante' },
    ],
  },
};
