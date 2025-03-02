import { useState, useEffect } from 'react';
import Testimonios from './Testimonios';

const ApiExample: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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
      } 
      
      catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          setLoading(false);
        }
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