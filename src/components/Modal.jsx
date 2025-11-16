import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.55)",
      backdropFilter: "blur(6px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}>
      <div style={{
        width: "420px",
        padding: "25px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        color: "white",
      }}>
        <button 
          onClick={onClose} 
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: "#fff"
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
