import { useState } from "react";

function GameCard({ game, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const stars = "⭐".repeat(game.puntuacion || 0);
  const ratingNumber = game.puntuacion ? `${game.puntuacion}/5` : "Sin calificación";

  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "18px",
        padding: "16px",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        transition: "0.25s",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Delete Button */}
      <button
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "rgba(200, 0, 0, 0.8)",
          border: "none",
          padding: "6px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          fontSize: "14px",
        }}
      >
        ❌
      </button>

      {/* Game Image */}
      {game.imagenPortada && (
        <img
          src={game.imagenPortada}
          alt={game.titulo}
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "12px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
      )}

      {/* Title */}
      <h3 style={{ color: "white", marginBottom: "6px", fontSize: "1.2rem" }}>
        {game.titulo}
      </h3>

      {/* Steam-style Rating */}
      <p style={{ color: "#9cf", fontSize: "15px", marginBottom: "10px" }}>
        {stars} <span style={{ color: "#ccc" }}>({ratingNumber})</span>
      </p>

      {/* Basic Info */}
      <p style={{ color: "#ccc", fontSize: "13px" }}>
        <strong>🎮 Plataforma:</strong> {game.plataforma}
      </p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>
        <strong>🧪 Género:</strong> {game.genero}
      </p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>
        <strong>🏷️ Año:</strong> {game.añoLanzamiento}
      </p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>
        <strong>🏢 Dev:</strong> {game.desarrollador}
      </p>

      {/* Expandable Description */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          background: "rgba(180,180,255,0.15)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#d0e4ff",
          cursor: "pointer",
          transition: "0.2s",
          fontWeight: "bold",
        }}
      >
        {expanded ? "Ocultar descripción" : "Ver descripción"}
      </button>

      {expanded && (
        <p style={{ color: "#aaa", marginTop: "10px", fontSize: "13px" }}>
          {game.descripcion}
        </p>
      )}
    </div>
  );
}

export default GameCard;
