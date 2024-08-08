import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    slaString,
    avgRating,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#e7e1e1" }}>
      <img
        className="res-logo"
        alt="Restaurant Image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹ {costForTwo / 100} for Two</h4>
      <h4>{slaString}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
