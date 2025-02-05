import { createContext, useEffect, useState } from 'react';

import { countryList } from '../components/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'Français');
  const [correctPlaceholder, setCorrectPlaceholder] = useState(countryList[0].placeholderTraduc);

  useEffect(() => {
    const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
    setCorrectPlaceholder(countryList[indexCountry].placeholderTraduc);

    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
    }
  }, [storedChoiceLanguage, choiceLocalStorage]);

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
