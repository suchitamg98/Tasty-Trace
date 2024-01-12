import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  // useEffect(() => {
  //   let resObj1 = resObj.restaurants.filter((res) => res.info.avgRating > 4.5);
  //   console.log(resObj1);
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0392092&lng=77.608586&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
