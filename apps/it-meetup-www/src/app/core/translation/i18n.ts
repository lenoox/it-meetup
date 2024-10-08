import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { langPl } from '../../../../assets/translation.pl';
import { langEn } from '../../../../assets/translation.en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...langEn,
      },
    },
    pl: {
      translation: {
        ...langPl,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
