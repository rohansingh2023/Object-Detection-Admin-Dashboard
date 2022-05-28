import React from "react";

import "./userList.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useStateContext } from "../../context/StateContext";
import { AiFillDelete } from "react-icons/ai";

export default function UserList() {
  const { users, deleteUser } = useStateContext();
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
              <th>DELETE</th>
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
                  <td>
                    <AiFillDelete
                      size={25}
                      onClick={() => {
                        deleteUser(val._id);
                      }}
                    />
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
