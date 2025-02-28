import { useContext, useEffect, useState } from 'react';

import { ChoicesContext } from '../contexts/choices-context';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function useDisplayListResult() {
  const { searchValue, isRandom, storedChoiceLanguage, choiceLocalStorage, setListSearch, listSearch } =
    useContext(ChoicesContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isTooManyRequest, setIsTooManyRequest] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    let requestLanguage = '';
    if (!isRandom && choiceLocalStorage === 'yes') {
      requestLanguage = `&language=${storedChoiceLanguage}`;
    }

    if (searchValue) {
      fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}${requestLanguage}&q=${searchValue}`)
        .then(async (response) => {
          if (response.status === 429) {
            setIsTooManyRequest(true);
            return null;
          }

          if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          if (data) {
            setIsLoading(false);
            const articles = data.results;
            setListSearch(articles);
            setIsTooManyRequest(false);
          }
        })

        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [setListSearch, isRandom, searchValue, choiceLocalStorage, storedChoiceLanguage]);

  return { listSearch, searchValue, isLoading, isRandom, isTooManyRequest };
}
