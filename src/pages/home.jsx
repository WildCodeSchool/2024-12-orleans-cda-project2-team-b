import Spline from '@splinetool/react-spline';
import { useState } from 'react';

import Loader from '../components/loader';
import './home.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
