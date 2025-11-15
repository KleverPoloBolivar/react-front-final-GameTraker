import { useState } from "react";

function GameCard({ game, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const stars = "⭐".repeat(game.rating || 3);

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #1a1a1a, #0f0f0f)",
        padding: "14px",
        borderRadius: "14px",
        border: "1px solid #2b2b2b",
        boxShadow: "0 0 18px rgba(0,0,0,0.5)",
        transition: "0.25s ease",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(0,150,255,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 18px rgba(0,0,0,0.5)";
      }}
    >
      <button
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "rgba(255, 50, 50, 0.9)",
          border: "none",
          padding: "5px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          zIndex: 10,
        }}
      >
        ❌
      </button>

      {game.imagesrc && (
        <img
          src={game.imagesrc}
          alt={game.name}
          style={{
            width: "100%",
            height: "130px",
            borderRadius: "10px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
      )}

      <h3 style={{ color: "white", marginBottom: "4px" }}>{game.name}</h3>

      <p style={{ color: "#ccc", fontSize: "13px", marginBottom: "4px" }}>
        <strong>Género:</strong> {game.genre}
      </p>

      {/* Rating */}
      <p style={{ fontSize: "14px", color: "#9cf", marginBottom: "6px" }}>
        {stars}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
        {game.tags?.map((t, i) => (
          <span
            key={i}
            style={{
              background: "#0a84ff22",
              padding: "4px 8px",
              borderRadius: "6px",
              color: "#8fcaff",
              fontSize: "11px",
              border: "1px solid #0a84ff44",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description expandable */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: "6px",
          background: "transparent",
          border: "1px solid #444",
          borderRadius: "6px",
          color: "#9cf",
          marginBottom: "8px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        {expanded ? "Ocultar" : "Ver descripción"}
      </button>

      {expanded && (
        <p style={{ color: "#aaa", fontSize: "13px" }}>{game.description}</p>
      )}
    </div>
  );
}

export default GameCard;
