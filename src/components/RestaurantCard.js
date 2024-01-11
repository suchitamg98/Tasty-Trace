import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />

      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(",")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5>
    </div>
  );
};
export default RestaurantCard;
