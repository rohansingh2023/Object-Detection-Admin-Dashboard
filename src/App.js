import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userlogin from "./pages/Userlogin";
import Adminlogin from "./pages/Adminlogin";
import Userregister from "./pages/Userregister";
import User from "./pages/User";
import Admin from "./pages/Admin";
import UserList from "./adminPages/userList/UserList";
import NewUser from "./adminPages/newUser/NewUser";
import UserInfo from "./adminPages/userInfo/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="userLogin" element={<Userlogin />} />
      <Route path="userRegister" element={<Userregister />} />

      <Route path="/" element={<User />} />

      <Route path="adminLogin" element={<Adminlogin />} />
      <Route path="dashboard" element={<Admin />} />
      <Route path="users" element={<UserList />} />
      <Route path="user/:id" element={<UserInfo />} />
      <Route path="newUser" element={<NewUser />} />
    </Routes>
  );
}

export default App;
