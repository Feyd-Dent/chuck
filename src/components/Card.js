import React from "react";
import './Card.css';

const Card = ({ number, cat, joke }) => {
  return (
    <div className="card">
      <img
        src={`http://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG${number}.png`}
        alt="Chuck"
      />
      <div>
        <h3>{cat}</h3>
        <p style={{ padding: "2rem", maxWidth: "55ch" }}>{joke}</p>
      </div>
    </div>
  );
};

export default Card;
