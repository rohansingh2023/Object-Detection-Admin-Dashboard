import React from "react";

import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import "./widgetSm.css";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

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

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <p>{user._id.slice(0, 10).concat("...")}</p>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">Display</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
