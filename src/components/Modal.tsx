// Modal.tsx
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Si el modal no está abierto, no renderiza nada
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <button
          className="bg-primary hover:bg-secondary text-white px-2 py-2 rounded-lg text-xs mb-4"
          onClick={onClose}
          aria-label="Cerrar modal"  // Agregado para mejorar la accesibilidad
        >
          X
        </button>
        <h2 className="text-xl font-semibold mb-2">Horario de Atención del Hospital</h2>
        <h3 className="text-lg font-semibold mb-1">Emergencias</h3>
        <ul className="list-disc pl-4">
          <li>24 horas, 7 días de la semana</li>
        </ul>
        <h3 className="text-lg font-semibold mb-1">Consultas Médicas</h3>
        <ul className="list-disc pl-4">
          <li>08:00 a 22:00, 7 días de la semana</li>
        </ul>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement // Nodo fuera del árbol principal
  );
};

export default Modal;
