import React from 'react';
import './comp.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import logoImage from '../assets/tool.png'; // Replace with your logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo-search">
          <img
            src={logoImage}
            alt="Logo"
            className="logo-image"
            width="100"
            height="100"
          />
          <Link to="/" className="logo">
            Tools
          </Link>
          <div className="search">Search...</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="instruction">
          <h5>Instruction</h5>
          <h1>TripsAI</h1>
          <p>Roam around the world with your personal AI travel planner.</p>
          <div className="start-using">
          <div className="clickable-div">
            <a href="#">Start Using</a>
          </div>
          <div className="clickable-div">
            <a href="#">Example</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
