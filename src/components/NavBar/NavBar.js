import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";
import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon.js";

const NavBar = () => {
  return (
    <header className="main-head">
      <nav>
        <CartIcon />
        <img src={logo} alt="" className="logo" />
        <h1>Game Store</h1>
        <ul>
          <li>
            <NavLink to={"/"} activeClassName="">
              Home
            </NavLink>
          </li>
          <li>
            <Link to={"/cart"}>Ir a Carrito</Link>
          </li>
          <li>
            <NavLink to={"/contacto"}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
