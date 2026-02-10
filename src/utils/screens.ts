/**
 * =============================================================================
 * UTILS/SCREENS.TS - Hook personnalisé pour les dimensions de l'écran
 * =============================================================================
 * 
 * Ce fichier exporte un hook React personnalisé qui permet de :
 * - Obtenir les dimensions actuelles de la fenêtre (largeur et hauteur)
 * - Mettre à jour ces dimensions automatiquement quand la fenêtre est redimensionnée
 * 
 * Utilisation typique :
 * 
 *   import useWindowDimensions from "../utils/screens";
 *   
 *   function MonComposant() {
 *     const { width, height } = useWindowDimensions();
 *     
 *     // Maintenant on peut adapter le rendu selon la taille
 *     if (width < 768) {
 *       return <VersionMobile />;
 *     }
 *     return <VersionDesktop />;
 *   }
 * 
 * Pourquoi ce hook ?
 * - Tailwind CSS gère le responsive via des classes (sm:, md:, lg:)
 * - Mais parfois on a besoin de la largeur exacte en JavaScript
 * - Par exemple, pour calculer des animations proportionnelles à l'écran
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// useState : Pour stocker les dimensions dans l'état du composant
// useEffect : Pour ajouter/retirer l'écouteur d'événement resize
import { useState, useEffect } from 'react';

// -----------------------------------------------------------------------------
// FONCTION UTILITAIRE
// -----------------------------------------------------------------------------

/**
 * Récupère les dimensions actuelles de la fenêtre du navigateur
 * 
 * @returns Un objet avec { width, height } en pixels
 */
function getWindowDimensions() {
    // window.innerWidth : Largeur de la zone visible (viewport)
    // window.innerHeight : Hauteur de la zone visible (viewport)
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

// -----------------------------------------------------------------------------
// HOOK PERSONNALISÉ
// -----------------------------------------------------------------------------

/**
 * Hook personnalisé pour obtenir et suivre les dimensions de la fenêtre
 * 
 * Ce hook :
 * 1. Initialise l'état avec les dimensions actuelles
 * 2. Ajoute un écouteur pour détecter les redimensionnements
 * 3. Met à jour l'état à chaque redimensionnement
 * 4. Nettoie l'écouteur quand le composant est démonté
 * 
 * @returns {{ width: number, height: number }} Les dimensions actuelles
 */
export default function useWindowDimensions() {
    // État local pour stocker les dimensions
    // Initialisé avec les dimensions actuelles de la fenêtre
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    // useEffect pour gérer l'écouteur d'événement
    useEffect(() => {
        /**
         * Fonction appelée à chaque redimensionnement de la fenêtre
         * Elle met à jour l'état avec les nouvelles dimensions
         */
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        // Ajouter l'écouteur d'événement 'resize' sur window
        // Chaque fois que la fenêtre est redimensionnée, handleResize est appelée
        window.addEventListener('resize', handleResize);

        // Appeler immédiatement pour avoir les bonnes dimensions initiales
        // Utile si le composant est monté après un changement de taille
        handleResize();

        // Fonction de nettoyage (cleanup)
        // Appelée quand le composant est démonté (retiré du DOM)
        // Important pour éviter les fuites de mémoire !
        return () => window.removeEventListener('resize', handleResize);
        
    }, []); // Tableau vide = effet exécuté uniquement au montage/démontage

    // Retourner les dimensions actuelles
    return windowDimensions;
}
