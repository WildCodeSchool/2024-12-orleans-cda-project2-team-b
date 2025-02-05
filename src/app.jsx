import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import LikeButton from './components/like-button';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';

function App() {
  return (
    <>
      <Navbar />
      <BackgroundCard />
      <MainTitle />
      <LikeButton />

      <main>
        <Outlet />
      </main>

      <PopUpQuestion />
      <Footer />
    </>
  );
}

export default App;
