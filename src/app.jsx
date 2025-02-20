import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';
import { ChoicesContextProvider } from './contexts/choices-context';
import { DarkThemeProvider, useDarkTheme } from './contexts/dark-theme-context';

function App() {
  return (
    <DarkThemeProvider>
      <AppContent />
    </DarkThemeProvider>
  );
}

function AppContent() {
  const { darkTheme } = useDarkTheme();

  return (
    <main className={`app-container ${darkTheme ? 'dark-mode' : ''}`}>
      <ChoicesContextProvider>
        <Navbar />
        <BackgroundCard />
        <MainTitle />
        <Outlet />
        <PopUpQuestion />
        <Footer />
      </ChoicesContextProvider>
    </main>
  );
}

export default App;
