import React from "react";

import { useStateContext } from "../../context/StateContext";
import "./featuredInfo.css";
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  const { users } = useStateContext();

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{users.length}</span>
          {/* <span className="featuredMoneyRate">
            -11.4 */}
          {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
          {/* </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total New Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          {/* <span className="featuredMoneyRate"> */}
          {/* -1.4-1.4 <ArrowDownward className="featuredIcon negative"/>
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total requests handles</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4377</span>
          <span className="featuredMoneyRate">+2.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
