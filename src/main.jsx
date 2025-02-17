import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './app';
import './main.scss';
import DisplayArticle from './pages/display-article';
import DisplayFavorite from './pages/display-favorite';
import Error404 from './pages/error-404';
import Favourite from './pages/favourite';
import History from './pages/history';
import Home from './pages/home';
import NoFav from './pages/no-favourite';
import NoHistory from './pages/no-history';
import Oops from './pages/oops';
import Random from './pages/random';
import Results from './pages/results';
import Search from './pages/search';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      // SEARCH PAGE
      {
        path: 'recherche',
        element: <Search />,
      },
      {
        path: 'recherche-article-choisi',
        element: <DisplayArticle />,
      },
      {
        path: 'recherche-oops',
        element: <Oops />,
      },
      {
        path: 'recherche-resultats',
        element: <Results />,
      },
      {
        path: 'recherche-article-aleatoire',
        element: <Random />,
      },

      // FAVORITE PAGE
      {
        path: 'favoris',
        element: <Favourite />,
      },
      {
        path: 'favoris-inconnu',
        element: <NoFav />,
      },
      {
        path: 'favoris-article-choisi',
        element: <DisplayFavorite />,
      },

      //HISTORY PAGE
      {
        path: 'historique',
        element: <History />,
      },

      {
        path: 'pas-d-historique',
        element: <NoHistory />,
      },
      {
        path: 'historique-choisi',
        element: <DisplayArticle />,
      },

      //ERROR PAGE
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
