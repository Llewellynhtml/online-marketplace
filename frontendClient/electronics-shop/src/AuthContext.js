// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Create the AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Track the logged-in user

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage if it exists
    }
  }, []);

  const login = (userData) => {
    setUser(userData); // Update state with the logged-in user
    localStorage.setItem('userData', JSON.stringify(userData)); // Store user in localStorage
  };

  const logout = () => {
    setUser(null); // Clear user state on logout
    localStorage.removeItem('userData'); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth hook to access the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
