import { useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Logo = () => {
  return <img className="logo-image" src={LOGO} alt="Food App logo" />;
};

const Nav = () => {
  const [login, setLogin] = useState("Login");
  return (
    <ul className="navList">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <button
        className="login"
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
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
