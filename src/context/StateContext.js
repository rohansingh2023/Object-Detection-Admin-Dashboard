import React, { useContext, createContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState([]);
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
      localStorage.setItem("userStatus", res.data.success);
      navigate("/userPage");
    } catch (error) {
      alert(error.message);
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
      localStorage.setItem("userStatus", res.data.success);
      navigate("/userPage");
    } catch (error) {
      alert(error.message);
    }
  };

  const adminLogin = async (email, password, navigate) => {
    try {
      const res = await publicRequest.post("/adminUser/adminLogin", {
        email,
        password,
      });
      console.log(res.data);
      setAdmin(res.data);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Context.Provider value={{ register, login, user, islogged, adminLogin }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
