import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Userlogin from "./pages/Userlogin";
import Adminlogin from "./pages/Adminlogin";
import Userregister from "./pages/Userregister";
import User from "./pages/User";
import { useStateContext } from "./context/StateContext";
import { PrivateRoute } from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Admin from "./pages/Admin";
import UserList from "./adminPages/userList/UserList";
import NewUser from "./adminPages/newUser/NewUser";

function App() {
  const islogged = localStorage.getItem("userStatus");

  return (
    <Routes>
      <Route element={<PublicRoute islogged={islogged} />}>
        <Route path="/" element={<Home />} />
        <Route path="userLogin" element={<Userlogin />} />
        <Route path="adminLogin" element={<Adminlogin />} />
        <Route path="userRegister" element={<Userregister />} />
      </Route>
      <Route element={<PrivateRoute islogged={islogged} />}>
        <Route path="userPage" element={<User />} />
      </Route>
      <Route path="dashboard" element={<Admin />} />
      <Route path="users" element={<UserList />} />
      {/* <Route path="user/:userId" element={<User />} /> */}
      <Route path="newUser" element={<NewUser />} />
    </Routes>
  );
}

export default App;
