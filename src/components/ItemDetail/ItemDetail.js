import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail(detail) {
  const [cont, setCont] = useState(true);
  const handleAddToCart = (counter) => {
    setCont(counter);
  };

  return (
    <>
      <h1>{detail.detail.name}</h1>
      <ItemCount min={1} max={100} onAdd={handleAddToCart} />
      <button>Comprar {cont} </button>
    </>
  );
}
