import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  const [cards] = useState([
    {
      title: "TeacherAI",
      text: `Your fourth card content goes here. You can add more text to test the button positioning.`,
      route: "teacherai",
    },
    {
      title: "TripsAI",
      text: `Let AI create customized itineraries for you. Plan your perfect getaway with AI-powered precision!`,
      route: "trips",
    },
    {
      title: "Recipe Maker",
      text: `Turn your ingredients into culinary masterpieces. Just enter your ingredients, and we'll do the rest! Start cooking today.`,
      route: "recipe",
    },
    {
      title: "TranslateNow",
      text: `Experience lightning-fast text translation in over 100 languages, right at your fingertips!`,
      route: "translate",
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
                {/* Use Link to navigate to the corresponding route */}
                <Link to={card.route} className="btn">
                  Go to {card.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
