/**
 * =============================================================================
 * TELECHARGEMENT.JSX - Page de téléchargement de l'application
 * =============================================================================
 *
 * Layout unique responsive :
 * - Mobile : contenu empilé (titre, boutons, image en bas)
 * - Desktop (md+) : image à gauche, contenu à droite
 *
 * Route : /telechargement
 */

import PhonePeople from "../../assets/imgs/PhonePeople.png";
import QrCode from "../../assets/imgs/qr-code.png";
import AppStore from "../../assets/icons/appstore.png";
import PlayStore from "../../assets/icons/playstore.png";
import { useTranslation } from "react-i18next";

export default function Telechargement() {
  const { t } = useTranslation();

  return (
    <section className="h-[calc(75svh-10px)] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 gap-[2vh] md:gap-10 lg:gap-16 -mt-19 md:mt-0 max-w-7xl mx-auto overflow-hidden">

      {/* IMAGE — en bas sur mobile (order-2), à gauche sur desktop (order-1) */}
      <div className="order-2 md:order-1 md:w-[45%] flex justify-center items-center">
        <img
          src={PhonePeople}
          alt="Wespee app"
          className="max-h-[45svh] w-auto md:max-h-[75svh] md:w-auto lg:max-h-[48svh] object-contain"
        />
      </div>

      {/* CONTENU — en haut sur mobile (order-1), à droite sur desktop (order-2) */}
      <div className="order-1 md:order-2 md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 lg:gap-8">

        {/* Titre — fluid typography */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-[clamp(1.75rem,6vw,5rem)] leading-[1.05] font-athletics font-medium text-black">
            {t("download.titleDesktop-line1")}
            <br className="hidden md:inline" />{" "}
            {t("download.titleDesktop-line2")}
            <br />
            {t("download.titleDesktop-line3")}
          </h1>

          <p className="text-sm md:text-base text-black/60 font-athletics">
            {t("download.subtitle")}
          </p>
        </div>

        {/* Boutons stores */}
        <div className="flex gap-3 md:gap-4">
          {/* App Store */}
          <div className="flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 md:py-3.5 bg-[#121212] rounded-full text-white">
            <img src={AppStore} alt="App Store" className="w-5 h-5 md:w-6 md:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] md:text-[11px] opacity-80">{t("download.appStore.small")}</span>
              <span className="text-[13px] md:text-[16px] font-semibold">App Store</span>
            </div>
          </div>

          {/* Google Play */}
          <div className="flex items-center justify-center gap-2.5 px-5 md:px-6 py-3 md:py-3.5 bg-[#121212] rounded-full text-white">
            <img src={PlayStore} alt="Google Play" className="w-5 h-5 md:w-6 md:h-6" />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[9px] md:text-[11px] opacity-80">{t("download.playStore.small")}</span>
              <span className="text-[13px] md:text-[16px] font-semibold">Google Play</span>
            </div>
          </div>
        </div>

        {/* QR Code — desktop uniquement */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="bg-[#06D432] rounded-xl p-3">
            <img src={QrCode} alt="QR Code" className="w-16 h-16 lg:w-[70px] lg:h-[70px]" />
          </div>
          <p className="text-xl lg:text-[25px] leading-[1.2] font-athletics text-black">
            {t("download.qrText-line1")}
            <br />
            {t("download.qrText-line2")}
            <br />
            {t("download.qrText-line3")}
          </p>
        </div>

      </div>
    </section>
  );
}
