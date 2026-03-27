import { useState } from "react";
import levels from "./data/data";
import PuzzleBoard from "./components/PuzzleBoard";

function App() {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    if (level < levels.length - 1) {
      setLevel(level + 1);
    } else {
      alert("🎉 All levels completed!");
    }
  };

  const current = levels[level];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Level {current.letter}</h1>
      <h2>{current.letter} for {current.word}</h2>

      <PuzzleBoard image={current.image} onComplete={nextLevel} />
    </div>
  );
}

export default App;