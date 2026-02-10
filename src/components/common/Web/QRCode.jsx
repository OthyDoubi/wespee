/**
 * =============================================================================
 * QRCODE.JSX - Widget QR Code fixe (Desktop uniquement)
 * =============================================================================
 * 
 * Ce composant affiche un widget QR code fixé en bas à droite de l'écran
 * sur les appareils desktop. Il permet aux utilisateurs de scanner le code
 * avec leur téléphone pour télécharger l'application.
 * 
 * Comportement :
 * - Fixé en bas à droite de l'écran
 * - Visible uniquement sur desktop (hidden md:flex)
 * - Se "rétracte" au scroll : le texte disparaît, seul le QR reste
 * - Animation fluide grâce à Framer Motion
 * 
 * Props :
 * - retracted : boolean - Si true, le widget est en mode compact
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Image du QR code
import Qr from "../../../assets/imgs/qr-code.png";

// Hook de traduction
import { useTranslation } from "react-i18next";

// Framer Motion pour les animations
// - motion : Composant animé
// - AnimatePresence : Gère les animations d'entrée/sortie
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------------------------------------------------------
// COMPOSANT
// -----------------------------------------------------------------------------

/**
 * Composant QRCode
 *
 * Widget flottant avec QR code pour télécharger l'app.
 * Se rétracte au scroll pour être moins intrusif.
 *
 * @param {boolean} retracted - Si true, affiche seulement le QR code (mode compact)
 * @param {MotionValue} qrOpacity - Opacité animée du QR code (0 à 1)
 */
export default function QRCode({ retracted = false, qrOpacity }) {
  const { t } = useTranslation();

  return (
    <motion.div
      // layout : Active les animations de changement de taille automatiques
      layout
      style={{ opacity: qrOpacity }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`hidden md:flex items-center gap-2 md:gap-2.5 lg:gap-3 bg-[#06D432] fixed right-6 md:right-8 lg:right-10 bottom-6 md:bottom-8 lg:bottom-10 shadow-lg z-50 overflow-hidden
        ${retracted ? "p-3 rounded-md" : "px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl"}
      `}
      /* 
        Classes dynamiques selon l'état :
        - retracted : padding uniforme (p-3), coins moins arrondis
        - expanded : padding différencié (px/py), coins plus arrondis
        
        hidden md:flex : Visible uniquement à partir de 768px
        fixed : Position fixe
        right-6/bottom-6 : Positionné en bas à droite
        bg-[#06D432] : Fond vert Wespee
        z-50 : Au-dessus du contenu normal
      */
    >
      {/* AnimatePresence : Gère l'animation de sortie du texte */}
      <AnimatePresence mode="wait">
        {/* Le texte n'est affiché que si le widget n'est pas rétracté */}
        {!retracted && (
          <motion.span
            // Animation d'entrée/sortie du texte
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs md:text-sm font-semibold whitespace-nowrap"
          >
            {/* Texte : "Télécharger l'application Wespee" sur 2 lignes */}
            {t("qr.download-line1")} <br />
            {t("qr.download-line2")}
          </motion.span>
        )}
      </AnimatePresence>
      
      {/* Image du QR code - Toujours visible */}
      <motion.img
        // layout : Anime le repositionnement quand le texte disparaît
        layout
        src={Qr}
        alt=""
        className="w-[35px] h-[35px] md:w-[38px] md:h-[38px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
        // flex-shrink-0 : Empêche le QR de rétrécir
      />
    </motion.div>
  );
}
