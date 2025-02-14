import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';
import NoHistory from './no-history';

export default function History() {
  const { listHistory, addArticleToHistory } = useContext(ChoicesContext);
  const navigate = useNavigate();

  function handleClickHistory(article) {
    addArticleToHistory(article);
    navigate(`/historique-choisi`);
  }

  return (
    <>
      {listHistory.length > 0 ? (
        <div className='container-history' title='Cliquez pour voir plus'>
          {listHistory.map((article, index) => (
            <>
              <ul key={index} className='article-history' onClick={() => handleClickHistory(article)}>
                <div className='title-like-history'>
                  <li>{article.title}</li>
                  <li>
                    <LikeButton article={article} />
                  </li>
                </div>
                <li>{article.description}</li>
              </ul>
            </>
          ))}
        </div>
      ) : (
        <NoHistory />
      )}
    </>
  );
}
