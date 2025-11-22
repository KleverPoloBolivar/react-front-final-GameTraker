import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function Library() {
  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);

  const [selectedGame, setSelectedGame] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const [gameReviews, setGameReviews] = useState([]);

  const fetchGames = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/juegos");
      const data = await res.json();
      setGames(data);
    } catch (error) {
      console.error("Error al cargar juegos:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleAddGame = async (newGame) => {
    try {
      const res = await fetch("http://localhost:3000/api/juegos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame),
      });

      const createdGame = await res.json();
      setGames((prev) => [...prev, createdGame]);
    } catch (error) {
      console.error("Error al agregar juego:", error);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/juegos/${id}`, {
        method: "DELETE",
      });

      setGames((prev) => prev.filter((g) => g._id !== id));
    } catch (error) {
      console.error("Error eliminando juego:", error);
    }
  };

  const toggleCompletado = async (id) => {
    try {
      const juegoActual = games.find((g) => g._id === id);
      if (!juegoActual) return;

      const nuevoValor = { completado: !juegoActual.completado };

      const res = await fetch(`http://localhost:3000/api/juegos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoValor),
      });

      const updated = await res.json();

      setGames((prev) => prev.map((g) => (g._id === id ? updated : g)));
    } catch (err) {
      console.error("toggleCompletado error:", err);
      alert("No se pudo cambiar el estado.");
    }
  };

  const handleEditGame = (game) => {
    setEditingGame({ ...game });
  };

  const handleUpdateGame = async (updatedGame) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/juegos/${updatedGame._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedGame),
        }
      );

      const data = await res.json();

      setGames((prev) => prev.map((g) => (g._id === data._id ? data : g)));

      setEditingGame(null);
    } catch (err) {
      console.error("Error al actualizar juego:", err);
    }
  };

  // 💛 Cambiado: ahora usa /api/reviews
  const handleOpenReview = async (game) => {
    console.log("📌 Abriendo reseñas de:", game);
    setSelectedGame(game);

    const res = await fetch(`http://localhost:3000/api/reviews/${game._id}`);
    const reviews = await res.json();
    setGameReviews(reviews);

    setIsReviewOpen(true);
  };

  const handleCloseReview = () => {
    setIsReviewOpen(false);
    setSelectedGame(null);
    setGameReviews([]);
  };

  // 📝 Guardar reseña REAL usando la ruta correcta
  const handleSubmitReview = async (reviewData) => {
    const res = await fetch("http://localhost:3000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...reviewData, juegoId: selectedGame._id }),
    });

    const newReview = await res.json();
    setGameReviews((prev) => [...prev, newReview]);
  };

  return (
    <>
      <div style={{ padding: "20px", color: "white", width: "100%" }}>
        <h1>🎮 Mi Biblioteca 👾</h1>

        <div className="sticky-form" style={{ marginBottom: "25px" }}>
          <GameForm
            onAdd={handleAddGame}
            onUpdate={handleUpdateGame}
            editingGame={editingGame}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {games.map((game) => (
            <GameCard
              key={game._id}
              game={game}
              onDelete={() => handleDeleteGame(game._id)}
              onToggleCompletado={toggleCompletado}
              onEdit={() => handleEditGame(game)}
              onReview={handleOpenReview}
            />
          ))}
        </div>
      </div>

      {/* PANEL RESEÑAS */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          right: isReviewOpen ? "0" : "-420px",
          width: "400px",
          height: "90vh",
          background: "rgba(20,0,0,0.92)",
          color: "white",
          padding: "20px",
          boxShadow: "-4px 0 15px rgba(0,0,0,0.5)",
          transition: "right 0.4s ease",
          zIndex: 9999,
          overflowY: "auto",
          borderRadius: "12px 0 0 12px",
        }}
      >
        <button
          onClick={handleCloseReview}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          ❌ Cerrar
        </button>

        {selectedGame && (
          <>
            <h2>⭐ Reseñas de {selectedGame.titulo}</h2>

            <ReviewForm onSubmit={handleSubmitReview} />

            <ReviewList reviews={gameReviews} />
          </>
        )}
      </div>
    </>
  );
}

export default Library;
