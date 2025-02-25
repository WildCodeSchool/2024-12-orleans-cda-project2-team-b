import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

import Loader from '../components/loader';
import './home.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <div className='animation-desktop'>
        <Spline scene='https://prod.spline.design/9A996GHdA8MXqhoX/scene.splinecode' />
      </div>
      <div className='animation-mobile'>
        <Spline scene='https://prod.spline.design/5LWIT65K-jrDiLgr/scene.splinecode' />
      </div>
    </>
  );
}
