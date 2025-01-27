import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/back-gard';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <BackgroundCard />
      <MainTitle />

      <main className='absolute-center-container'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
