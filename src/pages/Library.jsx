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
    <div style={{ padding: "20px" }}>
      <h1>Mi Biblioteca</h1>

      <GameForm onSubmit={handleAddGame} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
        {games.length === 0 ? (
          <p style={{ opacity: 0.6 }}>No hay juegos aún. Agrega uno 📚🎮</p>
        ) : (
          games.map((game, index) => (
            <GameCard 
              key={index} 
              game={game} 
              onDelete={() => handleDeleteGame(index)} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Library;
