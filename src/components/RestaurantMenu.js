import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    //console.log("hi");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9705675&lng=77.7134218&restaurantId=363&catalog_qa=undefined&submitAction=ENTER"

        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0392092&lng=77.608586&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(data, "suchi");
      const json = await data.json();
      console.log(json);
      // setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  // if (resInfo === null) {
  //   return <Shimmer />;
  // }
  //fetchMenu();
  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Masala dose</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
