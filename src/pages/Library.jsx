import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";

function Library() {
  const [games, setGames] = useState([]);

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

    // Agregarlo al estado sin recargar toda la lista
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
      fetchGames();
    } catch (error) {
      console.error("Error eliminando juego:", error);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", width: "100%" }}>
      <h1>🎮 Mi Biblioteca 👾</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <GameForm onAdd={handleAddGame} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "25px", flex: 1
        }}>
          {games.map((game) => (
            <GameCard key={game._id} game={game} onDelete={() => handleDeleteGame(game._id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
