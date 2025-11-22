import { useState } from "react";

function GameCard({ game, onDelete, onToggleCompletado, onEdit, onReview }) {
  const [expanded, setExpanded] = useState(false);

  const cardStyle = {
    backdropFilter: "blur(10px)",
    background: "linear-gradient(145deg, rgba(70,0,10,0.6), rgba(30,0,5,0.8))",
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid rgba(180, 0, 40, 0.4)",
    boxShadow: "0 0 15px rgba(100, 0, 20, 0.6)",
    position: "relative",
    overflow: "hidden",
    animation: "vinotintoGlow 6s ease-in-out infinite",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  };

  const stars = "⭐".repeat(game.puntuacion || 0);
  const ratingNumber = game.puntuacion ? `${game.puntuacion}/5` : "Sin calificación";

  return (
    <div
      className="game-card"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(255,80,120,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(100, 0, 20, 0.6)";
      }}
    >

      {/* Neblina blanca animada */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "160%",
          height: "160%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)",
          animation: "vinotintoFog 9s infinite alternate",
          filter: "blur(45px)",
          zIndex: 1,
        }}
      />

      {/* Botón eliminar */}
      <button
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "rgba(180, 0, 40, 0.9)",
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
          background: "rgba(255, 210, 210, 0.2)",
          border: "1px solid rgba(255,200,200,0.4)",
          padding: "6px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#ffdddd",
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
          color: "#ffb3c6",
          fontSize: "15px",
          marginBottom: "10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {stars} <span style={{ color: "#ffccd5" }}>({ratingNumber})</span>
      </p>

      <p style={{ color: "#ffdde6", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🎮 Plataforma:</strong> {game.plataforma}
      </p>

      <p style={{ color: "#ffdde6", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🧪 Género:</strong> {game.genero}
      </p>

      <p style={{ color: "#ffdde6", fontSize: "13px", zIndex: 3, position: "relative" }}>
        <strong>🏷️ Año:</strong> {game.añoLanzamiento}
      </p>

      <p style={{ color: "#ffdde6", fontSize: "13px", zIndex: 3, position: "relative" }}>
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
          background: game.completado ? "#55001a" : "#a00026",
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

      {/* Botón ver reseña */}
      <button
        onClick={onReview}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          background: "rgba(150,0,30,0.25)",
          border: "1px solid rgba(255,200,200,0.35)",
          color: "#ffd9e4",
          cursor: "pointer",
          fontWeight: "bold",
          zIndex: 3,
          position: "relative",
          transition: "0.3s",
          animation: "glowVinotinto 3.5s ease-in-out infinite",
        }}
        onMouseEnter={(e) => (e.target.style.background = "rgba(200,0,40,0.35)")}
        onMouseLeave={(e) => (e.target.style.background = "rgba(150,0,30,0.25)")}
      >
        📝 Ver reseña
      </button>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          background: "rgba(150,0,30,0.25)",
          border: "1px solid rgba(255,200,200,0.3)",
          color: "#ffd9e4",
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
            color: "#ffccd5",
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
