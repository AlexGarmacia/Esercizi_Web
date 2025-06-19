import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Persona = ({ nome, cognome, età }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Dettagli Persona</h5>
          <p className="card-text"><strong>Nome:</strong> {nome}</p>
          <p className="card-text"><strong>Cognome:</strong> {cognome}</p>
          <p className="card-text"><strong>Età:</strong> {età}</p>
        </div>
      </div>
    </div>
  );
}

export default Persona;
