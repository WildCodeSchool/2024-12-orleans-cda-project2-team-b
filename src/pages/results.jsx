import { useEffect, useState } from 'react';

import ArticleResult from '../components/article-result';
import './results.scss';

export default function Results({ value }) {
  // Renommé `result` en `{ value }` pour la clarté
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (value) {
      fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_65230da8465946290c3170781460092e243d2&q=${encodeURIComponent(
          value,
        )}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.results || []); // Correction de `data.article[]` en `data.results || []`
        })
        .catch((error) => console.error('Erreur lors de la récupération des articles :', error));
    }
  }, [value]);

  return (
    <div className='article-result-wrap'>
      {articles.length > 0 ? (
        articles.map((article, index) => <ArticleResult key={index} article={article} />)
      ) : (
        <p>Aucun article trouvé.</p>
      )}
    </div>
  );
}
