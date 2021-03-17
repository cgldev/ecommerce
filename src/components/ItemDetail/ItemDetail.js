import useCartContext from "../../context/cartContext.js";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import steam from "./steam.svg";

export default function ItemDetail(detail) {
  const { addItem, setCant, cant } = useCartContext();

  const handleAddToCart = (counter) => {
    setCant(counter);
  };

  const addItemToCart = () => {
    addItem(detail.detail.title, cant);
  };

  return (
    <section className="card">
      <header className="stats">
        <div className="rating">
          <h1>{detail.detail.title}</h1>
          <p>Precio: {detail.detail.price}</p>
          <Link to={"/categoria" + detail.detail.category}>
            <p>Genero: {detail.detail.category}</p>
          </Link>
        </div>
        <div className="info">
          <h3>Plataforma</h3>
          <div className="platforms">
            <img src={steam} alt="steam" />
          </div>
        </div>
      </header>
      <div className="detail">
        <div className="detail-img">
          <img src={detail.detail.image} alt="game" />
        </div>
        <div className="detail-text">
          <p>{detail.detail.description}</p>

          <div className="button-wrapper">
            <ItemCount min={1} max={100} onAdd={handleAddToCart} />
            <button className="btn-comprar" onClick={addItemToCart}>
              Comprar {cant}{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
