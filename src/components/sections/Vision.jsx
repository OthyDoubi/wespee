/**
 * =============================================================================
 * VISION.JSX - Composant Vision intégré dans le Hero
 * =============================================================================
 * 
 * Ce composant affiche la "vision" de Wespee avec :
 * - Une image de fond (personnes utilisant l'app)
 * - Un overlay sombre qui s'intensifie au scroll
 * - Un texte qui apparaît progressivement au scroll
 * 
 * COMPORTEMENT :
 * Ce composant est intégré dans le Hero et s'agrandit au scroll.
 * Les props overlayOpacity et textOpacity sont des MotionValues
 * contrôlées par le scroll dans Hero.jsx.
 * 
 * =============================================================================
 * 🖼️ IMAGES À MODIFIER
 * =============================================================================
 * 
 * People (ligne 1) : Image de fond avec des personnes
 *   - Fichier : src/assets/imgs/FullPeople.jpg
 *   - Dimensions : Grande image (au moins 1920x1080px recommandé)
 *   - Format : JPEG pour optimiser le poids
 *   - Note : L'image utilise object-cover (elle sera recadrée)
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * Padding du contenu texte :
 *   - px-4 : 16px horizontal sur mobile
 *   - sm:px-6 : 24px sur tablette
 *   - md:px-8 : 32px sur desktop
 * 
 * Marge sous le tagline :
 *   - mb-3 : 12px sur mobile
 *   - sm:mb-4 : 16px sur tablette+
 * 
 * =============================================================================
 * ✨ ANIMATIONS (contrôlées par Hero.jsx)
 * =============================================================================
 * 
 * overlayOpacity (MotionValue) :
 *   - Contrôle l'opacité de l'overlay noir
 *   - Varie de 0 (transparent) à 0.5 (semi-opaque)
 *   - Défini dans Hero.jsx : useTransform(scrollY, [300, 800], [0, 0.5])
 * 
 * textOpacity (MotionValue) :
 *   - Contrôle l'opacité du texte
 *   - Varie de 0 (invisible) à 1 (visible)
 *   - Défini dans Hero.jsx : useTransform(scrollY, [500, 800], [0, 1])
 * 
 * Pour modifier les seuils de scroll :
 *   → Allez dans Hero.jsx et modifiez les valeurs [300, 800] et [500, 800]
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * - vision.tagline : Petit texte au-dessus ("Notre vision")
 * - vision.title-line1 : Ligne 1 du titre
 * - vision.title-line2 : Ligne 2 du titre
 * - vision.title-line3 : Ligne 3 du titre
 * - vision.title-line4 : Ligne 4 du titre
 * 
 * Fichiers de traduction : src/i18n/locales/fr.json et en.json
 * 
 * =============================================================================
 * 🎨 COULEURS
 * =============================================================================
 * 
 * - Overlay : bg-black (noir pur)
 * - Texte tagline : text-white/80 (blanc 80% opacité)
 * - Texte titre : text-white (blanc pur)
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

/**
 * 🖼️ IMAGE DE FOND (Personnes)
 * Pour changer cette image, remplacez le fichier à :
 * src/assets/imgs/FullPeople.jpg
 * 
 * Conseils :
 * - Utilisez une image de haute qualité (min 1920x1080)
 * - Le format JPEG est recommandé pour réduire le poids
 * - L'image sera recadrée (object-cover)
 */
import People from "../../assets/imgs/FullPeople.jpg";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// -----------------------------------------------------------------------------
// COMPOSANT VISION
// -----------------------------------------------------------------------------

/**
 * Composant Vision
 * 
 * @param {MotionValue} overlayOpacity - Opacité de l'overlay (0-0.5)
 * @param {MotionValue} textOpacity - Opacité du texte (0-1)
 * 
 * Ces props sont des MotionValues de Framer Motion, pas des nombres.
 * Elles sont liées au scroll dans le composant parent (Hero.jsx).
 */
export default function Vision({ overlayOpacity, textOpacity }) {
  const { t } = useTranslation();

  return (
    /**
     * CONTENEUR PRINCIPAL
     * 
     * relative : Pour positionner les enfants en absolute
     * z-10 : Au-dessus des autres éléments
     * w-full h-full : Prend toute la taille du parent
     * overflow-hidden : Cache ce qui dépasse
     */
    <div className="relative z-10 w-full h-full overflow-hidden">

      {/* =================================================================
          🖼️ IMAGE DE FOND
          
          Pour changer : Modifier l'import People en haut du fichier
          
          POSITIONNEMENT :
          - absolute inset-0 : Couvre tout le conteneur
          - w-full h-full : Prend toute la taille
          - object-cover : L'image remplit sans déformation (recadrée)
          ================================================================= */}
      <img
        src={People}
        alt="Wespee users"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* =================================================================
          OVERLAY SOMBRE (contrôlé par le scroll)
          
          🎨 COULEUR : bg-black (noir)
          
          L'opacité est contrôlée par overlayOpacity (MotionValue)
          qui varie selon la position de scroll (défini dans Hero.jsx)
          
          Pour modifier :
          - La couleur : Changez bg-black par une autre couleur
          - L'opacité max : Modifiez dans Hero.jsx la valeur 0.5
          ================================================================= */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* =================================================================
          CONTENU TEXTE
          
          z-10 : Au-dessus de l'overlay
          flex items-center justify-center : Centré verticalement/horizontalement
          h-full : Prend toute la hauteur
          
          📏 PADDING HORIZONTAL :
          - px-4 : 16px sur mobile
          - sm:px-6 : 24px sur tablette
          - md:px-8 : 32px sur desktop
          ================================================================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">

        {/* Conteneur du texte - centré sur mobile, aligné gauche sur desktop */}
        <div className="text-white text-center md:text-left">

          {/* ---------------------------------------------------------
              TAGLINE
              
              📏 TAILLE : text-ms sm:text-sm (petite taille)
              🎨 COULEUR : text-white/80 (blanc 80% opacité)
              📏 MARGE BAS : mb-3 sm:mb-4
              
              L'opacité est contrôlée par textOpacity (MotionValue)
              --------------------------------------------------------- */}
          <motion.p
            style={{ opacity: textOpacity }}
            className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80 mb-3 sm:mb-4 font-athletics">
            {t("vision.tagline")}
          </motion.p>

          {/* ---------------------------------------------------------
              TITRE PRINCIPAL (4 lignes)
              
              📏 TAILLES DE TEXTE RESPONSIVE :
              - text-4xl : 36px sur très petit mobile
              - xs:text-3xl : 30px sur petit mobile
              - sm:text-4xl : 36px sur tablette
              - md:text-5xl : 48px sur desktop
              - lg:text-6xl : 60px sur grand écran
              - xl:text-7xl : 72px sur très grand écran
              - 2xl:text-[80px] : 80px sur écran XXL
              
              🎨 STYLE :
              - font-athletics font-medium : Police et graisse
              - leading-tight : Interligne serré
              - text-white : Couleur blanche
              
              L'opacité est contrôlée par textOpacity (MotionValue)
              --------------------------------------------------------- */}
          <motion.h2
            style={{ opacity: textOpacity }}
            className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-athletics font-medium leading-tight">
            {t("vision.title-line1")} <br />
            {t("vision.title-line2")} <br />
            {t("vision.title-line3")} <br />
            {t("vision.title-line4")}
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
