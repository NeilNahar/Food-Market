import { useEffect, useState } from "react";
import { CDN } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Card = (props) => {
  return (
    <div className="rounded-2xl shadow-lg shadow-slate-300 h-full p-3.5 flex flex-col gap-3.5 hover:shadow-slate-700">
      <img
        className="h-40 w-full rounded-2xl"
        src={CDN + props.data.info.cloudinaryImageId}
        alt="Food Image"
      />
      <div className="flex justify-between text-sm font-semibold">
        <p>{props.data.info.name}</p>
        <span cl>{props.data.info.avgRating}</span>
      </div>
      <p className="text-xs">Cost: {props.data.info.costForTwo}</p>
    </div>
  );
};

const HigerOrderCard = (props) => {
  return (
    <>
      <div className="h-full">
        <label className="rounded-tl-2xl absolute bg-neutral-600 text-neutral-300 py-0.5 px-1.5 hover:shadow-slate-700">People's Choice</label>
        <Card data={props.data} />
      </div>
    </>
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
  const status = useStatus();
  if (status == false) {
    return (
      <div className="flex justify-center items-center w-full h-auto">
        You are offline
      </div>
    );
  }
  if (resDataFiltered.length == 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="flex justify-center gap-4 py-8">
        <input
          className="w-96 h-5 rounded-lg py-3 px-2 border border-solid border-black"
          type="text"
          placeholder="Search Food"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="px-3.5 border border-solid border-black rounded-lg"
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
      <div className="text-center mb-6">
        <button
          className="p-1 cursor-pointer border border-solid border-black bg-slate-400 rounded-md"
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
      <div className="grid gap-6 px-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 auto-rows-auto">
        {resDataFiltered.map((item) => {
          return (
            <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
              {item.info.avgRating > 4 ? (
                <HigerOrderCard data={item} />
              ) : (
                <Card data={item} />
              )}
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
