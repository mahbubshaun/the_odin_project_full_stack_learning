import '../styles/Scoreboard.css';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score">
        <h2 className="score-title">Current Score</h2>
        <p className="score-value">{currentScore}</p>
      </div>
      <div className="score">
        <h2 className="score-title">Best Score</h2>
        <p className="score-value">{bestScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;