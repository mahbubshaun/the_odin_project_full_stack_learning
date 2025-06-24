import "./App.css";
import { useState } from 'react';
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <main className="main-content">
        <CardGrid setCurrentScore={setCurrentScore} setBestScore={setBestScore} currentScore={currentScore} bestScore={bestScore}/>
      </main>
    </div>
  );
}

export default App;
