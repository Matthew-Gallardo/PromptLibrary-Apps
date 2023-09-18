import React from 'react';
import './compTrips.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/tool.png';
import Icon from '../assets/trips-ai-icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bottom-section">
        <div className="instruction1">
          <div className="instruction-icon">
          <Link to="/" className="logo">
            <img
              src={Icon}
              alt="Instruction Icon"
              className="icon-image"
              width="50"
              height="50"
            />
             </Link>
          </div>
          <div className="instruction-text">
            <h5>Instruction</h5>
            <h1>TripsAI</h1>
            <p>Roam around the world with your personal AI travel planner.</p>
          </div>
          
        </div>
        <div className="start-using1">
            <div className="clickable-div1">
              <a href="#">Start Using</a>
            </div>
            <div className="clickable-div2">
              <a href="#">Example</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
