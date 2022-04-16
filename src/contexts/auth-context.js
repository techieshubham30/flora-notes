import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: localStorage.getItem("TOKEN") ? true : false,
        token: localStorage.getItem("TOKEN") || undefined,

    });
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
