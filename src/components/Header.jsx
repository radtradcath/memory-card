export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="welcome">
        <h1 className="title">Valorant Memory Card</h1>
        <img src="https://vetores.org/d/valorant.svg" alt="Valorant logo" />
      </div>
      <h2 className="instructions">Instructions:</h2>
      <ul>
        <li>Click each card only once</li>
        <li>Beat your personal best</li>
        <li>Score 12 to win</li>
      </ul>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="best">Best: {bestScore}</p>
      </div>
    </header>
  );
}
