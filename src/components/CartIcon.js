import React from "react";
import "./CartIcon.css";
import Cart from "./shopping-cart.png";

const CartIcon = () => {
  return (
    <>
      <img className="cartIcon" src={Cart} alt="" />
    </>
  );
};

export default CartIcon;
