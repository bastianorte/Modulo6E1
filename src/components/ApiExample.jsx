import { useState, useEffect } from 'react';
import Testimonios from './Testimonios';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza esta URL con tu API
        const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <Testimonios data={data}/>
    </div>
  );
};

export default ApiExample;