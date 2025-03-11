import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, user }) => {
  const token = localStorage.getItem("token");

  if (isAdmin && user?.user?.role === "admin") {
    return <Outlet />;
  }

  if (!isAdmin && token) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
