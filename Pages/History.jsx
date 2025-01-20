import { Link, Outlet } from 'react-router-dom';

import './history.scss';

export default function History() {
  const historyId = 567;
  return (
    <>
      <Link to={`article-historique/${historyId}`}>Lien d histo selected</Link>
      <Link to='pas-d-historique'>Pas d historique</Link>
      <p>Page de l historique</p>
      <Outlet />
    </>
  );
}
