import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail(detail) {
  console.log(detail);
  const addToCart = (counter) => {
    alert("Producto agregado cantidad " + counter);
  };

  return (
    <>
      <h1>{detail.name}</h1>
      <ItemCount min={1} max={100} onAdd={addToCart} />
    </>
  );
}
