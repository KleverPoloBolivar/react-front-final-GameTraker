function ReviewList({ reviews }) {
  return (
    <div>
      <h3>Reseñas:</h3>
      {reviews.map((r) => (
        <div key={r._id} className="review-card">
          <strong>{r.puntuacion} estrellas</strong>
          <p>{r.textoReseña}</p>
          <small>{r.horasJugadas} horas jugadas</small>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
