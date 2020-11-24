import React from "react";
import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon.js";

const NavBar = () => {
  return (
    <header className="main-head">
      <nav>
        <CartIcon />
        <h1 id="logo">Ecommerce</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
