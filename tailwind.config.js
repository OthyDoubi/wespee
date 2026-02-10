// =============================================================================
// TAILWIND.CONFIG.JS - Configuration de Tailwind CSS
// =============================================================================
//
// Ce fichier configure Tailwind CSS pour le projet Wespee.
//
// CONTENT: Fichiers a scanner pour generer les classes CSS
// - ./index.html: Le fichier HTML principal
// - ./src/**/*.{js,ts,jsx,tsx}: Tous les fichiers JS/TS dans src/
//
// THEME.EXTEND: Extensions du theme
// - fontFamily.athletics: Ajoute la classe font-athletics
//
// POUR AJOUTER DES COULEURS PERSONNALISEES:
// Decommentez le bloc "colors" et ajoutez vos couleurs
// Exemple: 'wespee-green': '#06D432'
// Usage: bg-wespee-green, text-wespee-green, border-wespee-green
//
// BREAKPOINTS PAR DEFAUT DE TAILWIND:
// - sm: 640px
// - md: 768px
// - lg: 1024px
// - xl: 1280px
// - 2xl: 1536px
// =============================================================================

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        athletics: ["Athletics", "ui-sans-serif", "system-ui"],
      },
      colors: {
        'wespee-white': '#FEFFFB',
      },
    },
  },
  plugins: [],
};
