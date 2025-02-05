import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { ChoicesContext } from '../contexts/choices-context';
import { countryList } from '../data/country-list';
import './search.scss';

export default function Search() {
  const [isActiveLanguageList, setIsActiveLanguageList] = useState(false);
  const location = useLocation();

  const { choiceLocalStorage, correctPlaceholder, setStoredChoiceLanguage, storedChoiceLanguage } =
    useContext(ChoicesContext);

  //We keep in local only if user said Yes, if not we don't keep the language choice
  function handleClickChoiceLanguage(value) {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', value);
    }
    setStoredChoiceLanguage(value);
  }

  return (
    <>
      {/* SEARCHBAR */}
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
          <Link to='resultats-de-recherche'>
            <img src='/icons/search.png' alt='search' title='search' />
          </Link>
          <input type='search' placeholder={correctPlaceholder}></input>
        </div>
      </div>

      {/* LIST LANGUAGE */}
      <div className='container-language'>
        <div className='container-text' onClick={() => setIsActiveLanguageList((prev) => !prev)}>
          Langue de recherche
          <img className={isActiveLanguageList ? 'arrow-return' : ''} src='/icons/arrow-nav.svg' />
        </div>

        <div className={isActiveLanguageList ? 'container-flags' : 'container-flags-no-display'}>
          {countryList.map((country) => (
            <img
              className={storedChoiceLanguage === country.language ? 'flag active' : 'flag'}
              onClick={() => handleClickChoiceLanguage(country.language)}
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
    </>
  );
}
