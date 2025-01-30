import { Link } from 'react-router-dom';

import './button-random.scss';

export default function ButtonRandom() {
  return (
    <>
      <button className='random-button'>
        <Link to='/recherche/article-aleatoire'>
          <span>Articles aléatoires</span>
        </Link>
      </button>
    </>
  );
}
