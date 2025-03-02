import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { encryptData, decryptData } from "../utils/encryption";

// Define el tipo para el usuario
interface User {
  role: string;
}

// Define los tipos para el contexto
interface AuthContextType {
  user: User | null;
  login: (role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser) as User;
      setUser(decryptedUser);
    }
    setLoading(false);
  }, []);

  // Función para loguear al usuario
  const login = (role: string) => {
    const userData: User = { role };
    setUser(userData);
    const encryptedUser = encryptData(userData);
    localStorage.setItem("user", encryptedUser);
  };
  

    // Función para desloguear al usuario
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
    {!loading ? children : <p>Cargando...</p>}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
