// import { useState } from "react";
// import { LOGO } from "../utils/constant";
// import { Link } from "react-router-dom";

// const Logo = () => {
//   return <img className="logo-image" src={LOGO} alt="Food App logo" />;
// };

// const Nav = () => {
//   const [login, setLogin] = useState("Login");
//   return (
//     <ul className="navList">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact Us</Link>
//       </li>
//       <button
//         className="login"
//         onClick={() => {
//           login == "Login" ? setLogin("Logout") : setLogin("Login");
//         }}
//       >
//         {login}
//       </button>
//     </ul>
//   );
// };

// const Header = () => {
//   return (
//     <div className="header">
//       <Logo />
//       <Nav />
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Logo = () => {
  return <img className="h-full cursor-pointer mx-6" src={LOGO} alt="Food App logo" />;
};

const Nav = () => {
  const [login, setLogin] = useState("Login");
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
