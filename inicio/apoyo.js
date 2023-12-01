// ClientCarousel.js
import React, { useState } from 'react';

const ClientCarousel = ({ clients }) => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const handleNextClient = () => {
    setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const handlePreviousClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const currentClient = clients[currentClientIndex];

  return (
    <div>
      <h2>Clientes</h2>
      <button onClick={handlePreviousClient}>Cliente Anterior</button>
      <button onClick={handleNextClient}>Siguiente Cliente</button>

      <h3>Nombre: {currentClient.name}</h3>
      {/* Mostrar más detalles del cliente aquí */}
    </div>
  );
};

export default ClientCarousel;
