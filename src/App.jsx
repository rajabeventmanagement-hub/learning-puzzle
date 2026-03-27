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
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "10px",
        backgroundColor: "#f0f8ff",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(24px, 5vw, 40px)", // 🔥 responsive text
          color: "#ff6600",
        }}
      >
        Level {current.letter}
      </h1>

      <h2
        style={{
          fontSize: "clamp(18px, 4vw, 28px)",
          marginBottom: "15px",
          color: "#0066cc",
        }}
      >
        {current.letter} for {current.word}
      </h2>

      <PuzzleBoard image={current.image} onComplete={nextLevel} />
    </div>
  );
}

export default App;