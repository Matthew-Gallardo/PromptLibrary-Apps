import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Trips from './pages/trips';
import Recipe from './pages/recipe';
import Translate from './pages/translate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
