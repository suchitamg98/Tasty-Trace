import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
  //console.log(data);
  //console.log(data.itemCards);

  //const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    //setShowItem(!showItem);
    // console.log("clicked");
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-lg ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>

        <span>⬇</span>
      </div>
      {/* <ItemList items={data.itemCards} /> */}
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
