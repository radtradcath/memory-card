import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Container from "./components/Container";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    const url = "https://valorant-api.com/v1/agents";

    const key = setTimeout(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          return setCards([
            ...cards,
            ...response.data.filter((data) => data.isPlayableCharacter),
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 0);

    return () => clearTimeout(key);
  }, []);

  function shuffleArray(array) {
    const copy = [...array];
    const shuffled = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
      let pos = undefined;
      do {
        pos = Math.floor(Math.random() * array.length);
      } while (!!shuffled[pos]);

      shuffled[pos] = copy[i];
    }

    return shuffled;
  }

  function handleClick(e) {
    const targetId = e.currentTarget.id;
    console.log(targetId)
    if (clickedIds.includes(targetId)) {
      setScore(0);
      setClickedIds([]);
      setCards(shuffleArray([...cards]));
    } else {
      setScore((score) => score + 1);
      setClickedIds([...clickedIds, targetId]);
      setCards(shuffleArray([...cards]));
      score + 1 > bestScore ? setBestScore(prev => prev + 1) : "";
    }
  }

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
            handler={handleClick}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
