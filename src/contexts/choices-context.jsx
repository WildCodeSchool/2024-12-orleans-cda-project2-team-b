import { createContext, useEffect, useState } from 'react';

import { countryList } from '../data/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'Français');
  const [correctPlaceholder, setCorrectPlaceholder] = useState(countryList[0].placeholderTraduc);

  const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);

  useEffect(() => {
    setCorrectPlaceholder(countryList[indexCountry].placeholderTraduc);
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
    }
  }, [storedChoiceLanguage, choiceLocalStorage, indexCountry]);

  return (
    <ChoicesContext.Provider
      value={{
        choiceLocalStorage,
        correctPlaceholder,
        setCorrectPlaceholder,
        storedChoiceLanguage,
        setStoredChoiceLanguage,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};
