import { useState, useEffect } from "react";
import Tile from "./Tile";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function PuzzleBoard({ image, onComplete }) {
  const [tiles, setTiles] = useState([]);
  const [dragged, setDragged] = useState(null);
  const [tileSize, setTileSize] = useState(120);

  // 🔥 Responsive tile size
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 500) {
        setTileSize(90); // Mobile
      } else if (window.innerWidth < 900) {
        setTileSize(120); // Tablet
      } else {
        setTileSize(180); // Desktop
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Shuffle tiles
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
        gridTemplateColumns: `repeat(3, ${tileSize}px)`,
        gap: "8px",
        justifyContent: "center",
        margin: "20px auto",
        padding: "10px",
        border: "3px solid #ffcc00",
        borderRadius: "15px",
        backgroundColor: "#fff8dc",
        width: "fit-content",
        maxWidth: "95vw", // 🔥 Prevent overflow
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
          size={tileSize}
        />
      ))}
    </div>
  );
}

export default PuzzleBoard;