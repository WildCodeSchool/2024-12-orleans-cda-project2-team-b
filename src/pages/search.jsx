import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { ChoicesContext } from '../contexts/choices-context';
import { countryList } from '../data/country-list';
import './search.scss';

export default function Search() {
  const [isActiveLanguageList, setIsActiveLanguageList] = useState(false);

  const {
    choiceLocalStorage,
    correctPlaceholder,
    setStoredChoiceLanguage,
    storedChoiceLanguage,
    searchValue,
    setSearchValue,
    setIsRandom,
  } = useContext(ChoicesContext);

  //We keep in local only if user said Yes, if not we don't keep the language choice
  function handleClickChoiceLanguage(value) {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', value);
    }
    setStoredChoiceLanguage(value);
  }

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setIsRandom(false);
      // open component results
      navigate(`/recherche-resultats`);
    }
  };

  //empties the input
  useEffect(() => {
    setSearchValue('');
  }, [setSearchValue]);

  return (
    <>
      {/* SEARCHBAR */}
      <div className='search-container'>
        <div className='search-bar'>
          <img src='/icons/search.png' onClick={handleSearch} style={{ cursor: 'pointer' }} alt='Rechercher' />
          <input
            type='search'
            placeholder={correctPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(event) => {
              event.key === 'Enter' && handleSearch();
            }}
          />
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
