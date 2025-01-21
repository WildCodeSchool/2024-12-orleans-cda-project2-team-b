import { Outlet } from 'react-router-dom';

import './app.scss';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='absolute-center-container'>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
