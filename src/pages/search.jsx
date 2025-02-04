import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
// import Results from './results';
import './search.scss';

const placeholderList = [
  { language: 'Français', placeholderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeholderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeholderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeholderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      navigate(`/recherche/resultats-de-recherche?query=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {/*Plus tard afficher le placeholder selon langue choisie */}
      <div
        className={
          location.pathname === '/recherche/article-choisi' || location.pathname === '/recherche/resultats-de-recherche'
            ? 'search-container-no-display'
            : 'search-container'
        }
      >
        <div
          className={
            location.pathname === '/recherche/oops' ||
            location.pathname === '/recherche/article-choisi' ||
            location.pathname === '/recherche/resultats-de-recherche'
              ? 'search-bar-no-display'
              : 'search-bar'
          }
        >
          <img src='/icons/search.png' onClick={handleSearch} style={{ cursor: 'pointer' }} alt='Rechercher' />

          <input
            type='search'
            placeholder='Ecrivez votre recherche en français'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div
          className={
            location.pathname === '/recherche/article-choisi' ||
            location.pathname === '/recherche/oops' ||
            location.pathname === '/recherche/resultats-de-recherche'
              ? 'search-random-no-display'
              : 'search-random'
          }
        >
          <ButtonRandom />
        </div>
      </div>

      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Link to='resultats-de-recherche'>Résultat de recherche</Link>

      <Outlet />
    </>
  );
}
