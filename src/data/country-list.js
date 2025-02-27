const BASE_URL = import.meta.env.BASE_URL;

export const countryList = [
  {
    language: 'fr',
    placeholderTraduc: 'Ecrivez votre recherche en français',
    iconSrcCountry: `${BASE_URL}icons/flag-france.svg`,
  },
  {
    language: 'en',
    placeholderTraduc: 'Write your search in english',
    iconSrcCountry: `${BASE_URL}icons/flag-england.svg`,
  },
  {
    language: 'de',
    placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch',
    iconSrcCountry: `${BASE_URL}icons/flag-germany.svg`,
  },
  { language: 'zh', placeholderTraduc: '用中文写下您的搜索', iconSrcCountry: `${BASE_URL}icons/flag-china.svg` },
  {
    language: 'es',
    placeholderTraduc: 'Escriba su investigación en español',
    iconSrcCountry: `${BASE_URL}icons/flag-spain.svg`,
  },
  {
    language: '*',
    placeholderTraduc: 'You can write in any language 🤪',
    iconSrcCountry: `${BASE_URL}icons/flag-earth.svg`,
  },
];
