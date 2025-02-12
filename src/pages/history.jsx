import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import ArticleHistory from '../components/article-history';
import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';

export default function History() {
  const { listHistory } = useContext(ChoicesContext);

  return (
    <>
      <div>Historique </div>

      <div>
        {listHistory.map((article, index) => (
          <ul key={index} className='article-history'>
            <div className='title-like-history'>
              <li>{article.title}</li>
              <li>
                <LikeButton />
              </li>
            </div>
            <li>{article.description}</li>
          </ul>
        ))}
      </div>

      {/* <Link to={`/historique-article/${historyId}`}>Lien d histo selected</Link> */}
      <Link to='/pas-d-historique'>Pas d historique</Link>
    </>
  );
}
