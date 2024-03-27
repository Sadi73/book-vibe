import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooksRoot from './Components/ListedBooksRoot.jsx';
import PagesToReadRoot from './Components/PagesToReadRoot.jsx';
import Home from './Components/Home.jsx';
import Details from './Components/Details.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed-books',
        element: <ListedBooksRoot />
      },
      {
        path: '/pages-to-read',
        element: <PagesToReadRoot />
      },
      {
        path: '/details/:id',
        element: <Details />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
