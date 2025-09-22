# Alyon AI - Site Vitrine

Site vitrine moderne et épuré pour Alyon AI, spécialisé dans les solutions d'intelligence artificielle pour l'industrie.

## 🚀 Fonctionnalités

- **Design moderne** avec charte graphique noir/bleu et effets de fumée
- **Hero Section** attractive avec présentation des apports concrets
- **Section Solutions** détaillant les 3 offres principales :
  - 🔧 Maintenance prédictive
  - ✅ Contrôle qualité automatisé
  - 🤖 Assistance intelligente
- **Preuves sociales** avec témoignages clients et carrousel interactif
- **Formulaire de contact** complet avec validation
- **Optimisation SEO/GEO** complète
- **Design responsive** pour tous les appareils
- **Performance optimisée** avec lazy loading et optimisations

## 🎨 Charte Graphique

- **Typographie** : Aileron (avec fallback Inter)
- **Couleurs principales** :
  - Noir : `#000000`
  - Bleu principal : `#1a3d5c`
  - Bleu accent : `#3b82f6`
  - Effets de fumée : dégradés bleus avec opacité

## 📁 Structure du Projet

```
src/
├── assets/
│   ├── images/          # Images du site
│   └── fonts/           # Police Aileron
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Sections principales
│   └── ui/              # Composants réutilisables
├── data/
│   └── siteData.js      # Données du site
├── pages/
│   └── HomePage.jsx     # Page principale
├── styles/
│   ├── components/      # Styles des composants
│   ├── variables.css    # Variables CSS
│   ├── globals.css      # Styles globaux
│   └── placeholders.css # Styles pour le développement
├── hooks/               # Hooks React personnalisés
└── utils/               # Utilitaires
```

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
