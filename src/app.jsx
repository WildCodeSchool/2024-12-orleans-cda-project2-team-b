import { Outlet } from 'react-router-dom';

import './app.scss';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <MainTitle />
      <main className='absolute-center-container'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
