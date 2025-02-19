import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import ButtonLightDark from './components/button-light-dark';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';
import { ChoicesContextProvider } from './contexts/choices-context';

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkTheme);
  }, [darkTheme]);

  return (
    <ChoicesContextProvider>
      <Navbar />
      <BackgroundCard />
      <MainTitle />

      <ButtonLightDark setDarkTheme={setDarkTheme} />

      <main className={`app-container ${darkTheme ? 'dark-mode' : ''}`}>
        <Outlet />
      </main>

      <PopUpQuestion />
      <Footer />
    </ChoicesContextProvider>
  );
}

export default App;
