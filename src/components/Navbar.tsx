import { NavLink } from "react-router-dom";



const Navbar: React.FC = () => {



  return (
    <div className="bg-primary ">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 bg-primary text-right">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src='../assets/lg2.svg'
                className="h-8 w-auto"
              />
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center text-right">    
            <nav className="bg-primary text-right">
              <ul className="list-none flex">
                <li style={{ margin: "0 10px" }}>
                  <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home
                  </NavLink>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <NavLink to="/Equipo" style={{ color: "#fff", textDecoration: "none" }}>
                    Equipo
                  </NavLink>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <NavLink to="/Contacto" style={{ color: "#fff", textDecoration: "none" }}>
                    Contacto
                  </NavLink>
                </li>   
                <li style={{ margin: "0 10px" }}>
                  <button 
                      className="px-4 bg-third text-white rounded-lg hover:bg-third text-xs"
                    >
                      <NavLink to="/Login" style={{ color: "#fff", textDecoration: "none" }}>
                        Ingresar
                      </NavLink>
                    </button>
                </li>                          
              </ul>
            </nav>
        </div>
        </div>
      </div>
    </div>    
  );
};

export default Navbar;