import React, { useState } from "react";
// import axios from "axios";

const User = () => {
  const [img, setImg] = useState("");

  // const handleDetection = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://127.0.0.1:8000/vehicle", {
  //       img: img.name,
  //     });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   // console.log(img.name);
  // };

  return (
    <div>
      <h2>Vehicle Object Detection</h2>
      <form>
        <input
          type="file"
          // value={img}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button type="submit">Detect</button>
      </form>
    </div>
  );
};

export default User;
