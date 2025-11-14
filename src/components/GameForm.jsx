import { useState } from "react";

function GameForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    genre: "",
    developer: "",
    description: "",
    imagesrc: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <h2>Agregar Juego</h2>

      <input 
        type="text" 
        placeholder="Nombre" 
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input 
        type="text" 
        placeholder="Género" 
        value={form.genre}
        onChange={(e) => setForm({ ...form, genre: e.target.value })}
      />

      <input 
        type="text" 
        placeholder="Desarrollador" 
        value={form.developer}
        onChange={(e) => setForm({ ...form, developer: e.target.value })}
      />

      <textarea
        placeholder="Descripción"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input 
        type="text" 
        placeholder="URL de imagen"
        value={form.imagesrc}
        onChange={(e) => setForm({ ...form, imagesrc: e.target.value })}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default GameForm;
