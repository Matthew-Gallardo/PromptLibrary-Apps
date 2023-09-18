import React from 'react';
import './compTrans.css'; // Import your CSS file
import Icon from '../assets/leftTrans.png';

const Card = () => {
  // Array of languages from A to Z
  const languages = [
    'Afrikaans',
    'Albanian',
    'Amharic',
    'Arabic',
    'Armenian',
    'Azerbaijani',
    'Basque',
    'Belarusian',
    'Bengali',
    'Bosnian',
    'Bulgarian',
    'Catalan',
    'Cebuano',
    'Chichewa',
    'Chinese',
    'Corsican',
  ];

  return (
    <div className="card">
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
        <div className="card-title">Entry Text</div>
        <div className="card-subtitle">Translate text from one language to another</div>
      </div>
      </div>
      <div className="card-item">
        <div className="item-label">Text to Translate</div>
        <textarea
          className="item-input"
          placeholder="Enter Text to Translate"
          rows="4" 
        />
      </div>
      <div className="card-item">
        <div className="item-label">Language to Translate to:</div>
        <select className="item-input">
          {/* Add dropdown menu options for languages */}
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <button className="perform-button">Perform Request</button>
    </div>
  );
};

export default Card;
