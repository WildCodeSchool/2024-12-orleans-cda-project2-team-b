import Spline from '@splinetool/react-spline';

import './home.scss';

export default function Home() {
  return (
    <>
      <div className='animation-desktop'>
        <Spline scene='https://prod.spline.design/9A996GHdA8MXqhoX/scene.splinecode' />
      </div>
      <div className='animation-mobile'>
        <Spline scene='https://prod.spline.design/5LWIT65K-jrDiLgr/scene.splinecode' />
      </div>
    </>
  );
}
