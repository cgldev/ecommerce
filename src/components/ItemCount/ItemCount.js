import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext.js";

export default function ItemCount({ initial, max, min, onAdd }) {
  const [cart, setCart] = useContext(cartContext);
  const [counter, setCounter] = useState(cart);

  const addToCounter = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const subToCounter = () => {
    if (counter > min) setCounter(counter - 1);
  };

  const handleAddToCart = () => {
    onAdd(counter);
  };

  return (
    <>
      <button onClick={addToCounter}>+</button>
      <div>{counter}</div>
      <button onClick={subToCounter}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </>
  );
}
