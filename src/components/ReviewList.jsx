function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.length === 0 ? (
        <p style={{ color: "#aaa" }}>Aún no hay reseñas.</p>
      ) : (
        reviews.map((r) => (
          <div key={r._id} style={{
            background:"#220",
            padding:"10px",
            marginBottom:"10px",
            borderRadius:"10px"
          }}>
            <p>⭐ {r.puntuacion}/5</p>
            <p>{r.textoReseña}</p>
            <small>⏱ {r.horasJugadas}h — {r.dificultad}</small>
            <p>👍 {r.recomendaria ? "Recomendado" : "No recomendado"}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;
