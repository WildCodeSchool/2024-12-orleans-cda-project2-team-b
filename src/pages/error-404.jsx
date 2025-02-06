import { useNavigate } from 'react-router-dom';

import './error-404.scss';

export default function Error404() {
  const navigate = useNavigate();

  const searchRedirection = () => {
    navigate('/recherche');
  };

  return (
    <div className='page404'>
      <div className='contentOf404'>
        <img src='/images/404_Not_Found.svg' alt='Erreur 404' className='picture404' />
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
