import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>200</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">API Requests</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Api Route</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">
              {"12dh3b3bkub3339ehdmdehef".slice(0, 10).concat("...")}
            </span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">/vehicle_base64</td>
          <td className="widgetLgStatus">
            <Button type="done" />
          </td>
        </tr>
        {/* ))} */}
      </table>
    </div>
  );
}
