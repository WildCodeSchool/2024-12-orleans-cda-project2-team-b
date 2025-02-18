import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultsList from '../components/results-list';
import { ChoicesContext } from '../contexts/choices-context';
import { keyWordTechList } from '../data/keyword-list';
import './results.scss';

export default function Results() {
  const { searchValue, storedChoiceLanguage } = useContext(ChoicesContext);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue) {
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

          setArticles(
            //Filter tabl result with the language chosen
            storedChoiceLanguage === '*' ? onlyTech : onlyTech.filter((data) => data.language === storedChoiceLanguage),
          );
        });
    }
  }, [searchValue, storedChoiceLanguage]);

  return (
    <>
      <p>
        {articles.length} article(s) ont été trouvé(s) avec votre recherche : &quot;{searchValue}&quot;
      </p>

      <div className='article-result-wrap'>
        {articles.length > 0
          ? articles.map((article, index) => <ResultsList key={index} article={article} />)
          : navigate(`/oops`)}
      </div>
    </>
  );
}
