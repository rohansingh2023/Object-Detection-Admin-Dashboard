import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/userRegister.css";
import RegisterSVG from "../assests/s2.svg";

const Userregister = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const islogged = localStorage.getItem("userCreds");

  if (islogged) {
    return <Navigate to="/" />;
  }

  const { register } = useStateContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(input.username, input.email, input.password, navigate);
    setInput({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <div className="register_img">
        <img
          src={RegisterSVG}
          // src="https://www.stylist.co.uk/images/app/uploads/2022/02/24123958/gettyimages-1275823531-1-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress"
          alt=""

          // height={715}
          // width={500}
        />
      </div>
      <div className="register_body_form">
        {/* <form> */}
        <h2>User Registration</h2>
        <div className="email">
          <h3>Username</h3>
          <input
            placeholder="Username"
            value={input.username}
            name="username"
            type="text"
            onChange={handleChange}
          />
        </div>
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
        <button onClick={handleRegister}>REGISTER</button>
        <div className="register_body_form_ends">
          <div className="register_body_p1">
            <p className="p1">Already have an account?</p>
            <Link to="/userLogin">
              <p className="p2">Login</p>
            </Link>
          </div>
          <div className="register_body_p2">
            <p>If it doesn't rediect to "/", refresh the page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userregister;
