import { createContext, useCallback, useEffect, useState } from 'react';

import { countryList } from '../data/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'french');
  const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
  const correctPlaceholder = countryList[indexCountry].placeholderTraduc;

  const [searchValue, setSearchValue] = useState('');

  const [articleChosen, setArticleChosen] = useState({});

  const [listHistory, setListHistory] = useState(JSON.parse(localStorage.getItem('tablHistory')) || []);
  const [listFavourite, setListFavourite] = useState(JSON.parse(localStorage.getItem('tablFav')) || []);

  // Fonction used for addArticleToHistory and addArticleToFavourite
  const updateList = (prevList, article, title, shouldRemove = false) => {
    const updatedList = [...prevList];
    const hour = new Date().getTime();

    const articleIndex = updatedList.findIndex((a) => a[title] === article[title]);

    if (articleIndex !== -1) {
      shouldRemove
        ? updatedList.splice(articleIndex, 1)
        : (updatedList[articleIndex] = { ...updatedList[articleIndex], hourConsulted: hour });
    } else {
      updatedList.push({ ...article, hourConsulted: hour });
    }

    return updatedList.sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
  };

  const addArticleToHistory = useCallback(
    (article) => {
      setArticleChosen(article);
      if (choiceLocalStorage === 'yes') {
        setListHistory((prev) => updateList(prev, article, 'title').slice(0, 10));
      }
    },
    [choiceLocalStorage],
  );

  const addArticleToFavourite = useCallback(
    (article) => {
      setArticleChosen(article);
      if (article.title) {
        if (choiceLocalStorage === 'yes') {
          setListFavourite((prev) =>
            updateList(
              prev,
              article,
              'title',
              prev.some((a) => a.title === article.title),
            ),
          );
        } else {
          alert(
            "Vous n'avez pas souhaité enregistrer de favoris, cette option n'est donc pas disponible. 😬 Avez-vous changé d'avis ? Actualisez la page et répondez oui pour débloquer cette option. ✅",
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
