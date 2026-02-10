/**
 * =============================================================================
 * FEATURES.JSX - Section "Une App pour tout"
 * =============================================================================
 * 
 * Cette section présente les fonctionnalités principales de Wespee avec :
 * - Un titre et une description
 * - Une image de l'interface utilisateur (UI)
 * - Une image d'une personne utilisant l'app
 * 
 * =============================================================================
 * 🖼️ IMAGES À MODIFIER
 * =============================================================================
 * 
 * 1. PersonImage (ligne 1) : Photo de la personne utilisant Wespee
 *    - Fichier : src/assets/imgs/PersonImage.png
 *    - Dimensions recommandées : 523px x auto
 *    - Format : PNG avec fond transparent ou JPEG
 * 
 * 2. UiImage (ligne 2) : Capture d'écran de l'interface Wespee
 *    - Fichier : src/assets/imgs/PUB.jpeg
 *    - Dimensions recommandées : 474px x 415px max
 *    - Format : JPEG ou PNG
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * Section padding vertical :
 *   - Mobile : py-12 (48px)
 *   - Tablette : sm:py-16 (64px)
 *   - Desktop : md:py-20 (80px)
 * 
 * Marge du bloc texte :
 *   - Mobile : mb-8 (32px)
 *   - Tablette : sm:mb-10 (40px)
 *   - Desktop : md:mb-12 (48px)
 * 
 * Gap entre les images :
 *   - Mobile : gap-8 (32px)
 *   - Desktop : md:gap-6 (24px)
 * 
 * =============================================================================
 * ✨ ANIMATIONS
 * =============================================================================
 * 
 * 1. fadeUp (Framer Motion) : Animation d'apparition du texte
 *    - opacity: 0 → 1
 *    - y: 30px → 0px
 *    - duration: 0.6s
 *    - Modifiable dans l'objet fadeUp (lignes 9-16)
 * 
 * 2. data-aos="fade-right" : Animation AOS pour l'image UI
 *    - L'image apparaît en glissant depuis la gauche
 * 
 * 3. data-aos="fade-left" : Animation AOS pour l'image personne
 *    - L'image apparaît en glissant depuis la droite
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * - features.tagline : Sous-titre ("L'app Wespee")
 * - features.title-line1 : Première ligne du titre ("Une App")
 * - features.title-line2 : Deuxième ligne du titre ("pour tout.")
 * - features.description : Description longue
 * - features.disclaimer : Petit texte au-dessus de l'image UI
 * 
 * Fichiers de traduction : src/i18n/locales/fr.json et en.json
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

/**
 * 🖼️ IMAGE DE LA PERSONNE
 * Pour changer cette image, remplacez le fichier à :
 * src/assets/imgs/PersonImage.png
 */
import PersonImage from "../../assets/imgs/PersonImage.png";

/**
 * 🖼️ IMAGE DE L'INTERFACE (UI)
 * Pour changer cette image, remplacez le fichier à :
 * src/assets/imgs/PUB.jpeg
 */
import UiImage from "../../assets/imgs/PUB.jpeg";

// Hook de traduction pour les textes multilingues
import { useTranslation } from "react-i18next";

// Composant motion pour les animations Framer Motion
import { motion } from "framer-motion";

// -----------------------------------------------------------------------------
// COMPOSANT FEATURES
// -----------------------------------------------------------------------------

export default function Features() {
  const { t } = useTranslation();

  // ---------------------------------------------------------------------------
  // ✨ CONFIGURATION ANIMATION FADE-UP
  // ---------------------------------------------------------------------------
  /**
   * Animation d'apparition du texte de bas en haut
   * 
   * Pour modifier :
   * - opacity : Transparence initiale (0 = invisible, 1 = visible)
   * - y : Décalage vertical initial (30 = 30px en dessous)
   * - duration : Durée en secondes
   * - ease : Type d'accélération ("easeOut", "easeIn", "linear", etc.)
   */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    /**
     * 📏 SECTION CONTAINER
     *
     * bg-wespee-white : Fond blanc Wespee (#FEFFFB)
     *
     * PADDING VERTICAL (espacement haut/bas) :
     * - py-12 : 48px sur mobile
     * - sm:py-16 : 64px à partir de 640px
     * - md:py-20 : 80px à partir de 768px
     */
    <section className="bg-wespee-white py-12 sm:py-16 md:py-20 relative overflow-hidden">

      {/* Container pleine largeur */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* =================================================================
            BLOC TEXTE (Surtitre + Titre + Description)

            Structure verticale : texte en haut, visuels en dessous
            Texte limité à 50-60% de la largeur sur desktop
            ================================================================= */}
        <motion.div
          className="w-full md:max-w-[60%] mb-2 sm:mb-4 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* ---------------------------------------------------------
              SURTITRE / TAGLINE

              📏 TAILLES DE TEXTE :
              - text-base : 16px sur mobile
              - sm:text-lg : 18px sur tablette

              🎨 COULEUR : text-black/70 = noir à 70% d'opacité
              --------------------------------------------------------- */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg font-athletics font-normal tracking-wide mb-4 sm:mb-6 text-black/70"
          >
            {t("features.tagline")}
          </motion.p>

          {/* ---------------------------------------------------------
              TITRE PRINCIPAL (sur 3 lignes séparées)

              📏 TAILLES DE TEXTE :
              - Même taille que "Ton nouveau bouclier sécurisé."
              - text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px]

              🎨 POLICE : font-athletics font-bold (très gras)
              --------------------------------------------------------- */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-bold font-athletics mb-4 sm:mb-6 leading-tight"
          >
            {t("features.title-line1")}
            <br />
            {t("features.title-line2")}
          </motion.h2>

          {/* ---------------------------------------------------------
              DESCRIPTION

              📏 TAILLES DE TEXTE :
              - text-base : 16px sur mobile
              - sm:text-lg : 18px sur tablette
              - md:text-xl : 20px sur desktop

              🎨 COULEUR : text-black/70 = noir à 70% d'opacité
              --------------------------------------------------------- */}
          <motion.p
            variants={fadeUp}
            className="hidden md:block text-base sm:text-lg md:text-xl text-black/70 font-athletics leading-relaxed"
          >
            {t("features.description")}
          </motion.p>
        </motion.div>

        {/* =================================================================
            CONTENEUR DES VISUELS

            Mobile : flex column avec description entre les 2 images
            Desktop : grid 2 colonnes côte à côte
            ================================================================= */}
        <div
          className="w-full overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">

            {/* COLONNE GAUCHE : Disclaimer + Image UI */}
            <div className="relative md:h-[500px] lg:h-[600px] flex flex-col">
              <div className="py-4 sm:py-6 md:py-8">
                <p className="text-xs sm:text-sm text-black/80 font-circular">
                  {t("features.disclaimer")}
                </p>
              </div>
              <div className="w-full md:flex-1 overflow-hidden">
                <img
                  src={UiImage}
                  alt="Wespee UI"
                  className="w-full h-auto md:h-full md:object-cover object-center"
                />
              </div>
            </div>

            {/* DESCRIPTION - Mobile uniquement (entre les 2 images) */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:hidden text-base text-black/70 font-athletics leading-relaxed"
            >
              {t("features.description")}
            </motion.p>

            {/* COLONNE DROITE : Image Personne */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={PersonImage}
                alt="Wespee user"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
