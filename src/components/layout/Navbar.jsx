/**
 * =============================================================================
 * NAVBAR.JSX - Barre de navigation (Header)
 * =============================================================================
 * 
 * Ce composant affiche l'en-tête du site, présent sur toutes les pages.
 * 
 * Structure :
 * 1. Bannière colorée (violet) avec message promotionnel
 * 2. Logo Wespee à gauche
 * 3. Bouton CTA "Télécharger l'application" à droite
 * 
 * Comportement adaptatif :
 * - Le bouton CTA est caché sur la page /telechargement
 * - Le bouton CTA est caché sur mobile (sm:inline-flex = visible à partir de 640px)
 * - Les tailles de police et d'espacement s'adaptent selon l'écran
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Image du logo Wespee
import Logo from "../../assets/logo.png";

// Hook de traduction pour les textes multilingues
import { useTranslation } from "react-i18next";

// Hook pour connaître l'URL actuelle et adapter le comportement
import { useLocation } from "react-router-dom";

// -----------------------------------------------------------------------------
// COMPOSANT HEADER
// -----------------------------------------------------------------------------

/**
 * Composant Header (exporté mais nommé Navbar dans le fichier)
 * 
 * Affiche la navigation principale du site avec :
 * - Une bannière promotionnelle
 * - Le logo Wespee
 * - Un bouton d'action principal
 */
export default function Header() {
  // Hook pour obtenir l'URL actuelle
  // Permet de savoir si on est sur la page de téléchargement
  const location = useLocation();

  // Vérifie si on est sur la page /telechargement
  // Si oui, on masque le bouton CTA car il serait redondant
  const isDownloadPage = location.pathname === "/telechargement";

  // Hook de traduction
  // t("clé") retourne le texte traduit dans la langue active
  const { t } = useTranslation();
  
  return (
    <header className="w-full">
      
      {/* ===================================================================
          BANNIÈRE PROMOTIONNELLE
          Fond violet (#A991F3) avec message sur le parrainage
          =================================================================== */}
      <div className="font-athletics min-h-[36px] h-auto font-medium px-4 py-1.5 sm:px-4 md:px-8 lg:px-16 bg-[#A991F3] text-[#121212] text-[12px] sm:text-xs md:text-sm text-center flex items-center justify-center">
        {/* 
          t("navbar.banner") affiche :
          - FR: "L'accès à Wespee se fait uniquement par parrainage..."
          - EN: "Wespee is invite-only..."
        */}
        {t("navbar.banner")}
      </div>

      {/* ===================================================================
          BARRE DE NAVIGATION
          Contient le logo et le bouton CTA
          =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-4 pb-1 sm:pb-0 flex items-center justify-between">
        
        {/* -----------------------------------------------------------------
            LOGO WESPEE
            Cliquable, renvoie à l'accueil
            Taille responsive : plus grand sur les grands écrans
            ----------------------------------------------------------------- */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={Logo}
              alt="Wespee"
              className="
                w-[120px] h-auto
                sm:w-[139px]
                md:w-[155px]
                lg:w-[172px]
              "
            />
          </a>
        </div>

        {/* -----------------------------------------------------------------
            ZONE ACTIONS (droite)
            Contient le bouton CTA (desktop uniquement)
            ----------------------------------------------------------------- */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

          {/*
            BOUTON CTA - "Télécharger l'application"

            Conditions d'affichage :
            - Caché sur la page de téléchargement (!isDownloadPage)
            - Caché sur mobile (hidden sm:inline-flex)

            Styles :
            - Fond vert Wespee (#06D432)
            - Coins arrondis (rounded-full)
            - Animation au hover (scale + opacity)
          */}
          {!isDownloadPage && (
            <a href="/telechargement">
              <button
                className="
            hidden sm:inline-flex
            bg-[#06D432] text-[#121212]
            text-xs sm:text-sm
            px-4 sm:px-5 py-1.5 sm:py-2
            rounded-full
            hover:opacity-90 hover:scale-105 transition-all duration-200
            font-athletics font-medium
          "
              >
                {t("navbar.cta")}
              </button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
