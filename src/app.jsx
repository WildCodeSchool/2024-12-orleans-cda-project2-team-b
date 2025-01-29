import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';

function App() {
  return (
    <>
      <Navbar />
      <BackgroundCard />
      <MainTitle />
      <PopUpQuestion />

      <main className='absolute-center-container'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
