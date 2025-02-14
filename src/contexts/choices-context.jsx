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
  const [listFavourite, setListFavourite] = useState(JSON.parse(localStorage.getItem('tablFav')) || []);
  const [isLike, setIsLike] = useState();

  const addArticleToHistory = useCallback(
    (article) => {
      setArticleChosen(article);
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

  const addArticleToFavourite = useCallback(
    (article) => {
      setArticleChosen(article);

      if (choiceLocalStorage === 'yes') {
        //si like faux on ajoute le favoris et on ajoute islike=true
        // if (!isLike) {
        setIsLike(true);
        setListFavourite((prev) => {
          const updateFav = [...prev];
          const hour = new Date().getTime();
          const articleExistingIndex = prev.findIndex((a) => a.title === article.title);
          if (articleExistingIndex !== -1) {
            updateFav[articleExistingIndex] = {
              ...updateFav[articleExistingIndex],
              hourConsulted: hour,
              likeLink: '/icons/like-full.svg',
            };
          } else {
            updateFav.push({ ...article, hourConsulted: hour, likeLink: '/icons/like-full.svg' });
          }
          return updateFav.slice(-10).sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
        });
        // } else {
        //   // retirer des favoris
        //   setIsLike(false);
        //   setListFavourite((prev) => {
        //     const updateFav = [...prev];
        //     //trouver index de l'article
        //     const articleIndex = listFavourite.findIndex(article);
        //     //splice sur cet index
        //     updateFav.splice(articleIndex, 1);
        //     return updateFav;
        //   });
        // }
      }
    },
    [choiceLocalStorage],
  );

  useEffect(() => {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
      localStorage.setItem('tablHistory', JSON.stringify(listHistory));
      localStorage.setItem('tablFav', JSON.stringify(listFavourite));
    }
  }, [storedChoiceLanguage, choiceLocalStorage, listHistory, listFavourite]);

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
        listFavourite,
        setListFavourite,
        addArticleToFavourite,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};
