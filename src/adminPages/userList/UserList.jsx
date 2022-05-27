import React from "react";

import "./userList.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useStateContext } from "../../context/StateContext";

export default function UserList() {
  const { users } = useStateContext();
  const navigate = useNavigate();

  return (
    <>
      <Topbar />
      <div className="userApp">
        <div className="userList_sidebar">
          <Sidebar />
        </div>

        <div className="userList">
          <table>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PROFILE</th>
            </tr>
            {users.map((val) => {
              return (
                <tr key={val._id} className="tr">
                  <td>{`${val._id}`.slice(0, 5).concat("...")}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>
                    <button
                      className="td_btn"
                      onClick={() => navigate(`/user/${val._id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
