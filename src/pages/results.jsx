import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultsList from '../components/results-list';
import { ChoicesContext } from '../contexts/choices-context';
import { keyWordTechList } from '../data/keyword-list';
import './results.scss';

export default function Results() {
  const { searchValue, storedChoiceLanguage, isRandom, listSearch, setListSearch } = useContext(ChoicesContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue) {
      // Vider sessionStorage avant la nouvelle recherche
      sessionStorage.setItem('tablSearch', JSON.stringify([]));

      //launch the request
      fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_65232fbbf2a92bccb58b53492c068ed55dc6a&q=${encodeURIComponent(
          searchValue,
        )}`,
      )
        .then((response) => response.json())
        .then((data) => {
          //Filter on keywords "technology", to have more results we check also description
          const onlyTech = data.results.filter((article) => {
            const hasKeyword =
              Array.isArray(article.keywords) &&
              article.keywords.some((keyword) => keyWordTechList.some((word) => keyword.toLowerCase().includes(word)));

            const hasDescription =
              article.description && keyWordTechList.some((word) => article.description.toLowerCase().includes(word));

            return hasKeyword || hasDescription;
          });

          //Filter tabl result with the language chosen
          const articleFilter =
            storedChoiceLanguage === '*' ? onlyTech : onlyTech.filter((data) => data.language === storedChoiceLanguage);

          setListSearch(articleFilter);
        });
    }
  }, [searchValue, storedChoiceLanguage, setListSearch]);

  return (
    <>
      <div className='container-results'>
        {listSearch.length > 0 ? (
          <>
            <p className='texte-results'>
              {isRandom
                ? `Nous vous proposons une recherche 🎲 pour : "${searchValue}"`
                : `${listSearch.length} article(s) ont été trouvé(s) avec votre recherche : "${searchValue}"`}
            </p>
            <ResultsList tablNav={listSearch} />
          </>
        ) : (
          navigate(`/recherche-oops`)
        )}
      </div>
    </>
  );
}
