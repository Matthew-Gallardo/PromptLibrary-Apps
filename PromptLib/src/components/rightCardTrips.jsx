import React from 'react';
import './compTrips.css'; // Import your CSS file
import Icon from '../assets/icons8-location-50.png';

const RightCard = () => {
  return (
    <div className="travel-card1">
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
      <h2 className="travel-title">Travel</h2>
      <p className="travel-description">
        Please note that the information provided by this travel itinerary tool is
        for general guidance purposes only and users should independently verify
        all details before making any travel decisions.
      </p>
      <p className="lorem-ipsum">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam purus id tristique. Fusce convallis nunc a odio iaculis, at mattis odio egestas. Praesent sit amet arcu sit amet lectus mattis dictum. Fusce interdum nisi eu diam suscipit, quis congue orci dictum. Pellentesque auctor dolor at dolor scelerisque, in volutpat libero venenatis. Aliquam quis bibendum neque. Sed facilisis orci vel urna eleifend, quis laoreet libero euismod. Vivamus vulputate urna eu libero laoreet, nec venenatis dolor vulputate. Sed eu tortor vel justo vehicula facilisis ac quis augue. Duis euismod id nunc eu iaculis. Fusce ullamcorper libero a metus dignissim, nec vestibulum metus gravida.

      </p>
      </div>
    </div>
  );
};

export default RightCard;
