import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { countryList } from '../components/country-list';
import './search.scss';

export default function Search() {
  const [language, setLanguage] = useState('');
  const [listeLanguageActive, setListeLanguageActive] = useState(false);
  const [correctPlaceholder, setCorrectPlaceholder] = useState('');
  const location = useLocation();

  useEffect(() => {
    const storedChoiceLanguage = localStorage.getItem('language');
    if (!storedChoiceLanguage) {
      setLanguage('Français');
      localStorage.setItem('language', 'Français');
      setCorrectPlaceholder(countryList[0].placeholderTraduc);
    } else {
      setLanguage(storedChoiceLanguage);
      const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
      setCorrectPlaceholder(countryList[indexCountry].placeholderTraduc);
    }
  }, []);

  function handleClickChoiceLanguage(value) {
    setLanguage(value);
    localStorage.setItem('language', value);
    const indexCountry = countryList.findIndex((country) => country.language === value);
    setCorrectPlaceholder(countryList[indexCountry].placeholderTraduc);
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
        <div className='container-text' onClick={() => setListeLanguageActive((prev) => !prev)}>
          Langue de recherche
          <img className={listeLanguageActive ? 'arrow-return' : ''} src='/icons/arrow-nav.svg' />
        </div>

        <div className={listeLanguageActive ? 'container-flags' : 'container-flags-no-display'}>
          {countryList.map((country) => (
            <img
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
