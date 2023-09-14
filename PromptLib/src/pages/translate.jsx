import React from 'react';
import Navbar from '../components/navTrans';
import './pages.css';
import EntryCard from '../components/leftCardTrans';
import RightCard from '../components/rightCardTrans';

function Trips() {
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

export default Trips;
