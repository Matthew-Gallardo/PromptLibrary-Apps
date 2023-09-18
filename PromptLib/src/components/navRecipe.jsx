import React from 'react';
import './compRecipe.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/tool.png';
import Icon from '../assets/recipe-maker-icon.png';

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
        <div className="instruction2">
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
            <h1>Recipe Maker</h1>
            <p>Create a recipe from a list of ingredients. (Eat at your own risk.)</p>
          </div>
          
        </div>
        <div className="start-using2">
            <div className="clickable-div">
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
