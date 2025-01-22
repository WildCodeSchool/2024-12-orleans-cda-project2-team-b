import { Outlet } from 'react-router-dom';

import './app.scss';
import Footer from './components/footer';
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
      <Footer />
    </div>
  );
}

export default App;
