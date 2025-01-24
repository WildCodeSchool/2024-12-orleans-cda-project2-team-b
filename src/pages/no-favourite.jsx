import { Link, Outlet } from 'react-router-dom';

import './no-favourite.scss';

export default function NoFavourite() {
  return (
    <>
      <Outlet />
      <div className='NoFavouriteContainer'>
        <p>
          Vous n’avez pas encore de favoris... 🥹
          <br />
          Laissez-vous tenter par notre recherche aléatoire.
        </p>
        <Link to='random'>
          <button className='RandomButton'>Articles aléatoires</button>
        </Link>
        {/* voir le lien */}
      </div>
    </>
  );
}
