import { Outlet } from 'react-router-dom';

import './app.scss';
import Navbar from './components/navbar';
import PrincipalTitle from './components/principal-title';

function App() {
  return (
    <>
      <Navbar />
      <PrincipalTitle />
      <main className='absolute-center-container'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
