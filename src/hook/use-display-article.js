import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function useDisplayArticle() {
  const { article_id } = useParams();
  const [articleChosen, setArticleChosen] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isTooManyRequest, setIsTooManyRequest] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (article_id) {
      fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&id=${article_id}`)
        .then((response) => {
          // if we are too many request update the variable
          if (response.status === 429) {
            setIsTooManyRequest(true);
            throw new Error('TOO MANY REQUESTS');
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          const article = data.results[0];
          setArticleChosen(article);
          setIsTooManyRequest(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [setArticleChosen, article_id]);

  return { articleChosen, isTooManyRequest, isLoading };
}
