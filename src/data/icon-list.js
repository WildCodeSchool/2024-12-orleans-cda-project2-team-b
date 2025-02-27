const BASE_URL = import.meta.env.BASE_URL;

export const iconList = [
  {
    name: 'Accueil',
    imgSrcOn: `${BASE_URL}icons/home-active.png`,
    imgSrcOff: `${BASE_URL}icons/home-inactive.png`,
    link: '/',
  },
  {
    name: 'Recherche',
    imgSrcOn: `${BASE_URL}icons/search-active.png`,
    imgSrcOff: `${BASE_URL}icons/search-inactive.png`,
    link: '/recherche',
  },
  {
    name: 'Favoris',
    imgSrcOn: `${BASE_URL}icons/fav-active.png`,
    imgSrcOff: `${BASE_URL}icons/fav-inactive.png`,
    link: '/favoris',
  },
  {
    name: 'Historique',
    imgSrcOn: `${BASE_URL}icons/histo-active.png`,
    imgSrcOff: `${BASE_URL}icons/histo-inactive.png`,
    link: '/historique',
  },
  {
    name: 'A propos',
    imgSrcOn: `${BASE_URL}icons/about-active.png`,
    imgSrcOff: `${BASE_URL}icons/about-inactive.png`,
    link: '/',
    isModalTrigger: true,
  },
];
