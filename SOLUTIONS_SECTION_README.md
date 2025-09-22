# Section Solutions IA - Animation Sticky avec Scroll

## 📋 Fonctionnalités

Votre nouvelle section "Nos solutions IA" utilise **GSAP ScrollTrigger** pour créer une expérience immersive avec scroll contrôlé :

### ✨ Comportement
1. **Scroll jusqu'à la section** → La section devient sticky (se fixe à l'écran)
2. **Titre permanent** → Reste affiché en haut pendant toute l'animation
3. **Première vidéo** → Se lance automatiquement au début
4. **Premiers cadrans** → Affichés de part et d'autre de la vidéo
5. **Scroll continu** → Change automatiquement les cadrans et vidéos (3 étapes au total)

### 🎯 Animation
- **Position sticky** : La section reste fixe pendant 3 hauteurs d'écran
- **Transitions fluides** : Changement de contenu basé sur le pourcentage de scroll
- **Indicateur visuel** : Points en bas pour montrer l'étape actuelle

## 🔧 Configuration

### Modifier les vidéos
Dans `SolutionsSection.jsx`, ligne 17-29 :

```jsx
const stepsData = [
  {
    video: "/47339-451297052_detected.mp4",     // ← Remplacez par votre première vidéo
    leftCard: data.solutions[0],
    rightCard: data.solutions[0],
  },
  {
    video: "/votre-deuxieme-video.mp4",         // ← Ajoutez votre deuxième vidéo
    leftCard: data.solutions[1],
    rightCard: data.solutions[1],
  },
  {
    video: "/votre-troisieme-video.mp4",        // ← Ajoutez votre troisième vidéo
    leftCard: data.solutions[2],
    rightCard: data.solutions[2],
  }
];
```

### Ajouter une étape
Pour ajouter une 4ème étape :

1. **Ajoutez l'objet dans `stepsData`** :
```jsx
{
  video: "/votre-quatrieme-video.mp4",
  leftCard: data.solutions[3],  // Assurez-vous d'avoir une 4ème solution
  rightCard: data.solutions[3],
}
```

2. **Ajustez le nombre d'étapes dans l'useEffect**, ligne 35 :
```jsx
const triggerHeight = window.innerHeight * 4; // 4 au lieu de 3
```

3. **Modifiez le calcul d'étape**, ligne 44 :
```jsx
const step = Math.floor(progress * 4); // 4 au lieu de 3
setCurrentStep(Math.min(step, 3));     // 3 au lieu de 2
```

### Personnaliser les cartes
Les cartes utilisent les données de `src/data/siteData.js`. Pour modifier le contenu :

```javascript
solutions: [
  {
    id: "maintenance-predictive",
    icon: "predictive",
    title: "Votre nouveau titre",
    description: "Votre nouvelle description",
    benefits: ["Avantage 1", "Avantage 2", "Avantage 3"]
  },
  // ... autres solutions
]
```

## 🎨 Customisation CSS

### Durée des transitions
Dans `SolutionsSection.css`, ligne 73 :
```css
.solution-card,
.benefits-card {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); /* ← Modifiez la durée */
}
```

### Hauteur de la section
Dans `SolutionsSection.jsx`, ligne 35 :
```jsx
const triggerHeight = window.innerHeight * 3; // ← Modifiez le multiplicateur
```

### Couleurs des cartes
Dans `SolutionsSection.css` :
- **Cartes solutions (gauche)** : lignes 77-85
- **Cartes avantages (droite)** : lignes 135-145

## 📱 Responsive

La section s'adapte automatiquement :
- **Desktop** : Layout 3 colonnes (gauche | centre | droite)
- **Tablette** : Layout centré avec cartes empilées
- **Mobile** : Cartes et vidéo centrées verticalement

## 🚀 Performance

### Optimisations incluses
- **Lazy loading** des animations
- **RequestAnimationFrame** pour la fluidité
- **Cleanup automatique** des ScrollTriggers
- **Transitions CSS** au lieu d'animations JS lourdes

### Recommandations
- Utilisez des vidéos optimisées (format MP4, H.264)
- Limitez la taille des vidéos (< 10MB recommandé)
- Testez sur différents appareils

## 🛠️ Dépannage

### La section ne devient pas sticky
- Vérifiez que GSAP est bien installé : `npm install gsap`
- Assurez-vous que les données `data.solutions` existent

### Les vidéos ne changent pas
- Vérifiez les chemins des vidéos dans `stepsData`
- Assurez-vous que les fichiers sont dans le dossier `public/`

### Animations saccadées
- Réduisez la durée des transitions CSS
- Optimisez les vidéos (résolution et compression)

## 📝 Notes techniques

- **GSAP ScrollTrigger** : Gère le sticky et la détection de scroll
- **React State** : Contrôle l'étape actuelle
- **CSS Transitions** : Anime les changements de cartes
- **Video key prop** : Force le rechargement des vidéos

## 🔮 Prochaines améliorations possibles

1. **Animation des cartes** : Ajouter des effets de fade/slide entre les cartes
2. **Preload vidéos** : Charger les vidéos suivantes en arrière-plan
3. **Contrôles manuels** : Permettre à l'utilisateur de naviguer manuellement
4. **Indicateurs interactifs** : Rendre les points cliquables
5. **Parallax** : Ajouter des effets de profondeur
