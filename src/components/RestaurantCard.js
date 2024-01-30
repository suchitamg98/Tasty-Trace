import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
const RestaurantCard = (props) => {
  const {
    resData: {
      info: { name, avgRating, costForTwo, cuisines, sla, cloudinaryImageId },
    },
  } = props;
  //console.log(resData);
  const { loggedInUser } = useContext(UserContext);
  //console.log({ loggedInUser });

  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100  rounded-lg hover:bg-gray-200"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* 
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(",")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5> */}

      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime}</h5>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};
export default RestaurantCard;
