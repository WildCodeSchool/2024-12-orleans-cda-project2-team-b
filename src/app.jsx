import { Outlet } from 'react-router-dom';

import './app.scss';
import BackgroundCard from './components/background-card';
import Footer from './components/footer';
import MainTitle from './components/main-title';
import Navbar from './components/navbar';
import { PopUpQuestion } from './components/pop-up-question';
import { ChoicesContextProvider } from './contexts/choices-context';

function App() {
  return (
    <>
      <ChoicesContextProvider>
        <Navbar />
        <BackgroundCard />

        <main>
          <Outlet />
        </main>

        <PopUpQuestion />
        <Footer />
      </ChoicesContextProvider>
    </>
  );
}

export default App;
