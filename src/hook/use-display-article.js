import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function useDisplayArticle() {
  const { article_id } = useParams();
  const [articleChosen, setArticleChosen] = useState({});

  useEffect(() => {
    if (article_id) {
      fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&id=${article_id}`)
        .then((response) => response.json())
        .then((data) => {
          const article = data.results[0];
          setArticleChosen(article);
        });
    }
  }, [setArticleChosen, article_id]);
  return { articleChosen };
}
