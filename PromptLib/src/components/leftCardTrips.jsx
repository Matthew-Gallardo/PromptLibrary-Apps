import React from 'react';
import './compTrips.css'; 
import Icon from '../assets/leftTrips.png';

const Card = () => {
  return (
    <div className="card1">
    <div className='icon-header'>
        <div className="trips-icon">
        <img
          src={Icon}
          alt="trips-con"
          className="icon-image"
          width="45"
          height="45"
        />
      </div>
      <div className="card-header">
        <div className="card-title">Entry Text</div>
        <div className="card-subtitle">Enter a place you want to visit</div>
      </div>
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
      <button className="perform-button1">Perform Request</button>
    </div>
  );
};

export default Card;
