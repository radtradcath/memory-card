import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Container from "./components/Container";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const url = "https://valorant-api.com/v1/agents";

    const key = setTimeout(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          return setCards([...cards, ...response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 0);

    return () => clearTimeout(key);
  }, []);

  console.log(cards)

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <Container>
        {cards.map((card) => (
          <Card
            key={card.uuid}
            id={card.uuid}
            src={card.displayIcon}
            heroName={card.displayName}
            heroRole={card.role.displayName}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
