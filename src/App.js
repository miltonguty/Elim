import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/home';
import YouthPage from './pages/youth';
import AboutUsPage from './pages/aboutUs';
import Connect_1Page from './pages/connect_1';
import Connect_2Page from './pages/connect_2 ';
import RadioPage from './pages/radio';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> }> </Route>
        <Route path="/Quienes-somos" element={ <AboutUsPage /> }> </Route>
        <Route path="/Elim-radio" element={ <RadioPage /> }> </Route>
        <Route path="/jorge-Funetes" element={ <Connect_1Page /> }> </Route>
        <Route path="/Noe-vargas" element={ <Connect_2Page /> }> </Route>
        <Route path="/elim-jovenes" element={ <YouthPage /> }> </Route>
      </Routes>
    </Router>

  );
}

export default App;

