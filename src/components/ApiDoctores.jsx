import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';


const ApiDoctores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza esta URL con tu API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }


        const genero = ['m','f']
        const especialidades = ['Cardiología', 'Pediatría', 'Neurología', 'Dermatología']

        const jsonData = await response.json();
        const doctores = jsonData.map(user=> {
            return {
                id: user.id,
                nombre: user.name,
                genero: genero[Math.floor(Math.random()*genero.length)],
                imagen: `assets/pr${Math.floor(Math.random()*11+1)}.jpg`,
                especialidad: especialidades[Math.floor(Math.random()*especialidades.length)],
                experiencia: Math.floor(Math.random()*10+1),
                contacto:{
                    telefono: user.phone,
                    email: user.email
                }
            }
        })
        setData(doctores);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }    
    };

    fetchData();
  }, [reload]);




  return (
    <div className='text-center'>
        <button onClick={() => setReload(prev => !prev)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Recargar Datos</button>
        {loading && <p>Cargando...</p>}
        {error && (
            <div>
            <p>Error: {error}</p>
            </div>
        )}
        {data && (
            <DoctorCard data={data}/>
      )}
      
    </div>
  );
};

export default ApiDoctores;