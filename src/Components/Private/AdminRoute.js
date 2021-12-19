import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const AdminRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <img src="https://i.ibb.co/km1NDXC/loading.gif" alt="" />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
