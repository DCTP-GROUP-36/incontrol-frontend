import RegisterPage from './components/RegisterPage.js';
import "./CSS/App.css"
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './Pages/AboutUs';
import WhyUs from './Pages/WhyUs';
import LoginPage from './components/LoginPage.js';
//import RegisterComponent from './components/registerComponent.js';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
};

export default App;
