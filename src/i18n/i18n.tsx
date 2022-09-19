import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transAr from "./ar.json"
import transEn from "./en.json"

const resources = {
    en: {
        translation: transEn
    },
    ar : {
        translation: transAr
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ar", 

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;