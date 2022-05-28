import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";
import AdminSVG from "../assests/s4.svg";
import { IoArrowBack } from "react-icons/io5";

const Adminlogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { adminLogin } = useStateContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    adminLogin(input.email, input.password, navigate);
    setInput({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin">
      <Link to="/userLogin" className="backBtn">
        <IoArrowBack size={35} />
      </Link>
      <div className="admin_img">
        <img src={AdminSVG} alt="" />
      </div>
      <div className="admin_body_form">
        <h2>Admin Login</h2>

        <div className="email">
          <h3>Email</h3>
          <input
            placeholder="Email"
            value={input.email}
            name="email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <h3>Password</h3>
          <input
            placeholder="Password"
            value={input.password}
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleLogin}>LOGIN</button>
        <div className="register_body_form_ends">
          <p className="p1">Note: If you're an admin, then only login</p>
          <div className="admin_body_p1">
            <p className="admin_p1">Go back to UserLogin</p>
            <Link to="/userLogin">
              <p className="p2">Login</p>
            </Link>
          </div>
          <div className="admin_body_p2">
            <p>If it doesn't rediect to "/dashboard", refresh the page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
