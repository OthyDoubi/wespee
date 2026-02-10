/**
 * =============================================================================
 * APP.JSX - Composant racine de l'application
 * =============================================================================
 * 
 * Ce fichier est le coeur de l'application. Il définit :
 * 
 * 1. Le ROUTING : Quelle page afficher selon l'URL
 *    - "/" affiche la page d'accueil (HomePage)
 *    - "/telechargement" affiche la page de téléchargement
 * 
 * 2. Le LAYOUT : La structure commune à toutes les pages
 *    - Header (Navbar) en haut de chaque page
 *    - Contenu de la page au milieu
 *    - Footer en bas de chaque page
 * 
 * 3. Les ANIMATIONS : Initialisation de la librairie AOS (Animate On Scroll)
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// useEffect : Hook React pour exécuter du code après le rendu du composant
// Ici, on l'utilise pour initialiser AOS une seule fois au chargement
import { useEffect } from "react";

// React Router : Système de navigation entre les pages
// - BrowserRouter : Conteneur qui active le routing
// - Routes : Conteneur pour définir les différentes routes
// - Route : Définit une route spécifique (chemin URL -> composant)
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AOS (Animate On Scroll) : Librairie d'animations au défilement
// Permet d'animer les éléments quand ils entrent dans la vue
import AOS from "aos";
import "aos/dist/aos.css"; // Styles CSS nécessaires pour AOS

// Composants de pages : Les différentes pages de l'application
import HomePage from "./components/pages/HomePage.jsx";
import Telechargement from "./components/pages/Telechargement.jsx";

// Composants de layout : Les éléments communs à toutes les pages
import Header from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

// -----------------------------------------------------------------------------
// COMPOSANT PRINCIPAL
// -----------------------------------------------------------------------------

/**
 * Composant App
 * 
 * C'est le composant racine qui structure toute l'application.
 * Il est rendu une seule fois et contient tous les autres composants.
 */
export default function App() {
  
  // ---------------------------------------------------------------------------
  // INITIALISATION DES ANIMATIONS AOS
  // ---------------------------------------------------------------------------
  
  // useEffect avec un tableau vide [] s'exécute une seule fois
  // après le premier rendu du composant (équivalent à componentDidMount)
  useEffect(() => {
    // Configuration de AOS
    AOS.init({
      duration: 700,              // Durée des animations en millisecondes
      easing: "ease-out-cubic",   // Type d'accélération de l'animation
    });
  }, []); // [] = ne s'exécute qu'une fois au montage du composant

  // ---------------------------------------------------------------------------
  // RENDU (JSX)
  // ---------------------------------------------------------------------------
  
  return (
    // BrowserRouter : Active le système de routing dans toute l'application
    // Il utilise l'API History du navigateur pour gérer les URLs
    <BrowserRouter>
      
      {/* 
        HEADER (Navbar)
        Affiché en haut de TOUTES les pages
        Contient le logo, la bannière et le bouton de téléchargement
      */}
      <Header />

      {/* 
        ROUTES : Définition des chemins URL
        Chaque Route associe un chemin (path) à un composant (element)
      */}
      <Routes>
        
        {/* 
          PAGE D'ACCUEIL
          URL : / (racine du site)
          Composant : HomePage (contient Hero, Security, Features, etc.)
        */}
        <Route path="/" element={<HomePage />} />

        {/* 
          PAGE TÉLÉCHARGEMENT
          URL : /telechargement
          Composant : Telechargement (boutons App Store/Play Store + QR code)
        */}
        <Route path="/telechargement" element={<Telechargement />} />
        
      </Routes>

      {/* 
        FOOTER
        Affiché en bas de TOUTES les pages
        Contient le logo, les liens légaux et les réseaux sociaux
      */}
      <Footer />
      
    </BrowserRouter>
  );
}
