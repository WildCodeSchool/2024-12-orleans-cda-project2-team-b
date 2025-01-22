import { useParams } from 'react-router-dom';

import './display-favourite.scss';

export default function DisplayFavourite() {
  const { id } = useParams();
  return (
    <>
      <p>Page qui montre le favoris sélectionné</p>
      <p>ID du Favori : {id}</p>
    </>
  );
}
