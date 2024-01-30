import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //   //console.log("hi");
  //   fetchMenu();
  // }, []);
  const resInfo = useRestaurantMenu(resId);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  const [showIndex, setShowIndex] = useState();
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log("items details");
  console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const catagories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(catagories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {catagories.map((cat, index) => (
        <RestaurantCategory
          data={cat?.card?.card}
          key={cat?.card?.card.title}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        
        // <li>{itemCards[0].card.info.name}</li>
        // <li>{itemCards[1].card.info.name}</li>
        // <li>{itemCards[2].card.info.name}</li>
        // {itemCards.map((item) => item.card.info.name)}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
