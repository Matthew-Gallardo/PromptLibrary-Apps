import React from 'react';
import './compRecipe.css'; // Import your CSS file
import Icon from '../assets/leftRecipe.png';

const Card = () => {
  return (
    <div className="card2">
       <div className='icon-header'>
      <div className="recipe-icon">
        <img
          src={Icon}
          alt="recipe-icon"
          className="icon-image"
          width="45"
          height="45"
        />
      </div>
      <div className="card-header">
        <div className="card-title">Enter Recipe</div>
        <div className="card-subtitle">
          Enter a list of ingredients, with or without quantities, and your personal AI chef will come up with a tailor-made recipe
        </div>
      </div>
      </div>
      <div className="card-item">
        <div className="item-label">Ingredients</div>
        <textarea
          className="item-input"
          placeholder="Chicken thighs, soy sauce, rice, lemongrass, peppers, ginger..."
          rows="4" 
        />
      </div>
      <button className="perform-button2">Generate Recipe</button>
    </div>
  );
};

export default Card;
