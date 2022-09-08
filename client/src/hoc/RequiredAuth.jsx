
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } =useContext(AuthContext);

  if (isAuthenticated) return children;
  return <Navigate to="/login"  repalce />;
};

export default RequiredAuth;