// src/components/FlipCard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlipCard({ topic }) {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <h3>{topic.title}</h3>
          <p>{topic.short}</p>
        </div>
        <div className="flip-back">
          <p>{topic.detail.slice(0, 90)}...</p>
          <button onClick={(e) => {
            e.stopPropagation();
            navigate(`/topic/${topic.id}`);
          }}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
