import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';
import { useDarkTheme } from './contexts/dark-theme-context';

function App() {
  const { darkTheme } = useDarkTheme();

  return (
    <main className={`app-container ${darkTheme ? 'dark-mode' : ''}`}>
      <Navbar />
      <BackgroundCard />
      <MainTitle />
      <Outlet />
      <PopUpQuestion />
      <Footer />
    </main>
  );
}

export default App;
