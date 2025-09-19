import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import en from "./en.json";
import hi from "./hi.json";
import kn from "./kn.json";
import mr from "./mr.json";
import te from "./te.json";
import gu from "./gu.json";
import raj from "./raj.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    kn: { translation: kn },
    mr: { translation: mr },
    te: { translation: te },
    gu: { translation: gu },
    raj: { translation: raj }
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
