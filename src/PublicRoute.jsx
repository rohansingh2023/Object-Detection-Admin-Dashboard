import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = ({ islogged }) => {
  return !islogged ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
