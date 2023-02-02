import React from "react";
import { Link } from "react-router-dom";
import "../Sass/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <Link to="/Home">Home</Link>
        <Link to="/Ploitics">Politics</Link>
        <Link to="/Sports">Sports</Link>
        <Link to="/Tech">Tech</Link>
        <Link to="/Admin">Admin</Link>
      </ul>
    </nav>
  );
};

export default Nav;
