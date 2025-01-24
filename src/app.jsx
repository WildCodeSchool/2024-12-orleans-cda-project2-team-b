import { Outlet } from 'react-router-dom';

import './app.scss';
import Navbar from './components/navbar';
import PrincipalTitle from './components/principaltitle';

function App() {
  return (
    <div>
      <header>
        <div className='principal-title-mobile'>
          <PrincipalTitle />
        </div>
      </header>
      <div className='absolute-center-container'>
        <div className='principal-title-desktop'>
          <PrincipalTitle />
        </div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
