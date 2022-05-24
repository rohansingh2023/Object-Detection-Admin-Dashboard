import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import "../styles/userLogin.css";
import { BiUserCircle } from "react-icons/bi";
import Collage from "../assests/collage2.jpg";

const Userlogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useStateContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(input.email, input.password, navigate);
    setInput({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login_header">
        <p className="login_header_title">Vehicle and Numberplate Detection</p>
        <Link to="/adminLogin" className="link_text">
          <div className="login_header_admin">
            <BiUserCircle />
            <p>Admin</p>
          </div>
        </Link>
      </div>
      <div className="login_body">
        <div className="login_body_img">
          <img
            // src="https://www.datasciencecentral.com/wp-content/uploads/2021/10/9712908078.jpeg"
            src={Collage}
            alt=""
            height={550}
            width={800}
          />
          <p className="login_body_img_text">
            Register now and get access to our Vehicle and Numberplate model
            detection APIs
          </p>
        </div>
        <div className="login_body_form">
          {/* <form> */}
          <h2>Login</h2>
          <div className="email">
            <h3>Email</h3>
            <input
              placeholder="Enter email"
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <h3>Password</h3>
            <input
              placeholder="Enter password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleLogin}>LOGIN</button>
          <div className="login_body_form_ends">
            <div className="login_body_p1">
              <p className="p1">Don't have an account yet?</p>
              <Link to="/userRegister">
                <p className="p2">Register</p>
              </Link>
            </div>
            <div className="login_body_p2">
              <p>If it doesn't rediect to "/", refresh the page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
