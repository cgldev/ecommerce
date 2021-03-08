import { useCartContext } from "../../context/cartContext.js";
import { getFirestore } from "../../firebase/firebase.js";
import { Link } from "react-router-dom";
import image from "./games-cart.jpg";
import "./Cart.css";

export default function Cart() {
  const { carrito } = useCartContext();
  return (
    <section>
      <header className="title">
        <h2>Su carro de compra</h2>
        <h3>Vea aqui el detalle de su compra</h3>
      </header>
      <div className="cart">
        <div className="intro-imagen">
          <img src={image} alt="comprar" />
        </div>
        <div className="compra">
          <div className="su-compra">
            <h1>SU COMPRA</h1>
            {carrito.length !== 0 ? (
              carrito.map((game, index) => {
                return (
                  <div key={index}>
                    <h4>{game.item}</h4>
                    <p>Cantidad: {game.cant}</p>
                  </div>
                );
              })
            ) : (
              <>
                <h1>Carrito vacio</h1>
                <Link to={"/"}>
                  <button className="btn">Ir a Home</button>
                </Link>
              </>
            )}
          </div>
          <form className="cart-form">
            <h1>SUS DATOS</h1>
            <div className="input-group">
              <label>Nombre:</label>
              <input type="text" id="name" required></input>
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" id="email" required></input>
            </div>
            <div className="input-group">
              <label>Tel:</label>
              <input type="tel" id="tel" required></input>
            </div>
            <div className="input-group">
              <button
                className="btn"
                onClick={() => {
                  const inputName = document.getElementById("name");
                  const inputEmail = document.getElementById("email");
                  const inputTel = document.getElementById("tel");

                  let venta = {
                    buyer: {
                      name: inputName.value,
                      phone: inputTel.value,
                      email: inputEmail.value,
                    },
                    items: carrito,
                    total: carrito.length,
                  };

                  const db = getFirestore();
                  db.collection("Ventas")
                    .add(venta)
                    .then(({ id }) => {
                      alert(
                        "GRACIAS POR SU COMPRA\r\nSu número de transaccion es: " +
                          id
                      );
                      inputName.value = "";
                      inputTel.value = "";
                      inputEmail.value = "";
                      //limpiar carrito
                    })
                    .catch((error) => {
                      alert("Error " + error);
                    });
                }}
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
