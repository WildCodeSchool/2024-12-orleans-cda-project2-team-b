import { createContext, useCallback, useEffect, useState } from 'react';

import { countryList } from '../data/country-list';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  const [choiceLocalStorage, setChoiceLocalStorage] = useState(localStorage.getItem('choiceLocalStorage'));

  const [storedChoiceLanguage, setStoredChoiceLanguage] = useState(localStorage.getItem('language') || 'fr');
  const indexCountry = countryList.findIndex((country) => country.language === storedChoiceLanguage);
  const correctPlaceholder = countryList[indexCountry].placeholderTraduc;

  const [searchValue, setSearchValue] = useState('');
  const [listHistory, setListHistory] = useState(JSON.parse(localStorage.getItem('tableHistory')) || []);
  const [listFavourite, setListFavourite] = useState(JSON.parse(localStorage.getItem('tableFav')) || []);
  const [listSearch, setListSearch] = useState(JSON.parse(sessionStorage.getItem('tableSearch')) || []);
  const [isRandom, setIsRandom] = useState(false);

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
      if (choiceLocalStorage === 'yes') {
        setListHistory((prev) => updateList(prev, article, 'title').slice(0, 10));
      }
    },
    [choiceLocalStorage],
  );

  const addArticleToFavourite = useCallback(
    (article) => {
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
            "Vous n'avez pas souhaité enregistrer de favoris. Cette option n'est donc pas disponible. 😬 Avez-vous changé d'avis ? Actualisez la page et répondez oui pour débloquer cette option. ✅",
          );
        }
      }
    },
    [choiceLocalStorage],
  );

  useEffect(() => {
    if (choiceLocalStorage === 'yes') {
      localStorage.setItem('language', storedChoiceLanguage);
      localStorage.setItem('tableHistory', JSON.stringify(listHistory));
      localStorage.setItem('tableFav', JSON.stringify(listFavourite));
      sessionStorage.setItem('tableSearch', JSON.stringify(listSearch));
    }
  }, [storedChoiceLanguage, choiceLocalStorage, listHistory, listFavourite, listSearch]);

  const updateChoiceLocalStorage = (value) => {
    setChoiceLocalStorage(value);
    localStorage.setItem('choiceLocalStorage', value);
  };

  return (
    <ChoicesContext.Provider
      value={{
        choiceLocalStorage,
        updateChoiceLocalStorage,
        correctPlaceholder,
        storedChoiceLanguage,
        setStoredChoiceLanguage,
        searchValue,
        setSearchValue,
        setListHistory,
        listHistory,
        addArticleToHistory,
        listFavourite,
        setListFavourite,
        addArticleToFavourite,
        isRandom,
        setIsRandom,
        listSearch,
        setListSearch,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};
