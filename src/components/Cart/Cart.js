import { useCartContext } from "../../context/cartContext.js";
import { getFirestore } from "../../firebase/firebase.js";

export default function Cart() {
  const { carrito } = useCartContext();
  return (
    <>
      <h1>Carro de compras</h1>
      {carrito.length === 0 ? (
        <h1>El carrito esta vacio</h1>
      ) : (
        <h2> hay productos</h2>
      )}

      <h1>SU COMPRA</h1>
      {carrito.map((game, index) => (
        <div key={index}>
          <h2>{game.item}</h2>
          <p>{game.cant}</p>
        </div>
      ))}
      <h1>SUS DATOS</h1>
      <p>
        Nombre:<input type="text" id="name" required></input>
      </p>
      <p>
        Email: <input type="email" id="email" required></input>
      </p>
      <p>
        Tel: <input type="tel" id="tel" required></input>
      </p>
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
