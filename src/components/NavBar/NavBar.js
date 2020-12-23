import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon.js";

const NavBar = () => {
  const id = 20;
  return (
    <header className="main-head">
      <nav>
        <CartIcon />
        <h1 id="logo">Ecommerce</h1>
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
