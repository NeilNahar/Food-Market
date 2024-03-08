import { useState } from "react";
import { LOGO } from "../utils/constant";

const Logo = () => {
  return <img className="logo-image" src={LOGO} alt="Food App logo" />;
};

const Nav = () => {
  const [login, setLogin] = useState("Login");
  return (
    <ul className="navList">
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <button className="login"
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
