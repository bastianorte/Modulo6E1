import { useState } from "react";
import AppointmentForm from "../components/AppointmentForm"
import Header from '../components/Header';
import CitaConfirmada from "../components/CitaConfirmada";
import doctores from '../components/doctores.json';

const Cita = () => {
    const [pacientes, setPacientes] = useState([]);
    
    

    return (
        <>
            <Header>
              <h2>Contacto</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. Donec nisl metus, semper eget pretium a, pellentesque eget eros. Sed aliquet faucibus porttitor. Maecenas tempor ligula ipsum, id tempus lorem congue a. Etiam eget fringilla magna. Vestibulum at sem nisl. Sed pellentesque non augue ut elementum. </p>
            </Header>         
            <AppointmentForm
                setPacientes={setPacientes}
                doctores={doctores}
            />
            
        <CitaConfirmada 
            pacientes={pacientes}
        />
        </>
    )
}

export default Cita