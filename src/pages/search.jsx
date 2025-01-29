import { Link, Outlet, useEffect, useState } from 'react-router-dom';

import Oops from './oops';
import './search.scss';

const placeholderList = [
  { language: 'Français', placeholderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeholderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeholderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeholderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  const [searchValid, setSearchValid] = useState(true);

  useEffect(() => {
    setSearchValid(true);
  });

  return (
    <>
      {searchValid ? (
        <div className='search-bar'>
          <img src='/icons/search.png' alt='Search Icon' />
          <input type='search' placeholder='Écrivez votre recherche en français' />
        </div>
      ) : (
        <Oops />
      )}

      <Link to='resultats-de-recherche' onClick={() => setSearchValid(false)}>
        Résultats de recherche
      </Link>
      <Link to='resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Outlet />
    </>
  );
}
