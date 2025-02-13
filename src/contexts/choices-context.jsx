import { createContext, useCallback, useEffect, useState } from 'react';

import { countryList } from '../data/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'Français');
  const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
  const correctPlaceholder = countryList[indexCountry].placeholderTraduc;

  const [searchValue, setSearchValue] = useState('');

  const [articleChosen, setArticleChosen] = useState({});

  const [listHistory, setListHistory] = useState(JSON.parse(localStorage.getItem('tablHistory')) || []);

  const addArticleToHistory = useCallback(
    (article) => {
      if (choiceLocalStorage === 'yes') {
        //Add or modify the hourConsulted to allow the sort of listHistory
        setListHistory((prev) => {
          const updatedHistory = [...prev];
          const hour = new Date().getTime();
          //check if article is already in history, if yes > update hourConsulted, if no > add article + hourConsulted
          const articleExistingIndex = prev.findIndex((a) => a.title === article.title);
          if (articleExistingIndex !== -1) {
            updatedHistory[articleExistingIndex] = { ...updatedHistory[articleExistingIndex], hourConsulted: hour };
          } else {
            updatedHistory.push({ ...article, hourConsulted: hour });
          }

          //we keep only the 10 last article consulted + sort to see the last article consulted in first
          return updatedHistory.slice(-10).sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
        });
      }
    },
    [choiceLocalStorage],
  );

  useEffect(() => {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
      localStorage.setItem('tablHistory', JSON.stringify(listHistory));
    }
  }, [storedChoiceLanguage, choiceLocalStorage, listHistory]);

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
        addArticleToHistory,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};
