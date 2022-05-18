import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ display: "flex", flexDirection: "column", padding: 70 }}>
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
          <button type="submit">Submit</button>
        </div>
        <button onClick={() => navigate("/userRegister")}>
          Go to register
        </button>
      </form>
    </div>
  );
};

export default Userlogin;
