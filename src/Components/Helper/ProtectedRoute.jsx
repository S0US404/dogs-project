import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === true)
    return (
      <Routes>
        <Route {...props} />;
      </Routes>
    );
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
