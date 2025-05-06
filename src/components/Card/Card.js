import React from 'react';
import './Card.css';

function Card({ nome, url, imagem}) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="card" onClick={handleClick}>
       <img src={imagem} alt={nome} className="card-img" />
       <p className="card-title">{nome}</p>
    </div>
  );
}

export default Card;
