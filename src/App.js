import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AboutPage from './pages/about';
import HomePage from './pages/home';
import YouthPage from './pages/youth';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "/Quienes-somos",
    element: (<AboutPage />),
  },
  ,
  {
    path: "/Elim-radio",
    element: (<AboutPage />),
  },
  ,
  {
    path: "/jorge-Funetes",
    element: (<AboutPage />),
  },
  ,
  {
    path: "/Noe-vargas",
    element: (<AboutPage />),
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

