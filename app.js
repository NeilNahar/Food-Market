import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return (
    <img
      className="logo-image"
      src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
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

const Container = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
