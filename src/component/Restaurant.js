import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurnatData from "../utils/useRestaurantData";

const Restaurant = () => {
  const { restid } = useParams();

  const resData = useRestaurnatData(restid);

  if (resData.length==0) {
    return <Shimmer />;
  }

  const { name, city, avgRating, costForTwoMessage } =
    resData[0].card.card.info;
  const food_name =
    resData[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  // console.log(food_name);
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <div className="restaurant-description">
        <p>City: {city}</p>
        <p>Rating: {avgRating}</p>
        <p>Price: {costForTwoMessage}</p>
      </div>
      <h3>Menu</h3>
      <ul>
        {food_name.map((element) => {
          return (
            <div className="foodItemsList" key={element.card.info.id}>
              <li>{element.card.info.name}</li>
              <span>Rs {element.card.info.price / 100}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Restaurant;
