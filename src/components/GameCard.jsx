import { useState } from "react";

function GameCard({ game, onDelete, onToggleCompletado, onEdit }) {
  const [expanded, setExpanded] = useState(false);

  const cardStyle = {
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    position: "relative",
    overflow: "hidden",
  };

  const stars = "⭐".repeat(game.puntuacion || 0);
  const ratingNumber = game.puntuacion ? `${game.puntuacion}/5` : "Sin calificación";

  return (
    <div className="game-card" style={cardStyle}>
      {/* Botón eliminar */}
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
          zIndex: 3,
        }}
      >
        ❌
      </button>

      {/* Botón editar */}
      <button
        onClick={onEdit}
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          background: "#0A84FF",
          border: "none",
          padding: "6px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          fontSize: "14px",
          zIndex: 3,
        }}
      >
        ✏️
      </button>

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
            position: "relative",
            zIndex: 3,
          }}
        />
      )}

      <h3
        style={{
          color: "white",
          marginBottom: "6px",
          fontSize: "1.2rem",
          position: "relative",
          zIndex: 3,
        }}
      >
        {game.titulo}
      </h3>

      <p
        style={{
          color: "#9cf",
          fontSize: "15px",
          marginBottom: "10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {stars} <span style={{ color: "#ccc" }}>({ratingNumber})</span>
      </p>

      <p style={{ color: "#ccc", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🎮 Plataforma:</strong> {game.plataforma}
      </p>

      <p style={{ color: "#ccc", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🧪 Género:</strong> {game.genero}
      </p>

      <p style={{ color: "#ccc", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🏷️ Año:</strong> {game.añoLanzamiento}
      </p>

      <p style={{ color: "#ccc", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🏢 Dev:</strong> {game.desarrollador}
      </p>

      <p
        style={{
          fontWeight: "bold",
          marginTop: "6px",
          color: "white",
          position: "relative",
          zIndex: 3,
        }}
      >
        {game.completado ? "✔️ Completado" : "⏳ Pendiente"}
      </p>

      <button
        onClick={() => onToggleCompletado(game._id)}
        style={{
          background: game.completado ? "#444" : "#0A84FF",
          border: "none",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          width: "100%",
          cursor: "pointer",
          marginTop: "6px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 3,
        }}
      >
        {game.completado ? "Marcar como pendiente" : "Marcar como completado"}
      </button>

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
          fontWeight: "bold",
          position: "relative",
          zIndex: 3,
        }}
      >
        {expanded ? "Ocultar descripción" : "Ver descripción"}
      </button>

      {expanded && (
        <p
          style={{
            color: "#aaa",
            marginTop: "10px",
            fontSize: "13px",
            zIndex: 3,
            position: "relative",
          }}
        >
          {game.descripcion}
        </p>
      )}
    </div>
  );
}

export default GameCard;
