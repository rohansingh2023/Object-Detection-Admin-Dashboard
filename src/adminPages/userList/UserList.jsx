import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@mui/x-data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useStateContext } from "../../context/StateContext";

export default function UserList() {
  const { users } = useStateContext();
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  console.log(users);

  return (
    <>
      <Topbar />
      {/* <Sidebar /> */}
      <div className="userApp">
        <div className="userList_sidebar">
          <Sidebar />
        </div>
        {/* <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      /> */}
        {/* <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        /> */}
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
