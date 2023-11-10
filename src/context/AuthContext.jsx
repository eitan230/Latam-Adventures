import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación que envuelve tu aplicación
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  // Verifica la autenticación al cargar la aplicación
  useEffect(() => {
    const storedAuth = localStorage.getItem('authenticated');
    if (storedAuth) {
      setAuthenticated(true);
    }
  }, []);

  const login = () => {
    setAuthenticated(true)
  };

  const logout = () => {
    setAuthenticated(false)
    localStorage.removeItem('authenticated');
  };

  // Proporciona el estado de autenticación y las funciones de inicio de sesión/cierre de sesión al contexto
  const contextValue = {
    authenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Hook personalizado para acceder al contexto de autenticación en cualquier componente
export const useAuth = () => {
  return useContext(AuthContext);
};
