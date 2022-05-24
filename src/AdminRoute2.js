import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const AdminRoute2 = ({ adminToken }) => {
  return !adminToken ? <Outlet /> : <Navigate to="/dashboard" />;
};
