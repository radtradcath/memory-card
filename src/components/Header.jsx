export default function Header({score, bestScore}) {
  return (
    <header>
      <h1 className="title">Dota 2 Memory Card</h1>
      <h2 className="instructions">Instructions: click each card only once.</h2>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="best">Best: {bestScore}</p>
      </div>
    </header> 
  );
}
