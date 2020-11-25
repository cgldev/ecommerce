import { useState, useEffect } from "react";
import getProductsFromDDBB from "../DDBB";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  /* falta llamar a funcion getProductById */
  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <>
      <h1>Item Detail Container id={id}</h1>
      <ItemDetail />
    </>
  );
}
