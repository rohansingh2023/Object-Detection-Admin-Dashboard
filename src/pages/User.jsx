import React, { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import "../styles/user.css";
import { Navigate, useNavigate } from "react-router-dom";

const User = () => {
  const [postImage, setPostImage] = useState({
    myFile: "",
  });
  const [response, setResponse] = useState("");
  const [response2, setResponse2] = useState("");
  const [showText, setShowText] = useState(true);
  const navigate = useNavigate();
  const islogged = localStorage.getItem("userCreds");

  if (!islogged) {
    return <Navigate to="/userLogin" />;
  }

  const handleDetection = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://ec2-3-16-25-70.us-east-2.compute.amazonaws.com:8000/detect/vehicle_base64",
        {
          image_base64: postImage.myFile,
        }
      );
      setResponse(res.data);
      setShowText(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDetection2 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://ec2-3-16-25-70.us-east-2.compute.amazonaws.com:8000/detect/numberplate_base64",
        {
          image_base64: postImage.myFile,
        }
      );
      setResponse2(res.data);
      setShowText(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userCreds");
    alert("User Logged out successfully.");
    navigate("/userLogin");
  };

  return (
    <div className="detection">
      <div className="headers">
        <h2>Vehicle/Numberplate Detection</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user_detect">
        <form onSubmit={handleDetection}>
          <div className="filebase">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostImage({ ...postImage, myFile: base64 })
              }
            />
          </div>
          <button type="submit" className="b1">
            Detect for vehicle
          </button>
          <button className="b2" onClick={handleDetection2}>
            Detect for numberplate
          </button>
        </form>
        <div className="detect_images">
          <div className="i1">
            <p>Before Detection</p>
            {postImage.myFile ? (
              <img src={postImage.myFile} alt="" width={300} height={300}></img>
            ) : (
              <div className="span1">
                <p>Choose the Image below</p>
              </div>
            )}
          </div>
          <div className="i2">
            <p>After Detection</p>
            {response.image_base64 && (
              <img
                src={`data:image/jpeg;base64, ${response.image_base64}`}
                alt=""
                width={300}
                height={300}
              ></img>
            )}

            {response2.image_base64 && (
              <img
                src={`data:image/jpeg;base64, ${response2.image_base64}`}
                alt=""
                width={300}
                height={300}
              ></img>
            )}

            {showText && (
              <div className="span2">
                <p>Click the detect button to detect objects</p>
                <p>Wait for few seconds...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
