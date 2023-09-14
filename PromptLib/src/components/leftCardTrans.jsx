import React from 'react';
import './comp.css'; // Import your CSS file

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
      <div className="card-header">
        <div className="card-title">Entry Text</div>
        <div className="card-subtitle">Translate text from one language to another</div>
      </div>
      <div className="card-item">
        <div className="item-label">Text to translate</div>
        <input
          type="text"
          className="item-input"
          placeholder="Input Text to translate"
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
