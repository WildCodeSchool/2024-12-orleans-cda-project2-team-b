// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  const navigate = useNavigate();

  const { setArticleChosen } = useContext(ChoicesContext);

  function handleClickArticle() {
    setArticleChosen(article);
    navigate(`/recherche-article-choisi`);
  }

  if (!article) return null;

  return (
    <button className='article-button' title='Appuyer pour voir plus' onClick={handleClickArticle}>
      {/* faire le onclick pr display article choisi */}

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
