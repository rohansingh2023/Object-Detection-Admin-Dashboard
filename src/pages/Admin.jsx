import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../adminPages/home/Home";
import UserList from "../adminPages/userList/UserList";
import User from "../adminPages/user/User";
import NewUser from "../adminPages/newUser/NewUser";

const Admin = () => {
  return (
    <>
      <Topbar />
      <div
        style={{
          display: "flex",
          marginTop: 10,
        }}
      >
        <Sidebar />
        <Home />
      </div>
    </>
  );
};

export default Admin;
