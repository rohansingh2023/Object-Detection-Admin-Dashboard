import React from "react";

import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { publicRequest } from "../../requestMethod";
import "./widgetSm.css";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const { users2 } = useStateContext();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/user/recentUsers");
        setUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

  // console.log(users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            {/* <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          /> */}
            <p>{user._id.slice(0, 10).concat("...")}</p>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
            </div>
            <button className="widgetSmButton">
              {/* <Visibility className="widgetSmIcon" /> */}
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
