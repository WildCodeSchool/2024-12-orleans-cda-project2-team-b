import { Link } from 'react-router-dom';

import './oops.scss';

export default function Oops() {
  return (
    <>
      <div className='no-search-container'>
        <p>
          Oops... 🫢
          <br />
          Nous n’avons pas de résultat pour votre demande
        </p>
        <Link to='/recherche'>
          <img className='no-search-icon' src='./../icons/search-inactive-black.png' alt='loupe lien vers recherche' />
        </Link>
      </div>
    </>
  );
}
