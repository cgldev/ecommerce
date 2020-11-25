import { Link } from "react-router-dom";

export default function Item({ products }) {
  return (
    <>
      <div key={products.id}>
        <Link to={"/detalle" + products.id}>{products.name}</Link>
      </div>
      <img src="" alt="" />
      <p></p>
    </>
  );
}
