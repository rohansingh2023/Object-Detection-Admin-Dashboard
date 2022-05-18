import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const [admin, setAdmin] = useState({});
  const [adminEmail, setAdminEmail] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { adminLogin } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getAdminUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/admin");
        setAdmin(res.data);
        res.data.map((v) => setAdminEmail(v.email));
      } catch (error) {
        console.log(error.message);
      }
    };
    getAdminUser();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    adminLogin(input.email, input.password, navigate);
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
      <h2>Admin Login</h2>
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
      </form>
    </div>
  );
};

export default Adminlogin;
