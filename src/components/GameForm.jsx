import { useState } from "react";

function GameForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    genre: "",
    developer: "",
    description: "",
    imagesrc: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return alert("El nombre es obligatorio");
    onSubmit(form);
    setForm({ name: "", genre: "", developer: "", description: "", imagesrc: "" });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        marginBottom: "30px"
      }}
    >

      <h2>Agregar Juego</h2>

      <input 
        type="text" 
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="genre"
        placeholder="Género"
        value={form.genre}
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="developer"
        placeholder="Desarrollador"
        value={form.developer}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
      />

      <input 
        type="url"
        name="imagesrc"
        placeholder="URL de imagen"
        value={form.imagesrc}
        onChange={handleChange}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default GameForm;
