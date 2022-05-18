import "./widgetLg.css";

export default function WidgetLg() {
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get("orders/getallorders");
  //       setOrders(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getUsers();
  // }, []);

  // console.log(orders);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {/* {orders.map((order) => ( */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">12346</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$100</td>
          <td className="widgetLgStatus">
            <Button type="Done" />
          </td>
        </tr>
        {/* ))} */}
      </table>
    </div>
  );
}
