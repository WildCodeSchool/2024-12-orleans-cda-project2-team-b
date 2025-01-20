import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DisplayFav from '../Pages/display-favourite';
import DisplayHistory from '../Pages/display-history';
import Error404 from '../Pages/error-404';
import Favourite from '../Pages/favourite';
import History from '../Pages/history';
import Home from '../Pages/home';
import NoFav from '../Pages/no-favourite';
import NoHistory from '../Pages/no-history';
import Oops from '../Pages/oops';
import Random from '../Pages/random';
import Results from '../Pages/results';
import Search from '../Pages/search';
import App from './App';
import './main.scss';

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
            path: 'article-aleatoire/:id',
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
