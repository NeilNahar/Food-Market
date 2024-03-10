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
  return (
    <div className="p-4 w-1/2 my-8 mx-auto">
      <h2 className="">{name}</h2>
      <div className="flex justify-between py-1.5 border-b-2 text-xs">
        <p>City: {city}</p>
        <p>Rating: {avgRating}</p>
        <p>Price: {costForTwoMessage}</p>
      </div>
      <h3 className="mt-6 mb-2 text-sm">Menu</h3>
      <ul>
        {food_name.map((element) => {
          return (
            <div className="flex justify-between text-xs my-2" key={element.card.info.id}>
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
