import React from 'react';
import Navbar from '../components/navTrans';
import './pages.css';
import EntryCard from '../components/leftCardTrans';
import RightCard from '../components/rightCardTrans';

function Trips() {
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

export default Trips;
