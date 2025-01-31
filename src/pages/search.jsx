import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { countryList } from '../components/country-list';
import './search.scss';

export default function Search() {
  const location = useLocation();
  const [languageActive, setLanguageActive] = useState(false);

  function handleClickLanguage() {
    if (!languageActive) {
      setLanguageActive(true);
    } else {
      setLanguageActive(false);
    }
  }

  return (
    <>
      {/*Plus tard afficher le place holder selon langue choisie */}
      <div className={location.pathname === '/recherche/oops' ? 'search-bar-no-display' : 'search-bar'}>
        <img src='/icons/search.png' />
        <input type='search' placeholder='Ecrivez votre recherche en français '></input>
      </div>

      <div className='container-language'>
        <div className='container-text' onClick={handleClickLanguage}>
          Langue de recherche
          <img className={languageActive ? 'arrow-return' : ''} src='/icons/arrow-nav.svg' />
        </div>

        <div className={languageActive ? 'container-flags' : 'container-flags-no-display'}>
          {countryList.map((country) => (
            <img
              key={country.name}
              src={country.iconSrcCountry}
              alt={country.countryName}
              title={country.countryName}
            />
          ))}
        </div>
      </div>

      <div className='search-random'>
        <ButtonRandom />
      </div>

      <Link to='resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Outlet />
    </>
  );
}
