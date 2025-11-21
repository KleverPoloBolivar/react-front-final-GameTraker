import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";

function Library() {
  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);

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
      setGames([...games, createdGame]);
    } catch (error) {
      console.error("Error al agregar juego:", error);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/juegos/${id}`, {
        method: "DELETE",
      });

      setGames(games.filter(g => g._id !== id));
    } catch (error) {
      console.error("Error eliminando juego:", error);
    }
  };

  const toggleCompletado = async (id) => {
    try {
      setGames(prev =>
        prev.map(g => g._id === id ? { ...g, completado: !g.completado } : g)
      );

      const juegoActual = games.find(g => g._id === id);
      const nuevoValor = { completado: !juegoActual?.completado };

      const res = await fetch(`http://localhost:3000/api/juegos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoValor)
      });

      if (!res.ok) throw new Error("Error al actualizar");

      const updated = await res.json();
      setGames(prev => prev.map(g => g._id === id ? updated : g));
    } catch (err) {
      console.error("toggleCompletado error:", err);
      alert("No se pudo cambiar el estado.");
    }
  };

  const handleEditGame = (game) => {
    setEditingGame(game);
  };

  const handleUpdateGame = async (updatedGame) => {
    try {
      const res = await fetch(`http://localhost:3000/api/juegos/${updatedGame._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGame),
      });

      const data = await res.json();

      setGames(games.map(g => g._id === data._id ? data : g));
      setEditingGame(null);
    } catch (err) {
      console.error("Error al actualizar juego:", err);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", width: "100%" }}>
      <h1>🎮 Mi Biblioteca 👾</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <GameForm 
          onAdd={handleAddGame} 
          onUpdate={handleUpdateGame}
          editingGame={editingGame}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "25px",
            flex: 1
          }}
        >
          {games.map((game) => (
            <GameCard
              key={game._id}
              game={game}
              onDelete={() => handleDeleteGame(game._id)}
              onToggleCompletado={toggleCompletado}
              onEdit={() => handleEditGame(game)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
