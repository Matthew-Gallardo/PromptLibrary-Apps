import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router

import Home from './pages/home';
import Recipe from './pages/recipe';
import Translate from './pages/translate';
import Trips from './pages/trips';

import './App.css';

function App() {
  return (
    <Router> {/* Wrap your entire application with a Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/translate" element={<Translate />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
