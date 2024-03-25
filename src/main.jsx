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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/listed-books',
        element: <ListedBooksRoot />
      },
      {
        path: '/pages-to-read',
        element: <PagesToReadRoot />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
