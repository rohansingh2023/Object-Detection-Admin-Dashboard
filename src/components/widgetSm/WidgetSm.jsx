import "./widgetSm.css";

export default function WidgetSm() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get("users/?new=true");
  //       setUsers(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getUsers();
  // }, []);

  // console.log(users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {/* {users.map((user) => ( */}
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rohan</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            Display
          </button>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}
