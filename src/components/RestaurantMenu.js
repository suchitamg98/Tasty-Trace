import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    //console.log("hi");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        {/* {itemCards.map((item) => item.card.info.name)} */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
