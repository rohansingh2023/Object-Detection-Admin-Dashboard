import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userlogin from "./pages/Userlogin";
import Adminlogin from "./pages/Adminlogin";
import Userregister from "./pages/Userregister";
import User from "./pages/User";
import { PrivateRoute } from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Admin from "./pages/Admin";
import UserList from "./adminPages/userList/UserList";
import NewUser from "./adminPages/newUser/NewUser";
import UserInfo from "./adminPages/userInfo/UserInfo";
import { AdminRoute } from "./AdminRoute";
import { AdminRoute2 } from "./AdminRoute2";

function App() {
  const islogged = localStorage.getItem("userStatus");
  const adminToken = localStorage.getItem("adminStatus");

  return (
    <Routes>
      <Route element={<PublicRoute islogged={islogged} />}>
        <Route path="userLogin" element={<Userlogin />} />
        <Route path="userRegister" element={<Userregister />} />
      </Route>
      <Route element={<PrivateRoute islogged={islogged} />}>
        <Route path="/" element={<User />} />
      </Route>
      <Route element={<AdminRoute2 adminToken={adminToken} />}>
        <Route path="adminLogin" element={<Adminlogin />} />
      </Route>
      <Route element={<AdminRoute adminToken={adminToken} />}>
        <Route path="dashboard" element={<Admin />} />
        <Route path="users" element={<UserList />} />
        <Route path="user/:id" element={<UserInfo />} />
        <Route path="newUser" element={<NewUser />} />
      </Route>
    </Routes>
  );
}

export default App;
