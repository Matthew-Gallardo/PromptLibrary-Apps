import React from 'react';
import './compRecipe.css'; // Import your CSS file
import Icon from '../assets/icons8-recipe-50.png';

const RightCard = () => {
  return (
    <div className="travel-card2">
      <div className="recipe-icon">
        <img
          src={Icon}
          alt="recipe-icon"
          className="icon-image"
          width="50"
          height="50"
        />
      </div>
      <div className="recipe-text">
        <h2 className="travel-title">Recipe</h2>
        <p className="travel-description">
          The following recipe suggestions are generated by an AI model and
          should be used as a source of inspiration. Please exercise caution
          and use your judgment when preparing and consuming any recipe,
          taking into consideration dietary restrictions, allergies, and
          personal preferences.
        </p>
        <p className="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam purus id tristique. Fusce convallis nunc a odio iaculis, at
          mattis odio egestas. Praesent sit amet arcu sit amet lectus mattis
          dictum. Fusce interdum nisi eu diam suscipit, quis congue orci
          dictum. Pellentesque auctor dolor at dolor scelerisque, in volutpat
          libero venenatis. Aliquam quis bibendum neque. Sed facilisis orci
          vel urna eleifend, quis laoreet libero euismod. Vivamus vulputate
          urna eu libero laoreet, nec venenatis dolor vulputate. Sed eu tortor
          vel justo vehicula facilisis ac quis augue. Duis euismod id nunc eu
          iaculis. Fusce ullamcorper libero a metus dignissim, nec vestibulum
          metus gravida.
        </p>
      </div>
    </div>
  );
};

export default RightCard;