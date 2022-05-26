import React from "react";
import "./topbar.css";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminStatus");
    alert(
      "Admin Logged out successfully. If it doesn't redirect to '/adminLogin' then refresh"
    );
    navigate("/adminLogin");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Welcome, Midhawy Alabri</span>
        </div>
        <div className="topRight">
          <p></p>

          <div className="topbarIconContainer">
            <RiLogoutBoxLine
              color="white"
              size={30}
              onClick={handleLogout}
              className="topbarIconButton"
            />
          </div>
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
        </div>
      </div>
    </div>
  );
}
