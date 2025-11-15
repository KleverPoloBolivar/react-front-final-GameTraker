import { useState } from "react";

function GameForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    genre: "",
    developer: "",
    tags: "",
    rating: 3,
    description: "",
    imagesrc: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return alert("El nombre es obligatorio");

    const formattedGame = {
      ...form,
      tags: form.tags.split(",").map(tag => tag.trim()),
    };

    onSubmit(formattedGame);

    setForm({
      name: "",
      genre: "",
      developer: "",
      tags: "",
      rating: 3,
      description: "",
      imagesrc: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "320px",
        padding: "16px",
        background: "rgba(20, 20, 20, 0.75)",
        borderRadius: "14px",
        border: "1px solid #333",
        backdropFilter: "blur(6px)",
        marginRight: "30px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
      }}
    >
      <h2 style={{ color: "#7eb6ff", fontWeight: "bold" }}>Agregar Juego</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="genre"
        placeholder="Género"
        value={form.genre}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="developer"
        placeholder="Desarrollador"
        value={form.developer}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (separadas por comas)"
        value={form.tags}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        ⭐ Rating:
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          style={{
            padding: "8px",
            background: "#111",
            color: "white",
            border: "1px solid #444",
            borderRadius: "6px",
          }}
        >
          <option value="1">1 estrella</option>
          <option value="2">2 estrellas</option>
          <option value="3">3 estrellas</option>
          <option value="4">4 estrellas</option>
          <option value="5">5 estrellas</option>
        </select>
      </label>

      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        style={{ ...inputStyle, height: "100px" }}
      />

      <input
        type="url"
        name="imagesrc"
        placeholder="URL de imagen"
        value={form.imagesrc}
        onChange={handleChange}
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#1b4fff",
          border: "none",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Agregar
      </button>
    </form>
  );
}

const inputStyle = {
  padding: "10px",
  background: "#111",
  border: "1px solid #444",
  borderRadius: "8px",
  color: "white",
};

export default GameForm;
