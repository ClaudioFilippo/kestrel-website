import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MyNavbar from './pages/components/navbar/mynavbar';

import HomePage from './pages/home/home';
import Azienda from './pages/azienda/azienda';
import Contatti from './pages/contatti/contatti';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        
          <MyNavbar></MyNavbar>       

          <Routes>
              <Route path="/kestrel-website" exact element={<HomePage/>} />
              <Route path="/" exact element={<HomePage/>} />
              <Route path="/azienda" exact element={<Azienda/>} />
              <Route path="/contatti" exact element={<Contatti/>} />
          </Routes>

      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

