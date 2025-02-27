import { useNavigate } from 'react-router-dom';

import './error-404.scss';

const BASE_URL = import.meta.env.BASE_URL;

export default function Error404() {
  const navigate = useNavigate();
  const searchRedirection = () => {
    navigate('/recherche');
  };

  return (
    <div className='page-not-found'>
      <div className='content-of-page-not-found'>
        <img src={`${BASE_URL}images/404-not-found.svg`} alt='Erreur 404' className='picture404' />
        <img
          src={`${BASE_URL}icons/search.svg`}
          alt='recherche'
          className='searchIconButton'
          onClick={searchRedirection}
          onKeyDown={(e) => e.key === 'Enter'}
        />
      </div>
    </div>
  );
}
