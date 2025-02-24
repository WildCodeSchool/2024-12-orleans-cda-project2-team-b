import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from '../components/loader';
import './home.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      {
        <>
          <div className='animation-desktop'>
            <Spline scene='https://prod.spline.design/9A996GHdA8MXqhoX/scene.splinecode' />
          </div>
          <div className='animation-mobile'>
            <Spline scene='https://prod.spline.design/5LWIT65K-jrDiLgr/scene.splinecode' />
          </div>
        </>
      }
    </>
  );
}
