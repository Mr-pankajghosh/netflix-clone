import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationHI from './locales/hi.json';
import translationBN from './locales/bn.json';
import translationOR from './locales/or.json';
import translationGU from './locales/gu.json'; 
import translationTA from './locales/ta.json';
import translationTE from './locales/te.json';
import translationKN from  './locales/kn.json';
import translationBHO from  './locales/bho.json';
import translationML from  './locales/ml.json';
import translationMR from  './locales/mr.json';
import translationPA from  './locales/pa.json';
import translationUR from  './locales/ur.json';
import translationNE from  './locales/ne.json';
import translationAS from  './locales/as.json';
import translationFR from  './locales/fr.json';
import translationES from  './locales/es.json';
import translationZH from  './locales/zh.json';
import translationAR from  './locales/ar.json';


const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  bn: { translation: translationBN },
  or: { translation: translationOR },
  gu: { translation: translationGU },
  ta: { translation: translationTA },
  te: { translation: translationTE },
  kn: { translation: translationKN},
  bho: { translation: translationBHO },
  ml: { translation: translationML },
  mr: { translation: translationMR },
  pa: { translation: translationPA },
  ur: { translation: translationUR },
  ne: { translation: translationNE },
  as: { translation: translationAS },
  fr: { translation: translationFR },
  es: { translation: translationES },
  zh: { translation: translationZH },
  ar: { translation: translationAR },

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
