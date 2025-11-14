import { useState } from "react";

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState({
    puntuacion: 5,
    textoReseña: "",
    horasJugadas: 0,
    dificultad: "",
    recomendaria: true,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(review);
      }}
    >
      <h3>Escribir Reseña</h3>

      <select
        value={review.puntuacion}
        onChange={(e) => setReview({ ...review, puntuacion: e.target.value })}
      >
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <textarea
        placeholder="Tu reseña"
        value={review.textoReseña}
        onChange={(e) => setReview({ ...review, textoReseña: e.target.value })}
      />

      <input
        type="number"
        placeholder="Horas jugadas"
        value={review.horasJugadas}
        onChange={(e) => setReview({ ...review, horasJugadas: e.target.value })}
      />

      <input
        type="text"
        placeholder="Dificultad"
        value={review.dificultad}
        onChange={(e) => setReview({ ...review, dificultad: e.target.value })}
      />

      <button type="submit">Enviar Reseña</button>
    </form>
  );
}

export default ReviewForm;
