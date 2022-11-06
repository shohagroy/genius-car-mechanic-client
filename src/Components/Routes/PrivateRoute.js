import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthProvaider } from "../GobalContext/GobalContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthProvaider);

  if (loading) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
