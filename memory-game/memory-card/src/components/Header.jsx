import '../styles/Header.css';
import Scoreboard from './ScoreBoard';

function Header({ currentScore, bestScore }) {
  return (
    <header className="header">
      <h1 className="header-title">Memory Card Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;