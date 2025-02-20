import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import { ChoicesContext } from '../contexts/choices-context';
import './oops.scss';

export default function Oops() {
  const { isRandom } = useContext(ChoicesContext);
  return (
    <>
      <div className='no-search-container'>
        <p>Oops... 🫢</p>

        {isRandom ? (
          <>
            <p>Retentez votre chance</p>
            <ButtonRandom />
          </>
        ) : (
          <>
            <p>Nous n’avons pas de résultat pour votre demande</p>
            <Link to='/recherche'>
              <img
                className='no-search-icon'
                src='./../icons/search-inactive-black.png'
                alt='loupe lien vers recherche'
              />
            </Link>
          </>
        )}
      </div>
    </>
  );
}
