import React, { useContext, createContext, useState, useEffect } from "react";
import { publicRequest } from "../requestMethod";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [islogged, setIslogged] = useState(false);

  const register = async (username, email, password, navigate) => {
    try {
      const res = await publicRequest.post("/user/register", {
        username,
        email,
        password,
      });
      setUser(res.data);
      setIslogged(true);
      localStorage.setItem("userCreds", res.data.token);
      // localStorage.setItem("userStatus", res.data.success);
      alert("User Registered successfully. ");
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const login = async (email, password, navigate) => {
    try {
      const res = await publicRequest.post("/user/login", {
        email,
        password,
      });
      setUser(res.data.token);
      setIslogged(true);
      localStorage.setItem("userCreds", res.data.token);
      // localStorage.setItem("userStatus", res.data.success);
      navigate("/");
      alert("User Logged in successfully");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const adminLogin = async (email, password, navigate) => {
    try {
      const res = await publicRequest.post("/adminUser/adminLogin", {
        email,
        password,
      });
      localStorage.setItem("adminCreds", res.data.token);
      // localStorage.setItem("adminStatus", res.data.success);
      alert("Admin Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await publicRequest.get("/user/allUsers");
        setUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await publicRequest.delete(`/user/${id}`);
      setUsers(users.filter((id) => id === res.data.user._id));
      alert("User Deleted Successfully");
      window.location.reload();
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <Context.Provider
      value={{ register, login, user, islogged, adminLogin, users, deleteUser }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
