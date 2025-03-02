import { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard'

// Define la interfaz de los datos de los doctores
interface Doctor {
  id: number;
  name: string;
  genero: string;
  imagen: string;
  especialidad: string;
  experiencia: number;
  email: string;
  phone: number;
}

const ApiDoctores = () => {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: '',
    genero: 'm',
    especialidad: 'Cardiología',
    experiencia: 1,
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza esta URL con tu API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }

        const genero = ['m', 'f']
        const especialidades = ['Cardiología', 'Pediatría', 'Neurología', 'Dermatología']

        const jsonData = (await response.json()) as Doctor[];

        const doctores: Doctor[] = jsonData.map((doctor: Doctor) => {
          return {
            id: doctor.id,
            name: doctor.name,
            genero: genero[Math.floor(Math.random() * genero.length)],
            imagen: `assets/pr${Math.floor(Math.random() * 11 + 1)}.jpg`,
            especialidad: especialidades[Math.floor(Math.random() * especialidades.length)],
            experiencia: Math.floor(Math.random() * 10 + 1),
            phone: doctor.phone,
            email: doctor.email
          }
        });

        setData(doctores);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  // Función para manejar el cambio de los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Función para agregar un nuevo doctor
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoctor: Doctor = {
      id: data.length + 1, // Simplemente aumenta el id para el nuevo doctor
      name: form.name,
      genero: form.genero,
      imagen: `assets/pr${Math.floor(Math.random() * 11 + 1)}.jpg`, // Imagen aleatoria
      especialidad: form.especialidad,
      experiencia: form.experiencia,
      email: form.email,
      phone: parseInt(form.phone)
    };
    
    setData([...data, newDoctor]);
    setForm({
      name: '',
      genero: 'm',
      especialidad: 'Cardiología',
      experiencia: 1,
      email: '',
      phone: ''
    });
  };

  return (
    <div className="text-center">
      {loading && <p>Cargando...</p>}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}

      {/* Formulario para agregar un doctor */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre del doctor"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Número de teléfono"
        />
        <select
          name="genero"
          value={form.genero}
          onChange={handleChange}
        >
          <option value="m">Masculino</option>
          <option value="f">Femenino</option>
        </select>
        <select
          name="especialidad"
          value={form.especialidad}
          onChange={handleChange}
        >
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
          <option value="Neurología">Neurología</option>
          <option value="Dermatología">Dermatología</option>
        </select>
        <input
          type="number"
          name="experiencia"
          value={form.experiencia}
          onChange={handleChange}
          placeholder="Años de experiencia"
        />
        <button type="submit">Agregar Doctor</button>
      </form>

      {/* Mostrar los doctores */}
      {data && <DoctorCard data={data} />}
    </div>
  );
};

export default ApiDoctores;
