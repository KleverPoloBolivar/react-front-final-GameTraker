import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import Modal from "./Modal";

function GameForm({ onAdd, onUpdate, editingGame }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false,
    puntuacion: 0
  });

  useEffect(() => {
    if (editingGame) {
      setIsOpen(true);
      setFormData(editingGame);
    }
  }, [editingGame]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editingGame) {
      await onUpdate(formData);
    } else {
      await onAdd(formData);
    }

    setFormData({
      titulo: "",
      genero: "",
      plataforma: "",
      añoLanzamiento: "",
      desarrollador: "",
      imagenPortada: "",
      descripcion: "",
      completado: false,
      puntuacion: 0
    });

    setIsOpen(false);
  }

  return (
    <>
      {!editingGame && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "14px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            background: "linear-gradient(135deg, #4B0E17, #7A1F2A)",
            border: "2px solid #ffffff22",
            boxShadow: "0 0 10px #7A1F2A55",
            transition: "0.25s",
            marginBottom: "20px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 18px #7A1F2Aaa";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 10px #7A1F2A55";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🎮 Nuevo
        </button>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <h2 style={{ textAlign: "center", color: "white", marginBottom: "10px" }}>
            {editingGame ? "✏️ Editar Juego" : "Agregar Juego"}
          </h2>

          <input name="titulo" placeholder="Título" required onChange={handleChange} value={formData.titulo} />
          <input name="genero" placeholder="Género" onChange={handleChange} value={formData.genero} />
          <input name="plataforma" placeholder="Plataforma" onChange={handleChange} value={formData.plataforma} />
          <input name="añoLanzamiento" type="number" placeholder="Año de lanzamiento" onChange={handleChange} value={formData.añoLanzamiento} />
          <input name="desarrollador" placeholder="Desarrollador" onChange={handleChange} value={formData.desarrollador} />
          <input name="imagenPortada" placeholder="URL Imagen" onChange={handleChange} value={formData.imagenPortada} />

          <textarea
            name="descripcion"
            placeholder="Descripción del juego"
            rows="3"
            onChange={handleChange}
            value={formData.descripcion}
          ></textarea>

          <label style={{ color: "#ddd" }}>Calificación ⭐</label>
          <StarRating
            rating={formData.puntuacion}
            onChange={(val) => setFormData({ ...formData, puntuacion: val })}
          />

          <label style={{ display: "flex", gap: "10px", alignItems: "center", color: "#fff" }}>
            <input
              type="checkbox"
              name="completado"
              checked={formData.completado}
              onChange={(e) => setFormData({ ...formData, completado: e.target.checked })}
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
            />
            ¿Completado?
          </label>

          <button
            type="submit"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #4B0E17, #7A1F2A)",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              marginTop: "10px",
              boxShadow: "0 0 10px #7A1F2A55",
              transition: "0.25s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 18px #7A1F2Aaa";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px #7A1F2A55";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {editingGame ? "💾 Guardar cambios" : "Guardar"}
          </button>
        </form>
      </Modal>
    </>
  );
}

export default GameForm;
