import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    resData: {
      info: { name, avgRating, costForTwo, cuisines, sla, cloudinaryImageId },
    },
  } = props;
  //console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* 
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(",")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5> */}

      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime}</h5>
    </div>
  );
};
export default RestaurantCard;
