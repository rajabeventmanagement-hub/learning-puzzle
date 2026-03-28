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
        padding: "20px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // 🔥 dark gradient
        color: "#ffffff",
        fontFamily: "'Comic Sans MS', cursive",
      }}
    >
      {/* Level Header */}
      <h1
        style={{
          fontSize: "clamp(28px, 6vw, 50px)",
          color: "#ffbb33",
          textShadow: "2px 2px 10px #ff6600, 0 0 20px #ffcc66", // glowing effect
          marginBottom: "10px",
          transition: "all 0.3s ease",
        }}
      >
        Level {current.letter}
      </h1>

      {/* Word Info */}
      <h2
        style={{
          fontSize: "clamp(20px, 4vw, 32px)",
          marginBottom: "20px",
          color: "#33ccff",
          textShadow: "1px 1px 8px #00ffff",
        }}
      >
        {current.letter} for {current.word}
      </h2>

      {/* Puzzle Board */}
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.05)", // soft card look
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <PuzzleBoard image={current.image} onComplete={nextLevel} />
      </div>

      {/* Footer / Instruction */}
      <p
        style={{
          marginTop: "30px",
          color: "#ffaa00",
          textShadow: "1px 1px 5px #ff6600",
          fontSize: "clamp(14px, 3vw, 18px)",
        }}
      >
        🔹 Complete the puzzle to unlock the next level!
      </p>
    </div>
  );
}

export default App;