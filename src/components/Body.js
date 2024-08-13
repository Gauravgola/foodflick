import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconcilition cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Conditional Rendering
  // if (listOfRestaurant == 0) {
  //   return <Shimmer />
  // }

  return listOfRestaurant == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter Restaurant cards and update the UI
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((resto) =>
                resto.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRes(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);  // Why it not working check this
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info?.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={restaurantList[9]} /> */}
      </div>
    </div>
  );
};

export default Body;
