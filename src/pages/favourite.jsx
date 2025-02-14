import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './favourite.scss';
import NoFavourite from './no-favourite';

export default function Favourite() {
  const articleId = 123; // Example dynamic ID (this could come from props, state, or API data)
  const { addArticleToFavourite, listFavorite } = useContext(ChoicesContext);
  console.log(listFavorite.length);
  return (
    <>
      <p>Page de recherche des favoris</p>

      <Link to={`/favoris-article/${articleId}`}>Favori sélectionné</Link>
      {listFavorite.length > 0 ? <p>j ai des favoris</p> : <NoFavourite />}
    </>
  );
}
