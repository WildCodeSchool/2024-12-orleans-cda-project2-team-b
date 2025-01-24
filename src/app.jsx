import { Outlet } from 'react-router-dom';

import './app.scss';
import Navbar from './components/navbar';
import Oops from './pages/oops';

function App() {
  return (
    <div>
      <Navbar />
      
      <Oops />
      <main className='absolute-center-container'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
