import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";
import Cart from "./shopping-cart.png";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext.js";

const CartIcon = () => {
  const [cart, setCart] = useContext(cartContext);
  return (
    <>
      <Link to={"/cart"}>
        <img className="cartIcon" src={Cart} alt="" />
      </Link>
      <p>{cart}</p>
    </>
  );
};

export default CartIcon;
