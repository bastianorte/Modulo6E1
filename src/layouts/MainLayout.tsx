import { useAuth } from "../context/AuthContext";

// Definir tipos para las props del componente
interface MainLayoutProps {
  children: React.ReactNode; // El tipo para el contenido dinámico que se pasa entre las etiquetas <MainLayout>
}


const MainLayout = ({ children }: MainLayoutProps) => {
  const { user, logout } = useAuth();

  return (
    <div className="text-center">

      <main>{children}</main>
            {user && (
                <button onClick={logout} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto mt-2 mb-10">
                  Cerrar Sesión
                </button>
            )}
    </div>
  );
};

export default MainLayout;
