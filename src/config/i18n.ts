import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANG_DEFAULT } from './config';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: LANG_DEFAULT,
    debug: false,
    nsSeparator: '->',
    react: {
      useSuspense: true
    },
    backend: {
      loadPath:
        (process.env.NODE_ENV === 'production' ? window.location.origin + '/' : '') + 'assets/locales/es/{{ns}}.json'
    }
  });

export default i18n;