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

      {/* Language Selector */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-black p-1 rounded"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="mr">मराठी</option>
        <option value="te">తెలుగు</option>
      </select>
    </nav>
  );
}

