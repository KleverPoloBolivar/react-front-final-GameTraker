import { useState } from "react";

function GameForm({ onAdd }) {
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/juegos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    onAdd(data);

    setFormData({
      titulo: "",
      genero: "",
      plataforma: "",
      añoLanzamiento: "",
      desarrollador: "",
      imagenPortada: "",
      descripcion: "",
      completado: false
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input name="titulo" placeholder="Título" onChange={handleChange} value={formData.titulo} />
      <input name="genero" placeholder="Género" onChange={handleChange} value={formData.genero} />
      <input name="plataforma" placeholder="Plataforma" onChange={handleChange} value={formData.plataforma} />
      <input name="añoLanzamiento" type="number" placeholder="Año lanzamiento" onChange={handleChange} value={formData.añoLanzamiento} />
      <input name="desarrollador" placeholder="Desarrollador" onChange={handleChange} value={formData.desarrollador} />
      <input name="imagenPortada" placeholder="URL Imagen" onChange={handleChange} value={formData.imagenPortada} />

      <textarea name="descripcion" placeholder="Descripción" onChange={handleChange} value={formData.descripcion}></textarea>

      <label>
        <input type="checkbox" name="completado" checked={formData.completado}
          onChange={(e) => setFormData({ ...formData, completado: e.target.checked })} />
        Completado
      </label>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default GameForm;
