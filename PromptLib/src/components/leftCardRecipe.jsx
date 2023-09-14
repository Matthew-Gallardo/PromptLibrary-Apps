import React from 'react';
import './comp.css'; // Import your CSS file



const Card = () => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title">Entry Text</div>
          <div className="card-subtitle">Enter a list of ingredients, with or without quantities, and your personal AI chef will come up with a tailor-made recipe</div>
        </div>
        <div className="card-item">
          <div className="item-label">Ingredients</div>
          <input
            type="text"
            className="item-input"
            placeholder="Chicken thighs, soy sauce, rice, lemongrass, peppers, ginger..."
          />
        </div>
        <button className="perform-button">Perform Request</button>
      </div>
    );
  };

export default Card;