import { Link, Outlet } from 'react-router-dom';

import './favourite.scss';

export default function Favourite() {
  const articleId = 123; // Example dynamic ID (this could come from props, state, or API data)
  return (
    <>
      <Link to={`/favoris-article/${articleId}`}>Favori sélectionné</Link>
      <Link to='/favoris-inconnu'>Erreur Pas de favoris</Link>
      <p>Page de recherche des favoris</p>
      <Outlet />
    </>
  );
}
