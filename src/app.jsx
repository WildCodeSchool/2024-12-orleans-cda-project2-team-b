import { Outlet } from 'react-router-dom';

import './app.scss';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className='absolute-center-container'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
