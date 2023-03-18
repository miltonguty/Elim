import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import HomePage from './pages/home';
import YouthPage from './pages/youth';
import AboutUsPage from './pages/aboutUs';
import Connect_1Page from './pages/connect_1';
import Connect_2Page from './pages/connect_2 ';
import RadioPage from './pages/radio';

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
    element: (<RadioPage />),
  },
  ,
  {
    path: "/jorge-Funetes",
    element: (<Connect_1Page />),
  },
  ,
  {
    path: "/Noe-vargas",
    element: (<Connect_2Page />),
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

