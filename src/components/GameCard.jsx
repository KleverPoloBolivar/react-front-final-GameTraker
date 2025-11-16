import { useState } from "react";

function GameCard({ game, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: "#1c1c1c",
      padding: "14px",
      borderRadius: "14px",
      position: "relative"
    }}>
      <button onClick={onDelete} style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        background: "darkred",
        border: "none",
        padding: "5px",
        borderRadius: "6px",
        cursor: "pointer",
        color: "white"
      }}>
        ❌
      </button>

      {game.imagenPortada && (
        <img src={game.imagenPortada} alt={game.titulo} style={{
          width: "100%", height: "130px", borderRadius: "10px", objectFit: "cover"
        }} />
      )}

      <h3 style={{ color: "white" }}>{game.titulo}</h3>

      <p style={{ color: "#ccc" }}><strong>Género:</strong> {game.genero}</p>
      <p style={{ color: "#ccc" }}><strong>Plataforma:</strong> {game.plataforma}</p>

      <button onClick={() => setExpanded(!expanded)} style={{
        marginTop: "10px", width: "100%", cursor: "pointer"
      }}>
        {expanded ? "Ocultar" : "Ver descripción"}
      </button>

      {expanded && <p style={{ color: "#aaa" }}>{game.descripcion}</p>}
    </div>
  );
}

export default GameCard;
