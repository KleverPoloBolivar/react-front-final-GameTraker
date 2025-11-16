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
    // uso del estado actual con callback para evitar stale closure
    setGames(prev => {
      // optimista: actualizamos UI inmediatamente
      return prev.map(g => g._id === id ? { ...g, completado: !g.completado } : g);
    });

    // Consigue el juego actual (desde estado previo)
    const juegoActual = games.find(g => g._id === id);
    const nuevoValor = { completado: ! (juegoActual?.completado) };

    const res = await fetch(`http://localhost:3000/api/juegos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoValor)
    });

    if (!res.ok) {
      // si falla, revertir el cambio en UI y lanzar error
      const text = await res.text();
      setGames(prev => prev.map(g => g._id === id ? { ...g, completado: juegoActual ? juegoActual.completado : false } : g));
      throw new Error(`Error en backend: ${res.status} ${text}`);
    }

    const updated = await res.json();
    // sincronizamos el estado con lo que devolvió el servidor
    setGames(prev => prev.map(g => g._id === id ? updated : g));
  } catch (err) {
    console.error("toggleCompletado error:", err);
    alert("No se pudo cambiar el estado. Revisa la consola.");
  }
};

  return (
    <div style={{ padding: "20px", color: "white", width: "100%" }}>
      <h1>🎮 Mi Biblioteca 👾</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <GameForm onAdd={handleAddGame} />

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
