import { Link, Outlet } from 'react-router-dom';

import './History.css';

export default function History() {
  const historyId = 567;
  return (
    <>
      <Link to={`article-historique/${historyId}`}>Lien d histo selected</Link>
      <p>Page de l historique</p>
      <Outlet />
    </>
  );
}
