import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import { CiSearch } from "react-icons/ci";
import { LuAmbulance } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi"
import ApiExample from "../components/ApiExample";



const Inicio = () => {
 
      // Simular una API
     const servicios = ([
      { id: 1, nombre: 'Consultas', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <CiSearch className="h-6 w-6 text-blue-500" /> },
      { id: 2, nombre: 'Urgencias', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <LuAmbulance className="h-6 w-6 text-blue-500" /> },
      { id: 3, nombre: 'Especialidades', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <GiHealthNormal className="h-6 w-6 text-blue-500" /> }
    ]);

    return (
        <div className="mb-20">
            <Header>
              <h2>Punto Salud</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. </p>
            </Header>    
            <ServiceList servicios={servicios} /> 
              <ApiExample />     
        </div>
    )
}

export default Inicio
