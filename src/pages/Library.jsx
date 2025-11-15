import { useState } from "react";
import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";

function Library() {
  const [games, setGames] = useState([]);

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
  };

  const handleDeleteGame = (index) => {
    setGames(games.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        minHeight: "100vh",
        width: "100%",  // ← AGREGADO PARA OCUPAR TODA LA PÁGINA
        background: "linear-gradient(135deg, #0a0f1d, #0b1f3a, #0d2a55)",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "2.4rem",
        }}
      >
        🎮 Mi Biblioteca
      </h1>

      {/* CONTENEDOR HORIZONTAL */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          width: "100%",  // ← AGREGADO PARA QUE EL CONTENEDOR SE EXPANDA
        }}
      >
        {/* FORMULARIO */}
        <GameForm onSubmit={handleAddGame} />

        {/* GRID DE JUEGOS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "25px",
            flex: 1,
            width: "100%",  //  AGREGADO PARA EXPANDIR EL GRID
          }}
        >
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              onDelete={() => handleDeleteGame(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
