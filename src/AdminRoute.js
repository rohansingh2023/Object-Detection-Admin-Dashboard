import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const AdminRoute = ({ adminToken }) => {
  return adminToken ? <Outlet /> : <Navigate to="/adminLogin" />;
};
