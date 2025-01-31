import { Link, Outlet, useLocation } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import './search.scss';

const placeholderList = [
  { language: 'Français', placeholderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeholderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeholderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeholderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  const location = useLocation();
  return (
    <>
      {/*Plus tard afficher le place holder selon langue choisie */}
      <div
        className={
          location.pathname === '/recherche/article-choisi' ? 'search-container-no-display' : 'search-container'
        }
      >
        <div
          className={
            location.pathname === '/recherche/oops' || location.pathname === '/recherche/article-choisi'
              ? 'search-bar-no-display'
              : 'search-bar'
          }
        >
          <img src='/icons/search.png' />
          <input type='search' placeholder='Ecrivez votre recherche en français '></input>
        </div>

        <div
          className={
            location.pathname === '/recherche/article-choisi' || location.pathname === '/recherche/oops'
              ? 'search-random-no-display'
              : 'search-random'
          }
        >
          {/* <div className='search-random '> */}
          <ButtonRandom />
          {/* </div> */}
        </div>
      </div>

      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Outlet />
    </>
  );
}
