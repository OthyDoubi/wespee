/**
 * =============================================================================
 * MAIN.JSX - Point d'entrée principal de l'application React
 * =============================================================================
 * 
 * Ce fichier est le tout premier fichier JavaScript exécuté par l'application.
 * Il a trois responsabilités principales :
 * 
 * 1. Importer les styles globaux (CSS)
 * 2. Initialiser le système de traduction multilingue (i18n)
 * 3. Monter le composant racine (App) dans le DOM HTML
 * 
 * Le fichier index.html contient un élément <div id="root"></div>
 * C'est dans ce div que React injecte toute l'application.
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// StrictMode : Un outil de développement React qui aide à détecter les problèmes
// Il n'affecte pas la production, mais affiche des avertissements en développement
import { StrictMode } from 'react'

// createRoot : La nouvelle API React 18+ pour monter l'application dans le DOM
// Elle remplace l'ancienne méthode ReactDOM.render()
import { createRoot } from 'react-dom/client'

// Styles globaux : Contient les polices personnalisées et les imports Tailwind CSS
import './index.css'

// Initialisation i18n : Ce simple import exécute la configuration des traductions
// Voir src/i18n/index.ts pour les détails de configuration
import "./i18n"

// App : Le composant racine qui contient toute la structure de l'application
import App from './App.jsx'

// -----------------------------------------------------------------------------
// MONTAGE DE L'APPLICATION
// -----------------------------------------------------------------------------

// 1. On récupère l'élément HTML avec l'id "root" (défini dans index.html)
// 2. On crée une racine React dans cet élément
// 3. On rend (affiche) le composant App à l'intérieur

createRoot(document.getElementById('root')).render(
  // StrictMode enveloppe l'app pour activer les vérifications supplémentaires
  // En production, ce composant n'a aucun effet sur le rendu
  <StrictMode>
    <App />
  </StrictMode>,
)
