import { useState, useEffect } from "react";
import Tile from "./Tile";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function PuzzleBoard({ image, onComplete }) {
  const [tiles, setTiles] = useState([]);
  const [dragged, setDragged] = useState(null);

  // Initialize shuffled tiles
  useEffect(() => {
    setTiles(shuffle([...Array(6).keys()]));
  }, [image]);

  const handleDragStart = (_, index) => {
    setDragged(index);
  };

  const handleDrop = (_, index) => {
    const newTiles = [...tiles];
    [newTiles[dragged], newTiles[index]] = [newTiles[index], newTiles[dragged]];
    setTiles(newTiles);

    if (newTiles.every((tile, i) => tile === i)) {
      setTimeout(onComplete, 500);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 180px)", // Bigger tiles
        gap: "10px",
        justifyContent: "center", // Center horizontally
        margin: "20px auto", // Center and add vertical margin
        padding: "20px",
        border: "4px solid #ffcc00", // Fun border for kids
        borderRadius: "20px",
        backgroundColor: "#fff8dc", // Soft background
        width: "max-content", // Only as wide as puzzle
      }}
    >
      {tiles.map((pos, index) => (
        <Tile
          key={index}
          index={index}
          position={pos}
          image={image}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
          size={180} // Pass size to Tile
        />
      ))}
    </div>
  );
}

export default PuzzleBoard;