import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav_link">
        <div className="logo">E Waste</div>
        <div className="link">
          <Link to={"/"} style={{ textDecoration: "none" }} className="link_a">
            <p>Home</p>
          </Link>
          <Link to={"/nearby"} style={{ textDecoration: "none" }} className="link_a" >
            <p>Nearby</p>
          </Link>
          <Link to={"https://chat-app-frontend-lnr2un0ok-sinha-niranjan.vercel.app/app"} style={{ textDecoration: "none" }} className="link_a">
            <p>Message</p>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }} className="link_a">
            <p>Contact</p>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }} className="link_a">
            <p>About</p>
          </Link>
          
          <Link to={"/user_login"} style={{ textDecoration: "none" }} className="login_btn">

            <h5>Login</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
