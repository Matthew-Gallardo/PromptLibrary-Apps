import React from 'react';
import Navbar from '../components/navRecipe';
import './pages.css';
import EntryCard from '../components/leftCardRecipe';
import RightCard from '../components/rightCardRecipe';

function Recipe() {
  return (
    <div className="recipe-page">
      <Navbar />
      <div className="content">
        <div className="left-section">
          <EntryCard />
        </div>
        <div className="right-section">
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
