import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import ArticleHistory from '../components/article-history';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';

export default function History() {
  const historyId = 567;

  const { listHistory } = useContext(ChoicesContext);

  return (
    <>
      <div>Historique </div>

      <ul></ul>

      <div className='history-list'>
        <ArticleHistory />
        <ArticleHistory />
      </div>

      <Link to={`/historique-article/${historyId}`}>Lien d histo selected</Link>
      <Link to='/pas-d-historique'>Pas d historique</Link>
      <Outlet />
    </>
  );
}
