import RestaurantCard, { withFoodType } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  //* Local State Varibale - Super Powerful Variable
  //! Array Destructuring
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //*  Whenever state variables updtaes, react triggers a reconciliation cycle(Re-rendering of the component).
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Higher Order Component (HOC) Calling and return the new enhanced component
  const RestaurantCardCategory = withFoodType(RestaurantCard);

  // console.log("Body Render", listOfRestaurants); //* Whenever my Search input filed is updated, my body component is re-rendered 🚀

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch will return a promise
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    //! Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Showing a spinner is not a good practice

  //* Shimmer UI: A Better Way to Show Loading States

  //* Conditional Rendering - If list of restaurants is empty, show shimmer UI
  // if (listOfRestaurants.length === 0) {
  //   return <ShimmerUI />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  //* We can aslo use Ternary Operator as well to render Shimmer UI according to conditional rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search flex ml-4 my-4 gap-[350px]">
        <div className="pt-2">
          <input
            type="text"
            className="border borer-solid border-black"
            placeholder="Search for Restaurants"
            value={searchText} // here empty value is tightly coupled with searchText, Now wwhen we want to change the value of input, we have to change the value of searchText. So, in that case we use onChange event to change the value of searchText with new updated value
            onChange={(e) => {
              setSearchText(e.target.value);

              // Implement this feature only when we want to filter the restaurant cards when the input field is empty
              if (e.target.value === "") {
                setFilteredRestaurant(listOfRestaurants);
              }
            }}
          />
          <button
            className="ml-2"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // console.log(searchText);

              const filteredSearchRestraua = listOfRestaurants.filter((res) => {
                //* includes will check if the searchText is present in the name of the restaurant
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredSearchRestraua);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
        <button
          className="m-2 border border-solid border-black bg-gray-200 rounded-2xl w-52"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString >= 4
            );
            // console.log(listOfRestaurants);
            // Updating State from Local State Variable
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>UserName:- </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-20 justify-between">
        {/* Looping restList using map */}
        {filteredRestaurant.map((restaurant) => (
          //! You have to always mention unique key over here

          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* If the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.veg ? (
              <RestaurantCardCategory restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
      </div>
    </div>
  );
};
export default Body;
