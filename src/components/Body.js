import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurants);
  // useEffect(() => {
  //   let resObj1 = resObj.restaurants.filter((res) => res.info.avgRating > 4.5);
  //   console.log(resObj1);
  // }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            var filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
