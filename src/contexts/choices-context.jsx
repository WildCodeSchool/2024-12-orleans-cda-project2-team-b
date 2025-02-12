import { createContext, useEffect, useState } from 'react';

import { countryList } from '../data/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'Français');
  const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
  const correctPlaceholder = countryList[indexCountry].placeholderTraduc;

  const [searchValue, setSearchValue] = useState('');

  const [articleChosen, setArticleChosen] = useState({});

  const [listHistory, setListHistory] = useState([]);

  useEffect(() => {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
    }
  }, [storedChoiceLanguage, choiceLocalStorage]);

  return (
    <ChoicesContext.Provider
      value={{
        choiceLocalStorage,
        correctPlaceholder,
        storedChoiceLanguage,
        setStoredChoiceLanguage,
        searchValue,
        setSearchValue,
        articleChosen,
        setArticleChosen,
        setListHistory,
        listHistory,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};
