import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 200,
      }}
    >
      <h2>Welcome to my website</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <button
          style={{ marginRight: 10 }}
          onClick={() => navigate("/userLogin")}
        >
          User
        </button>
        <button onClick={() => navigate("/adminLogin")}>Admin</button>
      </div>
    </div>
  );
};

export default Home;
