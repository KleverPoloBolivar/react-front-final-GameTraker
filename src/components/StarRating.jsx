import { useState } from "react";

function StarRating({ rating, onChange }) {
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          style={{
            fontSize: "28px",
            color: (hover || rating) >= star ? "#00A8FF" : "#5a5a5a",
            transition: "0.2s"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
