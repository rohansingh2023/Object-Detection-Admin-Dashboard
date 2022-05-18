import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const Userregister = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <h2>User Register</h2>
      <div style={{ display: "flex", flexDirection: "column", padding: 70 }}>
        {/* <form onSubmit={handleRegister}> */}
        <input
          placeholder="Username"
          value={input.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          value={input.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          value={input.password}
          name="password"
          type="paassword"
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Submit</button>
        {/* </form> */}
        <button onClick={() => navigate("/userLogin")}>Go to Login</button>
      </div>
    </div>
  );
};

export default Userregister;
