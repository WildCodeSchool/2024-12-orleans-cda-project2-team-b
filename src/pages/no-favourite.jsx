import { Outlet } from 'react-router-dom';

import './no-favourite.scss';

export default function NoFavourite() {
  return (
    <>
      <p>Je suis la page d erreurs quand il n y a aucun favoris.</p>
      <Outlet />
    </>
  );
}
