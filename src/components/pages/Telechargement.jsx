/**
 * =============================================================================
 * TELECHARGEMENT.JSX - Page de téléchargement de l'application
 * =============================================================================
 * 
 * Cette page permet aux utilisateurs de télécharger l'application Wespee.
 * Elle a deux versions distinctes :
 * - VERSION MOBILE : Boutons App Store / Google Play + image
 * - VERSION DESKTOP : Image + titre + boutons + QR code
 * 
 * Route : /telechargement (définie dans App.jsx)
 * 
 * =============================================================================
 * 🖼️ IMAGES À MODIFIER
 * =============================================================================
 * 
 * 1. PhonePeople (ligne 1) : Image principale (téléphone avec personnes)
 *    - Fichier : src/assets/imgs/PhonePeople.png
 *    - Dimensions mobile : 220-260px de large
 *    - Dimensions desktop : 280-360px de large
 *    - Format : PNG avec fond transparent recommandé
 * 
 * 2. QrCode (ligne 2) : QR code pour télécharger l'app
 *    - Fichier : src/assets/imgs/qr-code.png
 *    - Dimensions : 60-70px
 *    - Note : Générez un QR pointant vers vos liens de stores
 * 
 * 3. AppStore (ligne 3) : Icône Apple App Store
 *    - Fichier : src/assets/icons/appstore.png
 *    - Dimensions : 24-28px
 *    - Format : PNG avec fond transparent
 * 
 * 4. PlayStore (ligne 4) : Icône Google Play Store
 *    - Fichier : src/assets/icons/playstore.png
 *    - Dimensions : 24-28px
 *    - Format : PNG avec fond transparent
 * 
 * =============================================================================
 * 📏 ESPACEMENTS MODIFIABLES
 * =============================================================================
 * 
 * VERSION MOBILE :
 *   Gap entre éléments :
 *   - gap-4 : 16px sur très petit mobile
 *   - sm:gap-5 : 20px sur petit mobile
 *   - md:gap-6 : 24px sur tablette
 * 
 *   Gap entre boutons stores :
 *   - gap-3 : 12px
 * 
 *   Marge haut de l'image :
 *   - mt-4 : 16px sur mobile
 *   - sm:mt-6 : 24px sur tablette
 * 
 * VERSION DESKTOP :
 *   Gap principal :
 *   - gap-8 : 32px entre image et contenu
 * 
 *   Gap dans le contenu :
 *   - gap-6 md:gap-7 lg:gap-8 : 24-32px entre sections
 * 
 *   Gap entre boutons stores :
 *   - gap-3 md:gap-4 : 12-16px
 * 
 *   Gap QR code et texte :
 *   - gap-4 md:gap-5 lg:gap-6 : 16-24px
 * 
 * =============================================================================
 * 🎨 COULEURS
 * =============================================================================
 * 
 * - Fond boutons stores : bg-[#121212] (noir quasi-pur)
 * - Texte boutons : text-white
 * - Fond QR code : bg-[#06D432] (vert Wespee)
 * - Texte principal : text-black
 * - Sous-titre : text-black/60 (noir 60% opacité)
 * 
 * =============================================================================
 * 🔤 TEXTES (clés i18n)
 * =============================================================================
 * 
 * Mobile :
 * - download.title : Titre mobile ("Get the Wespee app")
 * - download.subtitle : Sous-titre
 * 
 * Desktop :
 * - download.titleDesktop-line1 : Ligne 1 du titre desktop
 * - download.titleDesktop-line2 : Ligne 2
 * - download.titleDesktop-line3 : Ligne 3
 * 
 * Boutons :
 * - download.appStore.small : Petit texte ("Download on the")
 * - download.playStore.small : Petit texte ("Available on")
 * 
 * QR Code :
 * - download.qrText-line1 : Ligne 1 du texte QR
 * - download.qrText-line2 : Ligne 2
 * - download.qrText-line3 : Ligne 3
 * 
 * =============================================================================
 * 📱 COMPORTEMENT RESPONSIVE
 * =============================================================================
 * 
 * - md:hidden : Version MOBILE visible en dessous de 768px
 * - hidden md:flex : Version DESKTOP visible à partir de 768px
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

/**
 * 🖼️ IMAGE PRINCIPALE (Téléphone avec personnes)
 * Pour changer : Remplacez src/assets/imgs/PhonePeople.png
 */
import PhonePeople from "../../assets/imgs/PhonePeople.png";

/**
 * 🖼️ QR CODE
 * Pour changer : Remplacez src/assets/imgs/qr-code.png
 * 
 * Pour générer un nouveau QR :
 * 1. Allez sur https://www.qr-code-generator.com/
 * 2. Entrez le lien vers votre app (ou un lien universel)
 * 3. Téléchargez en PNG 512x512px minimum
 */
import QrCode from "../../assets/imgs/qr-code.png";

/**
 * 🖼️ ICÔNE APP STORE
 * Pour changer : Remplacez src/assets/icons/appstore.png
 */
import AppStore from "../../assets/icons/appstore.png";

