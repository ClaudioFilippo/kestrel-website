import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MyNavbar from './pages/components/navbar/mynavbar';

import HomePage from './pages/home/home';
import ChiSiamo from './pages/chisiamo/chisiamo';
import Contatti from './pages/contatti/contatti';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        
          <MyNavbar></MyNavbar>       

          <Routes>
              <Route path="/kestrel-website" exact element={<HomePage/>} />
              <Route path="/" exact element={<HomePage/>} />
              <Route path="/chi-siamo" exact element={<ChiSiamo/>} />
              <Route path="/contatti" exact element={<Contatti/>} />
          </Routes>

      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

