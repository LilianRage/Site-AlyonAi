# 🛰️ ALYON AI - Satellites Autonomes et IA Embarquée

Site vitrine innovant pour **ALYON**, spécialisé dans les modules d'IA autonome pour constellations de satellites.

## 🚀 Fonctionnalités Principales

- **Hero Section époustouflante** avec animation de particules (gris, bleu, jaune)
- **Page Technologie interactive** - Cliquez sur les points du satellite pour découvrir 6 modules d'IA :
  - 🔋 **PowerMind** - Gestion énergétique intelligente
  - 🔗 **MeshMind** - Communications inter-satellites
  - 📡 **SmartFleet** - Monitoring de la santé de flotte
  - 👁️ **FusionEye** - Fusion de données multi-sources
  - 🛡️ **GuardianEye** - Évitement autonome de collisions
  - 🎯 **IntelliTask** - Planification autonome de mission
- **Page Recherche** - Publications, papiers scientifiques et partenariats
- **Navigation fluide** - Cliquez sur un module dans la nav pour accéder à sa page technologie
- **Formulaire de contact** complet avec validation
- **Design responsive** sur tous les appareils
- **SEO optimisé** avec sitemap et métadonnées satellites

## 🎨 Charte Graphique

- **Typographie** : Inter
- **Couleurs** :
  - Noir : `#000000`
  - Bleu principal : `#0066cc` / `#0099ff`
  - Jaune accent : `#FFD700`
  - Gris particules : `#888888` / `#999999` / `#aaaaaa`
  - Blanc : `#ffffff`

## 📁 Structure du Projet

```
src/
├── assets/
│   ├── Fond_fumee.png           # Image de fond fumée
│   └── fonts/                   # Polices
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Navigation + modules dropdown
│   │   └── Footer.jsx           # Pied de page
│   ├── sections/
│   │   ├── HeroSection.jsx      # Hero avec particules
│   │   ├── VisionSection.jsx    # Vision ALYON
│   │   ├── ModulesSection.jsx   # Aperçu des 6 modules
│   │   ├── AchievementsSection.jsx # R&D et publications
│   │   ├── ContactSection.jsx   # Formulaire de contact
│   │   ├── TrustBanner.jsx      # Partenaires
│   │   ├── ResearchSection.jsx  # Recherche détaillée
│   │   └── HeroGradientOverlay.jsx
│   └── ui/
│       ├── ParticlesBackground.jsx  # Fond animé (gris/bleu/jaune)
│       ├── WaveParticles.jsx
│       ├── Animations.jsx       # FadeIn, SlideIn...
│       ├── Button.jsx
│       ├── Badge.jsx
│       ├── Separator.jsx
│       └── Icon.jsx
├── data/
│   └── siteData.js              # Données (modules, partenaires, etc.)
├── pages/
│   ├── HomePage.jsx             # Page d'accueil
│   ├── TechnologyPage.jsx       # Interactif satellite (avec params URL)
│   └── ResearchPage.jsx         # Page R&D
├── styles/
│   ├── globals.css              # Styles globaux
│   ├── utilities.css            # Utilitaires Tailwind
│   ├── variables.css            # Variables CSS
│   └── components/              # CSS spécifiques
├── lib/
│   └── utils.js                 # Utilitaires (cn...)
├── App.jsx                      # Composant racine
├── AppRouter.jsx                # Routage (/, /technologie, /recherche)
└── index.js                     # Point d'entrée
```

## 🔧 Installation et Démarrage

```bash
# Installation des dépendances
npm install --legacy-peer-deps

# Mode développement
npm start

# Build pour production
npm run build
```

## 📦 Dépendances Principales

- **React 18** - Framework UI
- **React Router v6** - Navigation
- **Framer Motion** - Animations avancées
- **Tailwind CSS** - Styling
- **TSParticles** - Fond animé de particules
- **Lucide React** - Icônes
- **GSAP** - Animations avancées

