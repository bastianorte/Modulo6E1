// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const WithMoreInfo = ({ isOpen, onClose, doctor }) => {

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <button
            className="bg-primary hover:bg-secondary text-white px-2 py-2 rounded-lg text-xs mb-4"
            onClick={onClose}
          >
            X
          </button>
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto" src={doctor.imagen}  alt="Bonnie image"/>
          <p><strong>Nombre:</strong> {doctor.genero === "m" ? 'Dr' : 'Dra'} {doctor.nombre}</p>
              <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
              <p><strong>Experiencia:</strong> {doctor.experiencia} años</p>
              <p><strong>Telefono:</strong> {doctor.contacto.telefono}</p>
              <p><strong>Correo:</strong> {doctor.contacto.email}</p>
      </div>
    </div>,
    document.getElementById('modal-doctor')  // Nodo fuera del árbol principal
  );
};

export default WithMoreInfo;
