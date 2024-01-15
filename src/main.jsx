import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root';
import Index, { loader as indexLoader } from './routes/Index';
import { Checkbox } from '@mui/material';
import Meal, { loader as mealLoader } from './routes/Meal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    // action: rootAction,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: "/meal/:mealId",
        element: <Meal />,
        loader: mealLoader
      },
    ]
  },
  {
    path: "/checkout",
    element: <Checkbox />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
