import React from 'react';
import './comp.css'; // Import your CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">Tools</div>
        <div className="search">Search</div>
      </div>
      <hr className="divider" />
      <div className="instruction">
        <p>Instruction</p>
        <h1>TripsAI</h1>
        <p>Roam around the world with your personal AI travel planner.</p>
      </div>
      <div className="start-using">
        <p>
          <a href="#">Start Using</a> <a href="#">Example</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
