/**
 * =============================================================================
 * CONDITION.JSX - Section Conditions d'utilisation
 * =============================================================================
 * 
 * Cette section affiche les 10 conditions d'utilisation de Wespee.
 * Les conditions sont stockées dans les fichiers de traduction i18n
 * et affichées dynamiquement via une boucle.
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * Marge bas de la section :
 *   - mb-12 : 48px sur mobile
 *   - sm:mb-16 : 64px sur tablette
 *   - md:mb-20 : 80px sur desktop
 * 
 * Marge bas du titre :
 *   - mb-8 : 32px sur mobile
 *   - sm:mb-10 : 40px sur tablette
 *   - md:mb-12 : 48px sur desktop
 * 
 * Espace entre les conditions :
 *   - space-y-3 : 12px sur mobile
 *   - sm:space-y-4 : 16px sur tablette+
 * 
 * =============================================================================
 * 🎨 COULEURS
 * =============================================================================
 * 
 * - Fond : bg-white (blanc)
 * - Titre : text-black (noir par défaut)
 * - Texte conditions : text-black/70 (noir 70% opacité)
 * - Titres conditions : font-bold (gras)
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * Structure dans les fichiers de traduction :
 * 
 * {
 *   "conditions": {
 *     "title": "Conditions d'utilisation",
 *     "items": {
 *       "1": {
 *         "title": "Objet",
 *         "text": "Les présentes CGU définissent..."
 *       },
 *       "2": {
 *         "title": "Inscription",
 *         "text": "Pour utiliser Wespee..."
 *       },
 *       ... (jusqu'à 10)
 *     }
 *   }
 * }
 * 
 * Pour ajouter/modifier des conditions :
 *   1. Éditez src/i18n/locales/fr.json et en.json
 *   2. Ajoutez les clés sous conditions.items
 *   3. Modifiez le tableau [1,2,3...10] dans la boucle ci-dessous
 * 
 * =============================================================================
 * ➕ AJOUTER UNE CONDITION
 * =============================================================================
 * 
 * 1. Dans fr.json et en.json, ajoutez sous "items" :
 *    "11": {
 *      "title": "Nouveau titre",
 *      "text": "Nouveau texte..."
 *    }
 * 
 * 2. Modifiez la ligne 17 ci-dessous :
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

import { useTranslation } from "react-i18next";

// -----------------------------------------------------------------------------
// COMPOSANT CONDITIONS
// -----------------------------------------------------------------------------

export default function Conditions() {
  const { t } = useTranslation();

  return (
    /**
     * 📏 SECTION CONTAINER
     * 
     * bg-white : Fond blanc
     * 
     * MARGE BAS (espace avant le footer) :
     * - mb-12 : 48px sur mobile
     * - sm:mb-16 : 64px sur tablette
     * - md:mb-20 : 80px sur desktop
     */
    <section className="bg-wespee-white mb-12 sm:mb-16 md:mb-20">

      {/* Container avec largeur max et padding horizontal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================================
            TITRE DE LA SECTION
            
            📏 TAILLES DE TEXTE :
            - text-xl : 20px sur très petit mobile
            - xs:text-2xl : 24px sur petit mobile
            - sm:text-2xl : 24px sur tablette
            - md:text-3xl : 30px sur desktop
            
            📏 MARGE BAS :
            - mb-8 : 32px sur mobile
            - sm:mb-10 : 40px sur tablette
            - md:mb-12 : 48px sur desktop
            
            🎨 STYLE : font-athletics font-medium text-center
            ================================================================= */}
        <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-athletics font-medium text-center mb-8 sm:mb-10 md:mb-12">
          {t("conditions.title")}
        </h2>

        {/* =================================================================
            LISTE DES CONDITIONS

            📏 TAILLE TEXTE :
            - text-[16px] : 16px sur mobile
            - sm:text-[18px] : 18px sur tablette
            - md:text-[20px] : 20px sur desktop
            (Même taille que "Télécharger l'application Wespee")

            🎨 COULEUR : text-black/70 (noir 70% opacité)

            📏 ESPACEMENT ENTRE LES CONDITIONS :
            - space-y-3 : 12px sur mobile
            - sm:space-y-4 : 16px sur tablette+

            Pour modifier l'espacement, changez space-y-X
            ================================================================= */}
        <div className="text-[13px] sm:text-[14px] md:text-[15px] text-black/70 leading-relaxed space-y-4 sm:space-y-5 md:space-y-6 font-athletics">

          {/* -----------------------------------------------------------------
              BOUCLE SUR LES 10 CONDITIONS
              
              Pour ajouter des conditions :
              1. Ajoutez dans fr.json/en.json sous conditions.items
              2. Étendez ce tableau : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]
              ----------------------------------------------------------------- */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            /**
             * STRUCTURE D'UNE CONDITION :
             * 
             * {numéro}. **{titre}** : {texte}
             * 
             * Exemple :
             * 1. **Objet** : Les présentes CGU définissent les conditions...
             * 
             * 🔤 CLÉS I18N :
             * - conditions.items.{i}.title : Titre en gras
             * - conditions.items.{i}.text : Texte explicatif
             */
            <p key={i}>
              {i}. <span dangerouslySetInnerHTML={{ __html: t(`conditions.items.${i}.title`) }} /> :{" "}
              <span dangerouslySetInnerHTML={{ __html: t(`conditions.items.${i}.text`) }} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
