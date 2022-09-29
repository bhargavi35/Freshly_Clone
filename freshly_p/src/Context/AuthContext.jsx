import React, { useState } from "react";

export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [email, setMail] = useState("");
  const [token, setToken] = useState(null);
  const toggle = () => {
    setAuth(!isAuth);
  };
  const login = (email, token) => {
    setMail(email);
    setToken(token);
    setAuth(true);
  };
  const logout = () => {
    setMail("");
    setToken(null);
    setAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, login, logout, email, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
