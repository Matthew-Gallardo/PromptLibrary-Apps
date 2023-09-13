import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"; 

function App() {
  const [cards] = useState([
    {
      title: "TeacherAI",
      text: `Your fourth card content goes here. You can add more text to test the button positioning.`,
    },
    {
      title: "TripsAI",
      text: `Let AI create customized itineraries for you. Plan your perfect getaway with AI-powered precision!`,
    },
    {
      title: "Recipe Maker",
      text: `Turn your ingredients into culinary masterpieces. Just enter your ingredients, and we'll do the rest! Start cooking today.`,
    },
    {
      title: "TranslateNow",
      text: `Experience lightning-fast text translation in over 100 languages, right at your fingertips!`,
    },
   
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>AI Pro</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <button className="btn">Go to {card.title}  </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
