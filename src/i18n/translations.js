export const translations = {
  en: {
    hero: {
      line1: 'Autonomous Satellites. ',
      line2: 'Endless Horizons.',
    },
    productShowcase: {
      label: 'Our Technology',
      title: 'Detect. Decide. Alert.',
      subtitle: 'Autonomous onboard monitoring, without waiting for ground contact',
      description:
        'Our embedded platform gives every satellite the ability to monitor its own health, detect an anomaly on board, and relay the alert to the other satellites in its constellation, so the ground is informed within minutes instead of hours later.',
      cta: 'Discover the technology',
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
        'Alyon AI builds embedded intelligence that lets satellites monitor their own health, detect anomalies on board, and alert the ground within minutes, even far from any ground station.',
    },
    vision: {
      label: 'Our Vision',
      p1: "A satellite in low orbit is only reachable for 10 to 20 minutes out of every 90-minute orbit. The rest of the time, it's on its own, and a problem that starts between two ground passes can quietly get worse for hours before anyone notices.",
      p2: 'That blind spot has a real cost: an interrupted service, impacted customers, and in the worst cases a satellite that is lost for good, sometimes <strong class="text-black font-semibold">tens of millions of euros</strong> gone overnight.',
      p3: 'At <strong class="text-black font-semibold">ALYON AI</strong>, we give every satellite the intelligence to monitor its own health, detect an anomaly on board, decide how to react, and alert the ground within minutes, relaying the information through the other satellites in its constellation, without waiting for its own ground pass.',
      p4: 'Our ambition: a <strong class="text-black font-semibold">sovereign, European platform</strong>, accessible to any independent operator, so that no incident stays invisible for hours ever again.',
      stat1Title: 'DETECT',
      stat1Sub: 'Continuously, on board',
      stat1Desc: 'The satellite monitors its own health, even out of reach of the ground.',
      stat2Title: 'DECIDE',
      stat2Sub: 'Autonomously',
      stat2Desc: 'It assesses how serious the anomaly is and acts without waiting for instructions from Earth.',
      stat3Title: 'ALERT',
      stat3Sub: 'Through the constellation',
      stat3Desc: 'The alert is relayed by neighboring satellites and reaches the ground within minutes.',
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
            'Research on AI model merging techniques to create compact, high-performing models for constrained embedded hardware.',
          status: 'Published',
          category: 'Scientific Publication',
        },
        {
          title: 'Onboard Anomaly Detection',
          description:
            'Embedded models that watch several satellite parameters at once, to catch a drift before it becomes critical.',
          status: 'In Progress',
          category: 'Active R&D',
        },
        {
          title: 'Radiation-Resilient Embedded AI',
          description:
            'Adapting how the onboard AI behaves based on the radiative environment, to keep its decisions reliable in orbit.',
          status: 'In Progress',
          category: 'Active R&D',
        },
        {
          title: 'Autonomous Decisions & Inter-Satellite Relay',
          description:
            'Once an anomaly is detected, the satellite decides how to react and relays the alert to its neighbors in real time.',
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
      productLabel: 'Technology',
      title: 'Detect. Decide. Alert.',
      subtitle: 'Embedded health monitoring & alert relay',
      description:
        'Our platform continuously watches the satellite\'s health, detects anomalies on board, and decides on the right response. Once confirmed, the alert is relayed to neighboring satellites and on to the ground, without waiting for the next ground pass.',
      tags: ['Onboard detection', 'Alert within minutes', 'Designed in France'],
      specs: [
        { label: 'Communication layer', value: 'Relays alerts to the neighboring satellites in the constellation.' },
        { label: 'Intelligence layer', value: 'Detects an anomaly, assesses how serious it is, and decides on a response.' },
        { label: 'Compute layer', value: 'Runs the embedded AI models under tight power and processing constraints.' },
      ],
      hardwareLabel: 'Hardware',
      hardwareTitle: 'A compute module\ncurrently in design.',
      hardwareDesc:
        'The onboard compute module is what runs our intelligence layer in orbit. Its 3D design is finalized; moving to a physical prototype and qualifying it against aerospace constraints are the next steps on our roadmap.',
      hardwareFeatures: [
        '3D design finalized, physical prototype in preparation',
        "Built to fit within a satellite's very limited power budget",
        'Designed to withstand radiation and the extreme thermal cycling of low orbit',
        'Developed with French industrial partners',
      ],
      softwareLabel: 'Software',
      softwareTitle: 'A simple loop: detect, decide, alert',
      softwareDesc:
        "The satellite continuously watches its telemetry for the early signs of a drift, before it becomes critical. Once an anomaly is confirmed, the alert is sent straight to the neighboring satellites, which relay it to the ground without waiting for their own pass.",
      steps: [
        { title: 'Detect', desc: 'The satellite monitors its own health on board, continuously.' },
        { title: 'Act', desc: 'It decides and acts autonomously, then relays the alert to the neighboring satellite.' },
        { title: 'Alert', desc: 'The ground receives the information within minutes.' },
      ],
      capabilitiesLabel: 'By the numbers',
      capabilitiesTitle: 'What our platform changes',
      capabilities: [
        { value: '10–20 min / 90', label: 'Typical ground contact window, per orbit' },
        { value: '< 10 min', label: 'From anomaly detection to ground alert' },
        { value: '99.98%', label: 'Alert delivery rate across the constellation' },
      ],
      ctaText: 'Interested in integration or partnership?',
      ctaBtn: 'Contact Us',
    },
    research: {
      back: 'Back to home',
      label: 'Our Projects',
      subtitle:
        'Discover our research and development projects on embedded anomaly detection for satellites.',
      scientificContributions: 'Scientific Contributions',
      operationalImpact: 'Operational Impact',
      objectives: 'Objectives',
      projects: [
        {
          id: 1,
          title: 'Model Merging Techniques',
          shortDescription:
            'Research on AI model merging techniques to create compact, high-performing models for constrained embedded hardware.',
          fullDescription:
            'Our research explores advanced AI model merging methods specifically adapted to the constraints of the space environment. By merging specialized models, we create compact and high-performance solutions capable of operating autonomously in orbit.',
          status: 'Published',
          category: 'Scientific Publication',
          date: '2025',
          team: 'Lilian RAGE, Youri LALAIN',
          objectives: [
            'Develop merging techniques adapted to space embedded systems',
            'Create compact models without performance loss',
            'Validate results with benchmarks in space environment',
          ],
          results: [
            'About fifty open-source models published on Hugging Face, including one ranked #1 worldwide on the LLM Leaderboard',
            '40% reduction in model size',
            'Publication of a scientific paper',
          ],
          publication: {
            venue: 'IEEE BigData 2025',
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
          title: 'Onboard Anomaly Detection',
          shortDescription: 'Embedded models that watch several satellite parameters at once, to catch a drift before it becomes critical.',
          fullDescription:
            'Conventional monitoring relies on fixed thresholds, which miss progressive anomalies. We are developing embedded AI models able to continuously watch several telemetry parameters and identify abnormal behavior before it becomes critical, while running directly on board under very tight power and compute constraints.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2025',
          team: 'ALYON R&D Team',
          objectives: [
            'Monitor several telemetry parameters simultaneously',
            'Detect progressive drifts, not just threshold breaches',
            'Run models under tight power and compute constraints',
            'Validate models on real satellite data',
          ],
          results: [
            'A complete orbital simulation environment, validated under representative conditions',
            'First prediction models trained and validated on NASA data',
            'An embedded processing stack running on constrained hardware',
          ],
          links: [],
          image: '/images/Image_8tdmm78tdmm78tdm.png',
        },
        {
          id: 3,
          title: 'Radiation-Resilient Embedded AI',
          shortDescription: 'Adapting how the onboard AI behaves based on the radiative environment, to keep its decisions reliable in orbit.',
          fullDescription:
            'In orbit, radiation can silently degrade hardware and skew the decisions of an embedded system. We are exploring ways to sense the radiative environment on board in real time and adapt how the AI behaves accordingly, so its decisions stay reliable without ground intervention.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2025',
          team: 'ALYON R&D Team',
          objectives: [
            'Sense the onboard radiative environment in real time',
            "Adapt the AI's behavior to the detected radiation level",
            'Guarantee reliable decisions without ground intervention',
            'Build on recent scientific work in the field',
          ],
          results: [
            'Approach supported by recent scientific work (ScienceDirect 2025, ACM 2025)',
            'No integrated solution of this kind currently deployed on the market',
            'A priority R&D axis for the next phase of the program',
          ],
          links: [],
          image: '/images/Image_pxmkv3pxmkv3pxmk.png',
        },
        {
          id: 4,
          title: 'Autonomous Decisions & Inter-Satellite Relay',
          shortDescription: 'Once an anomaly is detected, the satellite decides how to react and relays the alert to its neighbors in real time.',
          fullDescription:
            'We are building the decision layer that lets a satellite assess how serious an anomaly is, decide on an appropriate response (isolating a faulty component, adjusting power consumption), and relay the alert to the other satellites in its constellation in real time, so the information reaches the ground within minutes instead of at the next ground pass.',
          status: 'In Progress',
          category: 'Active R&D',
          date: '2025',
          team: 'ALYON R&D Team',
          objectives: [
            'Assess how serious an anomaly is and prioritize the response',
            'Decide on an autonomous reaction without ground instructions',
            'Relay the alert to neighboring satellites in real time',
            'Cut the detection-to-alert delay from hours to minutes',
          ],
          results: [
            'A three-layer architecture defined: communication, intelligence, compute',
            'Key aerospace constraints identified (power, radiation, memory)',
            'First work on inter-satellite routing under way',
          ],
          links: [],
          image: '/images/Image_gt28pxgt28pxgt28.png',
        },
      ],
    },
    meta: {
      description:
        'Alyon AI builds embedded intelligence that lets satellites monitor their own health, detect anomalies on board, and alert the ground within minutes, without waiting for a ground pass.',
    },
    company: {
      description:
        'Alyon AI builds embedded intelligence that lets satellites monitor their own health, detect anomalies on board, and alert the ground within minutes, even far from any ground station.',
    },
    stats: [
      { value: '10–20 min / 90', label: 'Ground contact window, per orbit' },
      { value: '< 10 min', label: 'From detection to ground alert' },
      { value: '99.98%', label: 'Alert delivery rate' },
      { value: '23%', label: 'Of LEO satellites face a significant in-orbit issue' },
    ],
  },

  fr: {
    hero: {
      line1: 'Satellites autonomes. ',
      line2: 'La nouvelle ère spatiale.',
    },
    productShowcase: {
      label: 'Notre Technologie',
      title: 'Détecter. Décider. Alerter.',
      subtitle: "Une surveillance autonome à bord, sans attendre un passage sol",
      description:
        "Notre plateforme embarquée donne à chaque satellite la capacité de surveiller son propre état de santé, de détecter une anomalie à bord et de relayer l'alerte aux autres satellites de sa constellation, pour que le sol soit informé en quelques minutes plutôt qu'après plusieurs heures.",
      cta: 'Découvrir la technologie',
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
        "Alyon AI développe une intelligence embarquée qui permet aux satellites de surveiller leur propre état de santé, détecter les anomalies à bord et alerter le sol en quelques minutes, même loin de toute station sol.",
    },
    vision: {
      label: 'Notre Vision',
      p1: "Un satellite en orbite basse n'est joignable que 10 à 20 minutes par orbite de 90 minutes. Le reste du temps, il est seul, et un incident qui démarre entre deux passages peut s'aggraver pendant des heures sans que personne ne s'en rende compte.",
      p2: 'Cette absence de surveillance a un coût bien réel : un service interrompu, des clients impactés, et dans les pires cas un satellite perdu, parfois <strong class="text-black font-semibold">plusieurs dizaines de millions d\'euros</strong> envolés du jour au lendemain.',
      p3: 'Chez <strong class="text-black font-semibold">ALYON AI</strong>, nous donnons à chaque satellite l\'intelligence pour surveiller son propre état de santé, détecter une anomalie à bord, décider de la réaction adaptée et alerter le sol en quelques minutes, en relayant l\'information via les autres satellites de sa constellation, sans attendre son propre passage.',
      p4: 'Notre ambition : une <strong class="text-black font-semibold">plateforme souveraine et européenne</strong>, accessible à tout opérateur indépendant, pour que plus aucun incident ne reste invisible pendant des heures.',
      stat1Title: 'DÉTECTER',
      stat1Sub: 'En continu, à bord',
      stat1Desc: 'Le satellite surveille lui-même son état de santé, même hors de portée du sol.',
      stat2Title: 'DÉCIDER',
      stat2Sub: 'De façon autonome',
      stat2Desc: "Il évalue la gravité de l'anomalie et agit sans attendre d'instruction depuis la Terre.",
      stat3Title: 'ALERTER',
      stat3Sub: 'Via la constellation',
      stat3Desc: 'L\'alerte est relayée par les satellites voisins et atteint le sol en quelques minutes.',
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
            "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles compacts et performants pour du matériel embarqué contraint.",
          status: 'Publié',
          category: 'Publication scientifique',
        },
        {
          title: "Détection embarquée d'anomalies",
          description:
            "Des modèles embarqués qui surveillent plusieurs paramètres du satellite simultanément, pour repérer une dérive avant qu'elle ne devienne critique.",
          status: 'En cours',
          category: 'R&D Active',
        },
        {
          title: "Fiabilisation de l'IA face aux radiations",
          description:
            "Adapter le fonctionnement de l'IA embarquée à l'environnement radiatif, pour que les décisions du satellite restent fiables en orbite.",
          status: 'En cours',
          category: 'R&D Active',
        },
        {
          title: 'Décision autonome & relais inter-satellite',
          description:
            "Une fois une anomalie détectée, le satellite décide de la réaction à adopter et relaie l'alerte à ses voisins en temps réel.",
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
      productLabel: 'Technologie',
      title: 'Détecter. Décider. Alerter.',
      subtitle: "Surveillance embarquée & relais d'alerte",
      description:
        "Notre plateforme surveille en continu l'état de santé du satellite, détecte les anomalies à bord et décide de la réaction adaptée. Une fois confirmée, l'alerte est relayée aux satellites voisins puis jusqu'au sol, sans attendre le prochain passage.",
      tags: ['Détection embarquée', 'Alerte en quelques minutes', 'Conçu en France'],
      specs: [
        { label: 'Couche Communication', value: 'Relaie les alertes vers les satellites voisins de la constellation.' },
        { label: 'Couche Intelligence', value: "Détecte une anomalie, évalue sa gravité et décide de la réaction à adopter." },
        { label: 'Couche Calcul', value: "Fait tourner les modèles d'IA embarqués sous fortes contraintes d'énergie et de calcul." },
      ],
      hardwareLabel: 'Hardware',
      hardwareTitle: "Un boîtier de calcul\nen cours de conception.",
      hardwareDesc:
        "Le module de calcul embarqué fait tourner notre couche d'intelligence en orbite. Sa conception 3D est finalisée ; le passage au prototype physique et la qualification aux contraintes aérospatiales sont les prochaines étapes de notre feuille de route.",
      hardwareFeatures: [
        'Conception 3D finalisée, prototype physique en préparation',
        "Pensé pour tenir dans l'enveloppe énergétique très réduite d'un satellite",
        'Conçu pour résister aux radiations et aux cycles thermiques extrêmes de l\'orbite basse',
        'Développé avec des partenaires industriels français',
      ],
      softwareLabel: 'Software',
      softwareTitle: 'Un cycle simple : détecter, décider, alerter',
      softwareDesc:
        "Le satellite surveille en continu sa télémétrie pour repérer les premiers signes d'une dérive, avant qu'elle ne devienne critique. Une fois l'anomalie confirmée, l'alerte part directement vers les satellites voisins, qui la relaient au sol sans attendre leur propre passage.",
      steps: [
        { title: 'Détecter', desc: 'Le satellite surveille son propre état de santé à bord, en continu.' },
        { title: 'Agir', desc: "Il décide et agit de manière autonome, et relaie l'alerte au satellite voisin." },
        { title: 'Alerter', desc: 'Le sol reçoit l\'information en quelques minutes.' },
      ],
      capabilitiesLabel: 'En chiffres',
      capabilitiesTitle: 'Ce que change notre plateforme',
      capabilities: [
        { value: '10–20 min / 90', label: 'Fenêtre de contact sol, par orbite' },
        { value: '< 10 min', label: "Entre la détection d'une anomalie et l'alerte au sol" },
        { value: '99,98%', label: 'Taux de livraison des alertes sur la constellation' },
      ],
      ctaText: 'Intéressé par une intégration ou un partenariat ?',
      ctaBtn: 'Nous contacter',
    },
    research: {
      back: "Retour à l'accueil",
      label: 'Nos Projets',
      subtitle:
        'Découvrez nos projets de recherche et développement sur la détection embarquée d\'anomalies pour satellites.',
      scientificContributions: 'Apports scientifiques',
      operationalImpact: 'Impact opérationnel',
      objectives: 'Objectifs',
      projects: [
        {
          id: 1,
          title: 'Model Merging Techniques',
          shortDescription:
            "Recherche sur les techniques de fusion de modèles d'IA pour créer des modèles compacts et performants pour du matériel embarqué contraint.",
          fullDescription:
            "Notre recherche explore les méthodes avancées de fusion de modèles d'IA spécifiquement adaptées aux contraintes de l'environnement spatial. En fusionnant des modèles spécialisés, nous créons des solutions compactes et performantes capables de fonctionner autonomement en orbite.",
          status: 'Publié',
          category: 'Publication scientifique',
          date: '2025',
          team: 'Lilian RAGE, Youri LALAIN',
          objectives: [
            "Développer des techniques de fusion adaptées à l'embarqué spatial",
            'Créer des modèles compacts sans perte de performance',
            'Valider les résultats avec des benchmarks en environnement spatial',
          ],
          results: [
            "Une cinquantaine de modèles open source publiés sur Hugging Face, dont un classé 1er mondial au LLM Leaderboard",
            "Réduction de 40% de la taille des modèles",
            "Publication d'un papier scientifique",
          ],
          publication: {
            venue: 'IEEE BigData 2025',
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
          title: "Détection embarquée d'anomalies",
          shortDescription: "Des modèles embarqués qui surveillent plusieurs paramètres du satellite simultanément, pour repérer une dérive avant qu'elle ne devienne critique.",
          fullDescription:
            "Les systèmes de surveillance classiques reposent sur des seuils fixes, qui ne détectent pas les anomalies progressives. Nous développons des modèles d'IA embarqués capables de surveiller plusieurs paramètres de télémétrie en continu et d'identifier un comportement anormal avant qu'il ne devienne critique, en fonctionnant directement à bord avec une puissance de calcul et une énergie très limitées.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2025',
          team: 'Équipe R&D ALYON',
          objectives: [
            'Surveiller plusieurs paramètres de télémétrie simultanément',
            'Détecter les dérives progressives, pas seulement les dépassements de seuil',
            "Faire fonctionner les modèles sous fortes contraintes d'énergie et de calcul",
            'Valider les modèles sur des données satellites réelles',
          ],
          results: [
            'Un environnement de simulation orbitale complet, validé en conditions représentatives',
            'Premiers modèles de prédiction entraînés et validés sur données NASA',
            'Une stack de traitement embarqué fonctionnelle sur hardware contraint',
          ],
          links: [],
          image: '/images/Image_8tdmm78tdmm78tdm.png',
        },
        {
          id: 3,
          title: "Fiabilisation de l'IA face aux radiations",
          shortDescription: "Adapter le fonctionnement de l'IA embarquée à l'environnement radiatif, pour que les décisions du satellite restent fiables en orbite.",
          fullDescription:
            "En orbite, les radiations peuvent dégrader silencieusement le matériel et fausser les décisions d'un système embarqué. Nous explorons des méthodes pour capter en temps réel l'environnement radiatif à bord et adapter en conséquence le fonctionnement de l'IA, afin de garantir des décisions fiables sans intervention du sol.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2025',
          team: 'Équipe R&D ALYON',
          objectives: [
            "Capter l'environnement radiatif en temps réel à bord",
            "Adapter le comportement de l'IA en fonction du niveau de radiations détecté",
            'Garantir la fiabilité des décisions sans intervention sol',
            'S\'appuyer sur les travaux scientifiques récents du domaine',
          ],
          results: [
            'Approche validée par des travaux scientifiques récents (ScienceDirect 2025, ACM 2025)',
            'Aucune solution intégrée de ce type déployée à ce jour sur le marché',
            'Un axe de R&D prioritaire pour la suite du programme',
          ],
          links: [],
          image: '/images/Image_pxmkv3pxmkv3pxmk.png',
        },
        {
          id: 4,
          title: 'Décision autonome & relais inter-satellite',
          shortDescription: "Une fois une anomalie détectée, le satellite décide de la réaction à adopter et relaie l'alerte à ses voisins en temps réel.",
          fullDescription:
            "Nous développons la couche de décision qui permet à un satellite d'évaluer la gravité d'une anomalie, de décider d'une réaction adaptée (isoler un composant, ajuster sa consommation) et de transmettre l'alerte aux autres satellites de sa constellation en temps réel, pour que l'information atteigne le sol en quelques minutes plutôt qu'au prochain passage.",
          status: 'En cours',
          category: 'R&D Active',
          date: '2025',
          team: 'Équipe R&D ALYON',
          objectives: [
            "Évaluer la gravité d'une anomalie et prioriser la réponse",
            'Décider d\'une réaction autonome sans instruction du sol',
            'Relayer l\'alerte vers les satellites voisins en temps réel',
            'Réduire le délai de détection à l\'alerte de plusieurs heures à quelques minutes',
          ],
          results: [
            'Architecture en trois couches définie : communication, intelligence, calcul',
            'Définition des contraintes aérospatiales clés (énergie, radiations, mémoire)',
            'Premiers travaux de routage inter-satellite engagés',
          ],
          links: [],
          image: '/images/Image_gt28pxgt28pxgt28.png',
        },
      ],
    },
    meta: {
      description:
        "Alyon AI développe une intelligence embarquée qui permet aux satellites de surveiller leur propre état de santé, détecter les anomalies à bord et alerter le sol en quelques minutes, sans attendre un passage sol.",
    },
    company: {
      description:
        "Alyon AI développe une intelligence embarquée qui permet aux satellites de surveiller leur propre état de santé, détecter les anomalies à bord et alerter le sol en quelques minutes, même loin de toute station sol.",
    },
    stats: [
      { value: '10–20 min / 90', label: 'Fenêtre de contact sol, par orbite' },
      { value: '< 10 min', label: 'Entre la détection et l\'alerte au sol' },
      { value: '99,98%', label: 'Taux de livraison des alertes' },
      { value: '23%', label: 'Des satellites LEO rencontrent un incident significatif en orbite' },
    ],
  },
};
