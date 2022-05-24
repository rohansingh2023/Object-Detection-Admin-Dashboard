import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({ islogged }) => {
  return islogged ? <Outlet /> : <Navigate to="/userLogin" />;
};
