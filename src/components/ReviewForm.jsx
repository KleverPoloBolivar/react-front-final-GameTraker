import { useState } from "react";

function ReviewForm({ onSubmit }) {
  const [puntuacion, setPuntuacion] = useState(5);
  const [textoReseña, setTextoReseña] = useState("");
  const [horasJugadas, setHorasJugadas] = useState("");
  const [dificultad, setDificultad] = useState("Normal");
  const [recomendaria, setRecomendaria] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!textoReseña.trim()) return alert("Escribe algo antes ❤️");

    onSubmit({
      puntuacion,
      textoReseña,
      horasJugadas,
      dificultad,
      recomendaria,
    });

    setTextoReseña("");
    setHorasJugadas("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {/* TEXTAREA */}
      <textarea
        placeholder="Escribe tu reseña..."
        value={textoReseña}
        onChange={(e) => setTextoReseña(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          background: "#300",
          color: "white",
          border: "1px solid #922",
          borderRadius: "10px",
          padding: "10px",
          resize: "none",
        }}
      />

      {/* GRID DE CAMPOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        {/* PUNTUACION */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>⭐ Puntuación</label>
          <select
            value={puntuacion}
            onChange={(e) => setPuntuacion(Number(e.target.value))}
            style={{
              padding: "8px",
              borderRadius: "8px",
              background: "#200",
              color: "white",
              border: "1px solid #944",
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* HORAS */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>⏱ Horas jugadas</label>
          <input
            type="number"
            value={horasJugadas}
            onChange={(e) => setHorasJugadas(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              background: "#200",
              color: "white",
              border: "1px solid #944",
            }}
          />
        </div>

        {/* DIFICULTAD */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>🎮 Dificultad</label>
          <select
            value={dificultad}
            onChange={(e) => setDificultad(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              background: "#200",
              color: "white",
              border: "1px solid #944",
            }}
          >
            <option>Fácil</option>
            <option>Normal</option>
            <option>Difícil</option>
          </select>
        </div>

        {/* RECOMENDACIÓN */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>¿Lo recomendarías?</label>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={recomendaria}
              onChange={() => setRecomendaria(!recomendaria)}
            />
            Sí
          </label>
        </div>
      </div>

      {/* BOTÓN */}
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#8A0B24",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
          marginTop: "10px",
        }}
      >
        Guardar reseña
      </button>
    </form>
  );
}

export default ReviewForm;
