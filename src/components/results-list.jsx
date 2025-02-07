import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  if (!article) return null;
  return (
    <button className='article-button' title='Appuyer pour voir plus'>
      <div className='results-container'>
        <p>
          {(article.title &&
            (window.innerWidth <= 700
              ? article.title.length <= 30
                ? article.title
                : article.title.slice(0, 30) + '...'
              : article.title.length <= 90
                ? article.title
                : article.title.slice(0, 90) + '...')) ||
            'Aucun titre disponible'}
        </p>

        {/* penser à couper titre à40carc */}
        {article.image_url ? (
          article.image_url && <img src={article.image_url} alt="photo de l'article" />
        ) : (
          <img src='/no-image.svg' alt="photo de l'article" />
        )}
        {/* {article.image_url && <img src={article.image_url} alt="photo de l'article" />} */}

        <div className='under-image-results'>
          <div className='source'>{article.source_id}</div>
          <LikeButton />
        </div>
      </div>
    </button>
  );
}
