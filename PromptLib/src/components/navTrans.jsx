import React from 'react';
import './compTrans.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/tool.png';
import Icon from '../assets/translate-now-icon.png';

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
        <div className="instruction3">
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
            <h5>Writing</h5>
            <h1>TranslateNow</h1>
            <p>Translate text from one language to another</p>
          </div>
          
        </div>
        <div className="start-using3">
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
