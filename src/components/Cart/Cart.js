import { useState } from "react";
import { useCartContext } from "../../context/cartContext.js";

export default function Cart() {
  const { games } = useCartContext();

  const [carrito, setCarrito] = useState([]);

  console.log(games);
  console.log(carrito);

  return (
    <>
      <h1>CART</h1>
      <h1>SU COMPRA</h1>
      {games.map((game) => (
        <>
          <h2>{game.game}</h2>
          <p>{game.cant}</p>
        </>
      ))}
      <h1>SUS DATOS</h1>
      <p>
        Nombre:<input type="text" id="name"></input>
      </p>
      <p>Email:</p>
      <p>Tel:</p>
      <button
        onClick={() => {
          setCarrito([...carrito, games]);
          let venta = {
            buyer: { name: "Cesar", phone: "123456", email: "cesar@cesar.com" },
            items: carrito,
            //total: ,
          };
          console.log(venta);
        }}
      >
        FINALIZAR COMPRA
      </button>
    </>
  );
}
