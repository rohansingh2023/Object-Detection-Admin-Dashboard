import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import User from "./pages/User";

export const PrivateRoute = ({ islogged }) => {
  return islogged ? <Outlet /> : <Navigate to="/" />;
};
