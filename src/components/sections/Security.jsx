/**
 * =============================================================================
 * SECURITY.JSX - Section sécurité avec effet parallax de cartes empilées
 * =============================================================================
 * 
 * Cette section présente les avantages de sécurité de Wespee avec un effet
 * visuel impressionnant : 3 cartes qui semblent empilées et se déplacent
 * avec un effet parallax au scroll.
 * 
 * Effet parallax :
 * - Les 3 cartes sont sticky (restent visibles pendant le scroll)
 * - Chaque carte a une vitesse de déplacement différente
 * - Créé l'illusion de profondeur et d'empilement
 * 
 * Technologies utilisées :
 * - Framer Motion : Animations au scroll
 * - Lenis : Scroll fluide
 * - Lottie : Animation du cadenas
 * 
 * Structure :
 * 1. Header : Icône animée + titre
 * 2. Zone parallax : 3 cartes empilées avec effet de profondeur
 */

// Directive pour les composants client-side dans Next.js (ignorée en Vite)
"use client";

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Framer Motion pour les animations
import { motion, useScroll, useTransform } from "framer-motion";

// Lenis : Bibliothèque pour un scroll fluide et naturel (non utilisée - conflit avec AOS)
// import ReactLenis from "lenis/react";

// Hook React pour les références DOM et effets
import { useRef, useEffect, useState } from "react";

// Lottie : Lecteur d'animations vectorielles (format JSON)
import Lottie from "lottie-react";

// Animation du cadenas (fichier JSON exporté d'After Effects)
import lockAnimation from "../../assets/lottie/lock.json"

// iPhone frame SVG
import iPhoneFrame from "../../assets/imgs/iPhone 16 - 3.svg"

// Hook de traduction
import { useTranslation } from "react-i18next";

// -----------------------------------------------------------------------------
// COMPOSANT CARD (Carte individuelle)
// -----------------------------------------------------------------------------

/**
 * Composant Card
 * 
 * Une carte animée qui fait partie de l'effet parallax.
 * Reçoit des propriétés de motion pour l'animation au scroll.
 * 
 * @param {ReactNode} children - Contenu de la carte
 * @param {MotionValue} scale - Échelle animée de la carte
 * @param {MotionValue} y - Position Y animée
 * @param {MotionValue} shadow - Ombre animée
 * @param {MotionValue} opacity - Opacité animée
 * @param {number} zIndex - Ordre d'empilement
 */
