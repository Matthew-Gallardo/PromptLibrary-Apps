import React from 'react';
import './comp.css'; // Import your CSS file

const Card = () => {
 return (
    <div className="card">
      <div className="card-header">
      <div className="card-title">Text to translate</div>
          <div className="card-subtitle">Translate one language to another</div>
      </div>
      <div className="card-item">
        <div className="item-label">Text to translate</div>
        <input
          type="text"
          className="item-input"
          placeholder="PLACEHOLDER FOR text"
        />
      </div>
      <div className="card-item">
        <div className="item-label">LANGUAGE TO TRANSLATE TO:</div>
        <select className="item-input">
          {/* Add dropdown menu options for languages */}
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <button className="perform-button">Perform Translation</button>
    </div>
  );
};
export default Card;
