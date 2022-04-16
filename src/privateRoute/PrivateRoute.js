import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const PrivateRoute = ({ children }) => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export { PrivateRoute };
