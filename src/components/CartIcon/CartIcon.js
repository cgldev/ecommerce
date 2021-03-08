import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";
import Cart from "./shopping-cart.png";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext.js";

const CartIcon = () => {
  const { carrito } = useContext(cartContext);
  let cantidad = 0;
  carrito.forEach((element) => {
    cantidad += element.cant;
  });
  return (
    <div className="cartIcon">
      <Link to={"/cart"}>
        <img src={Cart} alt="" />
      </Link>
      <p>{cantidad}</p>
    </div>
  );
};

export default CartIcon;
