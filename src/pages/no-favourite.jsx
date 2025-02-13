import { Outlet } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import './no-favourite.scss';

export default function NoFavourite() {
  return (
    <>
      <Outlet />
      <div className='no-favourite-container'>
        <p>Vous n’avez pas encore de favoris... 🥹</p>
        <p>Laissez-vous tenter par notre recherche aléatoire.</p>
        <ButtonRandom />
      </div>
    </>
  );
}
