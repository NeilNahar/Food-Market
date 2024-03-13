import { useSelector } from "react-redux";
import { FOODITEMURL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div>
      <div className="p-4 w-1/2 py-8 mx-auto">
        <h2 className="font-bold text-lg text-center mb-5">Cart</h2>
        {cartItems.length != 0 && (
          <div className="text-sm flex justify-end">
            <button
              className="bg-orange-100 px-4 py-0.5 mb-4"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
        <ul className="px-4 text-xs bg-slate-100 p-4">
          {cartItems.length != 0 ? (
            cartItems.map((item, index) => {
              return (
                <div className="flex justify-between py-2 border-b-2">
                  <div className="flex flex-col justify-start">
                    <li key={item?.id}>
                      {index + 1}. {item?.name}
                    </li>
                    <span className="ml-3">
                      Rs. {(item?.price || item?.defaultPrice) / 100}
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      className="w-24 h-24"
                      src={FOODITEMURL + item?.imageId}
                    />
                    <button
                      className="absolute bottom-1 left-4 px-3 py-1 bg-slate-900 text-slate-50 rounded-xl"
                      onClick={() => {
                        dispatch(removeItem(index));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Cart is Empty</div>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
