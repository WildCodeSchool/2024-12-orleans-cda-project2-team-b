import { Link, Outlet } from 'react-router-dom';

import './Favourite.css';

export default function Favourite() {
  const articleId = 123; // Example dynamic ID (this could come from props, state, or API data)
  return (
    <>
      <Link to={`article-favori/${articleId}`}>Favori sélectionné</Link>
      <Link to='pas-de-favoris'>Erreur Pas de favoris</Link>
      <p>Page de recherche des favoris</p>
      <Outlet />
    </>
  );
}
