import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './Pages/AboutUs';
import WhyUs from './Pages/WhyUs';
import RegisterComponent from './components/registerComponent.js';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/register-component" element={<RegisterComponent />} />

      </Routes>
    </div>
  );
};

export default App;
