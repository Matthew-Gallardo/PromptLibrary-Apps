import React from 'react';
import './comp.css'; // Import your CSS file

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Entry Text</div>
        <div className="card-subtitle">Enter a place you want to visit</div>
      </div>
      <div className="card-item">
        <div className="item-label">Place to visit</div>
        <div className="placeholder-container">
          <input
            type="text"
            className="item-input"
            placeholder="Place to visit"
          />
        </div>
      </div>
      <div className="card-item">
        <div className="item-label">Number of days</div>
        <div className="placeholder-container">
          <input
            type="text"
            className="item-input"
            placeholder="Number of days"
          />
        </div>
      </div>
      <button className="perform-button">Perform Request</button>
    </div>
  );
};

export default Card;
