import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import useDisplayArticle from '../hook/use-display-article';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ tableNav, pathNav }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addArticleToHistory } = useContext(ChoicesContext);
  // const { articleChosen, isTooManyRequest } = useDisplayArticle();

  function handleClickArticle(article) {

    let isFav=false;

    addArticleToHistory(article);

    if (location.pathname.includes('/favoris')) {
      isFav=true;
      navigate(`/favoris-article/${article.article_id}`, {
        state: { tableNav, pathNav,  isFav },
      });
    } else {
      isFav=false;
      navigate(`/recherche-article/${article.article_id}`, {
        state: { tableNav, pathNav, isFav },
      });
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
