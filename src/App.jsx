import { Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';

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
