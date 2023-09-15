import React from 'react';
import './comp.css'; // Import your CSS file
import { Link } from 'react-router-dom';

// Import your image assets
import logoImage from '../assets/tool.png'; // Replace with your logo image
import translateImage from '../assets/tool.png'; // Replace with your translate image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo-search">
          <img src={logoImage} alt="Logo" className="logo-image" width="100" height="100" />
          <Link to="/" className="logo">Tools</Link>
          <div className="search">Search...</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="instruction">
          <p>Writing</p>
          <h1>TranslateNow</h1>
          <p>Translate text from one language to another.</p>
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
