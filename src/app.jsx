import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import Loader from './components/loader';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';
import ToggleModal from './components/toggle-modal';
import { useDarkTheme } from './contexts/dark-theme-context';

function App() {
  const { darkTheme } = useDarkTheme();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/recherche-resultats') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 3000);
  };

  return (
    <>
      {isLoading && <Loader />}
      {
        <main className={`app-container ${darkTheme ? 'dark-mode' : ''}`}>
          <Navbar onSearch={handleSearch} />
          <BackgroundCard />
          <MainTitle />
          <Outlet />
          <PopUpQuestion />
          <Footer />
        </main>
      }
    </>
  );
}

export default App;
