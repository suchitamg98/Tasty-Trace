import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resObj);

  // useEffect(() => {
  //   let resObj1 = resObj.restaurants.filter((res) => res.info.avgRating > 4.5);
  //   console.log(resObj1);
  // }, []);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          // onClick={() => {
          //   let resObj2 = resObj.restaurants.filter(
          //     (res) => res.info.avgRating > 4.5
          //   );
          //   console.log(resObj2);
          // }}
          onClick={() => {
            const filteredList = resObj.restaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurants(filteredList);
            console.log(filteredList);
            setlistOfRestaurants();
            {
              listOfRestaurants;
            }
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
