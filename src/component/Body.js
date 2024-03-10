import { useEffect, useState } from "react";
import { CDN } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

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
  const [resData, setresData] = useState([]);
  const [resDataFiltered, setresDataFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");



  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const tempData = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await tempData.json();
    setresData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresDataFiltered(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const status=useStatus()
  if(status==false){
    return <div className="show-none">You are offline</div>
  }
  if (resDataFiltered.length == 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="search-pannel">
        <input
          type="text"
          placeholder="Search Food"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setresDataFiltered(resData);
            const filterSearch = resData.filter((element) => {
              return element.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setresDataFiltered(filterSearch);
          }}
        >
          Search
        </button>
      </div>
      <div className="sort-button">
        <button
          onClick={() => {
            const filterData = resDataFiltered.filter((item) => {
              return item.info.avgRating > 4;
            });
            setresDataFiltered(filterData);
          }}
        >
          Sort by Rating
        </button>
      </div>
      <div className="card-container">
        {resDataFiltered.map((item) => {
          return (
            <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
              <Card data={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Cardcontainer />
    </div>
  );
};

export default Body;
