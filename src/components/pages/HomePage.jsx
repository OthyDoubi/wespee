/**
 * =============================================================================
 * HOMEPAGE.JSX - Page d'accueil principale
 * =============================================================================
 * 
 * Ce composant assemble toutes les sections de la page d'accueil.
 * C'est un composant "page" qui orchestre l'ordre d'affichage des sections.
 * 
 * Structure de la page :
 * 1. Hero      - Grande accroche avec titre animé + image iPhone + Vision
 * 2. Security  - Section sur la sécurité avec cartes parallax
 * 3. Features  - Présentation de l'unification des comptes
 * 4. Connectivity - L'écosystème connecté
 * 5. Community - Branding et images de la communauté
 * 6. Conditions - Les conditions d'utilisation
 * 
 * Note : Le composant Vision est intégré DANS le Hero (pas affiché ici)
 * car il fait partie de l'animation de zoom au scroll.
 */

// -----------------------------------------------------------------------------
// IMPORTS DES SECTIONS
// -----------------------------------------------------------------------------

// Chaque section est un composant indépendant avec sa propre logique
// Cela permet de les maintenir et modifier séparément
import Hero from "../sections/Hero.jsx";
import Vision from "../sections/Vision.jsx";           // Non utilisé ici (intégré dans Hero)
import Features from "../sections/Features.jsx";
import Connectivity from "../sections/Connectivity.jsx";
import Community from "../sections/Community.jsx";
import Conditions from "../sections/Condition.jsx";
import Security from "../sections/Security.jsx";

// -----------------------------------------------------------------------------
// COMPOSANT PAGE D'ACCUEIL
// -----------------------------------------------------------------------------

/**
 * Composant HomePage
 * 
 * Rend toutes les sections de la page d'accueil dans l'ordre souhaité.
 * Utilise un Fragment (<></>) pour ne pas ajouter de div wrapper inutile.
 */
function HomePage() {
    return (
        <>
            {/* 
                SECTION HERO
                - Titre principal avec animation au chargement
                - Image iPhone centrée
                - Vision intégrée avec effet de zoom au scroll
                - QR code fixe sur desktop
                - Bouton download fixe sur mobile
            */}
            <Hero />
            
            {/* 
                SECTION SÉCURITÉ
                - Animation Lottie du cadenas
                - 3 cartes empilées avec effet parallax
                - Explique le système d'identifiant unique
            */}
            <Security />
            
            {/* 
                SECTION FONCTIONNALITÉS
                - "Une App pour tout"
                - Images UI et personne utilisant l'app
                - Animations AOS (fade-right, fade-left)
            */}
            <Features />
            
            {/* 
                SECTION CONNECTIVITÉ
                - "Encore plus connectée"
                - Image de la communauté
                - Animation AOS (zoom-in-down)
            */}
            <Connectivity />
            
            {/* 
                SECTION COMMUNAUTÉ
                - Branding "Wespee it's your world"
                - QR code pour téléchargement
                - Grande image de groupe
            */}
            <Community />
            
            {/* 
                SECTION CONDITIONS
                - 10 points des conditions d'utilisation
                - Rendu dynamique via une boucle
            */}
            <Conditions />
        </>
    );
}

// Export par défaut pour l'import dans App.jsx
export default HomePage;
