import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import HomePage from './pages/home';
import YouthPage from './pages/youth';
import AboutUsPage from './pages/aboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "/Quienes-somos",
    element: (<AboutUsPage />),
  },
  ,
  {
    path: "/Elim-radio",
    element: (<HomePage />),
  },
  ,
  {
    path: "/jorge-Funetes",
    element: (<HomePage />),
  },
  ,
  {
    path: "/Noe-vargas",
    element: (<HomePage />),
  },
  ,
  {
    path: "/elim-jovenes",
    element: (<YouthPage />),
  },
]);
function App()
{
  return (
    <RouterProvider router={router} />
  );
}

export default App;

