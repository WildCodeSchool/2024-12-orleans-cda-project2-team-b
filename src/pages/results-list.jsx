import './results-list.scss';

export default function ResultsList({ article }) {
  if (!article) return null;
  return (
    <div className='results-container'>
      <p>{article.description || 'Aucune description disponible'}</p>
      {article.image_url && <img src={article.image_url} alt="photo de l'article" />}
      <div className='under-image-results'>
        <button>Like</button>
        <span>
          <a href={article.link} target='_blank' rel='noopener noreferrer'>
            Lire l&apos;article
          </a>
        </span>
      </div>
    </div>
  );
}
