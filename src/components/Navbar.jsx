import React from "react";
import"./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Wine Tèt ou</a>
      <ul>
        <li>
          <a href="/about" className="">
            About
          </a>
        </li>
        <li>
          <a href="/favorites" className="">
            Favorites
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
