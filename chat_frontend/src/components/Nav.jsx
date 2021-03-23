import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginAPI from "./GoogleLoginAPI";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <GoogleLoginAPI />
        <Link to={"/login"} className="nav-link">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Nav;
