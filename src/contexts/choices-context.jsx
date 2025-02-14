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
      if (article.article_id) {
        if (choiceLocalStorage === 'yes') {
          setListFavourite((prev) => {
            const updateFav = [...prev];
            const hour = new Date().getTime();

            //check if article is in ListFav
            const articleExistingIndex = article?.article_id
              ? prev.findIndex((a) => a.article_id === article.article_id)
              : -1;
            if (articleExistingIndex !== -1) {
              //if is already here -> we delete it
              updateFav.splice(articleExistingIndex, 1);
            } else {
              //if not -> we add it
              updateFav.push({ ...article, hourConsulted: hour });
            }
            return updateFav.sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
          });
        } else {
          //A voir plus tard pour faire une vrai pop-up
          alert(
            'Vous n avez pas souhaité enregistrer de favoris, cette option n est donc pas disponible. 😬 Avez vous changé d avis ? Actualisez la page et répondez oui pour débloquer cette option. ✅',
          );
        }
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
