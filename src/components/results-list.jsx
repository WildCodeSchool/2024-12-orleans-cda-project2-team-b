// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  const navigate = useNavigate();

  const { addArticleToHistory } = useContext(ChoicesContext);

  function handleClickArticle() {
    addArticleToHistory(article);
    navigate(`/recherche-article-choisi`);
  }

  if (!article) return null;

  return (
    <div className='results-container' title='Appuyer pour voir plus' onClick={handleClickArticle}>
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
  );
}
