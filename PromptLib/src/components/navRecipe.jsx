import React from 'react';
import './comp.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo-search">
        <Link to="/" className="logo">Tools</Link>
          <div className="search">Search...</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="instruction">
          <p>Instruction</p>
          <h1>Recipe Maker</h1>
          <p>Create a recipe from a list of ingredients. (Eat at your own risk.)</p>
        </div>
        <div className="start-using">
          <p>
            <a href="#">Start Using</a> <a href="#">Example</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;