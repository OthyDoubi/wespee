/**
 * =============================================================================
 * HERO.JSX - Section héro de la page d'accueil
 * =============================================================================
 * 
 * C'est la première section visible quand on arrive sur le site.
 * Elle contient des animations complexes contrôlées par le scroll.
 * 
 * Fonctionnalités principales :
 * 1. Titre animé au chargement (fade + blur + stagger)
 * 2. Image iPhone en arrière-plan
 * 3. Composant Vision qui s'agrandit au scroll (effet zoom)
 * 4. QR Code fixe sur desktop (se rétracte au scroll)
 * 5. Bouton téléchargement fixe sur mobile
 * 
 * Technologies d'animation utilisées :
 * - Framer Motion : Animations au scroll et au chargement
 * - useScroll/useTransform : Valeurs liées à la position de scroll
 * 
 * Structure de la page :
 * - height: 200vh = La section fait 2x la hauteur de l'écran
 * - sticky top-0 = Le contenu reste fixe pendant le scroll
 * - Cela crée l'effet de "zoom" de la Vision qui s'agrandit
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Framer Motion : Bibliothèque d'animation pour React
// - motion : Composant qui permet d'animer des éléments
// - useScroll : Hook pour obtenir la position de scroll
// - useTransform : Hook pour transformer une valeur en une autre
import { motion, useScroll, useTransform } from "framer-motion";

// Hooks React
import { useState, useEffect } from "react";

// Images et composants
import iPhone from "../../assets/imgs/iPhone.png";
import QRCode from "../common/Web/QRCode";
import DownloadButton from "../common/Mobile/DownloadButton";
import Vision from "./Vision";

// Hook de traduction
import { useTranslation } from "react-i18next";

// Hook personnalisé pour les dimensions de l'écran
import useWindowDimensions from "../../utils/screens";

// -----------------------------------------------------------------------------
// COMPOSANT HERO
// -----------------------------------------------------------------------------

export default function Hero() {
  // ---------------------------------------------------------------------------
  // HOOKS
  // ---------------------------------------------------------------------------

  // Traduction
  const { t } = useTranslation();

  // État pour savoir si l'animation du titre est terminée
  // Permet de déclencher les animations suivantes
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  // ---------------------------------------------------------------------------
  // ANIMATIONS AU SCROLL
  // ---------------------------------------------------------------------------

  // useScroll() retourne scrollY : la position verticale de scroll en pixels
  const { scrollY } = useScroll();

  // Transformation de la position Y du conteneur selon le scroll
  // Quand scroll = 0 → containerY = 0
  // Quand scroll = 400 → containerY = 50
  const containerY = useTransform(scrollY, [0, 400], [0, 50]);

  // État pour savoir si le QR code doit être rétracté
  const [isRetracted, setIsRetracted] = useState(false);

  // Valeur normalisée du scroll (0 à 1)
  const scrollValue = useTransform(scrollY, [0, 800], [0, 1]);

  // Effet pour mettre à jour l'état de rétraction
  useEffect(() => {
    return scrollValue.onChange((v) => {
      // Si on a scrollé plus de 80%, le QR code se rétracte
      if (v > 0.8) setIsRetracted(true);
      else setIsRetracted(false);
    });
  }, [scrollValue]);

  // Opacité du QR code : disparaît juste avant d'arriver à la section Community
  // Commence à fade à 8400px et est invisible à 8806px (début de "Wespee it's your world.")
  const qrOpacity = useTransform(scrollY, [6100, 6500], [1, 0]);

  // Dimensions de l'écran pour les animations proportionnelles
  const dimensions = useWindowDimensions();
  const screenWidth = dimensions.width;
  const screenHeight = dimensions.height;

  // ---------------------------------------------------------------------------
  // ANIMATION DE L'IMAGE "VISION" (Effet zoom au scroll)
  // ---------------------------------------------------------------------------

  // Largeur de l'image Vision selon le scroll
  // Mobile (< 640px) : 89% de la largeur (85% × 1.05) → plein écran
  // Desktop : 400px → plein écran
  const peopleWidth = useTransform(
    scrollY,
    [0, 800],
    [screenWidth < 640 ? screenWidth * 0.89 : 400, screenWidth]
  );

  // Hauteur de l'image Vision selon le scroll
  const peopleHeight = useTransform(
    scrollY,
    [0, 800],
    [screenWidth < 640 ? 350 : 400, screenHeight]
  );

  // Opacité du overlay sombre sur la Vision
  const visionOverlayOpacity = useTransform(
    scrollY,
    [300, 800],
    [0, 0.5],
    { clamp: true }  // Limite les valeurs entre 0 et 0.5
  );

  // Opacité du texte sur la Vision
  const visionTextOpacity = useTransform(
    scrollY,
    [500, 800],
    [0, 1],
    { clamp: true }
  );

  // ---------------------------------------------------------------------------
  // VARIANTES D'ANIMATION (Framer Motion)
  // ---------------------------------------------------------------------------

  // Animation du conteneur principal
  // staggerChildren : Décale le démarrage des enfants de 0.2s chacun
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation de chaque ligne du titre
  // Fade in + translation vers le haut + défloutage
  const titleItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],  // Courbe de Bézier personnalisée
      }
    },
  };

  // Animation du groupe d'éléments qui apparaissent ensemble
  const simultaneousGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation du tagline et de la description
  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  // Animation des images
  const imagesVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    },
  };

  // Animation de l'iPhone (non utilisée actuellement)
  const iPhoneVariants = {
    hidden: { y: 20, opacity: 0, rotate: -2, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
    },
  };

  // Callback quand l'animation du titre est terminée
  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  // ---------------------------------------------------------------------------
  // RENDU
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Section avec hauteur double pour permettre le scroll */}
      <section className="relative h-[200vh]">

        {/* Conteneur sticky qui reste fixe pendant le scroll */}
        <div className="sticky top-0 h-screen overflow-hidden bg-wespee-white">

          {/* =================================================================
              COUCHE 1 : CONTENU TEXTE
              Titre, tagline et description
              ================================================================= */}
          <div className="relative z-10 h-full flex flex-col items-center pt-8 sm:pt-12">
            <div className="max-w-6xl mt-8 md:mt-2 mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">

              {/* Conteneur des animations */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onAnimationComplete={handleTitleAnimationComplete}
              >
                {/* Tagline : "Mobile Money, reimagined." */}
                <motion.p
                  className="text-[17px] sm:text-[18px] md:text-[20px] font-athletics tracking-wide mb-3 sm:mb-4"
                  variants={taglineVariants}
                >
                  {t("hero.tagline")}
                </motion.p>

                {/* Titre principal en 3 lignes animées */}
                <motion.h1
                  className="text-[clamp(2.625rem,5.25vw,3.15rem)] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-athletics font-medium leading-[1.1] tracking-tight text-black"
                >
                  <motion.span className="block" variants={titleItemVariants}>
                    {t("hero.title.line1")}
                  </motion.span>
                  <motion.span className="block" variants={titleItemVariants}>
                    {t("hero.title.line2")}
                  </motion.span>
                  <motion.span className="block italic font-bold" variants={titleItemVariants}>
                    {t("hero.title.highlight")}
                  </motion.span>
                </motion.h1>

                {/* Description sous le titre */}
                <motion.p
                  className="mt-2 sm:mt-4 mb-1 text-[15px] sm:text-base md:text-lg max-w-xl mx-auto text-black/60 font-athletics font-normal px-4 sm:px-0"
                  variants={taglineVariants}
                >
                  {t("hero.description.line1")}
                  <br className="hidden sm:block" />
                  {t("hero.description.line2")}
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* =================================================================
              COUCHE 2 : ANIMATIONS (iPhone + Vision)
              Positionnée au-dessus du texte
              ================================================================= */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden h-full w-full">
            <motion.div
              className="relative w-full h-full flex justify-center items-end"
              variants={imagesVariants}
              initial="hidden"
              animate={titleAnimationComplete ? "visible" : "hidden"}
            >
              <div className="relative w-full flex justify-center items-end h-full">

                {/* Image iPhone en arrière-plan */}
                <img
                  src={iPhone}
                  alt="iPhone background"
                  className="absolute md:bottom-[3%] bottom-[28%] w-[200px] sm:w-[260px] md:w-[300px] h-auto z-10 opacity-90 shadow-2xl pointer-events-auto"
                />

                {/* Composant Vision qui s'agrandit au scroll */}
                <motion.div
                  style={{
                    width: peopleWidth,
                    height: peopleHeight,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  className="absolute bottom-0 sm:bottom-[-10%] left-1/2 -translate-x-1/2 overflow-hidden z-30 pointer-events-auto"
                >
                  <Vision
                    overlayOpacity={visionOverlayOpacity}
                    textOpacity={visionTextOpacity}
                  />
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* =================================================================
              QR CODE (Desktop uniquement)
              Widget fixe en bas à droite qui se rétracte au scroll
              et disparaît progressivement à partir de la section Community
              ================================================================= */}
          <motion.div
            variants={imagesVariants}
            initial="hidden"
            animate={titleAnimationComplete ? "visible" : "hidden"}
            className="z-40"
          >
            <QRCode retracted={isRetracted} qrOpacity={qrOpacity} />
          </motion.div>

        </div>
      </section>

      {/* =====================================================================
          BOUTON DOWNLOAD (Mobile uniquement)
          Fixe en bas de l'écran sur les petits écrans
          ===================================================================== */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm pointer-events-auto"
      >
        <DownloadButton />
      </motion.div>
    </>
  );
}
