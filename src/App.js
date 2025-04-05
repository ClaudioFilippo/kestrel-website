import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import MyNavbar from './pages/components/navbar/mynavbar';
import HomePage from './pages/home/home';
import Azienda from './pages/azienda/azienda';
import Contatti from './pages/contatti/contatti';

import CookiePolicy from "./documents/cookie-policy"
import PrivacyPolicy from "./documents/privacy-policy"

import CookieBanner from './pages/components/cookie-banner/cookie-banner';
import './pages/components/cookie-banner/cookie-banner.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>

        <CookieBanner />

        <RenderNavbar />
        
        <Routes>
          <Route path="/kestrel-website" exact element={<HomePage />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/azienda" exact element={<Azienda />} />
          <Route path="/contatti" exact element={<Contatti />} />

          <Route path="/cookie-policy" exact element={<CookiePolicy />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
        </Routes>

      </BrowserRouter>
    </React.StrictMode>
  );
}

function RenderNavbar() {
  const location = useLocation();

  // Do not render navbar on "/cookie-policy" and "/privacy-policy" pages
  if (location.pathname === '/cookie-policy' || location.pathname === '/privacy-policy') {
    return null; // Do not render the navbar
  }

  return <MyNavbar />; // Render the navbar for other pages
}

export default App;
