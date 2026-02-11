/**
 * =============================================================================
 * COMMUNITY.JSX - Section branding et communauté
 * =============================================================================
 * 
 * Cette section affiche le branding "Wespee it's your world" avec :
 * - Le logo Wespee
 * - Le slogan animé
 * - Un QR code pour télécharger (desktop)
 * - Une grande image de groupe (différente mobile/desktop)
 * 
 * =============================================================================
 * 🖼️ IMAGES À MODIFIER
 * =============================================================================
 * 
 * 1. Logo (ligne 17) : Logo affiché dans la section
 *    - Chemin : public/images/community/logo.jpg
 *    - Dimensions : 64x64px (mobile) à 96x96px (desktop)
 * 
 * 2. QR Code (ligne 43) : QR code pour télécharger l'app
 *    - Chemin : public/images/community/qr.png
 *    - Dimensions : 128x128px
 *    - Note : Générez un nouveau QR pointant vers vos stores
 * 
 * 3. GroupImg (ligne 4) : Image de groupe DESKTOP
 *    - Fichier : src/assets/imgs/Group.png
 *    - Dimensions : Pleine largeur, ratio paysage
 *    - Note : Image large pour écrans desktop
 * 
 * 4. GroupVm (ligne 5) : Image de groupe MOBILE
 *    - Fichier : src/assets/imgs/GroupVm.png
 *    - Dimensions : Optimisée pour mobile
 *    - Note : Version verticale ou carrée de l'image
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * Padding section :
 *   - py-16 : 64px sur mobile
 *   - sm:py-20 : 80px sur tablette
 *   - md:py-24 : 96px sur desktop
 * 
 * Gap entre éléments du branding :
 *   - gap-4 : 16px sur mobile
 *   - sm:gap-5 : 20px sur tablette
 *   - md:gap-6 : 24px sur desktop
 * 
 * Marge haut de l'image de groupe :
 *   - mt-12 : 48px sur mobile
 *   - sm:mt-16 : 64px sur tablette
 *   - md:mt-20 : 80px sur desktop
 * 
 * =============================================================================
 * ✨ ANIMATIONS AOS
 * =============================================================================
 * 
 * "Wespee" et "it's your world" ont des animations décalées :
 *   - data-aos="fade-zoom-in" : Fade + léger zoom
 *   - data-aos-delay="200" : Délai de 200ms pour "Wespee"
 *   - data-aos-delay="600" : Délai de 600ms pour le slogan
 *   - data-aos-delay="900" : Délai de 900ms pour le texte QR
 *   - data-aos-easing="ease-in-back" : Effet de rebond
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * - community.download : Texte sous le QR code ("Téléchargez l'application")
 * 
 * Note : "Wespee" et "it's your world" sont en dur dans le code
 * pour le branding (ne changent pas selon la langue)
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Ces imports ne sont pas utilisés dans le code actuel
// mais peuvent servir de référence pour d'autres composants
import QrCode from "../../assets/imgs/qr-code.png";
import LogoIcon from "../../assets/icons/icon.png";
import Icon from "../../assets/icons/icon.png";

/**
 * 🖼️ IMAGE DE GROUPE - VERSION DESKTOP
 * Pour changer : Remplacez src/assets/imgs/Group.png
 */
import GroupImg from "../../assets/imgs/Group.png";

/**
 * 🖼️ IMAGE DE GROUPE - VERSION MOBILE
 * Pour changer : Remplacez src/assets/imgs/GroupVm.png
 */
import GroupVm from "../../assets/imgs/GroupVm.png";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// -----------------------------------------------------------------------------
// COMPOSANT COMMUNITY
// -----------------------------------------------------------------------------

