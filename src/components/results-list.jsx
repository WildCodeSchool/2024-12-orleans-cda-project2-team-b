import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  if (!article) return null;
  return (
    <div className='results-container'>
      <p>{article.title || 'Aucune description disponible'}</p>
      {/* penser à couper titre à40carc */}
      {article.image_url && <img src={article.image_url} alt="photo de l'article" />}

      <div className='under-image-results'>
        source
        {/* <a href={article.link} target='_blank' rel='noopener noreferrer'>
            Lire l&apos;article
          </a> */}
        <LikeButton />
      </div>
    </div>
  );
}
