// import {
//   CalendarToday,
//   LocationSearching,
//   MailOutline,
//   PermIdentity,
//   PhoneAndroid,
//   Publish,
// } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./userInfo.css";
import Topbar from "../../components/topbar/Topbar";
import Chart from "../../components/chart/Chart";
import { APIRows } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { userData } from "../../dummyData";

export default function UserInfo() {
  const [user, setUser] = useState([]);
  const location = useLocation();
  const url = location.pathname.split("/")[2];

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get(`/user/${url}`);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [url]);

  const columns = [
    { field: "Request Timings", headerName: "Request Timings", width: 200 },

    {
      field: "Endpoint",
      headerName: "Endpoint",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
  ];
  return (
    <>
      <Topbar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">User Details</h1>
          <Link to="/newUser"></Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.username}</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate2">
            <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
          </div>
        </div>
        <div className="userUpdate">
          <DataGrid
            rows={APIRows}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
}
