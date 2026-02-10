/**
 * =============================================================================
 * I18N/INDEX.TS - Configuration du système de traduction multilingue
 * =============================================================================
 * 
 * i18next est une librairie de traduction (internationalisation = i18n).
 * Elle permet d'afficher le site dans différentes langues selon les préférences
 * de l'utilisateur.
 * 
 * Comment ça fonctionne :
 * 1. On définit les traductions dans des fichiers JSON (fr.json, en.json)
 * 2. On configure i18next pour charger ces traductions
 * 3. Dans les composants, on utilise le hook useTranslation()
 * 4. La fonction t("clé") retourne le texte dans la langue active
 * 
 * Exemple d'utilisation dans un composant :
 * 
 *   import { useTranslation } from "react-i18next";
 *   
 *   function MonComposant() {
 *     const { t } = useTranslation();
 *     return <h1>{t("hero.title.line1")}</h1>;
 *   }
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// i18n : L'instance principale de i18next
import i18n from "i18next";

// initReactI18next : Plugin qui connecte i18next à React
// Permet d'utiliser les hooks comme useTranslation()
import { initReactI18next } from "react-i18next";

// LanguageDetector : Plugin qui détecte automatiquement la langue du navigateur
// Ainsi, un utilisateur français verra le site en français automatiquement
import LanguageDetector from "i18next-browser-languagedetector";

// Fichiers de traduction : Contiennent tous les textes du site
// Chaque fichier est un objet JSON avec des clés imbriquées
import fr from "./locales/fr.json";
import en from "./locales/en.json";

// -----------------------------------------------------------------------------
// CONFIGURATION I18NEXT
// -----------------------------------------------------------------------------

i18n
  // Étape 1 : Activer la détection automatique de la langue
  // Le plugin analyse le navigateur pour trouver la langue préférée
  .use(LanguageDetector)
  
  // Étape 2 : Connecter i18next à React
  // Cela permet l'utilisation des hooks et du contexte React
  .use(initReactI18next)
  
  // Étape 3 : Initialiser avec la configuration
  .init({
    // Les ressources contiennent toutes les traductions
    // Format : { codeLangue: { namespace: traductions } }
    // Le namespace "translation" est le namespace par défaut
    resources: {
      fr: { translation: fr },  // Français
      en: { translation: en },  // Anglais
    },
    
    // Langue de secours si la langue détectée n'est pas disponible
    // Exemple : Un utilisateur espagnol verra le site en français
    fallbackLng: "fr",
    
    // Configuration de l'interpolation (remplacement de variables)
    // escapeValue: false car React gère déjà l'échappement XSS
    interpolation: {
      escapeValue: false,
    },
    
    // Configuration du détecteur de langue
    detection: {
      // Ordre de priorité pour détecter la langue :
      // 1. "navigator" : La langue configurée dans le navigateur
      // 2. "htmlTag" : L'attribut lang de la balise <html>
      order: ["navigator", "htmlTag"],
      
      // Ne pas mettre en cache la langue détectée
      // Ainsi, si l'utilisateur change la langue de son navigateur,
      // le changement sera pris en compte
      caches: [],
    },
  });

// Exporter l'instance configurée
// Cet export n'est pas directement utilisé car l'import dans main.jsx
// suffit à initialiser i18next pour toute l'application
export default i18n;
