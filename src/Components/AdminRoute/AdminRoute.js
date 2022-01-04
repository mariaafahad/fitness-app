import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoding } = useAuth();
  let location = useLocation();
  if (isLoding) {
    return <p>please wait...</p>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};
export default AdminRoute;
