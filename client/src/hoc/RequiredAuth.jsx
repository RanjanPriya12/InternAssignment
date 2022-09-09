
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const RequiredAuth = ({ children }) => {
  const { isAuthorized } =useContext(AuthContext);

  if (!isAuthorized) {
    {console.log(isAuthorized)}
    return <Navigate to="/login" replace={false}/>;
  }
  {console.log(isAuthorized)}
  return children;
  
};

export default RequiredAuth;