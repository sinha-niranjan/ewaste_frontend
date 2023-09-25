import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav_link">
        <div className="logo">E Waste</div>
        <div className="link">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to={"/nearby"} style={{ textDecoration: "none" }}>
            <p>Nearby</p>
          </Link>
          <Link to={"/message"} style={{ textDecoration: "none" }}>
            <p>Message</p>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <p>Contact</p>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <p>About</p>
          </Link>
          <Link to={"/user_login"} style={{ textDecoration: "none" }}>
            <p className="login_btn">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
