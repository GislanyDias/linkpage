import React from 'react';
import './Card.css';

function Card({ nome, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="card" onClick={handleClick}>
      {nome}
    </div>
  );
}

export default Card;
