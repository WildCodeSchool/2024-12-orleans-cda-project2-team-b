// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './main.css';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import DisplayFav from '../Pages/DisplayFavourite';
import DisplayHistory from '../Pages/DisplayHistory';
import Error404 from '../Pages/Error404';
import Favourite from '../Pages/Favourite';
import History from '../Pages/History';
import Home from '../Pages/Home';
import NoFav from '../Pages/NoFavourite';
import NoHistory from '../Pages/NoHistory';
import Oops from '../Pages/Oops';
import Random from '../Pages/Random';
import Results from '../Pages/Results';
import Search from '../Pages/Search';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recherche',
        element: <Search />,
        children: [
          {
            path: '/article-aleatoire/:id',
            element: <Random />,
          },
          {
            path: '/oops',
            element: <Oops />,
          },
          {
            path: '/resultat-de-recherche',
            element: <Results />,
          },
        ],
      },
      {
        path: '/favoris',
        element: <Favourite />,
        children: [
          {
            path: '/pas-de-favoris',
            element: <NoFav />,
          },
          {
            path: '/article-favori/:id',
            element: <DisplayFav />,
          },
        ],
      },
      {
        path: '/historique',
        element: <History />,
        children: [
          {
            path: '/pas-d-historique',
            element: <NoHistory />,
          },
          {
            path: '/article-historique/:id',
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
