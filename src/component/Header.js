import {LOGO} from "../utils/constant"

const Logo = () => {
    return (
      <img
        className="logo-image"
        src={LOGO}
        alt="Food App logo"
      />
    );
  };
  
  const Nav = () => {
    return (
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Account</li>
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