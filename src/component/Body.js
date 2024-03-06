import { useState } from "react";
import { CDN } from "../utils/constant";
import resturantData from "../utils/demoData";

const SearchPannel = () => {
  return (
    <div className="search-pannel">
      <input type="text" placeholder="Search Food" />
      <button>Search</button>
    </div>
  );
};
//
const Card = (props) => {
  return (
    <div className="card">
      <img src={CDN + props.data.info.cloudinaryImageId} alt="Food Image" />
      <div>
        <p>{props.data.info.name}</p>
        <span>{props.data.info.avgRating}</span>
      </div>
      <p className="image-description">Cost: {props.data.info.costForTwo}</p>
    </div>
  );
};

const Cardcontainer = () => {
  const [data, setData] = useState(resturantData);
  return (
    <>
      <div className="sort-button">
        <button
          onClick={() => {
            const filterData = data.filter((item) => {
              return item.info.avgRating > 4;
            });
            setData(filterData);
          }}
        >
          Sort by Rating
        </button>
      </div>
      <div className="card-container">
        {data.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <SearchPannel />
      <Cardcontainer />
    </div>
  );
};

export default Body;
