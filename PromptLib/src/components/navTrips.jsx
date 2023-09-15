import React from 'react';
import './compTrips.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/tool.png';
import Icon from '../assets/trips-ai-icon.png';

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
        <div className="instruction1">
          <div className="instruction-icon">
            <img
              src={Icon}
              alt="Instruction Icon"
              className="icon-image"
              width="50"
              height="50"
            />
          </div>
          <div className="instruction-text">
            <h5>Instruction</h5>
            <h1>TripsAI</h1>
            <p>Roam around the world with your personal AI travel planner.</p>
          </div>
          
        </div>
        <div className="start-using1">
            <div className="clickable-div">
              <a href="#">Start Using</a>
            </div>
            <div className="clickable-div">
              <a href="#">Example</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
