import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ tableNav, pathNav }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addArticleToHistory } = useContext(ChoicesContext);

  function handleClickArticle(article) {
    addArticleToHistory(article);
    if (location.pathname.includes('/favoris')) {
      navigate(`/favoris-article/${article.article_id}`, { state: { tableNav, pathNav } });
    } else {
      navigate(`/recherche-article/${article.article_id}`, { state: { tableNav, pathNav } });
    }
  }

  if (!tableNav) return null;

  return (
    <div className='article-result-wrap'>
      {tableNav.map((article, index) => (
        <div
          key={index}
          className='results-container'
          title='Appuyer pour voir plus'
          onClick={() => handleClickArticle(article)}
        >
          <p className='article-title'>{article.title}</p>

          {article.image_url ? (
            <img src={article.image_url} alt="photo de l'article" />
          ) : (
            <img src='/no-image.svg' alt='photo logo' />
          )}

          <div className='under-image-results'>
            <div className='source'>{article.source_id}</div>
            <LikeButton articleChosen={article} />
          </div>
        </div>
      ))}
    </div>
  );
}
