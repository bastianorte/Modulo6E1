import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";
import DOMPurify from 'dompurify';
import { FormEvent } from 'react';



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedComment = DOMPurify.sanitize(username);
    setUsername(sanitizedComment);

    if (username === "admin" && password === "password") {
      login("admin");
      navigate("/");
    } else if (username === "user" && password === "password") {
      login("user");
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <MainLayout>
            <Header>
              <h2>Iniciar Sesión</h2>
            </Header>  
            {user ? (
  user ? (
    <h3 className="my-6">Has ingresado como admin</h3>
  ) : (
    <h3 className="my-6">Has ingresado como user</h3>
  )
) : (
  <h3>No has ingresado</h3>
)}
            {!user ? (
      <form onSubmit={handleLogin} className="mx-auto container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-80 mx-auto">
          <div className="sm:col-span-2">
              <label>
                Usuario:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />              
              </label>
            </div>
          </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-80 mx-auto">
          <div className="sm:col-span-2">
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        </div>
        </div> 
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2 mx-auto mt-2 my-12">       
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto" type="submit">Entrar</button>
          </div>
        </div> 
      </form>
            ) : ( "" ) }
    </MainLayout>
  );
};

export default Login;