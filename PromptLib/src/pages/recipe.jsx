import React from 'react';
import Navbar from '../components/navbar';
import './pages.css';
import EntryCard from '../components/entryCard';
import RightCard from '../components/rightCard';

function Recipe() {
  return (
    <div className="recipe-page">
      <Navbar />
      <div className="centered-cards">
        <EntryCard />
        <RightCard />
      </div>
    </div>
  );
}

export default Recipe;
