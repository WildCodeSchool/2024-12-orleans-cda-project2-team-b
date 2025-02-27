import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';
import NoHistory from './no-history';

export default function History({ tableNav, pathNav }) {
  const { listHistory, addArticleToHistory } = useContext(ChoicesContext);
  const navigate = useNavigate();

  function handleClickHistory(article) {
    addArticleToHistory(article);
    navigate(`/historique/${article.article_id}`, {
      state: { tableNav, pathNav },
    });
  }

  return (
    <>
      {listHistory.length > 0 ? (
        <div className='container-history' title='Cliquez pour voir plus'>
          {listHistory.map((article) => (
            <ul key={article.article_id} className='article-history' onClick={() => handleClickHistory(article)}>
              <div className='title-like-history'>
                <li>{article.title}</li>
                <li>
                  <LikeButton articleChosen={article} />
                </li>
              </div>
              <li>{article.description}</li>
            </ul>
          ))}
        </div>
      ) : (
        <NoHistory />
      )}
    </>
  );
}
