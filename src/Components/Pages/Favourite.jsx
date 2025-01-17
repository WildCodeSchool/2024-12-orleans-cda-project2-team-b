import { Link } from 'react-router-dom';

import './Favourite.css';

export default function Favourite() {
  return (
    <>
      <Link to='/mon-favori'>Favori sélectionné</Link>
      <p>Page de recherche des favoris</p>
    </>
  );
}
