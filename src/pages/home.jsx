import Spline from '@splinetool/react-spline';

import './home.scss';

export default function Home() {
  return (
    <>
      <div className='container-animation'>
        <div className='image-animation'>
          <Spline scene='https://prod.spline.design/9A996GHdA8MXqhoX/scene.splinecode' />
        </div>
        <div className='text-animation'>
          <Spline scene='https://prod.spline.design/cDZK06-Q-cNuygBZ/scene.splinecode' />{' '}
        </div>
      </div>
    </>
  );
}
