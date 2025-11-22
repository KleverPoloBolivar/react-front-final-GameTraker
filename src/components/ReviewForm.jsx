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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="Escribe tu reseña..."
        value={textoReseña}
        onChange={(e) => setTextoReseña(e.target.value)}
        style={{
          width: "100%",
          height: "130px",
          background: "#300",
          color: "white",
          border: "1px solid #922",
          borderRadius: "10px",
          padding: "8px",
          resize: "none",
        }}
      />

      <label>⭐ Puntuación</label>
      <select value={puntuacion} onChange={(e) => setPuntuacion(Number(e.target.value))}>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
      </select>

      <label>⏱ Horas jugadas</label>
      <input
        type="number"
        value={horasJugadas}
        onChange={(e) => setHorasJugadas(e.target.value)}
      />

      <label>🎮 Dificultad</label>
      <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
        <option>Fácil</option>
        <option>Normal</option>
        <option>Difícil</option>
      </select>

      <label>¿Lo recomendarías?</label>
      <input
        type="checkbox"
        checked={recomendaria}
        onChange={() => setRecomendaria(!recomendaria)}
      /> Sí

      <button
        type="submit"
        style={{
          width: "100%",
          marginTop: "12px",
          background: "#8A0B24",
          border: "none",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Guardar reseña
      </button>
    </form>
  );
}

export default ReviewForm;
