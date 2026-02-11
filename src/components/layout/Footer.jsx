/**
 * =============================================================================
 * FOOTER.JSX - Pied de page
 * =============================================================================
 * 
 * Ce composant affiche le pied de page présent sur toutes les pages.
 * 
 * Structure :
 * 1. Logo Wespee (version footer)
 * 2. Liens légaux (Politique de confidentialité, CGU)
 * 3. Copyright
 * 4. Icônes des réseaux sociaux
 * 
 * Responsive :
 * - Sur mobile : éléments empilés verticalement
 * - Sur desktop (md:) : disposition en ligne avec justify-between
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Logo spécifique pour le footer (peut être différent du header)
import Logo from "../../assets/imgs/wespee footer logo.svg";

// Icônes des réseaux sociaux depuis react-icons
// fa6 = Font Awesome 6 (version la plus récente)
import {
  FaYoutube,      // YouTube
  FaXTwitter,     // X (anciennement Twitter)
  FaFacebookF,    // Facebook
  FaLinkedinIn,   // LinkedIn
  FaInstagram,    // Instagram
  FaTiktok,       // TikTok
} from "react-icons/fa6";

// Hook de traduction pour les textes multilingues
import { useTranslation } from "react-i18next";

// Hook pour détecter la page courante
import { useLocation } from "react-router-dom";

// -----------------------------------------------------------------------------
// COMPOSANT FOOTER
// -----------------------------------------------------------------------------

/**
 * Composant Footer
 * 
 * Affiche le pied de page avec :
 * - Le logo de la marque
 * - Les liens légaux
 * - Le copyright
 * - Les liens vers les réseaux sociaux
 */
export default function Footer() {
  // Hook de traduction
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={`bg-wespee-white border-t border-black/10 ${isHomePage ? "mb-20" : ""}`}>
      {/*
        mb-20 : Marge en bas uniquement sur la HomePage pour éviter
        que le contenu soit caché par le bouton de téléchargement fixe
      */}
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

        {/* =================================================================
            LIGNE 1 : Logo + Liens légaux
            ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* -----------------------------------------------------------------
              LOGO
              Logo Wespee pour le footer
              ----------------------------------------------------------------- */}
          <div className="flex justify-start">
            <img
              src={Logo}
              alt="Wespee"
              className="w-[180px] h-[45px]"
            />
          </div>

          {/* -----------------------------------------------------------------
              LIENS LÉGAUX
              Politique de confidentialité et Conditions d'utilisation
              ----------------------------------------------------------------- */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-md text-[#121212]">
            {/* Lien vers la politique de confidentialité */}
            <a href="#" className="hover:text-black transition font-athletics">
              {t("footer.privacy")}
            </a>
            
            {/* Lien vers les conditions d'utilisation */}
            <a href="#" className="hover:text-black transition font-athletics">
              {t("footer.terms")}
            </a>
          </div>

        </div>

        {/* =================================================================
            LIGNE 2 : Copyright + Réseaux sociaux
            ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* -----------------------------------------------------------------
              COPYRIGHT
              "Tous droits réservés ©2025 Bicents"
              ----------------------------------------------------------------- */}
          <p className="text-md text-black/60 text-left font-athletics font-normal">
            {t("footer.rights")} ©2025{" "}
            {/* Le nom de l'entreprise est en gras */}
            <span className="font-athletics font-bold text-black">Bicents</span>
          </p>

          {/* -----------------------------------------------------------------
              RÉSEAUX SOCIAUX
              Icônes cliquables pour chaque plateforme
              ----------------------------------------------------------------- */}
          <div className="flex items-center justify-start md:justify-end gap-4 text-black">
            {/* Chaque icône a un effet hover avec réduction d'opacité */}
            <FaYoutube className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaXTwitter className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaFacebookF className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaLinkedinIn className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaInstagram className="w-4 h-4 cursor-pointer hover:opacity-70" />
            <FaTiktok className="w-4 h-4 cursor-pointer hover:opacity-70" />
          </div>

        </div>

      </div>
    </footer>
  );
}