/**
 * 🖼️ ICÔNE GOOGLE PLAY
 * Pour changer : Remplacez src/assets/icons/playstore.png
 */
import PlayStore from "../../assets/icons/playstore.png";

import { useTranslation } from "react-i18next";

// -----------------------------------------------------------------------------
// COMPOSANT TELECHARGEMENT
// -----------------------------------------------------------------------------

export default function Telechargement() {
  const { t } = useTranslation();

  return (
    /**
     * SECTION CONTAINER
     * min-h-screen : Au moins 100% de la hauteur de l'écran
     */
    <section>

      {/* =====================================================================
          VERSION MOBILE (visible en dessous de 768px)
          
          md:hidden = caché à partir de 768px
          
          Layout : Éléments empilés verticalement, centrés
          ===================================================================== */}
      <div className="md:hidden h-[calc(100dvh-250px)] flex flex-col items-center justify-center px-4 sm:px-6 text-center gap-4 sm:gap-5 md:gap-6">

        {/* -----------------------------------------------------------------
            TITRE MOBILE
            
            📏 TAILLES DE TEXTE :
            - text-[36px] : 36px sur très petit mobile
            - xs:text-[32px] : 32px sur petit mobile
            - sm:text-[36px] : 36px sur tablette
            
            🎨 STYLE : leading-[1.1] = interligne très serré
            ----------------------------------------------------------------- */}
        <p className="text-[36px] xs:text-[32px] sm:text-[36px] leading-[1.1] font-athletics font-medium text-black px-2">
          {t("download.title")}
        </p>

        {/* SOUS-TITRE */}
        <p className="text-[18px] sm:text-sm text-black/60 px-2">
          {t("download.subtitle")}
        </p>

        {/* -----------------------------------------------------------------
            BOUTONS STORES (Mobile)
            
            📏 GAP : gap-3 (12px) entre les deux boutons
            📏 MARGE HAUT : mt-2 (8px)
            ----------------------------------------------------------------- */}
        <div className="flex flex-row gap-3 mt-2 w-full max-w-sm px-2">

          {/* ---------------------------------------------------------
              BOUTON APP STORE (Mobile)
              
              📏 DIMENSIONS :
              - w-full xs:w-[150px] : Pleine largeur ou 150px
              - h-[52px] xs:h-[56px] : Hauteur 52-56px
              
              🎨 COULEURS :
              - bg-[#121212] : Fond noir
              - text-white : Texte blanc
              
              🎨 STYLE :
              - rounded-full : Bouton pilule
              --------------------------------------------------------- */}
          <div className="flex items-center justify-center w-full xs:w-[150px] h-[52px] xs:h-[56px] gap-2.5 xs:gap-3 bg-[#121212] rounded-full text-white">
            {/* Icône App Store */}
            <img src={AppStore} alt="App Store" className="w-5 h-5 xs:w-6 xs:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] xs:text-[10px] opacity-80">{t("download.appStore.small")}</span>
              <span className="text-[13px] xs:text-[14px] font-semibold">App Store</span>
            </div>
          </div>

          {/* ---------------------------------------------------------
              BOUTON GOOGLE PLAY (Mobile)
              Même structure que App Store
              --------------------------------------------------------- */}
          <div className="flex items-center justify-center w-full xs:w-[150px] h-[52px] xs:h-[56px] gap-2.5 xs:gap-3 bg-[#121212] rounded-full text-white">
            <img src={PlayStore} alt="Google Play" className="w-5 h-5 xs:w-6 xs:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] xs:text-[10px] opacity-80">{t("download.playStore.small")}</span>
              <span className="text-[13px] xs:text-[14px] font-semibold">Google Play</span>
            </div>
          </div>

        </div>

        {/* -----------------------------------------------------------------
            🖼️ IMAGE MOBILE
            
            📏 DIMENSIONS RESPONSIVE :
            - w-[220px] : 220px sur très petit mobile
            - xs:w-[240px] : 240px sur petit mobile
            - sm:w-[260px] : 260px sur tablette
            
            📏 MARGE HAUT :
            - mt-4 : 16px sur mobile
            - sm:mt-6 : 24px sur tablette
            ----------------------------------------------------------------- */}
        <img
          src={PhonePeople}
          alt="Wespee app"
          className="w-[220px] xs:w-[240px] sm:w-[260px] mt-4 sm:mt-6"
        />
      </div>

      {/* =====================================================================
          VERSION DESKTOP (visible à partir de 768px)
          
          hidden md:flex = caché sur mobile, flex à partir de 768px
          
          Layout : Image à gauche, contenu à droite
          ===================================================================== */}
      <div className="hidden md:flex h-[calc(100dvh-250px)] items-center justify-center px-6 lg:px-10">
        <div className="max-w-7xl w-full flex items-center justify-between gap-8">

          {/* -----------------------------------------------------------------
              🖼️ IMAGE DESKTOP (Colonne gauche - 50%)
              
              📏 DIMENSIONS :
              - w-[280px] : 280px sur tablette
              - lg:w-[320px] : 320px sur desktop
              - xl:w-[360px] : 360px sur grand écran
              ----------------------------------------------------------------- */}
          <div className="w-1/2 flex justify-center">
            <img
              src={PhonePeople}
              alt="Wespee app"
              className="w-[280px] lg:w-[320px] xl:w-[360px]"
            />
          </div>

          {/* -----------------------------------------------------------------
              CONTENU DESKTOP (Colonne droite - 50%)
              
              📏 GAP entre les sections :
              - gap-6 : 24px sur tablette
              - md:gap-7 : 28px sur desktop
              - lg:gap-8 : 32px sur grand écran
              ----------------------------------------------------------------- */}
          <div className="w-1/2 flex flex-col gap-6 md:gap-7 lg:gap-8">

            {/* BLOC TITRE + SOUS-TITRE */}
            <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
              {/* ---------------------------------------------------------
                  TITRE DESKTOP (3 lignes)
                  
                  📏 TAILLES DE TEXTE :
                  - text-[50px] : 50px sur tablette
                  - md:text-[60px] : 60px sur desktop
                  - lg:text-[70px] : 70px sur grand écran
                  - xl:text-[80px] : 80px sur très grand écran
                  --------------------------------------------------------- */}
              <p className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1] font-athletics font-medium text-black">
                {t("download.titleDesktop-line1")} <br />
                {t("download.titleDesktop-line2")}<br />
                {t("download.titleDesktop-line3")}
              </p>

              <p className="text-xs sm:text-sm text-black/60">
                {t("download.subtitle")}
              </p>
            </div>

            {/* ---------------------------------------------------------
                BOUTONS STORES (Desktop)
                
                📏 GAP : gap-3 md:gap-4 (12-16px)
                --------------------------------------------------------- */}
            <div className="flex gap-3 md:gap-4">

              {/* BOUTON APP STORE (Desktop)
                  
                  📏 DIMENSIONS RESPONSIVE :
                  - w-[180px] md:w-[195px] lg:w-[210.42px]
                  - h-[60px] md:h-[65px] lg:h-[69.5px]
                  
                  🎨 STYLE :
                  - bg-[#121212] : Fond noir
                  - rounded-[70px] à rounded-[80.94px] : Pilule
              */}
              <div className="flex items-center w-[180px] md:w-[195px] lg:w-[210.42px] h-[60px] md:h-[65px] lg:h-[69.5px] px-[24px] md:px-[26px] lg:px-[28.5px] py-[12px] md:py-[13px] lg:py-[13.53px] gap-[10px] md:gap-[11px] lg:gap-[11.4px] bg-[#121212] rounded-[70px] md:rounded-[75px] lg:rounded-[80.94px] text-white">
                <img src={AppStore} alt="App Store" className="w-[24px] md:w-[26px] lg:w-[28px] h-[24px] md:h-[26px] lg:h-[28px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] md:text-[10.5px] lg:text-[11px] opacity-80">{t("download.appStore.small")}</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold">App Store</span>
                </div>
              </div>

              {/* BOUTON GOOGLE PLAY (Desktop) - Même structure */}
              <div className="flex items-center w-[180px] md:w-[195px] lg:w-[210.42px] h-[60px] md:h-[65px] lg:h-[69.5px] px-[24px] md:px-[26px] lg:px-[28.5px] py-[12px] md:py-[13px] lg:py-[13.53px] gap-[10px] md:gap-[11px] lg:gap-[11.4px] bg-[#121212] rounded-[70px] md:rounded-[75px] lg:rounded-[80.94px] text-white">
                <img src={PlayStore} alt="Google Play" className="w-[24px] md:w-[26px] lg:w-[28px] h-[24px] md:h-[26px] lg:h-[28px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] md:text-[10.5px] lg:text-[11px] opacity-80">{t("download.playStore.small")}</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold">Google Play</span>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------------
                🖼️ QR CODE + TEXTE
                
                📏 GAP :
                - gap-4 : 16px sur tablette
                - md:gap-5 : 20px sur desktop
                - lg:gap-6 : 24px sur grand écran
                --------------------------------------------------------- */}
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6">

              {/* Conteneur QR Code avec fond vert */}
              <div className="bg-[#06D432] rounded-lg md:rounded-xl p-2.5 md:p-3">
                {/* ---------------------------------------------------------
                    QR CODE
                    
                    📏 DIMENSIONS :
                    - w-[60px] h-[60px] : 60x60px sur tablette
                    - md:w-[65px] md:h-[65px] : 65x65px sur desktop
                    - lg:w-[70px] lg:h-[70px] : 70x70px sur grand écran
                    --------------------------------------------------------- */}
                <img src={QrCode} alt="QR Code" className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]" />
              </div>

              {/* Texte à côté du QR (3 lignes) */}
              <p className="text-[20px] md:text-[22px] lg:text-[25px] leading-[1] font-athletics text-black">
                {t("download.qrText-line1")}
                <br />
                {t("download.qrText-line2")}
                <br />
                {t("download.qrText-line3")}
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
