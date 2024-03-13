import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurnatData from "../utils/useRestaurantData";
import CategorySlider from "./CategorySlider";

const Restaurant = () => {
  const { restid } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resData = useRestaurnatData(restid);

  if (resData.length == 0) {
    return <Shimmer />;
  }

  const { name, city, avgRating, costForTwoMessage } =
    resData[0].card.card.info;

  const Category = resData[2].groupedCard.cardGroupMap.REGULAR.cards;
  const filterCategory = Category.filter((card) => {
    return (
      card.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      card.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });
  const idFetcher=(id)=>{
    setShowIndex(id)
  }
  return (
    <div className="p-4 w-1/2 py-8 mx-auto">
      <h2 className="text-base">{name}</h2>
      <div className="flex justify-between py-1.5 border-b-2 text-xs">
        <p>City: {city}</p>
        <p>Rating: {avgRating}</p>
        <p>Price: {costForTwoMessage}</p>
      </div>
      <h3 className="pt-6 pb-2 text-sm">Menu</h3>
      <ul>
        {filterCategory.map((filterCategoryData, index) => {
          return (
            <CategorySlider
              key={index}
              id={index}
              data={filterCategoryData.card.card}
              click={index == showIndex && true}
              idFetcher={idFetcher}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Restaurant;