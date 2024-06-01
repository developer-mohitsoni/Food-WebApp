import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); // Here we are fetching the data from API link

    const json = await data.json();

    // console.log(json);

    setResInfo(json.data); // Now resInfo is set to the json.data
  };

  return resInfo;
};

export default useRestaurantMenu;
