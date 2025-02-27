import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../components/loader';
import './home.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        navigate('/recherche');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  return (
    <>
      {isLoading && <Loader />}

      <div className='animation'>
        <Spline
          scene='https://prod.spline.design/NirVvyozskvRVRJh/scene.splinecode'
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
}
