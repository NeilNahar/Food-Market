import { FOODITEMURL } from "../utils/constant";
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const CategorySlider = (props) => {
  const dispatch = useDispatch()
  const categoryItemData = props.data;
  // const [click, setClick] = useState(false);
  return (
    <div className="py-1.5 shadow-lg">
      <div
        className="flex justify-between cursor-pointer text-sm font-normal bg-slate-200 py-0.5 px-4"
        onClick={() => {
          return props.idFetcher(props.id)
        }}
      >
        <span>
          {categoryItemData.title} (
          {categoryItemData.itemCards != undefined &&
            categoryItemData.itemCards.length}
          )
        </span>
        <span className="pb-1">&#x2304;</span>
      </div>
      <ul className="px-4 text-xs bg-slate-100">
        {props.click
          ? categoryItemData.itemCards != undefined &&
            categoryItemData.itemCards.map((item) => {
              return (
                <div className="flex justify-between py-2 ">
                  <div className="flex flex-col justify-start">
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    <span>
                      Rs.{" "}
                      {(item?.card?.info?.price ||
                        item?.card?.info?.defaultPrice) / 100}
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      className="w-24 h-24"
                      src={FOODITEMURL + item?.card?.info?.imageId}
                    />
                    <button className="absolute bottom-1 left-1/4 px-3 py-1 bg-slate-500 text-slate-50 rounded-xl" onClick={()=>{
                      dispatch(addItem(item?.card?.info))
                    }}>
                      Add
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default CategorySlider;
