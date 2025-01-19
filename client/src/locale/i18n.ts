import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ENVIRONMENTS } from '../common/constants';
import en from './translation.json';

export const resources = {
  en: {
    translation: en
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.REACT_APP_ENVIRONMENT === ENVIRONMENTS.LOCAL,

    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
