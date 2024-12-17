// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "ru"],
  ns: ["general"],
  defaultNS: "general",
  debug: process.env.NODE_ENV === "development",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
