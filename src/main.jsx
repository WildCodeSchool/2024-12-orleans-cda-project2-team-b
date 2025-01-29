import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './app';
import './main.scss';
import DisplayFav from './pages/display-favourite';
import DisplayHistory from './pages/display-history';
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
      {
        path: 'recherche',
        element: <Search />,
        children: [
          {
            path: 'article-aleatoire',
            element: <Random />,
          },
          {
            path: 'oops',
            element: <Oops />,
          },
          {
            path: 'resultats-de-recherche',
            element: <Results />,
          },
        ],
      },
      {
        path: 'favoris',
        element: <Favourite />,
        children: [
          {
            path: 'pas-de-favoris',
            element: <NoFav />,
          },
          {
            path: 'article-favori/:id',
            element: <DisplayFav />,
          },
        ],
      },
      {
        path: 'historique',
        element: <History />,
        children: [
          {
            path: 'pas-d-historique',
            element: <NoHistory />,
          },
          {
            path: 'article-historique/:id',
            element: <DisplayHistory />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
