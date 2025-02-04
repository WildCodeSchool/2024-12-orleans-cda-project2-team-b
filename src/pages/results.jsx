import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArticleResult from '../components/article-result';
import './results.scss';

export default function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('query');
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue) {
      fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_65230da8465946290c3170781460092e243d2&q=${encodeURIComponent(
          searchValue,
        )}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.results);
        });
    }
  }, [searchValue]);

  return (
    <div className='article-result-wrap'>
      {articles.length > 0
        ? articles.map((article, index) => <ArticleResult key={index} article={article} />)
        : navigate(`/recherche/oops`)}
    </div>
  );
}
