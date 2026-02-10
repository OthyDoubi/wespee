/**
 * =============================================================================
 * CONNECTIVITY.JSX - Section "Encore plus connectée"
 * =============================================================================
 * 
 * Cette section présente l'aspect communautaire et connecté de Wespee.
 * Structure simple : titre + description + grande image de la communauté.
 * 
 * =============================================================================
 * 🖼️ IMAGES À MODIFIER
 * =============================================================================
 * 
 * CommunityImage (ligne 1) : Image de la communauté Wespee
 *   - Fichier : src/assets/imgs/CommunityImage.png
 *   - Dimensions recommandées : Largeur max ~900px, hauteur ~300px
 *   - Format : PNG ou JPEG
 *   - Note : Cette image est affichée en pleine largeur avec object-cover
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * Marge négative en haut (mobile) :
 *   - sm:-mt-16 : -64px pour remonter la section sur tablette
 *   - lg:mt-0 : Pas de marge négative sur desktop
 * 
 * Gap entre titre et description :
 *   - gap-4 : 16px sur mobile
 *   - sm:gap-6 : 24px sur tablette
 *   - md:gap-12 : 48px sur desktop
 *   - lg:gap-16 : 64px sur grand écran
 * 
 * Marge bas de l'image :
 *   - mb-4 : 16px sur mobile
 *   - sm:mb-6 : 24px sur tablette
 *   - md:mb-0 : Pas de marge sur desktop
 * 
 * =============================================================================
 * ✨ ANIMATIONS
 * =============================================================================
 * 
 * Image avec animation AOS :
 *   - data-aos="zoom-in-down" : L'image apparaît en zoomant vers le bas
 *   - data-aos-duration="1000" : Durée de 1 seconde
 *   
 * Autres animations possibles :
 *   - "fade-up", "fade-down", "fade-left", "fade-right"
 *   - "zoom-in", "zoom-out", "zoom-in-up"
 *   - "flip-left", "flip-right"
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * - connectivity.tagline : Petit texte au-dessus du titre
 * - connectivity.title : Titre principal (peut contenir des <br>)
 * - connectivity.description : Description (peut contenir des <br>)
 * 
 * Note : On utilise <Trans> au lieu de t() pour permettre les balises HTML
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

/**
 * 🖼️ IMAGE DE LA COMMUNAUTÉ
 * Pour changer cette image, remplacez le fichier à :
 * src/assets/imgs/CommunityImage.png
 */
import CommunityImage from "../../assets/imgs/CommunityImage.png";

// useTranslation : Hook standard pour les traductions
// Trans : Composant pour les traductions avec balises HTML (comme <br>)
import { useTranslation, Trans } from "react-i18next";

// -----------------------------------------------------------------------------
// COMPOSANT CONNECTIVITY
// -----------------------------------------------------------------------------

export default function Connectivity() {
  const { t } = useTranslation();

  return (
    <section className="bg-wespee-white sm:-mt-16 lg:mt-0 relative overflow-hidden">
      {/* Titre + Tagline dans un container paddé */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-5 items-start mb-4 sm:mb-6 md:mb-12 w-full">
            {/* COLONNE GAUCHE : Titre */}
            <div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-2 sm:mb-3 mt-5 text-black/60 font-athletics font-normal">
                {t("connectivity.tagline")}
              </p>
              <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-athletics font-medium leading-tight">
                <Trans i18nKey="connectivity.title" />
              </h2>
            </div>

            {/* COLONNE DROITE : Description (desktop uniquement) */}
            <div className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] text-black/70 font-athletics">
              <p>
                <Trans i18nKey="connectivity.description" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image dans le container paddé (même largeur que le contenu) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="w-full mb-4 sm:mb-6 md:mb-0"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img
            src={CommunityImage}
            alt="Communauté Wespee"
            className="w-full h-[250px] xs:h-[280px] sm:h-[320px] md:h-[400px] lg:h-auto object-cover"
          />
        </div>
      </div>

      {/* Description mobile : dans un container paddé */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="md:hidden text-[16px] sm:text-[18px] mb-6 sm:mb-8 font-athletics font-normal">
          <p>
            <Trans i18nKey="connectivity.description" />
          </p>
        </div>
      </div>
    </section>
  );
}
