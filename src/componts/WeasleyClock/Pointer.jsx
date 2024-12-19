import React from 'react';

function Pointer({ name, status, icon }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{icon}</p>
    </div>
  );
}

export default Pointer;
