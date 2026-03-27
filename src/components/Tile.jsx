function Tile({ index, image, position, onDrop, onDragStart, size }) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, index)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: "2px solid #ff9900",
        borderRadius: "10px",
        backgroundImage: `url(${image})`,
        backgroundSize: "300% 200%",
        backgroundPosition: `${(position % 3) * 50}% ${Math.floor(position / 3) * 100}%`,
        backgroundRepeat: "no-repeat",
        cursor: "grab",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
        touchAction: "none", // 🔥 important for mobile
      }}
    />
  );
}

export default Tile;