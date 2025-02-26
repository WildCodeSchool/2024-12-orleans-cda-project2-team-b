import { useContext } from 'react';

import ResultsList from '../components/results-list';
import { ChoicesContext } from '../contexts/choices-context';
import './favourite.scss';
import NoFavourite from './no-favourite';
import './results.scss';

export default function Favourite() {
  const { listFavourite } = useContext(ChoicesContext);

  return (
    <>
      <div className='container-results'>
        {listFavourite.length > 0 ? (
          <>
            <p className='texte-results'>Vous avez {listFavourite.length} 💙 dans votre liste. </p>
            <ResultsList tableNav={listFavourite} pathNav='/favoris-article/' />
          </>
        ) : (
          <NoFavourite />
        )}
      </div>
    </>
  );
}