const Card = ({ children, scale, y, shadow, opacity, zIndex, filter, cardRef }) => {
  return (
    // sticky top-[20vh] : La carte reste fixe à 20% du haut de l'écran
    <div ref={cardRef} className="sticky top-[20vh] flex justify-center">
      <motion.div
        // Les styles sont contrôlés par Framer Motion
        style={{
          scale,      // Taille de la carte
          y,          // Position verticale
          boxShadow: shadow,  // Ombre portée
          opacity,    // Transparence
          zIndex,     // Ordre d'empilement
          filter,     // Blur effect
        }}
        className="
          md:w-full
          max-w-7xl
          bg-wespee-white
           sm:rounded-2xl md:rounded-none
          w-[94%] sm:w-[90%] md:w-full
          overflow-hidden
        "
      >
        {children}
      </motion.div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPOSANT SECURITY (Section principale)
// -----------------------------------------------------------------------------

export default function Security() {
  const { t } = useTranslation();

  // Référence au conteneur des cartes pour le tracking du scroll
  const cardsRef = useRef(null);

  // Référence pour l'animation du header (iPhone frame)
  const headerRef = useRef(null);

  // Référence pour l'animation d'entrée de la Card 1
  const card1Ref = useRef(null);

  // Référence pour le Lottie player
  const lottieRef = useRef(null);

  // State pour savoir si l'animation a déjà été jouée
  const [hasPlayed, setHasPlayed] = useState(false);

  // ---------------------------------------------------------------------------
  // CONFIGURATION DU SCROLL TRACKING
  // ---------------------------------------------------------------------------

  // useScroll avec target : Track le scroll par rapport à un élément spécifique
  // offset : Définit quand le tracking commence et finit
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  });

  // Scroll tracking pour l'animation du header (iPhone frame)
  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  // Animation iPhone frame : opacity, y position, blur
  const iPhoneOpacity = useTransform(headerScrollProgress, [0, 0.3], [0, 1]);
  const iPhoneY = useTransform(headerScrollProgress, [0, 0.3], [60, 0]);
  const iPhoneFilter = useTransform(headerScrollProgress, [0, 0.3], ["blur(10px)", "blur(0px)"]);

  // Scroll tracking pour l'animation d'entrée de la Card 1
  const { scrollYProgress: card1ScrollProgress } = useScroll({
    target: card1Ref,
    offset: ["start end", "start center"],
  });

  // Animation Card 1 : entrée (blur commence à 70% et finit à 20% du scroll)
  const card1EnterFilter = useTransform(card1ScrollProgress, [0, 0.2], ["blur(7px)", "blur(0px)"]);

  // ---------------------------------------------------------------------------
  // INTERSECTION OBSERVER POUR L'ANIMATION LOTTIE
  // ---------------------------------------------------------------------------

  // Détecter quand le header devient visible pour jouer l'animation une seule fois
  useEffect(() => {
    if (!headerRef.current || hasPlayed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed && lottieRef.current) {
            lottieRef.current.play();
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.5 } // L'animation se déclenche quand 50% du header est visible
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, [hasPlayed]);

  // ---------------------------------------------------------------------------
  // DÉFINITION DES RANGES (Plages de scroll pour chaque carte)
  // ---------------------------------------------------------------------------

  // Chaque carte a sa propre plage de scroll pour créer l'effet décalé
  const range1 = [0.0, 0.4];   // Carte 1 : Active de 0% à 40% du scroll
  const range2 = [0.25, 0.65]; // Carte 2 : Active de 25% à 65%
  const range3 = [0.5, 0.95];  // Carte 3 : Active de 50% à 95%

  // ---------------------------------------------------------------------------
  // ANIMATIONS DE SCALE (Effet de profondeur)
  // ---------------------------------------------------------------------------

  // Les cartes rétrécissent au fur et à mesure qu'on scrolle
  // Cela donne l'impression qu'elles s'éloignent
  const scale1 = useTransform(scrollYProgress, range1, [1, 0.82]);
  const scale2 = useTransform(scrollYProgress, range2, [1, 0.9]);
  const scale3 = useTransform(scrollYProgress, range3, [1, 0.96]);

  // ---------------------------------------------------------------------------
  // ANIMATIONS DE POSITION Y (Parallax vertical)
  // ---------------------------------------------------------------------------

  // Chaque carte se déplace différemment, créant l'effet parallax
  const y1 = useTransform(scrollYProgress, range1, [0, -60]);
  const y2 = useTransform(scrollYProgress, range2, [20, -30]);
  const y3 = useTransform(scrollYProgress, range3, [40, -10]);

  // ---------------------------------------------------------------------------
  // ANIMATIONS D'OPACITÉ
  // ---------------------------------------------------------------------------

  // Les cartes du fond deviennent plus transparentes
  const opacity1 = useTransform(scrollYProgress, range1, [1, 0.6]);
  const opacity2 = useTransform(scrollYProgress, range2, [1, 0.7]);
  const opacity3 = useTransform(scrollYProgress, range3, [1, 1]);

  // ---------------------------------------------------------------------------
  // ANIMATIONS D'OMBRES
  // ---------------------------------------------------------------------------

  // Les ombres évoluent pour renforcer l'effet de profondeur
  const shadow1 = useTransform(
    scrollYProgress,
    range1,
    ["0 30px 60px rgba(0,0,0,0.25)", "0 10px 20px rgba(0,0,0,0.15)"]
  );

  const shadow2 = useTransform(
    scrollYProgress,
    range2,
    ["0 35px 70px rgba(0,0,0,0.28)", "0 15px 25px rgba(0,0,0,0.18)"]
  );

  const shadow3 = useTransform(
    scrollYProgress,
    range3,
    ["0 40px 80px rgba(0,0,0,0.30)", "0 20px 30px rgba(0,0,0,0.22)"]
  );

  // ---------------------------------------------------------------------------
  // ANIMATION DE COULEUR DE FOND
  // ---------------------------------------------------------------------------

  // Le fond passe du vert Wespee au gris clair
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["#06D432", "#f6f6f6"]
  );

  // ---------------------------------------------------------------------------
  // RENDU
  // ---------------------------------------------------------------------------

  return (
    <motion.section
        style={{ backgroundColor }}
        className="py-16 transition-colors"
      >
        {/* =================================================================
            HEADER DE LA SECTION
            iPhone frame + Icône animée + Titre
            ================================================================= */}
        <div
          ref={headerRef}
          className="mb-2 sm:mb-3 md:mb-4 text-center flex flex-col items-center gap-1 sm:gap-2 md:gap-2 px-4"
        >

          {/* iPhone Frame avec Animation Lottie du cadenas */}
          <div className="relative w-[200px] h-[180px] sm:w-[250px] sm:h-[200px] md:w-[320px] md:h-[220px]">
            {/* iPhone Frame SVG */}
            <img
              src={iPhoneFrame}
              alt="iPhone frame"
              className="absolute inset-0 w-full h-auto"
            />
            {/* Lottie animation centré dans le frame */}
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[86px] h-[86px] sm:w-[92px] sm:h-[92px] md:w-[130px] md:h-[98px]">
              <Lottie
                lottieRef={lottieRef}
                animationData={lockAnimation}
                loop={false}
                autoplay={false}
              />
            </div>
          </div>

          {/* Tagline - avec animation slide up + blur */}
          <motion.p
            className="text-[16px] sm:text-[28px] md:text-[20px] text-black/80"
            style={{
              opacity: iPhoneOpacity,
              y: iPhoneY,
              filter: iPhoneFilter,
            }}
          >
            {t("security.header.tagline")}
          </motion.p>

          {/* Titre principal - avec animation slide up + blur */}
          <motion.h2
            className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-medium text-black leading-tight"
            style={{
              opacity: iPhoneOpacity,
              y: iPhoneY,
              filter: iPhoneFilter,
            }}
          >
            {t("security.header.title1")} <br />
            {t("security.header.title2")}
          </motion.h2>
        </div>

        {/* =================================================================
            ZONE PARALLAX (Les 3 cartes empilées)
            ================================================================= */}
        <div
          ref={cardsRef}
          className="relative min-h-[300vh] flex flex-col items-center pt-2"
        >
          {/* -----------------------------------------------------------------
              CARTE 1 : Le problème (fraudes au mobile money)
              Fond blanc
              ----------------------------------------------------------------- */}
          <Card
            cardRef={card1Ref}
            scale={scale1}
            y={y1}
            shadow={shadow1}
            opacity={opacity1}
            zIndex={1}
            filter={card1EnterFilter}
          >
            <div className="grid md:grid-cols-2 bg-wespee-white min-h-[400px] md:min-h-[500px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left flex items-center bg-white">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-snug">
                  {t("security.cards.1.text")}
                </p>
              </div>

              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/1.png" className="w-[320px] h-auto object-contain" />
              </div>
            </div>
          </Card>

          {/* -----------------------------------------------------------------
              CARTE 2 : La solution (identifiant unique)
              Fond violet
              ----------------------------------------------------------------- */}
          <Card
            scale={scale2}
            y={y2}
            shadow={shadow2}
            opacity={opacity2}
            zIndex={2}
          >
            <div className="grid md:grid-cols-2 bg-[#A991F3] min-h-[400px] md:min-h-[400px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-snug">
                  {t("security.cards.2.text")}
                </p>
              </div>

              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/2.png" className="w-[320px] h-auto object-contain" />
              </div>
            </div>
          </Card>

          {/* -----------------------------------------------------------------
              CARTE 3 : L'engagement (sécurité NextGen)
              Fond gris foncé
              ----------------------------------------------------------------- */}
          <Card
            scale={scale3}
            y={y3}
            shadow={shadow3}
            opacity={opacity3}
            zIndex={3}
          >
            <div className="grid md:grid-cols-2 bg-[#454545] min-h-[400px] md:min-h-[500px]">
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-left text-white flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
                  {t("security.cards.3.text")}
                </p>
              </div>
              <div className="bg-gray-200 px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12 flex items-end overflow-hidden justify-center">
                <img src="/images/security/3.png" className="w-[320px] h-auto object-contain" />
              </div>

            </div>
          </Card>
        </div>
    </motion.section>
  );
}