export default function Community() {
  const { t } = useTranslation();

  // Variantes d'animation personnalisées
  // L'opacité reste à 0 pendant 70% de l'animation, puis monte à 100% entre 70% et 90%
  const slideUpVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  // Conteneur pour l'effet stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai de 200ms entre chaque enfant
      }
    }
  };

  return (
    /**
     * 📏 SECTION CONTAINER
     * 
     * bg-white : Fond blanc
     * 
     * PADDING VERTICAL :
     * - py-16 : 64px sur mobile
     * - sm:py-20 : 80px sur tablette
     * - md:py-24 : 96px sur desktop
     */
    <section className="bg-wespee-white py-16 sm:py-20 md:py-24">
      
      {/* =================================================================
          CONTENU DU HAUT (Logo + Branding + QR)
          ================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* -----------------------------------------------------------------
            CONTENEUR CENTRÉ
            
            📏 GAP entre les éléments :
            - gap-4 : 16px sur mobile
            - sm:gap-5 : 20px sur tablette
            - md:gap-6 : 24px sur desktop
            ----------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6">
          
          {/* -----------------------------------------------------------------
              🖼️ LOGO WESPEE
              
              Pour changer : Remplacez public/images/community/logo.jpg
              
              📏 DIMENSIONS :
              - w-16 h-16 : 64x64px sur mobile
              - sm:w-24 sm:h-24 : 96x96px sur tablette+
              ----------------------------------------------------------------- */}
          <img src="/images/community/logo.jpg" alt="Wespee" className="w-16 h-16 sm:w-24 sm:h-24" />

          {/* -----------------------------------------------------------------
              BRANDING "Wespee it's your world"

              ✨ ANIMATIONS :
              - Slide up avec opacité contrôlée (0% jusqu'à 70%, puis 100% à 90%)
              - Effet stagger entre les lignes (délai de 0ms, puis 200ms)
              ----------------------------------------------------------------- */}
          <div>
            {/* ---------------------------------------------------------
                "Wespee" - Première ligne

                📏 TAILLES DE TEXTE :
                - text-3xl : 30px sur très petit mobile
                - xs:text-4xl : 36px sur petit mobile
                - sm:text-6xl : 60px sur tablette
                - md:text-6xl : 60px sur desktop

                ✨ ANIMATION : Slide up avec opacité retardée (délai 0ms)
                --------------------------------------------------------- */}
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-6xl md:text-6xl font-athletics font-medium text-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                  }
                }
              }}
            >
              Wespee
            </motion.h2>

            {/* ---------------------------------------------------------
                "it's your world." - Deuxième ligne (slogan)

                🎨 STYLE :
                - italic : Texte en italique
                - font-bold : Gras (700)

                ✨ ANIMATION : Slide up avec opacité retardée (délai 200ms)
                --------------------------------------------------------- */}
            <motion.p
              className="text-3xl xs:text-4xl sm:text-6xl md:text-6xl italic font-athletics font-bold text-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.4,
                  }
                }
              }}
            >
              it's your world.
            </motion.p>
          </div>

          {/* -----------------------------------------------------------------
              🖼️ QR CODE (Desktop uniquement)

              hidden md:flex = caché sur mobile, visible à partir de 768px

              Pour changer le QR :
              Remplacez public/images/community/qr.png

              📏 DIMENSIONS QR :
              - h-12 w-12 : 48x48px (minimum)
              - sm:h-32 sm:w-32 : 128x128px (taille réelle)
              ----------------------------------------------------------------- */}
          <motion.div
            className="hidden md:flex flex-col items-center gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.4 } // Délai de 400ms pour apparaître après les textes
              }
            }}
          >
            <img src="/images/community/qr.png" alt="QR code" className="h-12 w-12 sm:h-32 sm:w-32" />

            {/* Texte sous le QR code */}
            <motion.p
              className="text-[16px] sm:text-[18px] md:text-[20px] text-black/60 font-athletics"
              variants={slideUpVariants}
            >
              {t("community.download")}
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* =================================================================
          🖼️ IMAGES DE GROUPE (bas de la section)
          
          📏 MARGE HAUT :
          - mt-12 : 48px sur mobile
          - sm:mt-16 : 64px sur tablette
          - md:mt-20 : 80px sur desktop
          
          w-full : Pleine largeur (pas de max-width)
          ================================================================= */}
      <div className="mt-12 sm:mt-16 md:mt-20 w-full px-[10px]">
        
        {/* -----------------------------------------------------------------
            IMAGE DESKTOP
            
            hidden md:block = visible uniquement à partir de 768px
            
            Pour changer : Modifier GroupImg en haut du fichier
            ----------------------------------------------------------------- */}
        <div className="hidden md:block">
          <img
            src={GroupImg}
            alt="Wespee users"
            className="w-full object-cover"
          />
        </div>

        {/* -----------------------------------------------------------------
            IMAGE MOBILE
            
            md:hidden = visible uniquement en dessous de 768px
            
            Pour changer : Modifier GroupVm en haut du fichier
            ----------------------------------------------------------------- */}
        <div className="md:hidden">
          <img
            src={GroupVm}
            alt="Wespee users"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
