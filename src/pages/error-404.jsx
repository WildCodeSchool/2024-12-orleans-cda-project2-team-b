import { useNavigate } from 'react-router-dom';

import './error-404.scss';

export default function Error404() {
  const navigate = useNavigate();

  const searchRedirection = () => {
    navigate('/recherche');
  };

  return (
    <div className='page-not-found'>
      <div className='content-of-page-not-found'>
        <img src='/images/404-not-found.svg' alt='Erreur 404' className='picture404' />
        <img
          src='/icons/search.svg'
          alt='recherche'
          className='searchIconButton'
          onClick={searchRedirection}
          onKeyDown={(e) => e.key === 'Enter'}
        />
      </div>
    </div>
  );
}
