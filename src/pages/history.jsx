import { Link, Outlet } from 'react-router-dom';

import ArticleHistory from '../components/article-history';
import './history.scss';

export default function History() {
  const historyId = 567;
  return (
    <>
      <div className='history-list'>
        <ArticleHistory />
        <ArticleHistory />
        <ArticleHistory />
        <ArticleHistory />
        <ArticleHistory />
      </div>

      <Link to={`/article-historique/${historyId}`}>Lien d histo selected</Link>
      <Link to='/pas-d-historique'>Pas d historique</Link>
      <Outlet />
    </>
  );
}
