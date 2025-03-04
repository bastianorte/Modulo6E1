
import { useLocation } from 'react-router-dom';
import { Card, Typography } from "@material-tailwind/react";
import React from 'react';

const TABLE_HEAD = ["Paciente", "Doctor", "Fecha", "Hora", ""];

const CitaConfirmada = ({pacientes}) => {
console.log(pacientes)
  return (
    <div>

{pacientes.length > 0 ? (

<> 
<h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl text-center">Citas Agendada</h2>
    <Card className="h-full w-96 overflow-scroll mx-auto mb-10 mt-6">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pacientes.map(( paciente,indice) => (
            <tr key={indice} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {paciente.nombre}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {paciente.doctor}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {paciente.fecha}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                {paciente.hora}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
</>
): (
  <h2 className="text-balance font-semibold tracking-tight text-primary sm:text-4xl text-center mb-6">No hay citas agendadas</h2>
)}
    </div>
  



);
};

export default CitaConfirmada;