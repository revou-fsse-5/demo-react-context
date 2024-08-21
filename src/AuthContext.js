import React, { createContext, useState, useContext } from "react";

// Create the auth context
const AuthContext = createContext();

// Auth context provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Log the user in
  const login = (userData) => {
    setUser(userData);
  };

  // Log the user out
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the auth context
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
