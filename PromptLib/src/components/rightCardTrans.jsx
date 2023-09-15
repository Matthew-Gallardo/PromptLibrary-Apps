import React from 'react';
import './compTrans.css'; // Import your new CSS file
import Icon from '../assets/icons8-language-24.png';

const RightCard = () => {
  return (
    <div className="travel-card3">
      <div className="recipe-icon">
        <img
          src={Icon}
          alt="translate-icon"
          className="icon-image"
          width="50"
          height="50"
        />
      </div>
      <div className="recipe-text">
        <h2 className="travel-title">Translate</h2>
        <p className="travel-description">
          Translate text from one language to another
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
