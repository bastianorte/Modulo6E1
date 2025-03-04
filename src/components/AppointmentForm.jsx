import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react'

export default function AppointmentForm({setPacientes,doctores}) {

  const [paciente, setPaciente] = useState({nombre:"",doctor:"",fecha:"",hora:""});    


    // Referencias para manejar el enfoque
    const nombreRef = useRef(null);
    const fechaRef = useRef(null);
    const horaRef = useRef(null);
    const doctorRef = useRef(null);      


  // Función que maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitar recarga de la página


setPacientes(pacientes=>[...pacientes,paciente])

setPaciente ({nombre:"",doctor:"",fecha:"",hora:""})

  };

  // Función para enfocar el siguiente campo
  const enfocarCampo = (campoRef) => {
    campoRef.current.focus();
  };  

  useEffect(() => {
    // Enfocar el campo de nombre al cambiar de vista
    if (nombreRef.current) {
      nombreRef.current.focus();
    }
  }, []);


  return (
  
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Agenda tu cita médica</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={manejarEnvio}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              Nombre completo
            </label>
            <div className="mt-2.5">
              <input
                id="nombre"
                ref={nombreRef}
                type="text"
                value={paciente.nombre}
                onChange={(e) => setPaciente(paciente => ({...paciente, nombre:e.target.value}))}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label>
            Doctor:
                <select
                  id="doctor"
                  ref={doctorRef}
                  type="text"
                  value={paciente.doctor}
                  onChange={(e) => setPaciente(paciente => ({...paciente, doctor:e.target.value}))}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                >
                  <option>Seleccione un doctor</option>
                {doctores.map((doctor) => (                  
                  <option key={doctor.id} value={doctor.nombre}>{doctor.nombre}</option>
                ))}
                  </select>
            </label>
          </div>          
          <div className="sm:col-span-2">
            <label htmlFor="fecha" className="block text-sm/6 font-semibold text-gray-900">
              Fecha de la cita:
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                ref={fechaRef}                
                id="fecha"
                value={paciente.fecha}
                onChange={(e) => setPaciente(paciente => ({...paciente, fecha:e.target.value}))}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="hora" className="block text-sm/6 font-semibold text-gray-900">
              Hora de la cita:
            </label>
            <div className="mt-2.5">
              <input
                type="time"
                ref={horaRef}                
                id="hora"
                value={paciente.hora}
                onChange={(e) => setPaciente(paciente => ({...paciente, hora:e.target.value}))}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>          


        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Solicitar cita
          </button>
        </div>
      </form>



    </div>
  )
}

AppointmentForm.propTypes = {
  initialValues: PropTypes.shape({
    nombre: PropTypes.string,
    doctor: PropTypes.string,
    fecha: PropTypes.string,
    hora: PropTypes.string,
  }),
};
