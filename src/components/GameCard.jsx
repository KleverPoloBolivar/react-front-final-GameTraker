function GameCard({ game, onDelete }) {
  return (
    <div style={{
      width: "220px",
      background: "#222",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #555",
      position: "relative"
    }}>
      
      <button 
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          background: "red",
          border: "none",
          padding: "5px",
          cursor: "pointer"
        }}
      >
        ❌
      </button>

      {game.imagesrc && (
        <img src={game.imagesrc} alt={game.name} style={{ width: "100%", borderRadius: "10px" }} />
      )}

      <h3 style={{ marginTop: "10px" }}>{game.name}</h3>
      <p><strong>Género:</strong> {game.genre}</p>
      <p><strong>Desarrollador:</strong> {game.developer}</p>
      <p style={{ opacity: 0.8 }}>{game.description}</p>
    </div>
  );
}

export default GameCard;
