import { useState } from 'react';
import ApiDoctores from './ApiDoctores';


interface AddDoctorProps {
  addDoctor: (doctor: ApiDoctores) => void; // Función para agregar el doctor
}

const AddDoctorForm: React.FC<AddDoctorProps> = ({ addDoctor }) => {
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [experiencia, setExperiencia] = useState<number>(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newDoctor: Doctor = {
      id: Math.floor(Math.random() * 1000), // Generar ID aleatorio para este ejemplo
      name,
      genero,
      imagen: `assets/pr${Math.floor(Math.random() * 11 + 1)}.jpg`,
      especialidad,
      experiencia,
      email,
      phone,
    };

    addDoctor(newDoctor); // Llamar a la función para agregar el nuevo doctor
    resetForm(); // Limpiar el formulario
  };

  const resetForm = () => {
    setName('');
    setGenero('');
    setEspecialidad('');
    setExperiencia(1);
    setEmail('');
    setPhone(0);
  };

  return (
    <div>
      <h2>Agregar Nuevo Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Género:</label>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          >
            <option value="">Seleccione un género</option>
            <option value="m">Masculino</option>
            <option value="f">Femenino</option>
          </select>
        </div>
        <div>
          <label>Especialidad:</label>
          <select
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
          >
            <option value="">Seleccione una especialidad</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Neurología">Neurología</option>
            <option value="Dermatología">Dermatología</option>
          </select>
        </div>
        <div>
          <label>Años de experiencia:</label>
          <input
            type="number"
            value={experiencia}
            onChange={(e) => setExperiencia(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Agregar Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
