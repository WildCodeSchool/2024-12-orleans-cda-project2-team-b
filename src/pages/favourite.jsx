import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './favourite.scss';

export default function Favourite() {
  const articleId = 123; // Example dynamic ID (this could come from props, state, or API data)
  const { addArticleToFavourite, listFavorite } = useContext(ChoicesContext);

  return (
    <>
      <p>Page de recherche des favoris</p>

      <Link to={`/favoris-article/${articleId}`}>Favori sélectionné</Link>
      {listFavorite.length > 0 ? <p>j ai des favoris</p> : <Link to='/favoris-inconnu'>Erreur Pas de favoris</Link>}
    </>
  );
}
