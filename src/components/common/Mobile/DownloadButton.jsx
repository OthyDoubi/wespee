/**
 * =============================================================================
 * DOWNLOADBUTTON.JSX - Bouton de téléchargement fixe (Mobile uniquement)
 * =============================================================================
 * 
 * Ce composant affiche un bouton de téléchargement fixé en bas de l'écran
 * sur les appareils mobiles. Il reste visible en permanence pour encourager
 * les utilisateurs à télécharger l'application.
 * 
 * Caractéristiques :
 * - Fixé en bas de l'écran (fixed bottom-6)
 * - Centré horizontalement (left-1/2 -translate-x-1/2)
 * - Visible uniquement sur mobile (md:hidden)
 * - Style vert Wespee avec icône de l'app
 * - Lien vers la page de téléchargement
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Icône de l'application Wespee
import Icon from "../../../assets/icons/icon.png";

// Hook de traduction pour le texte du bouton
import { useTranslation } from "react-i18next";

// -----------------------------------------------------------------------------
// COMPOSANT
// -----------------------------------------------------------------------------

/**
 * Composant DownloadButton
 * 
 * Bouton flottant qui apparaît sur mobile pour télécharger l'app.
 * Disparaît sur les écrans moyens et plus grands (md:hidden).
 */
export default function DownloadButton() {
  const { t } = useTranslation();

  return (
    <div className="md:hidden pointer-events-auto flex justify-center">
      {/*
        md:hidden : Caché à partir de 768px (tablettes et desktop)
        fixed : Position fixe par rapport à la fenêtre
        bottom-6 : 24px du bas de l'écran
        left-1/2 -translate-x-1/2 : Centrage horizontal
        z-[9999] : Au-dessus de tout le reste
        pointer-events-auto : Permet les clics (même si un parent a pointer-events-none)
      */}

      {/* Lien vers la page de téléchargement */}
      <a
        href="/telechargement"
        className="flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 bg-[#00C853] text-[11px] xs:text-[12px] font-semibold px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full w-[230px] xs:w-[245px] sm:w-[259px] h-[56px] xs:h-[60px] sm:h-[63px] shadow-2xl hover:bg-[#00B849] transition-colors"
      >
          {/*
            Styles du bouton :
            - bg-[#00C853] : Vert Wespee
            - rounded-full : Bouton arrondi en pilule
            - shadow-2xl : Grande ombre pour l'effet flottant
            - transition-colors : Animation douce au hover
          */}

          {/* Icône de l'application */}
          <img
            src={Icon}
            alt=""
            className="w-[30px] h-[30px] xs:w-[32px] xs:h-[32px] sm:w-[35px] sm:h-[35px]"
          />

          {/* Texte du bouton : "Télécharger l'application" */}
          {t("cta.download")}
      </a>
    </div>
  );
}
