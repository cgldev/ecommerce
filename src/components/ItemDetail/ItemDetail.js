import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail() {
  const addToCart = (counter) => {
    alert("Producto agregado cantidad " + counter);
  };

  return (
    <>
      <h1>Item Detail</h1>
      <ItemCount min={1} max={100} onAdd={addToCart} />
    </>
  );
}
