import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import ResultsList from './results-list';
import './results.scss';

export default function Results() {
  const { searchValue } = useContext(ChoicesContext);
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
          setArticles(data.results);
          // console.log(data);
        });
    }
  }, [searchValue]);

  return (
    <>
      <p>
        {articles.length} article(s) ont été trouvés avec votre recherche : &quot;{searchValue}&quot;
      </p>

      <div className='article-result-wrap'>
        {articles.length > 0
          ? articles.map((article, index) => <ResultsList key={index} article={article} />)
          : navigate(`/oops`)}
      </div>
    </>
  );
}
