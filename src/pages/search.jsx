import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { countryList } from '../components/country-list';
import './search.scss';

export default function Search() {
  const location = useLocation();
  const [listeLanguageActive, setListeLanguageActive] = useState(false);

  const [language, setLanguage] = useState('Français');
  const indexCountry = countryList.findIndex((country) => country.language === language);
  const correctPlaceholder = countryList[indexCountry].placeholderTraduc;
  //console.log('index : ' + indexCountry);

  function handleClickMoreLanguage() {
    if (!listeLanguageActive) {
      setListeLanguageActive(true);
    } else {
      setListeLanguageActive(false);
    }
  }

  return (
    <>
      {/* SEARCHBAR */}
      <div className={location.pathname === '/recherche/oops' ? 'search-bar-no-display' : 'search-bar'}>
        <img src='/icons/search.png' />
        <input type='search' placeholder={correctPlaceholder}></input>
      </div>

      {/* LIST LANGUAGE */}
      <div className='container-language'>
        <div className='container-text' onClick={handleClickMoreLanguage}>
          Langue de recherche
          <img className={listeLanguageActive ? 'arrow-return' : ''} src='/icons/arrow-nav.svg' />
        </div>

        <div className={listeLanguageActive ? 'container-flags' : 'container-flags-no-display'}>
          {countryList.map((country) => (
            <img
              onClick={() => setLanguage(country.language)}
              key={country.language}
              src={country.iconSrcCountry}
              alt={country.language}
              title={country.language}
            />
          ))}
        </div>
      </div>

      {/* BUTTON RANDOM */}
      <div className='search-random'>
        <ButtonRandom />
      </div>

      <Link to='resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='oops'>Erreur de recherche</Link>
      <Outlet />
    </>
  );
}
