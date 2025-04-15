import { createContext, useContext, useEffect, useState } from "react";
import { is_authenticated, register, login } from "../endpoints/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const nav = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
   
    return localStorage.getItem("token") ? true : false;
  });

  const login_user = async (username, password) => {
    const success = await login(username, password); 
    if (success) {
      localStorage.setItem("token", "your_token_here"); 
      setIsAuthenticated(true);
      nav("/");
    }
    return success;
  };

  const logout_user = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    nav("/Auction/Login");
  };

  const register_user = async (username, email, password, Cpassword) => {
    const passwordPattern = /^[A-Z][A-Za-z0-9!@#$%^&*()_+]{8,}$/;

    if (password !== Cpassword) {
      alert("Passwords do not match");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert("Password must start with a capital letter and be at least 9 characters long.");
      return;
    }

    try {
      await register(username, email, password);
      alert("Successfully registered user");
      nav("/Auction/Login");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login_user, logout_user, register_user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