## 🎯 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Accueil avec modules |
| `/technologie` | TechnologyPage | Satellite interactif (paramètre `?module=1-6`) |
| `/recherche` | ResearchPage | Recherche et publications |

## 💡 Points Clés

- **ParticlesBackground** affiche des particules **gris dominant** avec **quelques bleus et jaunes**
- **TechnologyPage** lit le paramètre URL `?module=X` et sélectionne automatiquement le module
- Navigation Header permet de cliquer sur un module pour accéder à sa page dédiée
- **Sitemap** et **robots.txt** configurés pour Google
- **Favicon** SVG pour meilleure visibilité

## 📄 Fichiers à Ignorer (Inutilisés)

Les fichiers suivants peuvent être supprimés :
- `src/components/ui/Card.jsx`
- `src/components/ui/NavigationMenu.jsx`
- `src/components/sections/PlatformSection.jsx`
- `src/components/sections/SocialProofSection.jsx`
- `src/components/sections/PressSection.jsx`
- Fichiers CSS associés non-importés
- `yarn.lock`

## 🚀 Déployement

- **Netlify** : Configuration via `netlify.toml`
- **Build** : `npm run build` génère le dossier `/build`
- **Optimisations** : Lazy loading, code splitting, image optimization

## 🛠️ Installation et Développement

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd uma-site-vitrine

# Installer les dépendances
npm install

# Lancer en développement
npm start
```

### Build de production
```bash
npm run build
```

## 📝 À Faire

### Images à ajouter
Remplacez les placeholders par vos vraies images :

1. **Logo Alyon AI** : `/public/images/alyon-ai-logo.png`
2. **Image Hero** : `/public/images/alyon-ai-hero.jpg`
3. **Favicon** : `/public/favicon.ico`
4. **Apple Touch Icon** : `/public/apple-touch-icon.png`
5. **Image Open Graph** : `/public/images/alyon-ai-og.jpg`

### Police Aileron
Ajoutez les fichiers de police dans `/src/assets/fonts/` :
- `Aileron-Regular.woff2`
- `Aileron-Bold.woff2`
- `Aileron-Light.woff2`

### Configuration
1. **URLs** : Mettez à jour les URLs dans `src/data/siteData.js`
2. **Contact** : Configurez les informations de contact
3. **Analytics** : Ajoutez Google Analytics si nécessaire

## 🔧 Technologies Utilisées

- **React 18** - Framework principal
- **React Router** - Navigation
- **React Helmet Async** - Gestion des meta tags SEO
- **Styled Components** - Styling (optionnel)
- **Lucide React** - Icônes

## 📈 Optimisations SEO

- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph et Twitter Cards
- ✅ Données structurées (Schema.org)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Flux RSS
- ✅ URLs canoniques
- ✅ Images optimisées avec alt tags
- ✅ Performance (lazy loading, compression)
- ✅ Accessibilité (ARIA labels, contrastes)

## 🌐 Déploiement

Le site est configuré pour être déployé sur Netlify avec :
- Redirections automatiques
- Compression gzip
- Cache optimisé
- HTTPS automatique

Fichier `netlify.toml` inclus pour la configuration.

## 📱 Responsive Design

- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** :
  - Mobile : < 480px
  - Tablet : 480px - 768px
  - Desktop : > 768px
- **Navigation mobile** avec menu hamburger
- **Images adaptatives** avec srcset
- **Touch-friendly** : boutons et liens optimisés

## 🎯 Performance

- **Core Web Vitals** optimisés
- **Lazy loading** pour les images
- **Code splitting** automatique avec React
- **Préchargement** des ressources critiques
- **Compression** des assets
- **Cache** optimisé

## 🔒 Sécurité

- **Content Security Policy** configurée
- **HTTPS** requis
- **Headers de sécurité** optimisés
- **Validation** côté client et serveur
- **Protection CSRF** pour les formulaires

## 📞 Support

Pour toute question ou modification, contactez l'équipe de développement.

---

© 2024 Alyon AI. Tous droits réservés.
