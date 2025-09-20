import { useState } from "react";
import translations from "../translations";
import { useTranslation } from "react-i18next";


export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="flex justify-between p-4 bg-green-600 text-white">
      <div>{t("navbar.home")}</div>
      <div>{t("navbar.about")}</div>
      <div>{t("navbar.contact")}</div>

    </nav>
  );
}

