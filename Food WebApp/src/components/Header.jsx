import Food from "../../assets/food.png";
//* React provide a feature to access the context using hook named as "useContext".
import { useEffect, useContext } from "react";
import useLoginState from "../utils/useLoginState";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const { isLoggedIn, toggleLogin } = useLoginState();

  //* But How this const value is updated when we click on button?

  //* when we re-render the component by click on the button, this btnNameReact will be a new variable and it will be re-rendered with new value

  //! useState will re-render whole componenet when state changes
  console.log("Header Render");

  //* useEffect() will be called every time my Header Component renders my useEffect is called.

  //* If no dependency array => useEffect is called on every render

  //* If dependency arraay is empty = [] => useEffect is called on only initial render (just once)

  //* If dependency array is [btnNameReact] => useEffect is called every time btnNameReact is updated or changes.
  useEffect(() => {
    console.log("useEffect called");
  }, []); //* Here we put the dependency array over here. So, this dependency array changes the behaviour ofnit's render

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between items-start border-[1px] border-solid border-black mx-1 my-1 h-32">
      <div className="logo-container">
        <img className="w-36" src={Food} alt="Food Logo" />
      </div>
      <div className="mr-16 flex pt-5">
        <ul className="flex list-none gap-14 text-2xl">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {/*! When i click on "Home" page it will not refresh the whole page, it will just fetches  data from server */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="-mt-1 appearance-none bg-[#fcfcfd] rounded-[4px] shadow-newBox-shadow box-border text-blue-950 inline-flex font-mono h-12 justify-center overflow-hidden px-4 select-none touch-manipulation whitespace-nowrap text-2xl  focus:shadow-newBox-shadow2  hover:shadow-newBox-shadow3  active:shadow-newBox-shadow4"
            onClick={toggleLogin}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
