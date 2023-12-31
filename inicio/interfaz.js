import React, { useState } from 'react';


const EventPlaces = () => {
  return (
    <div>
      <h2>Lugares de Eventos</h2>
 
    </div>
  );
};


const Planners = () => {
  return (
    <div>
      <h2>Planners</h2>
      
    </div>
  );
};


const WeddingInterface = ({ clients }) => {
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
      <h1>Bienvenidos a la planificación de bodas</h1>
      <button onClick={handlePreviousClient}>Cliente Anterior</button>
      <button onClick={handleNextClient}>Siguiente Cliente</button>

      <h2>Cliente Actual: {currentClient.name}</h2>
      
     
      <EventPlaces />
      <Planners />

    </div>
  );
};


const clientsData = [
  { id: 1, name: 'Cliente 1' },
  { id: 2, name: 'Cliente 2' },
  // Agregar más clientes si es necesario
];


const App = () => {
  return <WeddingInterface clients={clientsData} />;
};

export default App;
