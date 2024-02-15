import React from 'react';
//import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './';
import './CSS/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your App with BrowserRouter */}
      <App />
    </Router>
  </React.StrictMode>
);
