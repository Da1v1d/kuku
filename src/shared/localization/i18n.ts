// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// Initialize i18next
i18n
  // Load translations using http (default public directory)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language
    debug: false, // Set to true for debugging

    // Specify the backend options
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },

    // Enable React suspense (optional)
    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false, // React already safeguards from XSS
    },
  });

export default i18n;
