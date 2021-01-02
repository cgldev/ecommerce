import { useCartContext } from "../../context/cartContext.js";
import { getFirestore } from "../../firebase/firebase.js";

export default function Cart() {
  const { carrito } = useCartContext();

  return (
    <>
      <h1>CART</h1>
      <h1>SU COMPRA</h1>
      {carrito.map((game) => (
        <>
          <h2>{game.item}</h2>
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
          let venta = {
            buyer: { name: "Cesar", phone: "123456", email: "cesar@cesar.com" },
            items: carrito,
            total: carrito.length,
          };

          const db = getFirestore();
          db.collection("Ventas")
            .add(venta)
            .then(({ id }) => {
              alert(
                "GRACIAS POR SU COMPRA\r\nSu número de transaccion es: " + id
              );
            })
            .catch((error) => {
              alert("Error " + error);
            });
        }}
      >
        FINALIZAR COMPRA
      </button>
    </>
  );
}
