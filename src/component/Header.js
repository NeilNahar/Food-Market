import { useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
// import { decrement, increment } from './counterSlice'


const Logo = () => {
  return <img className="h-full cursor-pointer mx-6" src={LOGO} alt="Food App logo" />;
};

const Nav = () => {
  const [login, setLogin] = useState("Login");
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <ul className="list-none flex gap-5 mx-6">
      <li className="cursor-pointer text-lg hover:underline hover:scale-105 mt-1">
        <Link to="/">Home</Link>
      </li>
      <li className="cursor-pointer text-lg hover:underline hover:scale-105 mt-1">
        <Link to="/about">About</Link>
      </li>
      <li className="cursor-pointer text-lg hover:underline hover:scale-105 mt-1">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="cursor-pointer text-lg hover:underline hover:scale-105 mt-1">
        <Link to="/cart">Cart({cartItems.length})</Link>
      </li>
      <button
        className="p-1 text-lg"
        onClick={() => {
          login == "Login" ? setLogin("Logout") : setLogin("Login");
        }}
      >
        {login}
      </button>
    </ul>
  );
};

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center bg-rose-500 shadow-lg">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
