import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivRoute = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("userStatus") ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/userLogin" }} />
        )
      }
    />
  </Routes>
);

export default PrivRoute;
