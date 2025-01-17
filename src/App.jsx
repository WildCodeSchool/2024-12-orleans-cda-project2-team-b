import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='absolute-center-container'>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/recherche'>Recherche</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
