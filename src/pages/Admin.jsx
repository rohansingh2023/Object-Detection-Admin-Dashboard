import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../adminPages/home/Home";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const islogged = localStorage.getItem("adminCreds");

  if (!islogged) {
    return <Navigate to="/adminLogin" />;
  }

  return (
    <>
      <Topbar />
      <div
        style={{
          display: "flex",
          // marginTop: 10,
        }}
      >
        <Sidebar />
        <Home />
      </div>
    </>
  );
};

export default Admin;
