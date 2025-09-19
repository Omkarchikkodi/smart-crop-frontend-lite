import React from "react";
import { useTranslation } from "react-i18next";

function Header({ lang, setLang }) {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-dark-green shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
        {/* Logo + Site name */}
        <div className="flex items-center gap-3">
          <img src="./logo.png" alt="logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-green-200">
            {"KisanMitra"} {/* can be site name */}
          </h1>
        </div>

        {/* Menu */}
        <nav className="mt-3 md:mt-0">
          <ul className="flex gap-6 text-gray-200 font-medium">
            <li className="hover:text-green-400 cursor-pointer">
              {t("navbar.home")}
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              {t("navbar.about")}
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              {t("navbar.contact")}
            </li>
          </ul>
        </nav>

        {/* Language Selector */}
        <select
          value={lang}
          onChange={changeLang}
          className="mt-3 md:mt-0 border rounded px-2 py-1 bg-gray-300"
        >
          <option value="en">English</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
          <option value="te">తెలుగు</option>
          <option value="gu">ગુજરાતી</option>
          <option value="raj">राजस्थानी</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
