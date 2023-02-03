import React from "react";
import { Link } from "react-router-dom";
import "../Sass/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">Logo</div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Ploitics">Politics</Link>
          <Link to="/Sports">Sports</Link>
          <Link to="/Tech">Tech</Link>
          <Link to="/Admin">Admin</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
