// import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  const navigate = useNavigate();

  const { setArticleChosen, articleChosen, choiceLocalStorage, setListHistory, listHistory } =
    useContext(ChoicesContext);

  function handleClickArticle() {
    setArticleChosen(article);

    // If user say yes to save his data, we keep in memory consulted articles for the history
    if (choiceLocalStorage === 'yes') {
      if (listHistory.length >= 10) {
        setListHistory(listHistory.slice(-9));
      }
      setListHistory((prev) => [...prev, article]);
    }

    // navigate(`/recherche-article-choisi`);
  }

  useEffect(() => {
    console.log('Historique mis à jour :', listHistory);
    // console.log(listHistory.slice(0,10));
  }, [listHistory]);

  if (!article) return null;

  return (
    <button className='article-button' title='Appuyer pour voir plus' onClick={handleClickArticle}>
      <div className='results-container'>
        <p className='article-title'>{article.title}</p>

        {article.image_url ? (
          article.image_url && <img src={article.image_url} alt="photo de l'article" />
        ) : (
          <img src='/no-image.svg' alt='photo logo' />
        )}

        <div className='under-image-results'>
          <div className='source'>{article.source_id}</div>
          <LikeButton />
        </div>
      </div>
    </button>
  );
}
