import { Link, Outlet } from 'react-router-dom';

import './no-favourite.scss';

export default function NoFavourite() {
  return (
    <>
      <Outlet />
      <div className='no-favourite-container'>
        <p>
          Vous n’avez pas encore de favoris... 🥹
          <br />
          Laissez-vous tenter par notre recherche aléatoire.
        </p>
        <Link to='random'>
          <button className='random-button'>Articles aléatoires</button>
        </Link>
        {/* voir le lien */}
      </div>
    </>
  );
}
