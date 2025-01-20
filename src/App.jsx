import { Outlet } from 'react-router-dom';

import './App.scss';
import Navbar from './Components/navbar';

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
