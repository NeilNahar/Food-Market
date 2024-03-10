import { useEffect, useState } from "react";
import { RESTAURANTURL } from "./constant";

const useRestaurantData = (restid) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const resInfo = await fetch(RESTAURANTURL + restid);
    const resInfoJson = await resInfo.json();
    setResData(resInfoJson.data.cards);
    console.log(resInfoJson.data.cards)
  };
  return resData;
};

export default useRestaurantData;
