import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";
import Cart from "./shopping-cart.png";

const CartIcon = () => {
  return (
    <>
      <Link to={"/cart"}>
        <img className="cartIcon" src={Cart} alt="" />
      </Link>
    </>
  );
};

export default CartIcon;
