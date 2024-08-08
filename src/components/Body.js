import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/data";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant, index) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={restaurantList[9]} /> */}
      </div>
    </div>
  );
};

export default Body;
