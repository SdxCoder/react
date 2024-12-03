import { createRoot } from 'react-dom/client';
import routes from './presentation/routes/routes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./shared/css/tailwind.css";
import React from 'react';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
