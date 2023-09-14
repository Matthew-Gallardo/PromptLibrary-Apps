import React from 'react';
import Navbar from '../components/navTrips';
import './pages.css';
import EntryCard from '../components/leftCardTrips';
import RightCard from '../components/rightCardTrips';

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
