import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router

import Home from './pages/home';
import Recipe from './pages/recipe';
import Translate from './pages/translate';
import Trips from './pages/trips';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
  );
};


export default App;
