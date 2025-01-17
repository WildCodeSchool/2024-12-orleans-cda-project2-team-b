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
import Favourite from '../Pages/Favourite';
import History from '../Pages/History';
import Home from '../Pages/Home';
import Random from '../Pages/Random';
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
            path: '/article-aleatoire',
            element: <Random />,
          },
          // Oops Recherche
        ],
      },
      {
        path: '/favoris',
        element: <Favourite />,
        // children NoFav et displayFav
        // GESTION DES ID POUR LES ARTICLES ?
      },
      {
        path: '/historique',
        element: <History />,
        // children displayHistory
        // GESTION DES ID POUR LES ARTICLES ?
      },
      // Faire link Error 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
